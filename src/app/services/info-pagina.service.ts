import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info!: InfoPagina;
  cargada=false;

  constructor(private http: HttpClient) { 
    
    //console.log("carga servicio");

    this.http.get<InfoPagina>('assets/data/data-pagina.json')
      .subscribe((resp:InfoPagina) =>{

        //console.log(resp['twitter']);
        this.cargada=true;
        this.info=resp;        
        
        
      });
  }


}
