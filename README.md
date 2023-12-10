# SUBSCRIBE CODE CHALLENGE
This repository contains the proposed solution to the problem stated on the given code challenge provided on this link https://gist.github.com/safplatform/792314da6b54346594432f30d5868f36.


## SELECTED TECHSTACK
From the requirements `Ruby` ans `Javascript` are the preferred languages, so, the solution will be implemented using `Javascript` using `node` version 20.10.0 as a running evironment and `npm` version 10.2.3 ans the package manager for the project.

Also, unit tests will be implemented using `Jest` as a testing library.

## GENERAL ASSUMPTIONS
- The input of the exercise will be a textfile.
- Each of the lines on the input file will be formatted as follows:

  ```[quantity] <imported> [description] at [price]```

  Where:

  - `quantity` is an integeger greater that 0.
  - The `imported` keyword is optional.
  - `description` should be a non empty string.
  - The `at` keyword must be present.
  - `price` is a number with 2 decimal places.

- Purchased items will be considered as `imported` if the keyword is present on the description literally.
- In order to identify items exempted from the 10% tax, an array of keywords is going to be provided. Those keywords are a set of possible terms related to food, medicine or books. An item will be considered exempted from this tax if one of the words on its description is present on the exempted keywords array.

## SUGGESTED ARCHITECTURE
A simple `PurchasedItem` class will be generated with its attributes:

- Quantity
- Description
- isExempt (determing if the item is exempted from the 10% tax)
- isImported
- Price
- Taxes

Other methods will be implemented with the following purpose (one per functionality):

- Read the contents of the file and separate them by line breaks.
- Parse the contents of 1 line and instantiate a `PurchasedItem`.
- Iterate a list of `PurchasedItem` and calculate the total of the purchase including taxes.