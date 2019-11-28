import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperacaoAPIServiceService } from '../operacao-apiservice.service';
import { Operacao } from '../model/operacao';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'has-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  sbtForm: FormGroup;
  

  constructor(public FormBuilder: FormBuilder,
              private service :OperacaoAPIServiceService) { }

  ngOnInit() {
    this.sbtForm = this.FormBuilder.group({
       num1 : this.FormBuilder.control(''),
      num2 : this.FormBuilder.control('')
   })
  }

  onProcessar(){
    let num1 : string = this.sbtForm.value.num1;
    let num2 : string = this.sbtForm.value.num2;
    this.service.Converter(num1,num2)
        .subscribe(data => alert(data),
                   error => console.log(error));

  }
}
