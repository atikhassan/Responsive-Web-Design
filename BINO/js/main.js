	$('.flexslider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		
	});

    window.addEventListener("scroll",scrolFunction);
    
    function scrolFunction(){
  
        var offset = window.pageYOffset;

        var homeLink = document.getElementById('homeLink');
        var aboutLink = document.getElementById('aboutLink');
        var portfolioLink = document.getElementById('portfolioLink');
        var pricingLink = document.getElementById('pricingLink');
        var teamLink = document.getElementById('teamLink');
        var blogLink = document.getElementById('blogLink');
        var contactLink = document.getElementById('contactLink');

        var history = document.getElementById('our-history');
        var historyOffset = history.offsetTop;
		
        var recentWork = document.getElementById('recent-work');
        var recentWorkOffset = recentWork.offsetTop;

        var pricing = document.getElementById('pricing');
        var pricingOffset = pricing.offsetTop;

        var team = document.getElementById('our-team');
        var teamOffset = team.offsetTop;

        var blog = document.getElementById('blog');
        var blogOffset = blog.offsetTop;

        var contact = document.getElementById('contact');
        var contactOffset  = contact.offsetTop;

        var footer = document.getElementById('footer');
        var footerOffset = footer.offsetTop;


        if(offset<historyOffset){
        	homeLink.classList.add("active");
        }else{
        	homeLink.classList.remove("active");
        }

        if(offset>historyOffset && offset<recentWorkOffset){
        	aboutLink.classList.add("active");
        }else{
        	aboutLink.classList.remove("active");
        }

        if(offset>recentWorkOffset && offset<pricingOffset){
        	portfolioLink.classList.add("active");
        }else{
        	portfolioLink.classList.remove("active");
        }

        if(offset>pricingOffset && offset<teamOffset){
        	pricingLink.classList.add("active");
        }else{
        	pricingLink.classList.remove("active");
        }


        if(offset>teamOffset && offset<blogOffset){
        	teamLink.classList.add("active");
        }else{
        	teamLink.classList.remove("active");
        }   

        if(offset>blogOffset && offset<contactOffset){
        	blogLink.classList.add("active");
        }else{
        	blogLink.classList.remove("active");
        }

        if(offset>contactOffset && offset<footerOffset){
        	contactLink.classList.add("active");
        }else{
        	contactLink.classList.remove("active");
        }



        var scrollToTop = document.getElementById('scroll-view');
        if(offset>600){
        	scrollToTop.classList.add("scroll-view-active");
        }else{
        	scrollToTop.classList.remove("scroll-view-active");
        }
        
    }
