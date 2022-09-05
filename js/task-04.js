class StringBuilder {
  constructor(string) {
    this._string = string;
  }

  get string() {
    return this._string;
  }

  append(value) {
    this._string = `${this._string}${value}`;
  }

  prepend(value) {
    this._string = `${value}${this._string}`;
  }

  pad(value) {
    this._string = `${value}${this._string}${value}`;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.string);

builder.prepend('^');
console.log(builder.string);

builder.pad('=');
console.log(builder.string);
