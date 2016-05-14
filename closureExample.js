var add = (function () {
    var counter = 0;
    
    return function () {
        //counter = counter + 1;
        //console.log("inside " + counter);
        //return counter;
        //console.log("");
    };
})();

var c = add();

console.log(" outside counter :" + c);

add();

function increment(number1) {
    return function actualInc(howMuchToAdd) {
        return number1 + howMuchToAdd;
    }
}

var addInc = increment(10);

var valueAfterInc = addInc(11);

console.log(valueAfterInc);

//Person name as private with closure

function Person(name) {
    var _name = name;
    this.getName = function() {
        return _name;
    }
}

var person = new Person("Jai");
console.log("name:" + person.getName());
function Employee(name){
    Person.call(this, name);
}

var emp = new Employee("JJ");
console.log(emp.getName());

var v = (function (value) {
    this.value = value;
    return function() {
        console.log("self:" + this.value);
    }
})(2);

v();

for(var i = 0; i < 10; i++) {
    //debugger;
    var i1 = i;
    setTimeout(function(){
        debugger;
        console.log(i1); //i2 is undefined in JavaScript-No-Closure 
    }, 1000);
}

for(var i = 0; i < 10; i++) {
    //debugger;
    (function(){
        var i1 = i;
        setTimeout(function(){
        debugger;
        console.log(i1); //i2 is undefined in JavaScript-No-Closure 
    }, 1000);
    })();
    
}