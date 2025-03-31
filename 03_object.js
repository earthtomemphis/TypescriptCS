var dog = {
    name: 'Elton',
    breed: 'Australian Shepherd',
    age: 0.5,
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: 'Thomas', last: 'jenkins' });
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };
// function randomCoordinate(): { x: number; y: number } {
// 	return { x: Math.random(), y: Math.random() };
// }
// printName({ first: 'Mick', last: 'Jagger', age: 473 });
var singer = { first: 'Mick', last: 'Jagger', age: 473, isAlive: true };
printName(singer);
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// function doublePoint(point: { x: number; y: number }): {
// 	x: number;
// 	y: number;
// } {
// 	return { x: point.x * 2, y: point.y * 2 };
// }
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 24234;
var describePerson = function (person) {
    return "Person: ".concat(person.name, ",\n    Age: ").concat(person.age, ",\n    parents : ").concat(person.parentNames.mom, ", ").concat(person.parentNames.dad, ".");
};
console.log(describePerson({
    name: 'Jim',
    age: 10,
    parentNames: { mom: 'Kim', dad: 'Steve' },
}));
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: 'Unchained Melody',
    artist: 'Rightous Brothers',
    numStreams: 12873321,
    credits: {
        producer: 'Phil Spector',
        writer: 'Alex North',
    },
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
