import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ProductoGeneral } from '../interfaces/productos.general.interface';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargada=false;

  constructor(private http: HttpClient) { }

  cargarProductos(){
     
    return this.http.get<ProductoGeneral[]>('https://angular-firestore-grafic-98de2-default-rtdb.firebaseio.com/productos_idx.json').pipe(
      tap((resp:ProductoGeneral[])=>{
        this.cargada=true;
      })
    );
  }


}
