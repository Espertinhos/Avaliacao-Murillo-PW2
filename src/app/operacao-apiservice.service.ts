import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperacaoAPIServiceService {

 

  apiURL: string = "http://172.16.58.22:8001/api/funcoes/subtracao"

  constructor( private httpClient: HttpClient) { }

  handleError(Error) {
    let errorMessage = `Código de erro: ${Error.status}\nMenssagem: ${Error.message}`;
    alert(errorMessage);
    return throwError(errorMessage);
  }

  Converter(num1: string, num2: string): Observable<string> {
    //throw new Error("Method not implemented.");
     let params = new HttpParams().set("num1",num1).set("num2",num2);
    return this.httpClient.put<string>(this.apiURL , {params} )
                          .pipe(retry(1),
                           catchError(this.handleError));
  }


    
}




