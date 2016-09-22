var addButton= document.getElementById("addButton");
var place = document.getElementById("placeholder");
var container = document.getElementById("container");
var myArray = new Array() 
var list = document.getElementById("list");
function addNew(){
	var li = document.createElement("li"); 
	list.appendChild(li);
	var length = myArray.length+1;
	li.setAttribute("id", "item" + length);
	place = document.createElement("span");
	place.setAttribute("id", 'placeholder');
	li.appendChild(place);
	addButton = document.createElement("input");
	addButton.setAttribute("type", 'button');
	addButton.setAttribute("value", 'Add');
	addButton.setAttribute("name", 'button');
	addButton.setAttribute("onClick", 'addbuttond()');
	place.appendChild(addButton);
	
}
function refresh(){
	document.getElementById("list").remove();
	list = document.createElement("ul");
	list.setAttribute("id","list");
	console.log(container);
	container.appendChild(list);
	var lengtha = myArray.length;
	var index;
	//var li = document.createElement("li");
	//li.setAttribute("id","item1");
	console.log(lengtha);
	for (var i = 0; i<lengtha ; i++) {
		var li = document.createElement("li"); 
		index = i + 1;
		li.setAttribute("id", "item" + index);
		list.appendChild(li);
		place = document.createElement("span");
		place.setAttribute("id", 'placeholder');
		li.appendChild(place);
		submit(i+1);
	}
	addNew();
}
function notDone(btn){
	var id = btn.id;
	console.log(id);
	document.getElementById(id + "p").setAttribute("class", "notDone");
	btnDone = document.createElement("Input");
	btnDone.setAttribute("type", 'button');
	btnDone.setAttribute("onClick", 'done(this)');
	btnDone.setAttribute("value", 'Done');
	btnDone.setAttribute("id", id);
	document.getElementById(id + "p").appendChild(btnDone);
	btn.remove();
}
function done(btn){
	var id = btn.id;
	document.getElementById(id + "p").setAttribute("class", "done");
	var btnNotDone = document.createElement("Input");
	btnNotDone.setAttribute("type", 'button');
	btnNotDone.setAttribute("onClick", 'notDone(this)');
	btnNotDone.setAttribute("value", 'Not Done');
	btnNotDone.setAttribute("id", id);
	console.log(id);
	document.getElementById(id + "p").appendChild(btnNotDone);
	btn.remove();
}
function del(btn){
	var id = btn.id;
	document.getElementById(id + "p").remove();
	document.getElementById(id).remove();
	var arrayIndex = id.substring(4)-1;
	console.log(arrayIndex);
	myArray.splice(arrayIndex,1);
	refresh();
}
function edit(btn){
	var id = btn.id;
	document.getElementById()
}
function submit(length){
	var item;
	var lengtha;
	if (length==null){
		lengtha = myArray.length+1;
		item = document. createTextNode(document.getElementById('text').value + ' ');
		myArray.push(item)

	}
	else{
		lengtha = length;
		var arrayI = lengtha-1;
		var info = myArray[lengtha-1];
		
		item = document. createTextNode(info.data);
	}
	place.appendChild(item);
	var btnDone = document.createElement("input");
	btnDone.setAttribute("type", 'button');
	btnDone.setAttribute("value", 'Done');
	btnDone.setAttribute("name", 'btnDone');
	btnDone.setAttribute("onClick", 'done(this)');
	var btnDelete = document.createElement("input");
	btnDelete.setAttribute("type", 'button');
	btnDelete.setAttribute("value", 'Delete');
	btnDelete.setAttribute("name", 'btnDelete');
	btnDelete.setAttribute("onClick", 'del(this)');
	var index="item" + lengtha;
	console.log(index);
	var li =document.getElementById(index);
	console.log(li);
	place.setAttribute("id", index+"p");
	btnDone.setAttribute("id", index);
	btnDelete.setAttribute("id", index);
	li.appendChild(btnDone);
	li.appendChild(btnDelete);
	if (info == null){	
		text.remove();
		document.getElementById("btnSubmit").remove();
		addNew();	
	}
		
}
var lengtha 
function addbuttond(){
	//create new elements
	var textbox = document.createElement("input");
	textbox.setAttribute("type", 'text');
	textbox.setAttribute("value", 'text');
	textbox.setAttribute("Id", 'text');
	var submitbutton = document.createElement("input");
	submitbutton.setAttribute("type", 'button');
	submitbutton.setAttribute("value", 'Ok');
	submitbutton.setAttribute("name", 'button');
	submitbutton.setAttribute("id", 'btnSubmit');
	submitbutton.setAttribute("onClick", "submit(null, null)")
	//Append the elements in page (in span).
	place.appendChild(textbox);
	place.appendChild(submitbutton);
	addButton.remove();
};
