export interface Producto {
    readonly id: number;
    nombre: string;
    precioBase: number;
    calcularPrecio(): number;
    getCategoria(): string;
}


export class ProductoElectronico implements Producto {
    public readonly id: number;
    public nombre: string;
    public precioBase: number;

    constructor(id: number, nombre: string, precioBase: number) {
        this.id = id;
        this.nombre = nombre;
        this.precioBase = precioBase;
    }

    calcularPrecio(): number {
        return this.precioBase * 1.13; // Aplicar un impuesto del 13%
    }

    getCategoria(): string {
        return "electrónico";
    }
}

export class ProductoAlimenticio implements Producto {
    public readonly id: number;
    public nombre: string;
    public precioBase: number;

    constructor(id: number, nombre: string, precioBase: number) {
        this.id = id;
        this.nombre = nombre;
        this.precioBase = precioBase;
    }

    calcularPrecio(): number {
        return this.precioBase;
    }

    getCategoria(): string {
        return "alimenticio";
    }
}


export const productos: Producto[] = [
    new ProductoElectronico(1, 'Smartphone', 500),
    new ProductoAlimenticio(2, 'Pan', 200),
    new ProductoElectronico(3, 'Laptop', 1200),
    new ProductoAlimenticio(4, 'Leche', 1500),
];