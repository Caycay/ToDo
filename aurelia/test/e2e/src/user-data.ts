import { RandomString } from './common/randomString';

export const UserData = {
  listName: RandomString.generateString(5),
  listDescription: RandomString.generateString(6),
  editListName: RandomString.generateString(5),
  editListDescription: RandomString.generateString(6),
  itemProperty: RandomString.generateString(4),
  itemProperty2: RandomString.generateString(3),
  itemNumber: RandomString.generateNumber(3)
};
