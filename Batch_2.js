// Question-1 program to search for a particular character in a string
let string = 'HEllO LetsUpgrade Community';
console.log(string.indexOf('Up'));

// Question-2 program to convert minute to seconds
let min = 3;
console.log(Math.floor(60) * min);

//  Question-3 program to search for a element in a string
let str = ['html','CSS','javascript','ajax'];
console.log(str[2]);

// Question-4 Program to display only elements containing 'a' in a array
let Str = ['a','s','c','w','a','w','a'];

var i;
for (i=0; i<=Str.length-1; i++)
{
  if (Str[i] == 'a'){
      console.log('a');
  }
};


// Question-5 program to display a arrar in reverse order

let ReverseStr = ['anand','prakash','gaurav','pushkar'];
for (var i=ReverseStr.length; i<=ReverseStr.length-1 && i==0; i--)
{
    console.log(ReverseStr['a']);
}
