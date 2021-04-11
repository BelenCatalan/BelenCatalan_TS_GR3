"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(mail, tipo) {
        this._mail = mail;
        this._tipomail = tipo;
    }
    Object.defineProperty(Mail.prototype, "mail", {
        get: function () {
            return this._mail;
        },
        set: function (value) {
            this._mail = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "tipomail", {
        get: function () {
            return this._tipomail;
        },
        set: function (value) {
            this._tipomail = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
