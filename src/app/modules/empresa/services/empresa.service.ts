import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/c';
import { Empresa } from '../model/empresa.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url_base:string='http://localhost:8080/empresa';
  constructor(private http:HttpClient) { }

  public getEmpresa():Observable<Empresa>{
    return this.http.get<Empresa>(`${this.url_base}/1`);
  }

  public saveEmpresa(empresa:Empresa):Observable<any>{
    return this.http.post<any>(this.url_base,empresa);
  }

  public updateEmpresa(empresa:Empresa):Observable<any>{
    return this.http.put<any>(`${this.url_base}/1`,empresa);
  }
}
