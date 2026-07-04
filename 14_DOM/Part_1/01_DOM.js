document.getElementById('title')

// to get a particular attribute we can any of the two following ways
document.getElementById('title').id
document.getElementById('title').className
document.getElementById('title').getAttribute('class')

// it resets the whole attribute
document.getElementById('title').setAttribute('class', 'title')

// to modify the style 
const title = document.getElementById('title')
title.style.backgroundColor = 'white'
title.style.padding = "20px"


// it look like both of them are giving the same value
// that is the content inside the particular element
// but innerText only gives the text which is visible in the browser
// while textContent shows the text from the html element itself
// if something inside the element is hidden using css property
// innerText will not show it, but textContent will show it.
title.innerText
title.textContent

// inner html give the whole html inside the element.
title.innerHTML


// it gives a html collection
const heading = document.getElementsByClassName("heading")
// this is used to convert html collection to array
// becuase there is no way of iterating in html collection
const headingarr = Array.from(heading)

// we can select an element using its css selector
// it only gives the first matching element.
document.querySelector()

// it gives all the matching element.
// it gives a node list.
document.querySelectorAll()