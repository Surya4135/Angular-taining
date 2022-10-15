import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { DontAllowNumberDirective } from './directives/dont-allow-number.directive';
import { DateModifierPipe } from './pipes/date-modifier.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { HoverDescriptionDirective } from './directives/hover-description.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AdminComponent,
    UserComponent,
    DontAllowNumberDirective,
    DateModifierPipe,
    ShortenPipe,
    HoverDescriptionDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
