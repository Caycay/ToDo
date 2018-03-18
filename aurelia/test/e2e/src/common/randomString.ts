export class RandomString {
  public static generateString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  public static generateNumber(length) {
    let possible = '0123456789';
    let number = 0;
    for (let i = 0; i < length; i++) {
      number += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return number;
  }

  public static generateEmail() {
    let email = '';

    email = this.generateString(15);
    email += '@';
    email += this.generateString(3);
    email += '.';
    email += this.generateString(2);

    return email;
  }

}
