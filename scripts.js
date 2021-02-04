let Auto = function(brand, number, selector) {
    this.brand = brand;
    this.number = number;
    this.selector = selector;
    this.trans = function() {
        this.tr = prompt('Какая передача: вперёд, назад, нейтральная?');
    };
    this.move = function() {
        this.direct = prompt('Выберите направление движения автомобиля: вперёд, назад');
    };
    this.speed = function(){
        this.sp = +prompt('С какой скоростью движется автомобиль (км/ч)?');
    };
    this.time = function() {
        this.t = +prompt('Какое время автомобиль находился в пути (ч)?');
    };
    this.distance = function() {
        this.result = this.sp * this.t;
        alert ('Пройденный путь = ' + this.result + ' км');
    };
};
let car = new Auto ('Audi', 3400, true);
console.log(car);
car.trans();
car.move();
car.speed();
car.time();
car.distance();