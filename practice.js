let num1 = 10;
let num2 = 5;
let string1 = "Hello World";

let r1 = [1, 5, 9, "Day", "Night"];

console.log(string1);

function multiplyNumbers(num1, num2) {
    let value = num1*num2;
    return value;
}

let res = multiplyNumbers(34, 2);

console.log(res);

function divideNumbers(denominator, divider) {
    if ( divider == 0) {
        return null;
    }

    else {
        let div = denominator/divider;
        return div;
    }
}
console.log("Div=", divideNumbers(24, 0));

const users = [
  { id: "user1", fullName: "John Doe" },
  { id: "user2", fullName: "Jane Doe" }
];

const updatedUsers = removeFromArray(users, "user1");
console.log(updatedUsers);
