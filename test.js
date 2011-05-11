$(document).ready(function(){
	$(".btn2-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});	 
});

function onlyTelefon(e){
 var key = (typeof e.charCode == 'undefined' ? e.keyCode : e.charCode);
 if (e.ctrlKey || e.altKey || key < 32)return true;
	key = String.fromCharCode(key);
 //return /[\d-+\.]/.test(key);
	return /[\d\-+. ]/.test(key);
}

function retText(str, id){
	if(id.value == str){
	 id.value = '';	
	}
}