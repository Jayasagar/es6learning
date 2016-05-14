'use strict';
function Person() {
    this.age = 25;
    this.name = 'JJ';
    let that = this;
    
//    setInterval(function(){
//        console.log(this.age);
//        console.log(that.name);
//    }, 1000);
    
    setInterval(() =>{
        console.log(this.age);
        console.log(this.name);
    },1000);

}

var person = new Person();