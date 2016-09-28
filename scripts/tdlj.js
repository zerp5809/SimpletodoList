var addButton= document.getElementById("addButton");
var place = document.getElementById("placeholder");
var container = document.getElementById("container");
var myArray = new Array();
var list = document.getElementById("list");
var editing;
function addNew(){
	var li = document.createElement("li"); 
	list.appendChild(li);
	var length = myArray.length+1;
	li.setAttribute("id", "item" + length);
	place = document.createElement("span");
	place.setAttribute("id", 'placeholder');
	place.setAttribute("class", 'placeholder');
	li.appendChild(place);
	addButton = document.createElement("input");
	addButton.setAttribute("type", 'button');
	addButton.setAttribute("value", 'Add');
	addButton.setAttribute("id", 'btnAdd');
	addButton.setAttribute("onClick", 'addbuttond()');
	place.appendChild(addButton);
	
}
function refresh(){
	document.getElementById("list").remove();
	list = document.createElement("ul");
	list.setAttribute("id","list");
	//console.log(container);
	container.appendChild(list);
	var lengtha = myArray.length;
	var index;
	//var li = document.createElement("li");
	//li.setAttribute("id","item1");
	//console.log(lengtha);
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
	document.getElementById(id+"Del").remove();
	var idNum = id.substring(4, id.length);
	myArray[idNum-1].status = "notdone";
	//console.log(id);
	document.getElementById(id + "p").setAttribute("class", "notDone");
	btnDone = document.createElement("Input");
	btnDone.setAttribute("type", 'button');
	btnDone.setAttribute("onClick", 'done(this)');
	btnDone.setAttribute("value", 'Done');
	btnDone.setAttribute("id", id + "Don");
	btnDone.setAttribute("class", "button");
	document.getElementById(id + "p").appendChild(btnDone);
	var btnDelete = document.createElement("input");
	btnDelete.setAttribute("type", 'button');
	btnDelete.setAttribute("value", 'Delete');
	btnDelete.setAttribute("name", 'btnDelete')
	btnDelete.setAttribute("id", id + "Del");
	btnDelete.setAttribute("onClick", 'del(this)');
	document.getElementById(id + "p").appendChild(btnDelete);
	var btnEdit = document.createElement("input");
	btnEdit.setAttribute("type", 'button');
	btnEdit.setAttribute("value", 'Edit');
	btnEdit.setAttribute("name", 'btnEdit');
	btnEdit.setAttribute("onClick", 'edit(this)');
	btnEdit.setAttribute("id", id + "Edi");
	document.getElementById(id + "p").appendChild(btnEdit);
	btn.remove();
}
function done(btn){
	//console.log(btn);
	var id = btn.id.substring(0,btn.id.indexOf('Don'));
	var idNum = id.substring(4, id.length);
	console.log(idNum);
	myArray[idNum-1].status = "done";
	//document.getElementById(id+"Del").remove();
	//console.log(id);
	document.getElementById(id + "p").setAttribute("class", "done");
	var btnNotDone = document.createElement("Input");
	btnNotDone.setAttribute("type", 'button');
	btnNotDone.setAttribute("onClick", 'notDone(this)');
	btnNotDone.setAttribute("value", 'Not Done');
	btnNotDone.setAttribute("id", id);
	btnNotDone.setAttribute("class", "button");
	//console.log(id);
	document.getElementById(id + "p").appendChild(btnNotDone);
	btn.remove();
	document.getElementById(id+"Edi").remove();
	document.getElementById(id+"Del").remove();
	var btnDelete = document.createElement("input");
	btnDelete.setAttribute("type", 'button');
	btnDelete.setAttribute("value", 'Delete');
	btnDelete.setAttribute("name", 'btnDelete')
	btnDelete.setAttribute("id", id + "Del");
	btnDelete.setAttribute("onClick", 'del(this)');
	document.getElementById(id + "p").appendChild(btnDelete);

}
function del(btn){
	var id = btn.id.substring(0,btn.id.indexOf('Del'));
	document.getElementById(id + "p").remove();
	document.getElementById(id).remove();
	var arrayIndex = id.substring(4)-1;
	//console.log(arrayIndex);
	myArray.splice(arrayIndex,1);
	refresh();
}
function no(){
	alert("Please submit last entry frist!");
}
function edit(btn){
	var id = btn.id.substring(0,btn.id.indexOf('Edi'));
	var text = document.getElementById(id + "p");
	var textbox = document.createElement("input");
	var li = document.getElementById(id);
	addButton.setAttribute("onClick", "no()");
	document.getElementById(id + "Don").remove();
	document.getElementById(id + "Del").remove();
	document.getElementById(id + "Edi").remove(); 
	textbox.setAttribute("type", 'text');
	var t = id.substring(4, id.length);
	textbox.setAttribute("value", myArray[t-1].item);
	textbox.setAttribute("id", 'text');
	var submitbutton = document.createElement("input");
	submitbutton.setAttribute("type", 'button');
	submitbutton.setAttribute("value", 'Ok');
	submitbutton.setAttribute("name", 'button');
	submitbutton.setAttribute("id", id);
	//console.log(id);
	submitbutton.setAttribute("onClick", "submit(this, true)")
	//Append the elements in page (in span).
	li.appendChild(textbox);
	li.appendChild(submitbutton);
	text.remove();
	var length = myArray.length;
	var ediIndex;
	if (length != 0 ){
		for(var z = 1;  z<length+1; z++) {
			ediIndex  = "item" + z + "Edi";
			var noEdit = document.getElementById(ediIndex);
			//console.log(ediIndex);
			if (btn.id != ediIndex){
				if (noEdit != null){
					noEdit.setAttribute("onClick", "no()");
				}
			}
		}
	}

}
function submit(length, editing){
	var editB = editing;
	//console.log(length);
	var item;
	var lengthA;
	var li;
	var isDone= false;
	//console.log(lengthA);
	var index;
	if (length==null){
		if (document.getElementById('text').value  == ""){
			alert("Please enter some thing into the textbox.");
		}
		else{
			lengthA = myArray.length+1
			index="item" + lengthA;
			item = document. createTextNode(document.getElementById('text').value);
			var itemString = document.getElementById('text').value;
			myArray.push({"item": itemString, "status":"notdone"});
			place.appendChild(item);
			place.setAttribute("id", index+"p");
			li =document.getElementById(index);
			console.log(1);
		}
	}
	else if(editing == true){
		if (document.getElementById('text').value  == ""){
			alert("Textbox Empty!");
		}
		else{
			//when this happens it passes a button because id passes submit.id instead
			//console.log(length.id);
			lengthA=length.id;
			index=lengthA;
			//console.log(lengthA);
			item = document. createTextNode(document.getElementById('text').value);
			var itemString = document.getElementById('text').value;
			length.setAttribute("id", "btnSubmit");
			li =document.getElementById(index);
			place = document.createElement("span");
			place.setAttribute("id", index+"p");
			li.appendChild(place);
			place.appendChild(item);
			var t = lengthA.substring(4, lengthA.length);
			//console.log(t);
			var arrayI= index.substring(4);
			myArray.splice(arrayI-1,1,{"item": itemString, "status":"notdone"});
			addButton.setAttribute("onClick", "addbuttond()");
			console.log(2);
		}




			//when clicking edit the text becoems text instead of vwhat was there before this should be fixed
	}
	else{
		var lengthA = length;
		var info = myArray[lengthA-1].item;
		//console.log(length);
		//console.log(info);
		item = document. createTextNode(info);
		index="item" +lengthA;
		place.appendChild(item);
		place.setAttribute("id", index+"p");
		li =document.getElementById(index);
		if (myArray[lengthA-1].status == "done"){
			isDone = true;
			console.log("true!"); 
		}
		console.log(3);
	}
	if (isDone == false ){
		var btnDone = document.createElement("input");
		btnDone.setAttribute("type", 'button');
		btnDone.setAttribute("value", 'Done');
		btnDone.setAttribute("name", 'btnDone');
		btnDone.setAttribute("onClick", 'done(this)');
		btnDone.setAttribute("class", "button");
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
		//console.log(index);
		//console.log(li);
		
		btnDone.setAttribute("id", index + "Don");
		btnDelete.setAttribute("id", index + "Del");
		btnEdit.setAttribute("id", index + "Edi");
		li.appendChild(btnDone);
		li.appendChild(btnDelete);
		li.appendChild(btnEdit);
		if (length == null && info == null){	
			text.remove();
			document.getElementById("btnSubmit").remove();
			addNew();	
		}
		else if(editing == true){

			text.remove();
			document.getElementById("btnSubmit").remove();
			place = document.getElementById("placeholder");
		}
		var length = myArray.length;
		var ediIndex;
		if (length != 0 ){
			for(var z = 1;  z<length+1; z++) {
				ediIndex  = "item" + z + "Edi";
				var noEdit = document.getElementById(ediIndex);
				//console.log(ediIndex);
				if (noEdit != null){
					noEdit.setAttribute("onClick", "edit(this)");
				}
			}
		}
	}
	else if (isDone == true){
		if (length == null && info == null){	
			text.remove();
			document.getElementById("btnSubmit").remove();
			addNew();	
		}
		else if(editing == true){

			text.remove();
			document.getElementById("btnSubmit").remove();
			place = document.getElementById("placeholder");
		}
		var length = myArray.length;
		var ediIndex;
		if (length != 0 ){
			for(var z = 1;  z<length+1; z++) {
				ediIndex  = "item" + z + "Edi";
				var noEdit = document.getElementById(ediIndex);
				//console.log(ediIndex);
				if (noEdit != null){
					noEdit.setAttribute("onClick", "edit(this)");
				}
			}
		}
		document.getElementById(index + "p").setAttribute("class", "done");
		var btnNotDone = document.createElement("Input");
		btnNotDone.setAttribute("type", 'button');
		btnNotDone.setAttribute("onClick", 'notDone(this)');
		btnNotDone.setAttribute("value", 'Not Done');
		btnNotDone.setAttribute("id", index);
		btnNotDone.setAttribute("class", "button");
		//console.log(id);
		document.getElementById(index + "p").appendChild(btnNotDone);
		var btnDelete = document.createElement("input");
		btnDelete.setAttribute("type", 'button');
		btnDelete.setAttribute("value", 'Delete');
		btnDelete.setAttribute("name", 'btnDelete')
		btnDelete.setAttribute("id", index + "Del");
		btnDelete.setAttribute("onClick", 'del(this)');
		document.getElementById(index + "p").appendChild(btnDelete);
	}
	
}
var lengtha 
function addbuttond(){
	//create new elements
	var length = myArray.length;
	var ediIndex;
	if (length != 0 ){
		for(var z = 1;  z<length+1; z++) {
			ediIndex  = "item" + z + "Edi";
			var noEdit = document.getElementById(ediIndex);
			//console.log(ediIndex);
			if (noEdit != null){
				noEdit.setAttribute("onClick", "no()");
			}
		}
	}
	var textbox = document.createElement("input");
	textbox.setAttribute("type", 'text');
	textbox.setAttribute("placeholder", 'text');
	textbox.setAttribute("id", 'text');
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
