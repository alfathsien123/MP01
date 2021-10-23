// push : menambahkan value pada index terakhir
// pop : menghapus value pada index terakhir

var things = ['book', 'pen', 'clock']

things.push('jacket')
things.push('apple', 3, true)

console.table(things);

things.pop()
things.pop()

console.table(things);


// unshift : menambah value pada index pertama
// shift : menghapus value pada index pertama

console.table(things);
things.unshift('a')
things.unshift('bb', 'cc')
things.unshift('ddd', true, 3)

console.table(things);

things.shift()
things.shift()

console.table(things);