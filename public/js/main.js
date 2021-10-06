//  exo1

let multiplicateur = 5;
for(let i= 0; i<=9; i++){
    // console.log(multiplicateur+ "x"+ i+ "="+(multiplicateur*i));
    // ou
    console.log(`${multiplicateur} x ${i} = ${multiplicateur*i}`);
}



// exo2

let multiplicateur = 5;
for (let i = 0; i <=9; i+=2) {
    console.log(`${multiplicateur} x ${i} = ${multiplicateur*i}`);
    
    
}

// exo3

for(let index = 20; index >= 0; index-=2){
    if (index%2 == 0) {
        console.log(`numero paire : ${index}`);
        
    }
}

// exo4

let tab = ["ayahn","wassime", "heredia","jonathan","philippe", "lui", "ilya","vit","genc"];
let longPrenoms = [];
let petitPrenoms = [];
tab.forEach(element => {
    if (element.length >= 5) {
        longPrenoms.push(element);
        
    }
    else{
        petitPrenoms.push(element);
    }
});
console.log(longPrenoms);
console.log(petitPrenoms);

// exo5

let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
let grosseSommes = [];
let petiteSommes = [];
sommes.forEach(element => {
    if (element > 60) {
        grosseSommes.push(element);
        
        
    }
    else{
        petiteSommes.push(element);
       
    }
});
console.log(grosseSommes);
console.log(petiteSommes);

// exo6

let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];
donnees.forEach((el,i) => {
    if (typeof el == 'string') {
        console.log(`${typeof el} = ${el}\n position -> ${i}`);
        typeString.push(el);
        
    }
    else if (typeof el =='number') {
        console.log(`${typeof el} = ${el}\n position -> ${i}`);
        typeNumber.push(el);

        
    }
    else if (typeof el == 'object') {
        console.log(`${typeof el} = ${el}\n position -> ${i}`);
        typeObject.push(el);
        
    }
    else{
        console.log(`${typeof el} = ${el}\n position -> ${i}`);
        typeAutre.push(el);
    }
    
});
console.log(typeString);
console.log(typeNumber);
console.log(typeObject);
console.log(typeAutre);
console.log(donnees);