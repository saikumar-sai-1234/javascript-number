var numOne = 3
var numTwo = 3

console.log(numOne == numTwo)      // true

var js = 'JavaScript'
var py = 'Python'

console.log(js == py)             //false 

var lightOn = true
var lightOff = false

console.log(lightOn == lightOff) // false


var nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]

var nums = [1, 2, 3]
var numbers = [1, 2, 3]

console.log(nums == numbers)  // false

var userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

var userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
console.log(userOne == userTwo) // false


var num=10;
console.log(typeof num);

var user="Saikumar";
console.log(user);


var firstname="Sai";
var Lastname="Kumar";
var user= firstname + " " + Lastname; 
console.log(user);

var user='sai kumar "kolichelimi"';
console.log(user);

var user="sai\nkumar";
console.log(user);

var user="sa\baikumar";
console.log(user);



var bool=5>6;
console.log(bool);

var bool=5<6;
console.log(typeof bool);

var user=null;
console.log(user);

var user=null;
console.log(typeof user);