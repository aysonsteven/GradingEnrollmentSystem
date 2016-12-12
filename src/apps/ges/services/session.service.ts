import { Injectable } from '@angular/core';
import { Member } from './philgo-api/v2/member';
import { MEMBER_DATA } from './philgo-api/v2/philgo-api-interface';

import { Router } from '@angular/router';

@Injectable()
export class SessionService {
  login : any;
  backRoute : string;
  userData = <MEMBER_DATA>{};
  constructor(
    private member : Member,
    private router : Router
    
    ) { 
    this.login = this.member.getLoginData();

    if( this.login ){
        this.member.data( data =>{
          this.userData = data;
      }, error=>{
          alert("Error");
      })
    }
   


    this.checkLogin();
  } 

  checkLogin(){
    console.log("SessionService checkLogin()::")
      if(!this.login) this.router.navigate(['']);
  }

  setBackRoute(_route){   
    this.backRoute = _route ;
    localStorage.setItem('backRoute', _route);
  }

  
}
