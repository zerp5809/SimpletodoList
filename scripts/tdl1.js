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
	var edit = true;
	var id = btn.id;
	var text = document.getElementById(id + "p");
	var textbox = document.createElement("input");
	var li = document.getElementById(id);
	document.getElementById(id + "Don").remove();
	document.getElementById(id + "Del").remove();
	document.getElementById(id + "Edi").remove(); 
	textbox.setAttribute("type", 'text');
	textbox.setAttribute("value", 'text');
	textbox.setAttribute("Id", 'text');
	var submitbutton = document.createElement("input");
	submitbutton.setAttribute("type", 'button');
	submitbutton.setAttribute("value", 'Ok');
	submitbutton.setAttribute("name", 'button');
	submitbutton.setAttribute("id", 'btnSubmit');
	submitbutton.setAttribute("onClick", "submit(id, edit)")
	//Append the elements in page (in span).
	li.appendChild(textbox);
	li.appendChild(submitbutton);
	text.remove();

}
function submit(length, edit){
	edit = this.edit;
	var item;
	var lengtha = length;
	var index="item" + lengtha;
	if (length==null){
		lengtha = myArray.length+1
		index="item" + lengtha;
		item = document. createTextNode(document.getElementById('text').value + ' ');
		myArray.push(item)
		place.appendChild(item);
	}
	else if(edit == true){
		item = document. createTextNode(document.getElementById('text').value + ' ');
		place = document.getElementById(index + "p");
	}
	else{
		var arrayI = lengtha-1;
		var info = myArray[lengtha-1];
		item = document. createTextNode(info.data);
		place.appendChild(item);
	}
	
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
	var btnEdit = document.createElement("input");
	btnEdit.setAttribute("type", 'button');
	btnEdit.setAttribute("value", 'Edit');
	btnEdit.setAttribute("name", 'btnEdit');
	btnEdit.setAttribute("onClick", 'edit(this)');
	console.log(index);
	var li =document.getElementById(index);
	console.log(li);
	place.setAttribute("id", index+"p");
	btnDone.setAttribute("id", index + "Don");
	btnDelete.setAttribute("id", index + "Del");
	btnEdit.setAttribute("id", index + "Edi");
	li.appendChild(btnDone);
	li.appendChild(btnDelete);
	li.appendChild(btnEdit);
	if (info == null){	
		text.remove();
		document.getElementById("btnSubmit").remove();
		addNew();	
	}
		
}
var lengtha 
function addbuttond(id){
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
	submitbutton.setAttribute("onClick", "submit(null)")
	//Append the elements in page (in span).
	place.appendChild(textbox);
	place.appendChild(submitbutton);
	addButton.remove();
};
