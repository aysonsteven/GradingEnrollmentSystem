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
import { AdminClassComponent} from '../pages/admin/admin-class/admin-class';
import { ClassListComponent} from '../pages/admin/class-list/class-list.component';
import { EnrollComponent} from '../pages/admin/enroll/enroll.component';
import { StudentRecordComponent} from '../pages/admin/student-record/student-record.component';
import { ClassRecordComponent} from '../pages/admin/class-record/class-record.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';



require('zone.js');

const links : Routes = [
  { path: '',component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'register',   component : RegisterComponent },
  { path : 'admin/class/list',   component : ClassListComponent },
  { path : 'admin/class',   component : AdminClassComponent },
  { path : 'admin/class/enroll',   component : EnrollComponent },
  { path : 'admin/class/student',   component : StudentRecordComponent },
  { path : 'admin/class/record/:code',   component : ClassRecordComponent },
  
  
];

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HTMLCHARPipe,
    GesComponent,
    AdminClassComponent,
    ClassListComponent,
    EnrollComponent,
     StudentRecordComponent,
     ClassRecordComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
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
