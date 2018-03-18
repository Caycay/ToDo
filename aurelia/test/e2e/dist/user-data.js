"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomString_1 = require("./common/randomString");
exports.UserData = {
    listName: randomString_1.RandomString.generateString(5),
    listDescription: randomString_1.RandomString.generateString(6),
    editListName: randomString_1.RandomString.generateString(5),
    editListDescription: randomString_1.RandomString.generateString(6),
    itemProperty: randomString_1.RandomString.generateString(4),
    itemProperty2: randomString_1.RandomString.generateString(3),
    itemNumber: randomString_1.RandomString.generateNumber(3)
};
