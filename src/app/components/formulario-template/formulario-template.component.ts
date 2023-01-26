import { Component } from '@angular/core';


interface IRegistroForm{
  name:string;
  email:string;
  dni:string;
  password:string;
  repeatPass:string;
}
@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent {
  register:IRegistroForm ={
    name:"",
    email:"",
    dni:"",
    password:"",
    repeatPass:""
  };

  submited = false;
  constructor(){

  }

  submit(){
    console.log("ejecutando submit");
    this.submited=true;
  }
}
