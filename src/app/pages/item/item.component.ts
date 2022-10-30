import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto, ProductoDetalle } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto:ProductoDetalle | undefined;
  id:string | undefined;

  constructor(private route:ActivatedRoute,
              private productosService:ProductosService) { 

  }

  ngOnInit(): void {
    this.route.params
    .subscribe( params=>{
      //console.log(params['id']);
        this.id=params['id'];
        this.productosService.getProducto(params['id'])
            .subscribe(producto=>{
              this.producto=producto;
              //console.log(producto);
            })

      }
    )
  }

}
