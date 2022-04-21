'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  
const arr = [9, 20, 3, 12, 18,1];
const findMax = (arr)=>{
    let max=0;
    // write your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max=arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  
let array=[20, '234', 'car', 41, 20, 'chair'];
let sum_of_num=[];

const sumNums = (arr1,arr2)=>{
    let sum=0;
    // write your code here
    
    for (let i = 0; i < arr1.length; i++){
        if(typeof arr1[i]==='number'){
          
            arr2.push(arr1[i]);
    
         } 
        }
    for (let i = 0; i < arr2.length; i++){
            sum += arr2[i]; 
         }

    return sum;
}
console.log(sumNums(array,sum_of_num)); 

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};