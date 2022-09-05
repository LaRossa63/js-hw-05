const Account = function ({ login, email }) {
  this._login = login;
  this._email = email;
};

Account.prototype.getInfo = function () {
  console.log(`Логин: ${this._login} | Почта: ${this._email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
