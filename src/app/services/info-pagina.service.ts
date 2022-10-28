import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:any={};
  cargada=false;

  constructor(private http: HttpClient) { 
    
    //console.log("carga servicio");

    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp:any) =>{

        //console.log(resp['twitter']);
        this.cargada=true;
        this.info=resp;
        
        
      });
  }


}
