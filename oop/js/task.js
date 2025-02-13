// q1
// class Library{
//     constructor(){
//         this.book=[]
//     }

//     add(abook){
//         this.book.push(abook)
//         console.log("Book Added Successfully");
        
//     }

//     display(){
//         this.book.forEach(item=>console.log(item))
//     }

//     search(sbook){
//         let res=this.book.find((item)=>sbook==item)
//         if(res==sbook){
//             console.log(`${sbook} is Available`);
//         }else{
//             console.log(`${sbook} is Not Available`);
//         }
        
//     }
// }

// var bk=new Library()

// bk.add("Kalikkudukka")
// bk.add("Balarama")
// bk.add("Vanitha")
// bk.add("Basheerinte PremaLekhanam")
// bk.add("Psychology of Money")

// bk.display()


// bk.search("bla")




// q2
// class Dealership {
//     constructor(model, color) {
//         this.model = model
//         this.color = color
//     }
  
//     getDetails() {
//         return `${this.model} : ${this.color}`
//     }
// }

// class Car extends Dealership {
//     constructor(model, color) {
//         super(model, color)
//     }
// }

// class Bike extends Dealership {
//     constructor(model, color) {
//         super(model, color)
//     }
// }

// const car = new Car('Pajero', 'Red');
// const bike = new Bike('Continental GT', 'Black');


// console.log(car.getDetails())
// console.log(bike.getDetails())




// q3
