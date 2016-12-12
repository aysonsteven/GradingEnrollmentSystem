import { Component, OnInit } from '@angular/core';
import { SessionService} from '../../../services/session.service';
import { Member } from '../../../services/philgo-api/v2/member';
import { MEMBER_DATA } from '../../../services/philgo-api/v2/philgo-api-interface';

import { Router } from '@angular/router';

@Component({
  selector: 'ges-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  constructor(
    private session : SessionService,
    private member : Member,
    private router : Router
  
  ) { 


  }
  
  ngOnInit() {
    this.session.setBackRoute(localStorage.getItem('backRoute'));
  }

  onClickLogout(){
    this.member.logout();
    this.session.login = "";
    this.session.userData = <MEMBER_DATA>{};
    this.router.navigate(['']);
  }

  onClickBackArrow(){

    this.router.navigate([this.session.backRoute]);
  }

}
