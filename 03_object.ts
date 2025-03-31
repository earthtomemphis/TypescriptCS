const dog = {
	name: 'Elton',
	breed: 'Australian Shepherd',
	age: 0.5,
};

function printName(person: { first: string; last: string }): void {
	console.log(`${person.first} ${person.last}`);
}

printName({ first: 'Thomas', last: 'jenkins' });

// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
// 	return { x: Math.random(), y: Math.random() };
// }

// printName({ first: 'Mick', last: 'Jagger', age: 473 });
const singer = { first: 'Mick', last: 'Jagger', age: 473, isAlive: true };
printName(singer);

type Point = {
	x: number;
	y: number;
};

let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
	return { x: Math.random(), y: Math.random() };
}

// function doublePoint(point: { x: number; y: number }): {
// 	x: number;
// 	y: number;
// } {
// 	return { x: point.x * 2, y: point.y * 2 };
// }

function doublePoint(point: Point): Point {
	return { x: point.x * 2, y: point.y * 2 };
}

type MyNum = number;
let age: MyNum = 24234;

const describePerson = (person: {
	name: string;
	age: number;
	parentNames: { mom: string; dad: string };
}) => {
	return `Person: ${person.name},
    Age: ${person.age},
    parents : ${person.parentNames.mom}, ${person.parentNames.dad}.`;
};

console.log(
	describePerson({
		name: 'Jim',
		age: 10,
		parentNames: { mom: 'Kim', dad: 'Steve' },
	})
);

type Song = {
	title: string;
	artist: string;
	numStreams: number;
	credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
	return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
	console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
	title: 'Unchained Melody',
	artist: 'Rightous Brothers',
	numStreams: 12873321,
	credits: {
		producer: 'Phil Spector',
		writer: 'Alex North',
	},
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

type User = {
	readonly id: number;
	username: string;
};

const user: User = {
	id: 12837,
	username: 'catgurl',
};

console.log(user.id);
// user.id = 238974;

type Circle = {
	radius: number;
};

type Colorful = {
	color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
	radius: 4,
	color: 'yellow',
};

type Cat = {
	numLives: number;
};

type Dog = {
	breed: string;
};

type CatDog = Cat &
	Dog & {
		age: number;
	};

const christy: CatDog = {
	numLives: 7,
	breed: 'Husky',
	age: 9,
};
