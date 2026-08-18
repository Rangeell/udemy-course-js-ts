let users = [
    { id: 'john', name: 'John Smith', age: 20 },
    { id: 'ann', name: 'Ann Smith', age: 24 },
    { id: 'pete', name: 'Pete Peterson', age: 31 },
];

const groupById = (arr) => {
    return arr.reduce((acc, v) => {
        acc[v.id] = v;

        return acc;
    }, {})
}

let usersById = groupById(users);
console.log(usersById);

/*
after the call we should have:

usersById = {
  john: { id: 'john', name: 'John Smith', age: 20 },
  ann: { id: 'ann', name: 'Ann Smith', age: 24 },
  pete: { id: 'pete', name: 'Pete Peterson', age: 31 }
}
*/