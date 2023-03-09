window.addEventListener("load", function () {
  const ARTICLEELEM = document.querySelectorAll("article");
  ARTICLEELEM[0].innerHTML = "<div><img src='kep.jpg' alt='' ></div>";
  const DIVELEM = document.querySelectorAll("article div");
  ARTICLEELEM[0].innerHTML += "<button>OK</button>";
  const ButtonELEM = document.querySelectorAll("article button");
  ButtonELEM[0].addEventListener("click",function(){
    console.log(event.target)
    console.log(event.DIVELEM[0])
    DIVELEM.classList.add("formazas")
    DIVELEM[0].stlye.border="5px black solid"
  })

  function formazas(){
    const divList=document.querySelectorAll("article div");
    divList[0].classList.add("formazas")
  }
  function formazas2(){
    const divList=document.querySelectorAll("article div")
    divList.classList.add("formazas2")
  }
  const KEPELEM=this.document.querySelectorAll("article div img")
  KEPELEM[0].addEventListener("mouseover",function(){
    event.targer.stlye.border="8px solid red"
  })
});
