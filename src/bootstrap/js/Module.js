// This module is a unique global name Module
var Module = {};

//Bascet - collection of pizza (countOfComponents)
Module.bascet = new Array(); 

Module.components = {
	Cheese:{
		name:"Cheese",
		nameUA:"Сир",
		prise:12,
		calories:203,
		group:"meat"
	},
	Chicken:{
		name:"Chicken",
		nameUA:"Курка",
		prise:15,
		calories:233,
		group:"meat"
	},
	Peperoni:{
		name:"Peperoni",
		nameUA:"Пепероні",
		prise:15,
		calories:223,
		group:"meat"
	},
	Bekon:{
		name:"Bekon",
		nameUA:"Бекон",
		prise:18,
		calories:243,
		group:"meat"
	},
	Bavar:{
		name:"Bavar",
		nameUA:"Сосиски",
		prise:19,
		calories:135,
		group:"meat"
	},
	Ananas:{
		name:"Ananas",
		nameUA:"Ананас",
		prise:10,
		calories:100,
		group:"vegetable"
	},
	Salat:{
		name:"Salat",
		nameUA:"Салат",
		prise:15,
		calories:321,
		group:"vegetable"
	},
	Tomato:{
		name:"Tomato",
		nameUA:"Помідори",
		prise:20,
		calories:212,
		group:"vegetable"
	},
	Feta:{
		name:"Feta",
		nameUA:"Фета",
		prise:20,
		calories:312,
		group:"meat"
	},
	Mocarella:{
		name:"Mocarella",
		nameUA:"Моцарелла",
		prise:20,
		calories:242,
		group:"meat"
	},
	Donablu:{
		name:"Donablu",
		nameUA:"Данаблю",
		prise:20,
		calories:434,
		group:"meat"
	},
	Parmezan:{
		name:"Parmezan",
		nameUA:"Пармезан",
		prise:20,
		calories:333,
		group:"meat"
	},
	Cheder:{
		name:"Cheder",
		nameUA:"Чедер",
		prise:18,
		calories:432,
		group:"meat"
	},
	Tunny:{
		name:"Tunny",
		nameUA:"Тунець",
		prise:20,
		calories:350,
		group:"meat"
	},
	Ham:{
		name:"Ham",
		nameUA:"Шинка",
		prise:20,
		calories:412,
		group:"meat"
	},
	Pepper:{
		name:"Pepper",
		nameUA:"Перець",
		prise:13,
		calories:131,
		group:"vegetable"
	},
	Olives:{
		name:"Olives",
		nameUA:"Оливки",
		prise:8,
		calories:46,
		group:"vegetable"
	},
	Cucumber:{
		name:"Cucumber",
		nameUA:"Огірки",
		prise:15,
		calories:101,
		group:"vegetable"
	},
	Corn:{
		name:"Corn",
		nameUA:"Кукурудза",
		prise:16,
		calories:178,
		group:"vegetable"
	},
	Onion:{
		name:"Onion",
		nameUA:"Цибуля",
		prise:8,
		calories:92,
		group:"vegetable"
	}
};
Module.pizzaSize={
	Small:{
		prise: 20,
		calorise: 356,
		size: "small",
		sizeUA: "Маленька",
		diameter: 30
	},
	Middle:{
		prise: 30,
		calorise: 556,
		size: "middle",
		sizeUA: "Середня",
		diameter: 40
	},
	Large:{
		prise: 38,
		calorise:812,
		size: "large",
		sizeUA: "Велика",
		diameter: 56
	}
}
// Save prise of pizza base/name of components in pizza
Module.tmpPizza = {
	Cheese:{
		count:0
	},
	Chicken:{
		count:0
	},
	Peperoni:{
		count:0
	},
	Bekon:{
		count:0
	},
	Bavar:{
		count:0
	},
	Ananas:{
		count:0
	},
	Salat:{
		count:0
	},
	Tomato:{
		count:0
	},
	Feta:{
		count:0
	},
	Mocarella:{
		count:0
	},
	Donablu:{
		count:0
	},
	Parmezan:{
		count:0
	},
	Cheder:{
		count:0
	},
	Tunny:{
		count:0
	},
	Ham:{
		count:0
	},
	Pepper:{
		count:0
	},
	Olives:{
		count:0
	},
	Cucumber:{
		count:0
	},
	Corn:{
		count:0
	},
	Onion:{
		count:0
	}
};

Module.radioForSize = document.querySelector("input[name='size']:checked")
	.value;
Module.objBascet = document.getElementById("Bascet");
Module.idCountOfComponents = document.getElementById("countOfComponents");
Module.idVegetableCounter = document.getElementById("VegetablesCounter");
Module.idMeatCounter = document.getElementById("MeatCounter");
Module.idDifferenceOfComponents = document
	.getElementById("differenceOfComponents");
