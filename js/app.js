document.addEventListener("DOMContentLoaded", function() { 

    var mainList = document.querySelectorAll(".nav-list");

    for (var i=0; i<mainList.length; i++) {
        mainList[i].addEventListener("mouseover", function() {
            var ul = this.querySelector(".hide")
            if(ul) {
                ul.style.display = "block"
            }
        })
    }
    for (var i=0; i<mainList.length; i++) {
        mainList[i].addEventListener("mouseout", function() {
            var ul = this.querySelector(".hide")
            if(ul) {
                ul.style.display = "none"
            }
        })
    }
 
    var leftImg = document.querySelectorAll(".left-img");
    var midImg = document.querySelectorAll(".mid-img");
   
    for(var i=0; i < leftImg.length; i++) {
        leftImg[i].addEventListener("mouseover", function() {
        document.querySelector(".gallery-head").style.display = "none"
      })
    }
    for(var i=0; i <leftImg.length; i++) {
        leftImg[i].addEventListener("mouseout", function() {
        document.querySelector(".gallery-head").style.display = "block"
      })
    }

    for(var i=0; i < midImg.length; i++) {
        midImg[i].addEventListener("mouseover", function() {
        document.querySelector(".gallery-head-2").style.display = "none"
      })
    }
    for(var i=0; i < midImg.length; i++) {
        midImg[i].addEventListener("mouseout", function() {
        document.querySelector(".gallery-head-2").style.display = "block"
      })
    }



})