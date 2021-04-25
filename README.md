# calculate-total-price
This is a JavaScript library to calculate the total price of an order. This library accepts 3 inputs as number of items, unit price and province code. the total price calculated by calculate the total cost and deduct discount based on the quantity and add sales tax based on the province code 

## Installation
Please follow the structure below to Install dependencies
```bash
npm install 
```
## Dependencies
jest is the only dependency package used in this package for unit testing. You can download by using below command in your project.
```bash
npm install --save-dev jest
```

## Usage
Install package 
```bash
npm i calculate-total-price
```
Use package 
```bash
const {calculateTotalPrice} = require('calculate-total-price');
```

calculateTotalPrice() \
Takes 3 arguments:
- number of items
- price per item
- 2-letter province code (string) 

The total price is calculated by:

- calculate the total cost for the items
- deduct discount based on the quantity
- add sales tax based on the province/state code

## Run Tests
Run command below to run all unit tests
```bash
npm test
```

## Discount table
| Order Value | Discount Rate |
| ----------- | ------------: |
| $1,000      |            3% |
| $5,000      |            5% |
| $7,000      |            7% |
| $10,000     |           10% |

## Provinces table
| Province | Tax Rate |
| -------- | -------: |
| AB       |       5% |
| ON       |      13% |
| QC       |  14.975% |
| MI       |       6% |
| DE       |       0% |


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
