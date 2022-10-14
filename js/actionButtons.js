
let section = document.getElementsByClassName("actionsButtons")[0]

async function playRound(character, monster) {
	displayButton(character);
	monster.attack(character);
	windowInfo.innerHTML = monster.display();
	await attack(character, monster);
}

function displayButton(character) {
	let moovs = character.actions
	section.innerHTML = "";
	moovs.forEach(moov =>{
		let button = document.createElement("button")
		button.classList.add("btn");
		button.classList.add("btn-primary");
		button.id = moov.name;
		button.innerHTML = moov.name;
		section.appendChild(button);
	})
}
function attack(character, monster) {
	let actionsBtn = document.querySelectorAll(".actionsButtons button")
	let moovs = character.actions
	let move
	actionsBtn.forEach( action =>{
		action.addEventListener("click", (e)=>{
			move = e.target.id
			let spell = moovs.find(movement => movement.name = action)
			character.attack(monster, spell);
			windowInfo.innerHTML = monster.display();
			playRound(character, monster);
		})
	})

}

playRound(character, monster)

