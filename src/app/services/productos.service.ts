import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ProductoGeneral } from '../interfaces/productos.general.interface';
import { Producto, ProductoDetalle } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargada=false;

  productos:ProductoGeneral[]=[];
  productosFiltrado:ProductoGeneral[]=[]

  constructor(private http: HttpClient) { }

  cargarProductos(){
     
    return this.http.get<ProductoGeneral[]>('https://angular-firestore-grafic-98de2-default-rtdb.firebaseio.com/productos_idx.json').pipe(
      tap((resp:ProductoGeneral[])=>{
        this.productos=resp;
        this.cargada=true;
      })
    );
  }

  getProducto(id:string){
 
    return this.http.get<ProductoDetalle>(`https://angular-firestore-grafic-98de2-default-rtdb.firebaseio.com/productos/${id}.json`).pipe(
      tap((resp:ProductoDetalle)=>{
        this.cargada=true;
      })
    );

  }

  buscarProducto(termino:string){
    this.productosFiltrado= this.productos.filter(producto=>{
      return true;
    })

    console.log(this.productosFiltrado);
    
  }


}
