
import {Persona} from "./Persona";

let persona1 = new Persona('Belen', 'Catalán Almendros',39,'74662158Q','09/02/1982','azul','mujer',['Gran Vía',18,4,'b',28013,'Madrid','Madrid'],['labdelante@gmail.com', 'gmail' ],[6582459, 'Móvil'],'pruebas');

let persona2 = new Persona('Alba', 'Perez Olmo',22,'72665658A','15/06/1999','Fucsia','mujer',['Villena',12,3,'A',2640,'Almansa','Albacete'],['albapatras@hotmail.com', 'hotmail' ],[967343434, 'Fijo'],'No tiene notas');

let persona3 = new Persona('Héctor', 'Mártinez Campos',9,'72665658L','23/10/2012','Amarillo','hombre',['Pi y Margal',46,2,'C',28034,'Madrid','Madrid'],['camposhec@gmail.com', 'gmail' ],[623589741, 'Móvil'],'Móvil familiar');


persona1.mostrarDatos(persona1);

persona2.mostrarDatos(persona2);

persona3.mostrarDatos(persona3);

console.log(persona1.direcciones[0]);

persona1.changeDireccion('Hilanderas',18,4,'b',28013,'Madrid','Madrid');
persona1.changeMail('labdelante@hotmail.com','hotmail');
persona1.changeTelefono(963578493,'Fijo');

persona1.mostrarDatos(persona1);

