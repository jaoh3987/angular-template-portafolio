import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio:number=new Date().getFullYear();

  info: InfoPagina={};

  constructor(public infoPaginaService:InfoPaginaService) { 
  }

  ngOnInit(): void {
   
    this.infoPaginaService.regresaInfo()
      .subscribe((resp:InfoPagina)=>{
        this.info=resp;
        //console.log(this.info);        
      })
      
  }

}
