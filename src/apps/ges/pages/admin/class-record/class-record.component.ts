import { Component, OnInit } from '@angular/core';
import { Post  } from '../../../services/philgo-api/v2/post';
import { POST_DATA , SEARCH_QUERY_DATA } from '../../../services/philgo-api/v2/philgo-api-interface';
import { SessionService }  from '../../../services/session.service';
import { ActivatedRoute }  from '@angular/router'

@Component({
	selector: 'class-record',
	templateUrl: 'class-record.component.html'
})

export class ClassRecordComponent implements OnInit {
	records = Array<POST_DATA>();
	accesscode = "";
	TabOne = false;

	constructor(
		private post : Post,
		private session : SessionService,
		private route  : ActivatedRoute
		){

			this.route.params.subscribe(param=>{
				this.accesscode = param['code'];
			})
				this.loadClassList();
	}


	loadClassList(){
	let data = <SEARCH_QUERY_DATA> {};
		data.fields = "user_id,idx,category,content,subject,varchar_1, varchar_2, varchar_3,varchar_4,varchar_5,varchar_6,varchar_7,varchar_8,varchar_9,varchar_10,varchar_11";
		data.from = "sf_post_data";
		data.where = "post_id='job' AND category='student_record'  AND varchar_1 = '"+this.accesscode+"'";
		data.limit = "30";
		this.post.search( data, re=>{	
			this.records = re.search;
			console.log(this.records)
		},error =>{

			console.log(error);
		});


	}


	onClickUpdate(record : POST_DATA){
				
		this.post.update(record, result=>{
			alert("successfully update");
		}, error=>{
			alert("Error on Update" + error);
		})
	}
	ngOnInit() { }
}