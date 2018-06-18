
 window.addEventListener("scroll",scrolFunction);


function scrolFunction(){
	var offset = window.pageYOffset;
	var homeItemEl= document.getElementById('homeItem');
	var aboutItemEl= document.getElementById('aboutItem');
	var portItemEl= document.getElementById('portfolioItem');
	var blogItemEl= document.getElementById('blogItem');
	var contactItemEl= document.getElementById('contactItem');
	var scTop = document.getElementById('scrolToTop');

	var navEl = document.getElementById('navbarId');
	var aboutEl = document.getElementById('about-us');
	var portEl = document.getElementById('portfolio');
	var blogEl = document.getElementById('blog');
	var contactEl = document.getElementById('contact');

	var aboutOf = aboutEl.offsetTop - 10;
	var portOf = portEl.offsetTop - 10;
	var blogOf = blogEl.offsetTop - 10;
	var contactOf = contactEl.offsetTop - 10;





	if (offset>aboutOf) {
		navEl.style.background = "#17a2b8";
		scTop.style.opacity = "1";
	}else{
		navEl.style.background = "rgba(125, 129, 132, .5)";
		scTop.style.opacity = "0";
	}

	


	
	if(offset<aboutOf){
		homeItemEl.classList.add("active");
	}else{
		homeItemEl.classList.remove("active");
	}

	if(offset>aboutOf && offset<portOf){
		aboutItemEl.classList.add("active");
	}else{
		aboutItemEl.classList.remove("active");
	}
	if(offset>portOf && offset<blogOf){
		portItemEl.classList.add("active");
	}else{
		portItemEl.classList.remove("active");
	}

	if(offset>blogOf && offset<contactOf){
		blogItemEl.classList.add("active");
	}else{
		blogItemEl.classList.remove("active");
	}

	if(offset>contactOf){
		contactItemEl.classList.add("active");
	}else{
		contactItemEl.classList.remove("active");
	}
	
}