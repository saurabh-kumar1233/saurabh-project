// var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for (var i=0;i<=arr.length;i++)
// {
   

// if(arr[i]%2==0)
// {
//     console.log("it is divisible by 2",arr[i]);
    
// }
// else if(arr[i]%3==0)
// {
//     console.log("it is divisible by 3",arr[i]);

    
// }
// else if(arr[i]%5==0)
// {
//     console.log("it is divisble by 5",arr[i]);
    
// }
// else
// {
//     console.log("no");
    
// }}


//star pattern solution
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// for loop---------------------------------------------->

//min and max
// let arr=[10,55,68,3,43,35]
// for(var i=0;i<=arr.length;i++)
//      {
//         if(arr[i]>arr[i+1])
//      }
//     console.log();
    

// for in loop--------------------------------------------------------------------------->

// let obj ={
//    name:'tyagi',
//    age:31,
//    qualification:'phd'

// }
// for (let i in obj)
// {
//    console.log(i,obj[i]);
// }

// for of loop------------------------------------------>

// var arr1=[1,2,2,3,4,5,6,7,8,9]
// for(let key of arr1)
// {
//    console.log(key);
   
// }


// let arr=[1,2,3,4,5]
// sum=0;
// for (let i=0;i<=arr.length;i++)
// {
//    sum=sum+arr[i];
//    {
//    console.log(sum);
//    }
//    console.log();
   
   
// }

// ------> to find lenth of a string

// var str="hello everyone today we learn string method";
// console.log(str.length);


// ------------> tostring

// var str=123;
// var a=str.toString()
// console.log(typeof(a));
// console.log(typeof(str));
// console.log(a);



// ------ indexof & lastindexof---------

// var str="hello everyone todat we learn string method everyone";
// console.log(str.indexOf('e'));
// console.log(str.indexOf('everyone'));
// console.log(str.lastIndexOf('e'));




// ----------->split


// ===========>repeat





// wap to find number is palindrom or not


// let a=121;
// let b=a.reverse;
// if(b=a)
// {
//    console.log("number is palindrom");
// }
// else{
//    console.log("not");
   
// }

// ===============>slice

//var str="hello everyone today we learn string method";
// console.log(str.slice(10));
// console.log(str.slice(2,7));
// console.log(str.slice(-1));
// console.log(str.slice(2,7));
// console.log(str.slice());
// console.log(str.slice(15,12));
// console.log(str.slice(-6,-4));
//console.log(str.slice(-6,3));                                          //   important
// console.log(str.slice(6,-3));                                // diff betweensubstring slice, substr
                                                              // substring:- not support -
                                                              // but slice :- support -
                                                              // slice :- does

//========================>>>>>> substring

//var str="hello everyone today we learn string method"; 
// console.log(str.substring(9));
//console.log(str.substring(2,7));
// console.log(str.substring(-6));
// console.log(str.substring(15,12));
// console.log(str.substring(-6,-4));
//  console.log(str.substring(-6,3));
//  console.log(str.substring(6,-3));


// substr =================>------------------/>

   var str="hello everyone todat we learn string method";
   console.log(str.substr(9));
   console.log(str.substr(2,7));
   console.log(str.substr(-6));
   


// to uppercase=====>--------------------------------------->>>>>>>>>>>>>>>>>>>

   var str="hello everyone today we learn string method";
   console.log(str.toUpperCase());

   // to lowercasem ===================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   var str="hello everyone today we learn string method";
   console.log(str.toLowerCase());

   // ===includes

   var str="hello everyone today we learn string method";
   console.log(str.includes("today"));
   
   














