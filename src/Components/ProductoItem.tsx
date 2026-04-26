interface ItemProductoProps{
    nombre: string;
    categoria: string;
    precioFinal: number;
}


export default function ProductoItem({nombre, categoria, precioFinal}: ItemProductoProps){
    return(
        <article className="bg-white shadow-md w-52 px-5 py-5 flex-col flex rounded-2xl border">
            
            <h3 className="font-bold text-center">{nombre}</h3>
            
            <p>Producto: {categoria}</p>
            <p>₡{precioFinal.toFixed(2)}</p>
        </article>
    );
}