const obj1 = {
    "firstName": "Laksitha",
    "lastName": "Mani",
    "age": 20
};

// Using Object.entries() to loop through key-value pairs
Object.entries(obj1).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
