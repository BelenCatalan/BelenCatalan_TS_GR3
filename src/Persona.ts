import {Mail} from "./Mail";
import {Telefono} from "./Telefono";
import {Direccion} from "./Direccion";

export class Persona {
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _dni: string;//debe ser compuesto
  private _cumpleaños: string; //fecha? string?
  private _color: string;
  private _sexo: string;
  private _direcciones: Direccion[];
  private _mails: Mail[];
  private _telefonos: Telefono[];
  private _notas: string;

  constructor(nombre: string, apellidos:string, edad:number, dni:string, cumpleaños:string, color:string,sexo:string, direcciones: any, mails: any, telefonos: any, notas: string){
    this._nombre = nombre;
  this._apellidos = apellidos;
  this._edad = edad;
  this._dni = dni;
  this._cumpleaños = cumpleaños;
  this._color = color;
  this._sexo = sexo;
  this._direcciones = direcciones;
  this._mails = mails;
  this._telefonos = telefonos;
  this._notas = notas;
  }

public get nombre(): string{
  return this._nombre;
}
public set nombre(value: string){
  this._nombre = value;
}
public get apellidos(): string{
  return this._apellidos;
}
public set apellidos(value: string){
  this._apellidos = value;
}
public get edad(): number{
  return this._edad;
}
public set edad(value: number){
  this._edad = value;
}
public get dni(): string{
  return this._dni;
}
public set dni(value: string){
  this._dni = value;
}
public get cumpleaños(): string{
  return this._cumpleaños;
}
public set cumpleaños(value: string){
  this._cumpleaños = value;
}
public get color(): string{
  return this._color;
}
public set color(value: string){
  this._color = value;
}
public get sexo(): string{
  return this._sexo;
}
public set sexo(value: string){
  this._sexo = value;
}
public get direcciones(): Direccion[]{
  return this._direcciones;
}
public set direcciones(value: Direccion[]){
  this._direcciones = value;
}
public get mails(): Mail[]{
  return this._mails;
}
public set mails(value: Mail[]){
  this._mails = value;
}
public get telefonos(): Telefono[]{
  return this._telefonos;
}
public set telefonos(value: Telefono[]){
  this._telefonos = value;
}
public get notas(): string{
  return this._notas;
}
public set notas(value: string){
  this._notas = value;
}

public mostrarDireccion(){

}

public mostrarDatos(persona: any):void{
  let datos = `Nombre: ${persona.nombre}\nApellidos: ${persona.apellidos}\nEdad: ${persona.edad}\nSexo: ${persona.sexo}\nDNI: ${persona.dni}\nFecha Nacimiento: ${persona.cumpleaños}\nColor Favorito: ${persona.color}\nDirección: ${persona.direcciones}\nCorreo ${persona.mails[1]}: ${persona.mails[0]}\nTeléfono ${persona.telefonos[1]}: ${persona.telefonos[0]}\nNotas: ${persona.notas}`
  console.log(datos);
  }

  public changeDireccion(calle:string, num:number, piso:number, letra:string, cp:number, pobla:string, provincia:string): void{
    let rdirec =new Direccion (calle, num,piso,letra,cp,pobla,provincia);
    this.direcciones = [rdirec];
  }

  public changeMail(mail:string, tipo:string): void{
    let rmail =new Mail (mail, tipo);
    this.mails = [rmail];
  }
  public changeTelefono(tlf:number, tipotelf:string): void{
    let rtelefono =new Telefono (tlf, tipotelf);
    this.telefonos = [rtelefono];
  }
}





