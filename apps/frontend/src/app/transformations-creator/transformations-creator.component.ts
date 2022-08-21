import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


interface Transformation {
  id: number;
  name: string | null;
  description: string | null;
}

@Component({
  selector: 'transformation-demo-project-transformations-creator',
  templateUrl: './transformations-creator.component.html',
  styleUrls: ['./transformations-creator.component.scss'],
})

export class TransformationsCreatorComponent {

  transformations: Transformation[] = [] ;

  transformationForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(40)]),
    description: new FormControl(''), 
  });

  createTransformation() {

    const addTransformation = {id: this.transformations.length + 1, ... this.transformationForm.getRawValue()}
    this.transformations.push(addTransformation)

    this.transformationForm.reset({name: '', description: ''});

  }

  deleteTransformation(idToRemove: number){
    this.transformations = this.transformations.filter((transformation:Transformation) => transformation.id !== idToRemove)
  }
  
}
