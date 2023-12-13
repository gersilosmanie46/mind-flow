/*
File: AdvancedDataManipulation.js

Description: This code performs advanced data manipulation tasks, including sorting, filtering, and aggregating large datasets.

Author: [Author Name]

Date: [Date]

*/

// Sample dataset
const dataset = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 25, country: 'USA' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 31, country: 'Canada' },
  // ... More dataset entries ...
  { id: 1000, firstName: 'Mark', lastName: 'Johnson', age: 45, country: 'Australia' }
];

// Sort the dataset by age in descending order
const sortedDataset = dataset.sort((a, b) => b.age - a.age);

// Filter out people below the age of 30
const filteredDataset = sortedDataset.filter(person => person.age >= 30);

// Group the filtered dataset by country and count the number of people in each country
const countryCounts = filteredDataset.reduce((acc, person) => {
  if (!acc[person.country]) {
    acc[person.country] = 1;
  } else {
    acc[person.country]++;
  }
  return acc;
}, {});

// Find the country with the highest number of people
const maxCount = Math.max(...Object.values(countryCounts));
const mostPopulatedCountries = Object.keys(countryCounts).filter(country => countryCounts[country] === maxCount);

// Output the result
console.log('Most populated countries:', mostPopulatedCountries.join(', '));
console.log('Number of people:', maxCount);

// Further data manipulation tasks...

// ...