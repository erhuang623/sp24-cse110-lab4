# Explore devtools-2

## 1. What was the bug?
The bug is that both variables num1 and num2 are strings, so it concatenates the strings into a new one. So e.g. '2' + '4' = '24'.

## 2. How did you fix it?
Call the Number function on both inputs num1 and num2 to convert them into numbers. Alternatively I could've changed it so it only accepts numbers.