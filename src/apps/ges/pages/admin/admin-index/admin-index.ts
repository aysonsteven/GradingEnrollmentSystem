import { Component } from '@angular/core';
import { Post } from '../../../services/philgo-api/v2/post';
import { Member } from '../../../services/philgo-api/v2/member';
import { SessionService } from '../../../services/session.service';
import { POST_DATA } from '../../../services/philgo-api/v2/philgo-api-interface';
import { Data } from '../../../services/philgo-api/v2/data';




@Component({
    selector : 'admin-index',
    templateUrl : './admin-index.html',



})


export  class AdminIndexComponent {
    form = <POST_DATA>{};
    error_message = "";


constructor(
    private member : Member,
    private post : Post,
    private session : SessionService,
    private data : Data
){
    this.initializedForm();

    // this.test(()=>{
    //     this.test(()=>{
    //         this.test(()=>{
    //             this.test(()=>{
    //                 console.log("Test done");
    //             });
    //         });
    //     })
    // })
}


test(callback){
    
    this.form.varchar_1 = "company_id_"+ (new Date).getTime();
    this.form.varchar_2 = "company_name_"+ (new Date).getTime();
    this.form.varchar_3 = "company_school_"+ (new Date).getTime();

    this.submitForm();
    this.form.varchar_1 = "";
    this.form.varchar_2 = "";
    this.form.varchar_3 = "";
    callback();
}


initializedForm(){
    this.form.gid = this.data.uniqid();
    this.form.post_id = "job";
    this.form.category = "ges_company";
    this.form.subject = "ges_company";
    this.form.content = "ges_company";
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