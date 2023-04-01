function sevenBoom(arr) {
    arr = arr.map((item) => String(item))
    if (arr.some(item => item.includes('7'))) {
        return 'Boom'
    }
    return 'There is no 7'
}

console.log(sevenBoom([4, 45, 645, 567]));

function getTopNotes(arr) {
    for (let student of arr) {
        student.topNote = Math.max(...student.notes)
        delete student.notes
    }
    console.log(arr);
}

console.log(getTopNotes([
    {name: 'Veli', notes: [2, 3, 5]},
    {name: 'Ferid', notes: [4, 6, 9]},
    {name: 'Aslan', notes: [7, 10, 10]},
]));