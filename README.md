# JAVA Script

### Java Script Content

##### Start JS in command Line
```
node
```

#### variable Write

```
var number=10;          //assigning 10 to number
var first_name='Sunny'  //Assigning Sunny to first_name
var last_name='Prime'
var name=first_name+last_name   //Merging two names
var num1=10
var num2=20
var num3=num1+num2;           //Adding of numbers

name                          // Output:-'SunnyPrime'
num3                          // Output:- 30

typeof(name)                 // OUTPUT:- 'string'
typeof(num3)                 // OUTPUT:- 'number'   

a=true
typof(a)                    // OP:-'boolean'
```
#### Output

```
console.log("INDIA")      //  OP:- INDIA

alert("Welcome to my bank");

var deposit = prompt("How much would you like to deposit today");

alert("You have deposited : "+deposit);

console.log("You are a cool person");

```



#### CONDITION

```
if(condition)
{
  statement 1
}
else if
{
  statement 2
}
else
{
  statement 3
}
```
Example
```
var ham =0;
var cheese = 0;
var report ="blank";

if (ham >= 10 && cheese >= 10) {
    report = "Strong sales of both ham and cheese!"
}else if (ham===0 && cheese=== 0) {
  report = "Nothing Sold!"

}else {
  report = "We had some sales of items"
}
console.log(report);
```
Output
```
Nothing Sold!
```

#### LOOP

##### For LOOP
```
var word = "ABCDEFGHIJKL"

for (var i = 0; i < word.length; i++) {
  console.log(word[i]);
}
```
output
```
A
B
C
D
E
F
G
H
I
J
K
L
```
##### While LOOP

```
var i = 0;
while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}
```
Output
```
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
```
#### Array
```
> var myArr=[]                      #  undefined
> myArr                             #   []
> myArr=[1,2,3,true,'John']         #[ 1, 2, 3, true, 'John' ]
> myArr                             #[ 1, 2, 3, true, 'John' ]
> myArr.push(5)                     #6
> myArr                             #[ 1, 2, 3, true, 'John', 5 ]
> myArr.pop()                       #5
> myArr                             #[ 1, 2, 3, true, 'John' ]
> myArr.length                      #5
> myArr.shift()                     #1
> myArr                             #[ 2, 3, true, 'John' ]
> myArr.slice(2)                    #[ true, 'John' ]
> myArr                             #[ 2, 3, true, 'John' ]
> myArr.slice(1,3)                  #[ 3, true ]
> myArr                             #[ 2, 3, true, 'John' ]
> myArr.slice(1,4)                  #[ 3, true, 'John' ]
```