Module.tmpPizza.Base = Module.pizzaSize[Module.radioForSize];
Module.objCurrentPizza = document.getElementById("CurrentPizza");
Module.maxCount = 10;
Module.countOfComponents = 0;
//count of meat's components
Module.meat = 0;
//count of vegetable's components
Module.vegetable = 0;

Module.generateCurrentPizza = function(){
	Module.objCurrentPizza.innerHTML = '<div class="panel-heading">' 
		+ Module.tmpPizza.Base.sizeUA + ' - ' + Module.tmpPizza.Base.prise
		+ 'грн - ' + Module.tmpPizza.Base.calorise + ' кКал '
		+ '<button class="close" id="ClearCurrentPizza">X</button>'
		+ '</div><table class="table table-striped" \
		id="TableForCurrentPizza"></table>';
	var table = document.getElementById('TableForCurrentPizza');
	var calorise = Module.tmpPizza.Base.calorise; 
	var prise = Module.tmpPizza.Base.prise;
	var comp = 0;
	for ( var component in Module.components){
		if(Module.tmpPizza[component].count===0) continue;
		calorise += Module.components[component].calories
			*Module.tmpPizza[component].count;
		prise += Module.components[component].prise
			*Module.tmpPizza[component].count;
		comp += Module.tmpPizza[component].count;
		table.innerHTML 
			+= "<tr><td>" + Module.components[component].nameUA
			+ "</td><td>" + Module.components[component].prise 
			+ " грн</td><td>" + Module.components[component].calories 
			+ " KKaл</td><td>"	+ "<img src =\" img/" 
			+ Module.components[component].name + ".jpg\"/> </td><td> "
			+ "x " + Module.tmpPizza[component].count + " шт.</td></tr>"; 
	}
	table.innerHTML += "<tr><td> Сумарна кількість</td><td> " + prise 
		+ " грн. </td><td> " + calorise + " ККал </td><td></td><td> " 
		+ comp + " шт.</td><tr> ";
	document.getElementById("ClearCurrentPizza")
		.addEventListener("click", Module.clearCurrentPizza, false);

};
Module.clearCurrentPizza= function (){
	document.getElementById("CurrentPizza").innerHTML = "";

};
Module.clearBascet = function (){
	document.getElementById("Bascet").innerHTML = "";
	document.getElementById("Bill").innerHTML = ""
	Module.bascet = new Array();
};

Module.increaseComponents = function (e){
	var componentBlock = e.target.closest("div[id]");
	var textInCountOfComponent = componentBlock
		.getElementsByTagName("span")[0];
	var countOfComponent = parseInt(textInCountOfComponent.innerHTML);
	if (Module.countOfComponents >= Module.maxCount) {
		alert("Вибачте, можна додати максимум 10 компонентів");		
		return false;
	};
	//Count of this component
	countOfComponent++;
	//Output to tmpPizza
	Module.tmpPizza[e.target.closest("div[id]").id].count += 1;
	//Count of ALL components
	Module.countOfComponents++;
	//Output to web page count of component
	textInCountOfComponent.innerHTML = countOfComponent;
	//Output to web page count of ALL components and difference
	Module.idCountOfComponents.innerHTML = Module.countOfComponents;
	Module.idDifferenceOfComponents.innerHTML = Module.maxCount 
		- Module.countOfComponents;
	//Meat counter
	Module.idMeatCounter.innerHTML = (function(){
		if (Module.components[e.target.closest("div[id]").id].group=="meat"){
			Module.meat ++;
		}
		return Module.meat;
	})();
	//Vegetable counter
	Module.idVegetableCounter.innerHTML = (function(){
		Module.vegetable = Module.countOfComponents - Module.meat;
		return Module.vegetable;
	})();
	Module.generateCurrentPizza();
}

Module.decreaseComponents = function (e){
	var componentBlock = e.target.closest("div[id]");
	var textInCountOfComponent = componentBlock
		.getElementsByTagName("span")[0];
	var countOfComponent = parseInt(textInCountOfComponent.innerHTML);
	if (countOfComponent == 0){
		return false; 
	};
	//Count of this component
	countOfComponent--;
	//Output to tmpPizza
	Module.tmpPizza[e.target.closest("div[id]").id].count -= 1;
	//Count of ALL components
	Module.countOfComponents--;
	//Output to web page count of component
	textInCountOfComponent.innerHTML = countOfComponent;
	//Output to web page count of ALL components and difference
	Module.idCountOfComponents.innerHTML = Module.countOfComponents;
	Module.idDifferenceOfComponents.innerHTML
		= Module.maxCount - Module.countOfComponents;
	//Meat counter
	Module.idMeatCounter.innerHTML = (function(){
		if (Module.components[e.target.closest("div[id]").id].group=="meat"){
			Module.meat --;
		}
		return Module.meat;
	})();
	//Vegetable counter
	Module.idVegetableCounter.innerHTML = (function(){
		Module.vegetable = Module.countOfComponents - Module.meat;
		return Module.vegetable;
	})();
	Module.generateCurrentPizza();
}

