
//'use strict'

var mySelfThis  = {
    name : "JJ",
    func : function() {
        var self = this;
        console.log("outside self.name" + self.name);
        console.log("outside this.name" + this.name);
        
        (function() {
            console.log("inside self.name" + self.name);
            console.log("inside this.name" + this.name); // For this function, this is doesn't have 'name'
        })();
    }
}

mySelfThis.func();

var obj = {
    name : "hi",
    
    myMe : function() {
        console.log("inside this:" + this.name);
    }
}

function exam() {
    console.log("this1: " + this.name);
}

obj.exam1 = exam;

exam();
obj.exam1();
obj.myMe();
obj.myMe();

var m = obj.myMe;

m();

function Per(name) {
    this.name = name;
}

var p = new Per("J");

p.exam2 = exam;

p.exam2();

