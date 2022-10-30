import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private productosService:ProductosService) { 

  }

  ngOnInit(): void {
    this.route.params
    .subscribe( params=>{
      //console.log(params['id']);
        this.productosService.getProducto(params['id'])
            .subscribe(producto=>{
              console.log(producto);
            })

      }
    )
  }

}
