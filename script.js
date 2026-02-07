// function myFunction(maseeg){
//      console.log(maseeg)
// }

// myFunction("i love js");



// function sum(y,z){
//      z = y+z;
//      console.log('before return')
//      return z;
//      confirm.log("after return")

// }

// let val = sum(23, 72)
// console.log(val)


// function sum(y,z){
//      z = y*z
//      return z;

// }



//  let val = sum(24,85)
//  console.log(val)


//  const arry = (a,b) =>{
//      console.log(a + b)
//  }


//  let  multu = (a,b) =>{
//      console.log(a*b)
//  }

//  multu = 5;


//  function myFunction(a,b){
//      let sum = (a*b)
//  }


//  let  val2 = myFunction(2,3)
//  console.log(val2) 


function countvowel(str){
     let count = 0;
     for(const char of str){
          if(char === "a" || char ==="e" || char === "i" || char ==="o" ||char ==="u"){
               count++
          }
     }

     console.log(count)


}


let countvow = (str) =>{
      let count = 0;
     for(const char of str){
          if(char === "a" || char ==="e" || char === "i" || char ==="o" ||char ==="u"){
               count++
          }
     }

     console.log(count)
}