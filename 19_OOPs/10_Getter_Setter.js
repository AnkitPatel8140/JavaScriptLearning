// We get getters and setters for each property implicitly
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // if we define one get/set then we have to define the other also
    // we cannot only define either getter or setter.
    get email() {
        return this._email.toUpperCase();
    }
    set email(email) {
        this._email = email;
    }

    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
}

const user = new User("abc@gmail.com", "123");
console.log(user.email);
console.log(user.password);