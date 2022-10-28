import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: InfoPagina={};

  constructor(public infoPaginaService:InfoPaginaService) { 
   
  }

  ngOnInit(): void {
    
    this.infoPaginaService.regresaInfo()
      .subscribe((resp:InfoPagina)=>{
        this.info=resp;
        console.log(this.info.titulo);        
      })

  }

}
