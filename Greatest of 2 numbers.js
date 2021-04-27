var re = require('readline-sync')

var t1 = re.question("Enter number:")

var z2=re.question("Enter second number:")

if(t1>z2)
    console.log(t1 + " is larger than " + z2 )
else if(t1=z2)
    console.log(t1 + " and " + z2 + " are equal")
else
   console.log(z2 + " is greater")
    