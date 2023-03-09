window.addEventListener("load",init)
function init(){
    const LINKLIST =["kep1.jpg,kep2.jpg,kep3.jpg,kep4.jpg,kep5.jpg,kep6.jpg,kep7.jpg,kep8.jpg"]
    const ARTICLE = document.querySelectorAll("article")
    for (let index = 0; index < LINKLIST.length; index++) {
        ARTICLE[0].innerHTML += ``
        
    }

}