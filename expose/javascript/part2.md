# Expose Part 2

## Question 1: What will happen at line 12 and why?
At line 12 console.log(i) will output the length of the array prices. Since "i" is a var, it is globally scoped and not just defined in the for loop. Therefore i=3 because there are three elements in prices.

## Question 2: What will happen at line 13 and why?
At line 13, the console will output "150" because discount price is a var, so it is globablly scoped. In the loop i goes to the last element in prices which is 300. Then the discount is .5 so 1-.5 = .5 or 50% off. So it takes 300 * .5 = 150 and outputs it.

## Question 3: What will happen at line 14 and why?
It would still output 150 because it took the discountedPrice which is 150 then multiplied it by 100 and rounded it to get an integer value. Then divided it so 15000 / 100 = 150. So the final price outputed by the console is 150.

## Question 4: What will this function return? Give a brief explanation why. If the code causes an error, explain why.
This function returns an array where each price of the original array "prices" is 50%. This is because this function created a global array then looped through each element in prices and applied a discount of 50% where it rounded to the nearest integer. Then it added it to the new array in the order it looped.

## Question 5: What will happen at line 12 and why? 
It outputs an error because "i" is not defined in this scope. It is only defined in the for loop.

## Question 6: What will happen at line 13 and why? 
It also outputs an error because discountedPrice is only defined in the for loop. 

## Question 7: What will happen at line 14 and why? 
It will output 150 because finalPrice was defined outside the scope of the for loop. It was assigned a value of 150 in the loop which is allowed because it is a "let" variable.

## Question 8: What will this function return? Give a brief explanation. If the code causes an error, why?
This code returns the array will all the prices discounted at 50%. This is becuase the scope of discounted and final price is define at beginning outside the for loop. The for loop simply calculates the discounted value and adds it to the array. 

## Question 9: What will happen at line 11 and why?
The console outputs an error because "i" is only defined in the scope of the for loop.

## Question 10: What will happen at line 12 and why?
The console outputs three because the passed in array has 3 elements.

## Question 11: What will happen at line 12 and why?
The function returns the array with the prices in half. This is because even though the "discounted" variable is a const, we aren't reassigning the variable. 

## Question 12: Given the above Object, write the notation for:  (These should be in your part2.md)
- Accessing the value of the name property in the student object
    - alert(student.name);

- Accessing the value of the Grad Year property in the student object
  - alert(student['Grad Year']);

- Calling the function for the greeting property in the student object
  - student.greeting();

- Accessing the name property of the object in the Favorite Teacher property in student
  - student['Favorite Teacher'].name

- Access index zero in the array of the courseLoad property of the student object
  - student.courseLoad[0];

## Question 13: Arithmetic
- A. '3' + 2 
  - The output is '32' because 3 is an integer so it concatenates 2 as a string, and integers map to their exact string representation

- B. '3' - 2
  - the output is 1 because you can't subtract a string, so it converts 3 into an integer so 3-2 = 1 
- C. 3 + null
  - Output is 3 because in addition, we treat null as 0
- D. '3' + null
  - It converts null to a string and concatenates it so it outputs 3null
- E. true + 3
  - It outputs 4 because true can be represented in numbers as 1. e.g binary. so 1 + 3 = 4
- F. false + null
  - False is equivalent to 0 and null is also zero so 0 + 0 = 0
- G. '3' + undefined
  - Outputs '3undefined' because using + on a string will convert undefined to a string and concatenate it to the string '3'
- H. '3' - undefined
  - It outputs NaN because it tries to convert 3 to a number but since undefined doesn't have a numeric value, it results in NaN(Not a Number)

## Question 14: Comparison
- '2' > 1
  - This outputs true because > converts the string 2 into a number then compares the two, which is true because 2 > 1.
- '2' < '12'
  - Outputs false because when comparing both strings, it compares the unicode of the character and 2 is after 1 in unicode. 
- 2 == '2'
  - Outputs true because the string is converted into a number then compared and 2 is equal to 2.
- 2 === '2'
  - Outputs false because === checks for strubg equality and doesn't convert the types of either variable. Since one is a number and one is a string they are not equal
- true == 2
  - This outputs false because true is converted into a number, which is 1 and 1 is not equal to 2.
- true === Boolean(2)
  - Outputs true because Boolean(2) is converted into ture. Other numbers are true while 0, -0, and Nan are false. So true === true returns true because both types are strictly booleans and true.

## Question 15: Explain the difference between == and === operators.
The == is a 'loose' or regular equality check. This means that even though operands have different types, they are converted to numbers. The === operator is a strict equality check. This means that if either operand are different types, it returns false without any conversion. 

## Question 17: If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result?  

The result is the array [2,4,6]. The initial array passed in is [1,2,3] and the callback function simply doubles the number passed in. In the modifyArray function, a new array is created then for the length of the original array, it takes the value of the array and passes it through the callback function and adds it to the array. Since the function is to double the numbers, it would double 1 to 2 and push it to newArr. It does this for the length of the original array.

## Question 19: What is the output of the above code?
It outputs numbers in the order 1,4,3,2 in the console. This is because 1 and 4 are immediate calls. Then it outputs 3 and 2. 2 has a set delay of 1 second, so it prints after a second has passed. 3 prints before because it has no delay. However 3 is after 4 because the defined value is 0. So even though there is no delay time, 0 defines it as after the next event cycle. So it waits for the rest to finish running first.