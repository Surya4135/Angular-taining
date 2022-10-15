import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { DateModifierPipe } from './pipes/date-modifier.pipe';
import { DontAllowNumbersDirective } from './directives/dont-allow-numbers.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonCallsService } from './service/common-calls.service';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes :Routes =[
  {path: '', component : HomepageComponent},
  {path:'user', component: UserComponent},
  {path: 'admin', component:AdminComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    ShortenPipe,
    DateModifierPipe,
    DontAllowNumbersDirective,
    LandingpageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CommonCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
