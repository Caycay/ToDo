export class RandomString {
  public static generateString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
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
