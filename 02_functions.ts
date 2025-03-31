function square(num: number): number {
	// num.toUpperCas();
	// num();
	return num * num;
}

// square('asd');
// square(true);

// function greet(person: string) {
// 	// person * person;
// 	return `Hi there, ${person}!`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet('Tonya Harding');
doSomething('ChickenFace', 76, false);

function greet(person: string = 'stranger'): string {
	// person * person;
	return `Hi there, ${person}!`;
}

greet();
greet('Tony');
// greet(234)

// function square(num: number): number {
// 	num * num;
// }

// square(2);

function rando(num: number) {
	if (Math.random() < 0.5) {
		return num.toString();
	}
	return num;
}

const add = (x: number, y: number): number => {
	return x + y;
};

const colors = ['red', 'orange', 'yellow'];
colors.map((color) => {
	return color.toUpperCase();
	// return color.toFixed()
});

function printTwice(msg: string): void {
	console.log(msg);
	console.log(msg);
	// return '';
}

function makeError(msg: string): never {
	// return undefined;
	throw new Error(msg);
}

function gameLoop(): never {
	while (true) {
		console.log('GAME LOOP RUNNING!');
	}
	// return true
}
