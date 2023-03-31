export async function people() {
	try{
		const arraySW=[];
		const random = Math.random() * (1-10) + 1;
		for (let index = 1; index < random; index++) {
			const starwars = await fetch('https://swapi.dev/api/people/' + index).then((res) => {res.json()});
			arraySW.push(starwars);
		}
		return arraySW;
	} catch (error) {
		console.log(error);
	}
}