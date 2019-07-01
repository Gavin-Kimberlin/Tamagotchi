export default class YourPet {
  constructor() {
    this.tired = 0;
    this.hungry = 0;
    this.thirsty = 0;
    this.becomeTired();
    this.becomeHungry();
    this.becomeThirsty();
  };

  becomeTired () {
    let that = this;
    console.log('working');
    setInterval(function () {
        if (that.tired < 100) {
          that.tired += 5;
          console.log(that.tired);
      }
    }, 5000)
  };

  becomeHungry () {
    let that = this;
    setInterval(function () {
      if (that.hungry < 100) {
        that.hungry += 5;
      }
      console.log(that.hungry);
    }, 5000)
  };

  becomeThirsty () {
    let that = this;
    setInterval(function () {
      if (that.thirsty < 100) {
        that.thirsty += 5;
        console.log(that.thirsty);
      }
    }, 5000)
  };

  feed() {
    this.hungry = 0;
  };

  giveWater() {
    this.thirsty = 0;
  };

  sleep() {
    this.tired = 0
  }

}
