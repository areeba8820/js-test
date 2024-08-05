function findIndexOfItem(array, itemToFind) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === itemToFind) {
            return i; // Return the index if found
        }
    }
    // Return -1 if the item was not found
    return -1;
}

// Example usage
const myArray = ['apple', 'banana', 'cherry', 'date'];
const item = 'cherry';
const index = findIndexOfItem(myArray, item);

console.log(`The index of '${item}' is: ${index}`); // Output: The index of 'cherry' is: 2




function getMinValueAfterMapping(array, mapFunction) {
    const mappedArray = array.map(mapFunction);
    
    const minValue = Math.min(...mappedArray);
    
    return minValue;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const mappingFunction = x => x * x; 

const minValue = getMinValueAfterMapping(numbers, mappingFunction);

console.log('Minimum value after mapping:', minValue); // Output: 1 (since 1*1 = 1, and it's the smallest)




function isInRange(value1, value2) {
    const lowerBound = 50;
    const upperBound = 99;
    
    return (value1 >= lowerBound && value1 <= upperBound) ||
           (value2 >= lowerBound && value2 <= upperBound);
}

// Example usage
const result1 = isInRange(45, 70);  // Should return true (70 is in the range)
const result2 = isInRange(30, 40);  // Should return false (neither value is in the range)
const result3 = isInRange(55, 105); // Should return true (55 is in the range)

console.log('Result 1:', result1); 
console.log('Result 2:', result2); 
console.log('Result 3:', result3); 




function reverseArray(arr) {
    let reversedArray = []; 
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]); 
    }
    return reversedArray;
}

// Test with a small array
const smallArray = [1, 2, 3, 4, 5];
const reversedSmallArray = reverseArray(smallArray);

console.log('Reversed small array:', reversedSmallArray); // Output: [5, 4, 3, 2, 1]

// Test with a larger array
const largeArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const reversedLargeArray = reverseArray(largeArray);

console.log('Reversed large array:', reversedLargeArray);




function classifyAngle(angle) {
    if (angle < 0 || angle > 180) {
        return "Invalid angle"; 
    }

    if (angle === 90) {
        return "Right angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else {
        return "Invalid angle";
    }
}

// Example usage
const angle1 = 45;   // Acute angle
const angle2 = 90;   // Right angle
const angle3 = 120;  // Obtuse angle
const angle4 = 180;  // Straight angle
const angle5 = -10;  // Invalid angle
const angle6 = 200;  // Invalid angle

console.log(`Angle ${angle1} degrees is: ${classifyAngle(angle1)}`); 
console.log(`Angle ${angle2} degrees is: ${classifyAngle(angle2)}`); 
console.log(`Angle ${angle3} degrees is: ${classifyAngle(angle3)}`); 
console.log(`Angle ${angle4} degrees is: ${classifyAngle(angle4)}`); 
console.log(`Angle ${angle5} degrees is: ${classifyAngle(angle5)}`); 
console.log(`Angle ${angle6} degrees is: ${classifyAngle(angle6)}`); 


