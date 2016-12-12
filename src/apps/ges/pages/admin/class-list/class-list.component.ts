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
	limit = 10;
	fields = Array<string>();

	constructor(
		private post : Post,
		private session : SessionService,
		private router : Router
		){
				this.loadClassList(this.limit);
	}

	add_field(field : string){
		this.fields.push(field);
	}

	get_fields(){
		return this.fields.join(", ");
	}

onClickGo(idx){
	this.router.navigate(["admin/class/record",idx+""])
}


	loadClassList(limit : number){
		let data = <SEARCH_QUERY_DATA> {};

			this.add_field("user_id");
			this.add_field("idx");
			this.add_field("varchar_1");
			this.add_field("varchar_2");
			this.add_field("varchar_3");

			data.fields =  this.get_fields() + "";
			data.from = "sf_post_data";
			data.where = `post_id='job' AND category='ges_class'  AND user_id = '${this.session.login.id}'`;
			data.limit = limit.toString();
			this.post.search( data, re=>{	
				this.class_list = re.search;
				console.log(this.class_list)
			},error =>{

				console.log(error);
			});


	}

	delete_child_records(idx){
		
		this.getChildRecord(idx, ()=>{
			this.childRecords.forEach(value=>{
				this.post.delete(value.idx,()=>{
					console.log("success deleting child")
				},()=>{
					console.log("Error on deleting child");
				})
			})
		});
			
	}

	onClickDelete(idx){
			this.delete_child_records(idx)

			this.post.delete(idx, result=>{
				console.log("success deleting")		
				_.remove( this.class_list, item=>{
					console.log(item.idx +" and " + idx);
				 	return parseInt(item.idx) == parseInt(idx);
				});

			},error=>{

				alert("Error on Deleting Class: " + error);
				console.log("Error on deleting");
			})
	}


	getChildRecord(accesscode, callback){

		    this.add_field("user_id");
			this.add_field("idx");
			this.add_field("category");
			this.add_field("varchar_1");
			this.add_field("varchar_2");
			this.add_field("varchar_3");
			this.add_field("varchar_4");
			this.add_field("varchar_5");
			this.add_field("varchar_6");
			this.add_field("varchar_7");
			this.add_field("varchar_8");
			this.add_field("varchar_9");
			this.add_field("varchar_10");
			this.add_field("varchar_11");
			

			let data = <SEARCH_QUERY_DATA> {};		
				data.fields = this.get_fields();
				data.from = "sf_post_data";
				data.where = `post_id='job' AND category='student_record'  AND varchar_1 = '${accesscode}'`;
				data.limit = "30";
				
				this.post.search( data, re=>{	
					this.childRecords = re.search;
					callback();
				},error =>{

					console.log(error);
				});


	}



	onScroll(){

		console.log("Scroll down");
	}

	ngOnInit() { }
}