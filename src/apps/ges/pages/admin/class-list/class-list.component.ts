import { Component, OnInit } from '@angular/core';
import { Post  } from '../../../services/philgo-api/v2/post';
import { POST_DATA , SEARCH_QUERY_DATA } from '../../../services/philgo-api/v2/philgo-api-interface';
import { SessionService }  from '../../../services/session.service';
import { Router } from '@angular/router';
import * as _ from 'lodash'; 

@Component({
	selector: 'class-list',
	templateUrl: 'class-list.component.html'
})

export class ClassListComponent implements OnInit {
	class_list = Array<POST_DATA>();
	childRecords = Array<POST_DATA>();
	constructor(
		private post : Post,
		private session : SessionService,
		private router : Router
		){
				this.loadClassList();
	}


onClickGo(idx){
	this.router.navigate(["admin/class/record",idx+""])
}


	loadClassList(){
	let data = <SEARCH_QUERY_DATA> {};
		data.fields = "user_id,idx,varchar_1, varchar_2, varchar_3";
		data.from = "sf_post_data";
		data.where = "post_id='job' AND category='ges_class'  AND user_id = '"+this.session.login.id+"'";
		data.limit = "100";
		this.post.search( data, re=>{	
			this.class_list = re.search;
			console.log(this.class_list)
		},error =>{

			console.log(error);
		});


	}

	onClickDelete(idx){
			this.getChildRecord(idx);

			this.childRecords.forEach(value=>{
				this.post.delete(value.idx,()=>{
					console.log("success deleting child")
				},()=>{
					console.log("Error on deleting child");
				})
			})

			this.post.delete(idx, result=>{
				console.log("success deleting")

				
				console.log(this.class_list.length);
				_.remove( this.class_list, item=>{
					console.log(item.idx +" and " + idx);
				 	return parseInt(item.idx) == parseInt(idx);
				})
				console.log(this.class_list.length);
			},error=>{
				console.log("Error on deleting");
			})
	}


	getChildRecord(accesscode){
	let data = <SEARCH_QUERY_DATA> {};
		data.fields = "user_id,idx,category,content,subject,varchar_1, varchar_2, varchar_3,varchar_4,varchar_5,varchar_6,varchar_7,varchar_8,varchar_9,varchar_10,varchar_11";
		data.from = "sf_post_data";
		data.where = "post_id='job' AND category='student_record'  AND varchar_1 = '"+accesscode+"'";
		data.limit = "30";
		this.post.search( data, re=>{	
			this.childRecords = re.search;
			console.log(this.childRecords)
		},error =>{

			console.log(error);
		});


	}

	ngOnInit() { }
}