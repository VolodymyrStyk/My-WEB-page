function showText(el){
	if(el.previousElementSibling.clientHeight === 80){
		el.previousElementSibling.style.height = "100%";
		el.InnerHTML = "Show Less...";
	}else{
		el.previousElementSibling.style.height = "80px";
		el.InnerHTML = "Read More...";
	}
}