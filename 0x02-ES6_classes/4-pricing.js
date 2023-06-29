
export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._Currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._Currency;
  }

  set currency(value) {
    this._Currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._Currency._name} (${this._Currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
