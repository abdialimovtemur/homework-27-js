//104. Berilgan ob'ekt ichidagi barcha qiymatlar yig'indisini toping (faqat son qiymatlarni).

function sumObjectValues(obj) {
    let arr = [{ value: obj, step: 1 }]
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (let key in value) {
            if (typeof value[key] === 'object' && !Array.isArray(value[key]) && value[key] !== null) {
                arr.push({ value: value[key], step: step + 1 })
            } else {
                result += value[key]
            }
        }
    }
    return result
}


// Test case
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
console.log(sumObjectValues(obj));
// Output: 6


// 105. Berilgan massiv ichidagi elementlarni n qadamga chapga siljiting.

function rotateArrayLeft(arr, n) {
    const length = arr.length
    n = n % length;
    return arr.slice(n).concat(arr.slice(0, n));
}
// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));
// Output: [3, 4, 5, 1, 2]

// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));
// Output: [3, 4, 5, 1, 2]




// 106. Berilgan satr ichidagi barcha raqamlarni olib tashlang.

function removeDigits(str) {
    return str.split('').filter(element => isNaN(element) || element === ' ').join('')
}

// console.log(removeDigits("abc123def456")); 
// Output: "abcdef"





// 107. Berilgan massivdan faqat toq indekslaridagi elementlarni qaytaring.

function oddIndexedElements(arr = []) {
    return arr.filter((element, index) => index % 2 == !0)
}
// console.log(oddIndexedElements([1, 2, 3, 4, 5, 6]));
// Output: [2, 4, 6]



// 108. Berilgan ob'ekt ichidagi barcha son qiymatlarni ikki baravar oshiring.

function doubleNumericValues(obj) {
    let newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'number') {
                newObj[key] = obj[key] * 2;
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                newObj[key] = doubleNumericValues(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}

// Test case
const Obj_4 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
// console.log(doubleNumericValues(Obj_4));
// Output: { a: 2, b: { c: 4, d: { e: 6 } } }



// 109. Berilgan ob'ekt ichidagi kalit-qiymat juftliklarini arrayga aylantiring.

function objectToArray(obj1) {
    return Object.entries(obj1);
}


const obj1 = {
    a: 1,
    b: 2,
    c: 3
};
// console.log(objectToArray(obj1));
// Output: [["a", 1], ["b", 2], ["c", 3]]



// 110. Berilgan ob'ekt ichidagi barcha kalitlarni ularning qiymati bo'yicha tartiblang.

function sortKeysByValue(obj2) {
    const entries = Object.entries(obj2);

    entries.sort((a, b) => a[1] - b[1]);

    return Object.fromEntries(entries);
}

// Test case
const obj2 = {
    a: 3,
    b: 1,
    c: 2
};
// console.log(sortKeysByValue(obj2));
// Output: { b: 1, c: 2, a: 3 }
