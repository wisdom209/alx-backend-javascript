import Car from './10-car';

export default class EVcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car(this.undefined, this.undefined, this.undefined);
  }
}
