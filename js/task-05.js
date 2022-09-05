class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs(car) {
    console.log(
      `Двигатель: ${car._isOn} | Скорость: ${car._speed} | Макс. скорость: ${car._maxSpeed} | Цена: ${car._price} | Километраж: ${car._distance}`
    );
  }

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий километраж , изначально 0
   */
  constructor({
    speed = 0,
    price = 0,
    maxSpeed = 0,
    isOn = false,
    distance = 0,
  }) {
    this._speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._distance = distance;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this._isOn = true;

    console.log('Двигатель заведен');
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this._isOn = false;

    console.log('Двигатель заглушен');
  }

  /*
   * Добавляет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    const totalSpeed = this._speed + value;

    if (this._maxSpeed < totalSpeed) {
      console.log(
        `Нельзя разогнаться больше максимальной скорости [${this._maxSpeed}]`
      );

      return;
    }

    this._speed = totalSpeed;
    console.log(`Разгон до ${this._speed}`);
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    const totalSpeed = this._speed - value;

    if (totalSpeed < 0) {
      console.log(`Нельзя сбросить скорость больше 0`);

      return;
    }

    this._speed = totalSpeed;
    console.log(`Сбрасываем скорость до [${this._speed}]`);
  }

  /*
   * Добавляет в поле distance километраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (!this._isOn) {
      return;
    }

    this._distance = hours * this._speed;
    console.log(`Километраж обновлен: ${this._distance}`);
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
