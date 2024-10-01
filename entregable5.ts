class Vehiculo {
    private marca: string;
    private modelo: string;
    private patente: string;

    constructor(marca: string, modelo: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
 public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getPatente(): string {
        return this.patente;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public obtenerInfo(): string {
        return `Marca: ${this.marca}; Modelo: ${this.modelo}; Patente: ${this.patente}`;
    }
}  class Auto extends Vehiculo {
    constructor(marca: string, modelo: string, patente: string) {
        super(marca, modelo, patente);
    }
}

class Moto extends Vehiculo {
    constructor(marca: string, modelo: string, patente: string) {
        super(marca, modelo, patente);
    }
}

class Camion extends Vehiculo {
    constructor(marca: string, modelo: string, patente: string) {
        super(marca, modelo, patente);
    }
}
class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    constructor() {
        this.vehiculos = [];
    }


    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    public obtenerVehiculoPorPatente(patente: string): Vehiculo | undefined {
        return this.vehiculos.find(vehiculo => vehiculo.getPatente() === patente);
    }
   public modificarVehiculo(patente: string, nuevaMarca: string, nuevoModelo: string): boolean {
        const vehiculo = this.obtenerVehiculoPorPatente(patente);
        if (vehiculo) {
            vehiculo.setMarca(nuevaMarca);
            vehiculo.setModelo(nuevoModelo);
            return true;
        }
        return false;
    }
 public darDeBajaVehiculo(patente: string): boolean {
        const index = this.vehiculos.findIndex(vehiculo => vehiculo.getPatente() === patente);
        if (index !== -1) {
            this.vehiculos.splice(index, 1);
            return true;
        }
        return false;
    }

    public obtenerTodosLosVehiculos(): string {
        return this.vehiculos.map(vehiculo => vehiculo.obtenerInfo()).join("\n");
    }
}
const registro = new RegistroAutomotor();

const auto = new Auto("Jeep", "Renegade", "AE169RN");
const moto = new Moto("Ducati", "Diavel", "XYZ757");
const camion = new Camion("Mercedes", "Atego", "MMN558");

registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);

console.log("Vehículos registrados:");
console.log(registro.obtenerTodosLosVehiculos());

console.log("\nModificando el vehículo con patente 'AE169RN':");
registro.modificarVehiculo("MLL977", "Toyota", "RAV4");
console.log(registro.obtenerVehiculoPorPatente("AE169RN")?.obtenerInfo());

console.log
registro.darDeBajaVehiculo("cmmjn");
console.log(registro.obtenerTodosLosVehiculos());
