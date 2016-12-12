import { Component , OnInit} from '@angular/core';
import { Post } from '../../../services/philgo-api/v2/post';
import { Member } from '../../../services/philgo-api/v2/member';
import { SessionService } from '../../../services/session.service';
import { POST_DATA } from '../../../services/philgo-api/v2/philgo-api-interface';
import { Data } from '../../../services/philgo-api/v2/data';
import { Router } from '@angular/router';
import { SEARCH_QUERY_DATA } from '../../../services/philgo-api/v2/philgo-api-interface';


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
		this.form.varchar_2 = "";
	}


		submitForm(){
			let data = <SEARCH_QUERY_DATA> {};
					data.fields =  "varchar_1, user_id";
					data.from = "sf_post_data";
					data.where = `post_id='job' AND category='student_record' AND user_id = '${this.session.login.id}' AND varchar_1 = '${this.form.varchar_1}'`;
					data.limit = "10";
					this.post.search(data, result=>{
						console.log("result", result.search);
						console.log("result", result.search.length);
						
						if( !result.search.length) this.enroll()
						else alert("Already member of the class!");

					},e=>{
						alert("Error on enrolling class: " + e)
					})

		}

	enroll(){
		this.post.create(this.form, success=>{   
			console.log("student record created success :: ", success);      
			this.router.navigate(["admin/class/record",this.form.varchar_1]); 
		}, error=>{
			console.log("student create error :: ", error);  
		});
	}





onClickRequest(){
	this.post.get(this.form.varchar_1, result=>{
		console.log(result.post);

		this.form.varchar_2 = this.form.varchar_2;
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

