import { Component, OnInit } from '@angular/core';
import { POST_DATA, PAGE_DATA , SEARCH_QUERY_DATA} from '../../services/philgo-api/v2/philgo-api-interface';
import { Post } from '../../services/philgo-api/v2/post';
import { ActivatedRoute  } from '@angular/router'


@Component({
    selector: 'selector',
    templateUrl: './enrollment.component.html'
})
export class EnrollmentComponent implements OnInit {
    classes = [];
    companyId = "";
    constructor(
        private post : Post,
        private route : ActivatedRoute
    ) { 

        this.route.params.subscribe( param=>{
            this.companyId = param['companyId'];
        })

        this.getClasses();
    }

    ngOnInit() { }



getClasses(){
    let target = <SEARCH_QUERY_DATA> {};
   // target.fields = "idx, content, varchar_1, varchar_2, varchar_3";
    target.from = "sf_post_data";
    target.fields = "varchar_1, varchar_2, varchar_3, varchar_4,varchar_5,varchar_6,varchar_7,varchar_8,varchar_9,varchar_10,varchar_11 "
    target.where = "post_id='job' AND category= 'ges_class' AND varchar_1 = '" + this.companyId + "'"; 
    target.orderby = 'idx asc';
    this.post.search( target, re => {
      this.classes = re.search;
      console.log("search result: ", re);
    }, error => alert("error on search: " + error ) );
   
}


}