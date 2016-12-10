import { Component } from '@angular/core';
import { Post } from '../../../services/philgo-api/v2/post';
import { Member } from '../../../services/philgo-api/v2/member';
import { SessionService } from '../../../services/session.service';
import { POST_DATA } from '../../../services/philgo-api/v2/philgo-api-interface';
import { Data } from '../../../services/philgo-api/v2/data';
import { ActivatedRoute } from '@angular/router';



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
    private route : ActivatedRoute
){

    this.route.params.subscribe(param => {
        this.form.varchar_1 = param['companyId'];
    });

    this.initializedForm();


    this.test(()=>{
        this.test(()=>{
            this.test(()=>{
                this.test(()=>{
                    console.log("Test done");
                });
            });
        })
    })
}


test(callback){
    
    this.form.varchar_2 = "class_course_"+ (new Date).getTime();
    this.form.varchar_3 = "class_unit_"+ (new Date).getTime();
    this.form.varchar_4 = "class_enroll_opening_"+ (new Date);
    this.form.varchar_5 = "class_enroll_closing_"+ (new Date);
    this.form.varchar_6 = "class_opening_"+ (new Date);
    this.form.varchar_7 = "class_closing_"+ (new Date);
    this.form.varchar_8 = "class_field_"+ (new Date).getTime();
    this.form.varchar_9 = "class_year_"+ (new Date).getTime();
    this.form.varchar_10 = "class_sem_"+ (new Date).getTime();
    this.form.varchar_11 = "class_sched_MWF";

    this.submitForm();
     this.form.varchar_1 = "";
    this.form.varchar_2 = "";
    this.form.varchar_3 = "";
    this.form.varchar_4 = "";
    this.form.varchar_5 = "";
    this.form.varchar_6 = "";
    this.form.varchar_7 = "";
    this.form.varchar_8 = "";
    this.form.varchar_9 = "";
    this.form.varchar_10 = "";
    this.form.varchar_11 = "";
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
        console.log("Company create success :: ", success);
        this.error_message = ""     
    }, error=>{
        this.error_message = "System says : "+ error;
        console.log("Company create error :: ", error);  
    });
}

onClickSubmit(){
   this.submitForm();
}


}