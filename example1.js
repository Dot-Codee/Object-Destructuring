const person = {
    name: "John",
    age: 30,
    occupation: "Software Developer",
    location: "Boston",
    license: {
        name: "MIT",
    }
};

const { name: fullName, age, occupation, location = "New York", license: { name } } =  person;

console.log(fullName, age, occupation, location, name);