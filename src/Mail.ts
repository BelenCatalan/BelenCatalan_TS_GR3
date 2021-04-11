export class Mail{
  private _mail: string;
  private _tipomail: string;

  constructor(mail:string, tipo:string){
    this._mail = mail;
  this._tipomail = tipo;
  
  }

public get mail(): string{
  return this._mail;
}
public set mail(value: string){
  this._mail = value;
}
public get tipomail(): string{
  return this._tipomail;
}
public set tipomail(value: string){
  this._tipomail = value;
}

}