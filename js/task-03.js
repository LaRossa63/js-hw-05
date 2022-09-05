class Storage {
  constructor(abilities) {
    this._abilities = abilities;
  }

  get abilities() {
    return this._abilities;
  }

  addItem(item) {
    this._abilities.push(item);
  }

  removeItem(item) {
    this._abilities = this._abilities.filter((element) => element !== item);
  }
}

const storage = new Storage([
  'Супер костюм',
  'Пролонгированного',
  'Железные удар',
  'Антигравитация',
]);

console.log(storage.abilities);

storage.addItem('Супер сила');
console.log(storage.abilities);

storage.removeItem('Железные удар');
console.log(storage.abilities);
