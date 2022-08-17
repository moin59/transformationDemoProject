import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NxWelcomeComponent } from './nx-welcome.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TransformationsCreatorComponent } from './transformations-creator/transformations-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    TransformationsCreatorComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
