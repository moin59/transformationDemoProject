import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DescriptionComponent],
  imports: [BrowserModule,  ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