Module.changeSize = function (e){
	Module.tmpPizza.Base = Module.pizzaSize[document
		.querySelector("input[name='size']:checked").value]//.size;
	Module.generateCurrentPizza();
}

Module.generateBascet = function() {
	Module.objBascet.innerHTML = "";
	Module.allPrise = 0;
	Module.allCalorise = 0;	

	for (var j in Module.bascet){
		var myId = "TableForBascet"+j,
			calorise = Module.bascet[j].Base.calorise,
			prise = Module.bascet[j].Base.prise,
			comp = 0;
			
		Module.objBascet.innerHTML += '<div class="panel-heading">' 
			+ Module.bascet[j].Base.sizeUA + ' - ' + prise + ' грн - ' 
			+ calorise + ' кКал '
			+ '<button class="close" id=\"' + j + '\">X</button>'
			+ "</div><table class='table table-striped' id=\"" + myId + "\"> \
			</table>";

		var table = document.getElementById(myId);

		for(var i in Module.components){
			if(Module.bascet[j][i].count === 0) continue;
			table.innerHTML +=  "<tr><td>" + Module.components[i].nameUA 
				+ "</td><td>" + Module.components[i].prise + " грн </td><td> " 
				+ Module.components[i].calories + " кКал </td><td> " 
				+ "<img src =\" img/" + Module.components[i].name + ".jpg\"/>\
				</td><td> " + Module.bascet[j][i].count + "шт </td></tr>";
			comp += Module.bascet[j][i].count;
			prise += Module.components[i].prise*comp;
			calorise += Module.components[i].calories*comp;
			
		};
		table.innerHTML += "<tr><td> Сумарна кількість:</td><td> " + prise 
			+ " грн. </td><td> " + calorise + " ККал </td><td></td><td> " 
			+ comp + " шт.</td><tr> ";
		Module.allPrise += prise;
		Module.allCalorise += calorise;	
	};
	document.getElementById("Bill").innerHTML = "Вартість замовлення: " 
		+ Module.allPrise + " грн. Сумарно калорій: " + Module.allCalorise;
};

Module.inBascet = function (){
	// easy http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object (awesome)
	// but not perfect http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
	var newObject = JSON.parse(JSON.stringify(Module.tmpPizza));
	//clear array tmpPizza and in memory and in DOC
	var classBadge = document.querySelectorAll(".badge");
	for (var i in classBadge){
		classBadge[i].innerHTML = 0;
	};
	
	for (var i in Module.tmpPizza){
		Module.tmpPizza[i].count = 0;
		
	};
	Module.countOfComponents = 0;
	Module.meat = 0;
	Module.vegetable = 0;
	Module.clearCurrentPizza();
	Module.generateCurrentPizza();
	Module.bascet.push(newObject);
	Module.generateBascet();
};
Module.final = function (){
	alert("final");
};

//add event listener for change SIZE
Module.choosePizza = document.querySelectorAll("input[name='size']");
for(var i = 0; i<Module.choosePizza.length; i++){
	Module.choosePizza[i].addEventListener("change", Module.changeSize, false);
};
//add in BASCET
document.getElementById("inBascet")
	.addEventListener("click", Module.inBascet, false);

// delete
document.getElementById("ClearBascet")
	.addEventListener("click", Module.clearBascet, false);

// Prises and energy from array to document to DOC
(function(){
	for(var id in Module.components){
		var componentBlock = document.getElementById(id);
			
			componentBlock
				.getElementsByClassName("valueOf")[0]
				.innerHTML = Module.components[id].prise + ' грн ' + ' - ' 
					+ Module.components[id].calories + ' Ккал ';

			componentBlock
				.getElementsByClassName("increaseComponents")[0]
				.addEventListener("click", Module.increaseComponents, false);
			componentBlock
				.getElementsByClassName("decreaseComponents")[0]
				.addEventListener("click", Module.decreaseComponents, false);
	}
	var ParamOfBases = document.getElementsByClassName("ParamOfBases");
	for(var base in Module.pizzaSize){
		var componentBlock = document.getElementById(base).parentNode;

			componentBlock
				.getElementsByClassName("ParamOfBases")[0]
				.innerHTML = Module.pizzaSize[base].prise + " грн - "
					+ Module.pizzaSize[base].calorise + " кКал - "
					+ Module.pizzaSize[base].diameter + " см";
	}
	Module.generateCurrentPizza();
})();
