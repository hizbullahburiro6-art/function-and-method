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


function cntv(str){
     let cnt = 0;
     for(const chr of str){
          if(chr === "a"|| chr ==="e"|| chr === "i"||chr === "o"||chr === "u"){
               cnt++
          }
     }
     console.log(cnt)
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

//  arr = ["sukkur","jaconanad","karachi","lahore"]

// // arr.forEach(function per (val){
// //      console.log(val);
// // })

// let
// arr.forEach((val,idx,arr) => {
//      console.log(val.toUpperCase(), idx,arr)
// })




// let  number =  [34,45,66,78,94,32,]
// number.forEach((num) =>{
//      console.log(num*num)
// })


let num = [123,344,555,665,]
num.forEach((num) =>{
     console.log(num*num)
})