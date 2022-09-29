import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TransformationsCreatorComponent } from './transformations-creator/transformations-creator.component';

@Component({
  selector: 'transformation-demo-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = new FormControl('');
}
