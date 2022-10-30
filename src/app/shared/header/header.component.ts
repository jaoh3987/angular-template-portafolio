import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { equipo } from '../../interfaces/equipo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: InfoPagina={};

  constructor(public infoPaginaService:InfoPaginaService,
    private router:Router) { 
   
  }

  ngOnInit(): void {
    
    this.infoPaginaService.regresaInfo()
      .subscribe((resp:InfoPagina)=>{
        this.info=resp;
        console.log(this.info.titulo);        
      })


  }

  buscarProducto(buscar:string){
    if(buscar.length<1){
      return;
    }
    //console.log(buscar);
    this.router.navigate(['/search',buscar]);

  }



}
