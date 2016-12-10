import { Component } from '@angular/core';
import { Post } from '../../../services/philgo-api/v2/post';
import { Member } from '../../../services/philgo-api/v2/member';
import { SessionService } from '../../../services/session.service';
import { POST_DATA, PAGE_DATA , SEARCH_QUERY_DATA} from '../../../services/philgo-api/v2/philgo-api-interface';
import { Data } from '../../../services/philgo-api/v2/data';
import { Router } from '@angular/router';



@Component({
    selector : 'admin-main',
    templateUrl : './admin-main.html',
})


export  class AdminMainComponent {
    companies = [];
    error_message = "";
    target = <PAGE_DATA>{};

constructor(
    private member : Member,
    private post : Post,
    private session : SessionService,
    private data : Data,
    private router : Router
){
    this.getCompanies();
}



onClickCompany(companyId){
    alert("Hello")
    this.router.navigate(['admin/enrollment', companyId]);
}




getCompanies(){
    let target = <SEARCH_QUERY_DATA> {};
    target.fields = "idx, content, varchar_1, varchar_2, varchar_3";
    target.from = "sf_post_data";
    target.where = "post_id='job' AND category= 'ges_company' AND user_id = '" + this.session.login.id + "'"; 
    target.orderby = 'idx asc';
    this.post.search( target, re => {
      this.companies = re.search;
      console.log("search result: ", re);
    }, error => alert("error on search: " + error ) );
   
}




}