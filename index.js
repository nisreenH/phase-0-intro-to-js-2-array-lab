// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name){
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    let allCats = [...cats, name];
    return allCats
}

function prependCat(name){
    let allCats2 = [name,...cats];
    return allCats2
}

// function removeLastCat(){
//     let rmCat = cats.slice(-1);
//     return rmCat
// }

// function removeFirstCat(){
//     let rmcat2 = cats.slice(0,1);
//     return rmcat2
// }

function removeLastCat(){
    let me = cats.slice(0,cats.length-1)
    return me
 }

 function  removeFirstCat(){
    let rmcat2 = cats.slice(1)
    return rmcat2 
}