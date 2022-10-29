import { Component, OnInit } from '@angular/core';
import { equipo } from 'src/app/interfaces/equipo.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  lstEquipo:equipo[]=[];

  constructor(public infoPaginaService:InfoPaginaService) { }

  ngOnInit(): void {
    
    this.infoPaginaService.regresaEquipo()
    .subscribe((resp:equipo[])=>{
      //console.log(resp);
      this.lstEquipo=resp;
      console.log(this.lstEquipo[0]);
      
    });
  }

}
