import { Component , OnInit} from '@angular/core';
import { Post } from '../../../services/philgo-api/v2/post';
import { Member } from '../../../services/philgo-api/v2/member';
import { SessionService } from '../../../services/session.service';
import { POST_DATA } from '../../../services/philgo-api/v2/philgo-api-interface';
import { Data } from '../../../services/philgo-api/v2/data';
import { Router } from '@angular/router';


@Component({
	selector: 'enroll',
	templateUrl: 'enroll.component.html'
})

export class EnrollComponent implements OnInit {
 form = <POST_DATA>{};
	constructor(
		private member : Member,
		private post : Post,
		private session : SessionService,
		private data : Data,
		private router : Router
	){
		this.initializedForm();
	}


	ngOnInit() { }

	initializedForm(){
		this.form.gid = this.data.uniqid();
		this.form.post_id = "job";
		this.form.category = "student_record";
		this.form.subject = "student_record";
		this.form.content = "student_record";
		this.form.varchar_2 = "Pending";
	}


submitForm(){
    


    this.post.create(this.form, success=>{   
        console.log("student record created success :: ", success);      
        this.router.navigate(['admin/class/list']); 
    }, error=>{
        console.log("student create error :: ", error);  
    });
}

onClickRequest(){
	this.post.get(this.form.varchar_1, result=>{
		console.log(result.post);

		this.form.varchar_2 = result.post.user_id;
		this.form.varchar_3 = result.post.user_name;
		this.form.varchar_4 = result.post.varchar_1;
		this.form.varchar_5 = result.post.varchar_2;
		this.form.varchar_6 = result.post.varchar_3;
		
		
		
		this.submitForm();
	},error =>{
		alert("Error getting access code :" + error);
	})	


   
}



}

