import { Component } from '@angular/core';
import { Post } from '../../../services/philgo-api/v2/post';
import { Member } from '../../../services/philgo-api/v2/member';
import { SessionService } from '../../../services/session.service';
import { POST_DATA } from '../../../services/philgo-api/v2/philgo-api-interface';
import { Data } from '../../../services/philgo-api/v2/data';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector : 'admin-class',
    templateUrl : './admin-class.html',
})


export  class AdminClassComponent {
    form = <POST_DATA>{};
    error_message = "";


constructor(
    private member : Member,
    private post : Post,
    private session : SessionService,
    private data : Data,
    private router : Router
){

   

    this.initializedForm();


   
}


test(callback){
    this.form.varchar_1 = "class_code_"+ (new Date).getTime();
    this.form.varchar_2 = "class_course_"+ (new Date).getTime();
    this.form.varchar_3 = "class_unit_"+ (new Date).getTime();
   
    
    this.submitForm();
    this.form.varchar_1 = "";
    this.form.varchar_2 = "";
    this.form.varchar_3 = "";
   
   
    callback();
}


initializedForm(){
    this.form.gid = this.data.uniqid();
    this.form.post_id = "job";
    this.form.category = "ges_class";
    this.form.subject = "ges_class";
    this.form.content = "ges_class";
}


submitForm(){
    
    this.post.create(this.form, success=>{   
        console.log("Class created success :: ", success);
        this.error_message = "" ;
        this.router.navigate(['admin/class/list']); 

    }, error=>{
        this.error_message = "System says : "+ error;
        console.log("Company create error :: ", error);  
    });
}

onClickSubmit(){
   this.submitForm();
}


}