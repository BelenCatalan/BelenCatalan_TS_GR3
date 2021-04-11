export class Telefono{
  private _telefono: number;
  private _tipotlf: string;

  constructor(tlf:number, tipotelf:string){
    this._telefono = tlf;
  this._tipotlf = tipotelf;
  
  }

public get telefono(): number{
  return this._telefono;
}
public set telefono(value: number){
  this._telefono = value;
}
public get tipotlf(): string{
  return this._tipotlf;
}
public set tipotlf(value: string){
  this._tipotlf = value;
}

}