import { Component, OnInit } from '@angular/core';
import { ProductoGeneral } from 'src/app/interfaces/productos.general.interface';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  productosGenerales:ProductoGeneral[]=[];

  constructor(public productosService:ProductosService) { 
  

  }

  ngOnInit(): void {

    this.productosService.cargarProductos()
      .subscribe((resp:ProductoGeneral[])=>{
        //console.log(resp);
        this.productosGenerales=resp;

        console.log(this.productosGenerales);
        
        
      })
  }

}
