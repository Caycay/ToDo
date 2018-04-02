var R = require('../../src/help/random');

const UserData = {
    listName: R.Random.generateString(5),
    listDescription: R.Random.generateString(6),
    editListName: R.Random.generateString(5),
    editListDescription: R.Random.generateString(6),
    itemProperty: R.Random.generateString(4),
    itemProperty2: R.Random.generateString(3),
    itemNumber: R.Random.generateNumber(3)
};
