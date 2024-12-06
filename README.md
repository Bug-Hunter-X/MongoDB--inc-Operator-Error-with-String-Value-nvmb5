# MongoDB $inc Operator Error with String Value
This example demonstrates an incorrect usage of the MongoDB `$inc` operator, which results in an error because it attempts to increment a field with a string value instead of a numeric value.
The `$inc` operator is used to increment a numeric field by a specified value.  Attempting to increment with a string value will lead to a failure.

## Bug
The bug is in the `updateOne` function, where the `$inc` operator is misused. The value passed to `myField` is a string ('1') instead of a number (1).

## Solution
The solution involves passing a numerical value to the `$inc` operator, correctly incrementing the numeric field.