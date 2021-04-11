"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tlf, tipotelf) {
        this._telefono = tlf;
        this._tipotlf = tipotelf;
    }
    Object.defineProperty(Telefono.prototype, "telefono", {
        get: function () {
            return this._telefono;
        },
        set: function (value) {
            this._telefono = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "tipotlf", {
        get: function () {
            return this._tipotlf;
        },
        set: function (value) {
            this._tipotlf = value;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
