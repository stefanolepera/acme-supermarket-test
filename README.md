# ACME Supermarket - Stefano Le Pera

To test the provided solution please run `npm i && npm run test`, full coverage is provided as well.

## Implementation

In order to solve the problem I created a `Basket.js` class which implements the provided interface along with some data and utility classes.
The `Basket.js` class has a simple implementation, while all the business logic has been delegated to the `discountRules.js` class: if any of that logic will change in the future, `Basket.js` won't be affected.
Both the data classes don't contain any logic and, in a real world application, can become external JSON files that a stakeholder / non technical person can edit.
`discountRules.js` implements a single function for each discount type and is in charge to provide the total amount through the function `getPricesAfterDiscount`. This function was build with scalability in mind, in case in the future the amount of discount types will increase.
To prove the above concept I created some mocks for an additional discount type (the first product of a certain type is free, regardless of the total number purchased) and product (bananas) and test those results as well.
