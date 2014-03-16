function cli()
{
var date=new Date()
var datetime=(date.toString()).slice(0,25);

	if(typeof(Storage)!=="undefined")
	  {
	localStorage.setItem(datetime,noteform.title.value);
	alert('Note Saved  ^_^ ');
	window.location.assign("notelist.html");
	  }
}


function Reset(){

	noteform.title.value="";
	
}