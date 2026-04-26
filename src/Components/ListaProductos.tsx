import type {Producto} from "./producto";
import  ProductoItem  from "./ProductoItem";

interface ListaProductosProps{
    productos: Producto[];
}

export default function ListaProductos({productos}: ListaProductosProps){
    return(
    <section className="flex flex-wrap gap-6 items-center justify-center mt-4">
        {productos.map((producto)=> (

            <ProductoItem  
                key= {producto.id} 
                nombre= {producto.nombre} 
                categoria={producto.getCategoria()}
                precioFinal={producto.calcularPrecio()}
            />
        ))}
        
    </section>
    );
}