// Splice : menghapus dan menambahkan data

var things = ['a', 'b', 'c', 'd']

// mulai dari index 1, menghapus 2 data yang dimulai dari index
// array.splice(index, amount)
things.splice(1, 2)
console.table(things);

things.splice(1, 2, "abc", 1998)
console.table(things);