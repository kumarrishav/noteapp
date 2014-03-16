var id,id1,aa,id3,key,len;
function del(id)
{
localStorage.removeItem(id);
alert('Note Deleted  ^_^');
location.reload();
}

function view(id1)
{
document.getElementById('note1').style.display="none";
document.getElementById('note2').style.display="block";
document.getElementById('note3').style.display="none";
 var n2 = document.getElementById('n2');
 var head = document.getElementById('head');
 

value = localStorage.getItem(id1);
           head.innerHTML=id1;
	      n2.innerHTML=value;
         
		 
}

function edit(id3)
{
document.getElementById('note1').style.display="none";
document.getElementById('note3').style.display="block";
document.getElementById('note2').style.display="none";
aa=id3;
document.getElementById('title').innerHTML=localStorage.getItem(id3);
}


function cli()
{
	if(typeof(Storage)!=="undefined")
	  {
	localStorage.setItem(aa,noteform.title.value);
	  }
	  
	alert('Note Edited  ^_^');
	window.location.assign("notelist.html");
}


function delall()
{
localStorage.clear();
	alert('All Notes Cleared  ^_^');
	window.location.assign("notelist.html");

}


function Reset()
{

	noteform.title.value="";
	noteform.description.value="";
}



window.onload=function show(){

    var ni = document.getElementById('note');
	ni.innerHTML="<hr style='border:1px dotted;'>";
    for (i = 0; i < localStorage.length; i++)
		{
	      key = localStorage.key(localStorage.length-i-1);
	      value = localStorage.getItem(key);
		  len=value;
		  if(value.length>100)
		  value=len.slice(0,100)+"<span style='font-size:15px; color:orange;'>........more</span>";
		  
	      ni.innerHTML+= "<button class='danger' id='"+key+"'style='border-radius:10px;width:55px; height:30px;float:right;' onclick='del(this.id)'>Delete</button>"+
		  "<button class='danger' id='"+key+"'style='border-radius:10px;width:46px; height:30px;float:left;' onclick='edit(this.id)'>Edit</button>"+"<div id='"+key+"'onclick='view(this.id)'></br></br><span  style='color:white; align:center; display: inline-block;word-break: break-all;font-size:20px; word-wrap:break-all;' >"+value+"</span>"+"<p style='color:white; font-size:15px;'>@ "+key+"</div><hr style='border:1px dotted;'>" ;
	       
	  	}

	}
	
