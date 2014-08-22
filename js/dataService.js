angular.module("MyApp").service("dataService", function(){

	var listArray= ["1 bag of Finnegan's Wakeup"]

	this.getItem = function(){
		var str = localStorage.getItem("NameLS");
		listArray = JSON.parse(str) || listArray;
		return listArray;
	}

	this.addItem = function(pName) {
		listArray.push(pName);
		var str = JSON.stringify(listArray);
		localStorage.setItem("NameLS", str)
	}

	this.removeItem = function(pName){
		listArray.splice(listArray.indexOf(pName,1));
		var str = JSON.stringify(listArray);
		localStorage.setItem("NameLS", str)

	}


});