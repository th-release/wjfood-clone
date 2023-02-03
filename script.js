window.addEventListener('scroll', () => {
  const Array_li = document.querySelectorAll("#nav > ul > li")
  for(const Element of Array_li) {
    Element.className = "";
  }
  const { documentElement, body } = document;
  const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
  if (scrollTop >= 600) {
    document.querySelector("#nav").className="on";
  } else {
    document.querySelector("#nav").className="";
  }
  if (scrollTop > document.getElementById("sec4").offsetTop) {
    document.getElementById("li4").className = "on";
  } else if (scrollTop > document.getElementById("sec3").offsetTop) {
    document.getElementById("li3").className = "on";
  } else if (scrollTop > document.getElementById("sec2").offsetTop) {
    document.getElementById("li2").className = "on";
  } else if (scrollTop > document.getElementById("sec1").offsetTop) {
    document.getElementById("li1").className = "on";
  }

})

function sec1goClick() {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: document.getElementById("sec1").offsetTop
  })
}

function sec2goClick() {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: document.getElementById("sec2").offsetTop
  })
}

function sec3goClick() {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: document.getElementById("sec3").offsetTop
  })
}

function sec4goClick() {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: document.getElementById("sec4").offsetTop
  })
}
