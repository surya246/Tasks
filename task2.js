var boxes="";
var id=1;
function myFunction(){

	boxes = '<p id='+id+'><input type="text" class="text"><button type="button" onclick="hideFunction('+ id +');">X</button></p>';
        document.getElementById("line").innerHTML +=boxes;
	id++;

}
function hideFunction(current){
	var loc=document.getElementById(current);
	loc.remove();
}
function result(){
var res="";
var a={};
var n = document.getElementsByTagName("p").length;
var e = document.getElementsByTagName("input");
	//alert(n);
	       // alert(e[3].value);
	for(var i=0;i<n;i++){
		a[e[i].value];
                a[e[i].value]? ++(a[e[i].value]):a[e[i].value]=1;
	}
	console.log(a);
	var i;
	var num=0;
	var max=0;
	for( var i in a) {
	    if( max < a[i]){
	      num=i;
	      max = a[i];}
	    
	}

	document.getElementById("res").innerHTML=num;
	
}
