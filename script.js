var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
    
})
var cancelpopupbutton = document.getElementById("cancel-popup")
cancelpopupbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//select container,add-book,Book-title-input,Book-author-input,Book-description-input
var conatiner = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("Book-title-input")
var bookauthorinput = document.getElementById("Book-author-input")
var bookdescriptioninput = document.getElementById("Book-description-input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    conatiner.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"   
})
function deletebook(event)
{
    event.target.parentElement.remove()
}