
let cityName = "LosAngeles";
let matchedName = cityName.substring(0,2);
if(matchedName=="Los" || matchedName =="New"){
    console.log(`This function will return: ${cityName}`);
} else {
    console.log("The city name doesn't begin with Los or New.");
}//quiz 1 

console.log('.....................................................................')

let add=0;
let numbers =[5,12,21];
for(i=0; i<numbers.length; i++) {
add =add+numbers[i];
 
};
console.log(add);//quiz 2


console.log('.....................................................................')

 let name = "Mich Mach";
 let slicedName = name.split(' ');
 let reversedName = slicedName.reverse();
 console.log(`The reversed names are: ${reversedName}`);//quiz 3 reverse the output

 console.log('.....................................................................')

 let integer = 200;
 
 if(integer % 100==0) {
     console.log("True");
 } else {
     console.log("False");
 }//quiz 4; divisible by 100 

 console.log('.....................................................................')


 let adverbs = ["nice","accurate","intense"];
 for(i=0; i<adverbs.length; i++) {
 toAdverbs = adverbs[i];
 console.log(`${toAdverbs}ly`)
 }
  ;//quiz 5,  suffix added
  
 

 console.log('.....................................................................')

 let numb;
 for(let i=0; i<=10; i++) {
     if(i%2 ==0) {
         console.log(`Number ${i} is Even`);
     } else {
         console.log(`Number ${i} is Odd`);
     }
 };//quiz 6; even or odd

 console.log('.....................................................................')


let firstAngle = 152;
let secondAngle= 8;
let angle1 = 'Obtuse Angle';
let angle2 = 'Acute Angle';
let angle3 = 'Right Angle Triangle';

if(firstAngle >=27 && secondAngle <=5){
console.log(`This is ${angle1}`);}
else if (firstAngle >=135 && secondAngle<=11) {
    console.log(`This is ${angle2}`)
} else if(firstAngle==45 && secondAngle==45){
    console.log(`This is ${angle3}`);
}//quiz 7; triangle types 
/* not sure if I ve done it correctly considering the
fact that I was overwhelmed by all technical issues etc . */

console.log('.....................................................................')

 let names = ["maria","jane","jones"];
 for(i=0; i<names.length; i++) {
 toText = names[i];
 toCap = toText.substring(0,1).toUpperCase();
 toCut = toText.substring(1,5);
 console.log(`${toCap}${toCut}`);
 }//quiz 8, first letter capital
  
 console.log('.....................................................................')


 let sentence = ('The long march to nowhere');
 let setOfWords = sentence.split(' ');
 let numberOfWords = setOfWords.length;
 console.log(numberOfWords);//quiz 9, Numb of words.

console.log('.....................................................................')

 let value;
 for(let i=0; i<=5; i++) {
     value = (i*i); 
     console.log(`The result of ${i} * ${i} is : ${value}`);
 }//quiz 10; multiplyers







