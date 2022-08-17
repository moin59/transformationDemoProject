import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NxWelcomeComponent } from './nx-welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { XformationEditorComponent } from './xformation-editor/xformation-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    XformationEditorComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
