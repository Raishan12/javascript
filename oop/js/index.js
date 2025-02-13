// class Father{
//     constructor(){
//         this.land = "30 Acres"
//     }
// }
// var father=new Father()
// class Son extends Father{
//     constructor(){
//         super()
//         this.house = "Mansion"
//     }
// }
// var son=new Son()
// console.log(son.house);
// console.log(son.land);


// function Father(){
//     this.land="30 Acres of Land"
// }

// Father.prototype.name=function(){
//     return "Basheer"
// }

// var father=new Father()

// function Son(){
//     Father.call(this)
//     this.house="Mansion"
// }
// Son.prototype = Object.create(Father.prototype)
// Son.prototype.name=function(){
//     return "Althaf"
// }
// var son=new Son()

// console.log(father.land)
// console.log(father.name())

// console.log(son.land)
// console.log(son.house)
// console.log(son.name())




// class automobile {
//     constructor(name, cc) {
//         this.name = name;
//         this.cc = cc;
//     }
//     engine() {
//         console.log(`${this.name} 
//       has ${this.cc} engine`);
//     }
// }

// class car extends automobile {
//     engine() {
//         console.log(this.name,"has ", this.cc, "cc engine");
//     }
// }

// let carz = new car('Rex',"1149");
// carz.engine();


























