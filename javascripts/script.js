$(document).ready(function(){
	$("#myModal").modal('show');
});

function collapseButton() {
	var element = document.getElementById("navbarText");
	var title = document.getElementById("paragraph_header");
	if(element.classList.contains('show')){
		title.classList.remove("title_collapsed");
	} else {
		title.classList.add("title_collapsed");
	}
}


