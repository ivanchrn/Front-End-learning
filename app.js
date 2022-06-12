// ----------------------------------- Fibonacci --------------------------------------- //


// function fibonacci(n) {

//     let fibNum ;
//     let fibResult = [];

//     for (let i = 0; i < n; i++){
//         if(i === 0){
//             fibNum = 0;
//         }else if(i === 1) {
//             fibNum = fibResult[i-1] + 1;
//         }else {
//             fibNum = fibResult[i-1] + fibResult[i-2];
//         }
//             fibResult.push(fibNum);
            

//     }
    
//     return fibResult;
// }

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(10));
// console.log(fibonacci(15));


// ----------------------------------- Anagrams--------------------------------------- //

//-------------------------------------- 1 ------------------------------------------- //


const str = 'evil, restful, eleven plus two, state, live, the classroom, santa, vile, satan, fluster, taste, schoolmaster, twelve plus one, car, boat';
const words = 'bag, gab, foo, abg, oof, bum, cat, dog, tac, god, act, cars, repaid, dues, nose, signed, lane, paired, arcs, grab, used, ones, brag, sued, lean, scar, design';

  
const getAnagrams = (values) => { 

    let arrResult = [];
    let collectedAnagrams = [];
    let strToArr = values.split(", ");

    for (let value of strToArr){

        let sortedArr = value.split('').sort().join('');
        arrResult[sortedArr] = arrResult[sortedArr] || [] ;
        arrResult[sortedArr].push(value);

    }

    for(let key in arrResult){

        if(arrResult[key].length > 1){
            collectedAnagrams.push(arrResult[key]);
        }

    }

    return collectedAnagrams;
    
}; 
console.log(getAnagrams(str)); 
console.log(getAnagrams(words)); 

//-------------------------------------- 2 ------------------------------------------- //


// const str = 'evil, restful, eleven plus two, state, live, the classroom, santa, vile, satan, fluster, taste, schoolmaster, twelve plus one, car, boat';
// const words = 'bag, gab, foo, abg, oof, bum, cat, dog, tac, god, act, cars, repaid, dues, nose, signed, lane, paired, arcs, grab, used, ones, brag, sued, lean, scar, design';

  
// const getAnagrams = (values) => {  
//     const sortedAnagrams = [];
//     let finalAnagrams = [];

//     const strToArr = values.split(", ")


//     strToArr.forEach(function(value) {        
//         const sortedArr = value.split("").sort().join("");

//         if (sortedAnagrams[sortedArr]) {
//             sortedAnagrams[sortedArr].push(value);
            
//         } else {
//             sortedAnagrams[sortedArr] = [value];
            
//         }
//     });
               
    
//     for (let keyArr in sortedAnagrams) {

//         if (sortedAnagrams[keyArr].length > 1){
//             finalAnagrams.push(sortedAnagrams[keyArr]);
//         }

//     }

//     return finalAnagrams;
// }

// console.log(getAnagrams(str));
// console.log(getAnagrams(words));


// -----------------------------------   --------------------------------------- //



