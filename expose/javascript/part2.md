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
This code returns the array will all the prices discounted at 50%. This is becuase the scope of discounted and final price is define at beginning outside the for loop. The for loop simply calculates the discounted value and adds it to the array(queue?). 

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

## Question 13: 