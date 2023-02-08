import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm =  fb.group({
      pseudo: ["pseudo",Validators.required],
      nom: ["nom",[Validators.required,Validators.minLength(2)]],
      prenom: ["prenom",Validators.required],
      photo: ["photo",Validators.required]
    })
  }

  get pseudo() {
    return this.todoForm.get('pseudo');
  }

  get nom() {
    return this.todoForm.get('nom');
  }

  get prenom() {
    return this.todoForm.get('prenom');
  }

  get photo() {
    return this.todoForm.get('photo');
  }
  validate() {

  }

}
