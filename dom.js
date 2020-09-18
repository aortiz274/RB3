// JavaScript Document
var myDemo=document.getElementById("demoparent");
console.log(myDemo.childNodes.length);

var myDemoTags= document.getElementsByTagName("li")
console.log("Number of li links:"+ myDemoTags.length)

var linksInMenu= myDemo.getElementsByTagName("li")
console.log("NUmber of li items in menu:"+linksInMenu.length)

var myComments= document.getElementById("commentary")
myComments.setAttribute("align","right")
myComments.setAttribute("style","color:red")

var newItem= document.createElement("li");

var newText= document.createTextNode("Whoa this is new!");
myDemo.appendChild(newItem);
newItem.appendChild(newText)