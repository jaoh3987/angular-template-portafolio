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

  constructor(private http: HttpClient) { 

  
  }


  cargamosProductoConPromesa(){
    return new Promise((resolve,reject)=>{

      this.http.get<ProductoGeneral[]>('https://angular-firestore-grafic-98de2-default-rtdb.firebaseio.com/productos_idx.json')
          .subscribe(resp=>{
            this.productos=resp;
            this.cargada=true;
            resolve;
          });      
    });

  }

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

    if(this.productos.length===0){
      //Cargamos los productos
      this .cargamosProductoConPromesa().then(()=>{
        //ejecutamos el filtro despues de obtener los productos
        //aplicar filtro
        this.filtrarProducto(termino);
      
      })
    }else{
      this.filtrarProducto(termino);
    }   
  }


  private filtrarProducto(termino:string)
  {

    this.productosFiltrado=[];

    termino=termino.toLocaleLowerCase();

    this.productos.forEach(prod=>{      

      const tituloLower:string= prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0 ){
          this.productosFiltrado.push(prod);
      }
    });
  }


}
