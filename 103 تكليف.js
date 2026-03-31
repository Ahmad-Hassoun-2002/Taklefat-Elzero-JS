function Car(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
}

// Needed Output

class Carr{
    constructor(name , model , price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run(){
        return "Car Is Running Now";
    }
    stop(){
        return "Car Is Stopped";
    }
}

let carOne = new Carr("MG" , 2022 , 42000);
let carTwo = new Carr("BMW" , 2018 , 26000);
let carThree = new Carr("KIA" , 2011 , 5000);

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"