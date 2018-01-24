"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomString = (function () {
    function RandomString() {
    }
    RandomString.generateString = function (length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    RandomString.generateEmail = function () {
        var email = '';
        email = this.generateString(15);
        email += '@';
        email += this.generateString(3);
        email += '.';
        email += this.generateString(2);
        return email;
    };
    return RandomString;
}());
exports.RandomString = RandomString;
