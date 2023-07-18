
class ProductManager {
    constructor(){
        this.productos = []
        this.nextId = 1
    }

    agregarProducto(producto){

        if(!this.isProductValid(producto)){
            console.log("el producto no es valido")
            return
        }
        if(this.isCodeDuplicate(producto.code)){
            console.log("este producto ya esta cargado")
            return
        }
        
        producto.id = this.nextId++
        this.productos.push(producto);
       
    }

    obtenerProductos(){
        return this.productos;
    }

    obtenerProductoPorID(id){
        const productoId = this.productos.find((p) => p.id === id)
        if (productoId){
            return productoId;
        }
        else{
            console.log("El producto no fue encontrado")
        }
    }
    isProductValid(producto){
        return(
            producto.titulo &&
            producto.descripcion &&
            producto.precio &&
            producto.url &&
            producto.code &&
            producto.stock
        )
    }
     isCodeDuplicate(code){
        return this.productos.some((p) => p.code === code)
     }
}



const manejador1 = new ProductManager ();

manejador1.agregarProducto({
    titulo : "producto uno",
    descripcion : "este es el producto uno",
    precio : 2000,
    url : "nada por ahora",
    code : "pr1",
    stock : 200  

})

manejador1.agregarProducto({
    titulo : "producto dos",
    descripcion : "este es el producto dos",
    precio : 2500,
    url : "nada por ahora",
    code : "pr2",
    stock : 200  

})

const todosProductos = manejador1.obtenerProductos();
console.log(todosProductos);

const obtenProducto = manejador1.obtenerProductoPorID(1)
console.log(obtenProducto);