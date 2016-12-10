import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }from '@angular/router'
import { LayoutComponent } from '../pages/base/layout/layout.component';
import { HomeComponent } from '../pages/base/home/home.component';
import { LoginComponent } from '../pages/user/login/login.component';
import { RegisterComponent } from '../pages/user/register/register.component';
import { GesComponent } from '../app/ges-base.component';
import { PhilgoApiModule } from '../services/philgo-api/v2/philgo-api-module';
import { SessionService} from '../services/session.service';
import { NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HTMLCHARPipe } from '../pipes/htmlchar.pipe';
import { AdminIndexComponent} from '../pages/admin/admin-index/admin-index';
import { AdminMainComponent} from '../pages/admin/admin-main/admin-main';
import { AdminClassComponent} from '../pages/admin/admin-class/admin-class';
import { EnrollmentComponent} from '../pages/enrollment/enrollment.component';

require('zone.js');

const links : Routes = [
  { path: '',component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'register',   component : RegisterComponent },
  { path : 'admin',   component : AdminIndexComponent },
  { path : 'admin/main',   component : AdminMainComponent },
  { path : 'admin/class/:companyId',   component : AdminClassComponent },
  { path : 'admin/enrollment/:companyId',   component : EnrollmentComponent },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HTMLCHARPipe,
    GesComponent,
    AdminIndexComponent,
    AdminMainComponent,
    AdminClassComponent,
    EnrollmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PhilgoApiModule,
    RouterModule.forRoot(links),
    NgbModule.forRoot()
  ],
  providers: [SessionService, NgbActiveModal],
  exports : [ GesComponent  ]


})

export class GesModule { }
