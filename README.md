# Object-Destructuring
Object destructuring is a feature in Javascript that allows you to extract values from an object and assign them to variables. It is a concise and convenient way to access the properties of an object and is commonly used in modern Javascript development.

Let's start by looking at an example of an object in Javascript:

const person = {
  name: "John",
  age: 30,
  occupation: "Software Developer"
};

This object has three properties: "name", "age", and "occupation". To access the values of these properties, you can use the dot notation:

console.log(person.name); // Outputs "John"
console.log(person.age); // Outputs 30
console.log(person.occupation); // Outputs "Software Developer"

Object destructuring allows you to extract the values of these properties and assign them to variables in a single statement. Here is an example of object destructuring in action:
```
const { name, age, occupation } = person;
console.log(name); // Outputs "John"
console.log(age); // Outputs 30
console.log(occupation); // Outputs "Software Developer"
```

In this example, we use the destructuring syntax to extract the values of the "name", "age", and "occupation" properties and assign them to variables with the same name. We can then access these variables directly and use them in our code.

Object destructuring can also be used to assign different variable names to the properties of an object. For example:
```
const { name: fullName, age, occupation } = person;
console.log(fullName); // Outputs "John"
console.log(age); // Outputs 30
console.log(occupation); // Outputs "Software Developer"
```

In this example, we use the destructuring syntax to extract the value of the "name" property and assign it to a variable called "fullName". We can then access the value of the "name" property through the "fullName" variable.

Object destructuring can also be used to assign default values to variables if the corresponding property does not exist in the object. For example:

```
const { name, age, occupation, location = "New York" } = person;
console.log(name); // Outputs "John"
console.log(age); // Outputs 30
console.log(occupation); // Outputs "Software Developer"
console.log(location); // Outputs "New York"
```

In this example, we use the destructuring syntax to extract the values of the "name", "age", and "occupation" properties and assign them to variables with the same name. We also assign a default value of "New York" to the "location" variable if the "location" property does not exist in the "person" object.

Object destructuring is a powerful and convenient feature in Javascript that allows you to easily access and manipulate the properties of an object. I hope this video has given you a good understanding of how object destructuring works. **Happy Coding**

