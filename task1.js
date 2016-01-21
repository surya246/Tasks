function myFunction(){
		
	var text="";
        var a={};
	text=document.getElementById("ip").value;
	for(var i=0;i<text.length;i++){
          	a[text[i]];
	        (a[text[i]])? ++(a[text[i]]):a[text[i]]=1;
              	
	}
	console.log(a);
	document.getElementById("op").innerHTML=a;
	var i;
	var ch=0;
	var max=0;
	for( var i in a) {
	    if( max < a[i]){
	      ch=i;
	      max = a[i];}
	    
	}

	console.log(ch);
	document.getElementById("op").innerHTML=ch;
}


	
