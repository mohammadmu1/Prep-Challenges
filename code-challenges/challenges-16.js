'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...
    let revStr='';
    let l=string.length
    for(let i=0;i<l;i++){
        revStr+=string[l-1-i];
    }
    return revStr;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    let ans=[];
    let l= arr.length;
    for(let i =0 ;i<l ; i++){
        if(arr[i].includes("^_^")){
            ans.push(arr[i])
        }
    }
    return ans;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
    let ans="";
    let l=str.length;
    for(let i=0;i<l;i+=2){
        ans+=str[i];
    }
    return ans;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    //write your code here ...
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        let subarray = arr[i];
        let chickenIngredients = [];
    
    for (let j = 0; j < subarray.length; j++) {
        let ingredient = subarray[j];
        
        if (ingredient.includes("chicken")) {
        chickenIngredients.push(ingredient);
        }
    }
    
    ans.push(chickenIngredients);
    }
    
    return ans;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
