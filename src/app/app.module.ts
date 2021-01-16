import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HighlighterDirective } from './users/custom-Directive/highlighter.directive';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HighlighterDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
