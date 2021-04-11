"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
var Direccion_1 = require("./Direccion");
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleaños, color, sexo, direcciones, mails, telefonos, notas) {
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
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (value) {
            this._apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (value) {
            this._dni = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumplea\u00F1os", {
        get: function () {
            return this._cumpleaños;
        },
        set: function (value) {
            this._cumpleaños = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        set: function (value) {
            this._direcciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (value) {
            this._mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this._telefonos;
        },
        set: function (value) {
            this._telefonos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (value) {
            this._notas = value;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.mostrarDireccion = function () {
    };
    Persona.prototype.mostrarDatos = function (persona) {
        var datos = "Nombre: " + persona.nombre + "\nApellidos: " + persona.apellidos + "\nEdad: " + persona.edad + "\nSexo: " + persona.sexo + "\nDNI: " + persona.dni + "\nFecha Nacimiento: " + persona.cumpleaños + "\nColor Favorito: " + persona.color + "\nDirecci\u00F3n: " + persona.direcciones + "\nCorreo " + persona.mails[1] + ": " + persona.mails[0] + "\nTel\u00E9fono " + persona.telefonos[1] + ": " + persona.telefonos[0] + "\nNotas: " + persona.notas;
        console.log(datos);
    };
    Persona.prototype.changeDireccion = function (calle, num, piso, letra, cp, pobla, provincia) {
        var rdirec = new Direccion_1.Direccion(calle, num, piso, letra, cp, pobla, provincia);
        this.direcciones = [rdirec];
    };
    Persona.prototype.changeMail = function (mail, tipo) {
        var rmail = new Mail_1.Mail(mail, tipo);
        this.mails = [rmail];
    };
    Persona.prototype.changeTelefono = function (tlf, tipotelf) {
        var rtelefono = new Telefono_1.Telefono(tlf, tipotelf);
        this.telefonos = [rtelefono];
    };
    return Persona;
}());
exports.Persona = Persona;
