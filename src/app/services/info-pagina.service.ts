import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {


  cargada=false;

  constructor(private http: HttpClient) { 
    
  }

  regresaInfo(){
    
    return this.http.get<InfoPagina>('assets/data/data-pagina.json').pipe(
      tap((resp:InfoPagina)=>{
        this.cargada=true;
      })
    );
  }


}
