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


// let num = [12,3,5,6,]
//  let newar = num.map((val) => {
//      return val * 2  ;
// })
//  console.log(newar)

// // num.forEach((num) =>{
//      console.log(num*num)
// })



// let nam = [12,3,4,5,5,]
//  let ans = nam.map((vsl,obj) =>{
//     return vsl * 5
// })

// console.log(ans)


// let arr = [1,2,3,4,5,6,7,]

//  let evenarry = arr.filter((val) =>{
//      return val > 3 ;
// })

// console.log(evenarry)



// let arr2 = [223,456,3,5,2323,233,545]
// let even = arr2.filter((val)=>{
//      return val > 3 
// })

// console.log(even)


// let arr = [1,2,4,5,]


//  const output = arr.reduce((res, cru) =>{
//       return res + cru 
// })

// console.log(output);
//   let ar =  [,3,4,5,6,]
//    const output = ar.reduce((res, cru) =>{
//     return res+cru
//   })
// console.log(output)





// let marks = [ 6,80.90,95,60,70,76 ]
// marks.filter((val) =>{
//       return val > 90 

// })  



// let marks = [ 45,65,90,93,96,34,63,35,]


//  let  toopers = marks.filter((val)=>{
//  return val > 90
// })

//  console.log(toopers);

// let n = prompt("enter a number :")
// let arr = []
// for(let i=1; i<=n; i++ ){
//      arr[i-1] = i;
// }

// console.log(arr)

//  let sum = arr.reduce((pre,cru)=>{
//      return pre + cru
// })

// console.log(sum)





let number = [12,34,556,77]

let c = number.reduce((cru,pre) =>{
     return cru + pre
})

console.log(c)


let numbr = [12,344,4543,]
let cal = numbr.reduce((cru,pre) =>{
     return cru + pre
})

console.log(cal)