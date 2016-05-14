function Animal(name) {
    this.name = name;
}

Animal.prototype.sleep = function() {
    console.log("sleeping :" + this.name);
}

var a = new Animal("Monkey");

a.sleep();

function Cat(name) {
    Animal.call(this, name);
}

Cat.prototype = new Animal();
var c = new Cat("Cat");

c.sleep();


(function () {
    console.log("self invvoking function");
})();