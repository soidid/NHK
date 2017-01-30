'use strict'
var lesson = window.location.pathname.split('.html')[0].split('/')[1]
if(lesson === "index")
	lesson = 1;
var lesson_n = document.querySelector("#lesson");
var lesson_t = document.createTextNode("Lesson "+lesson)
lesson_n.appendChild(lesson_t)

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", './json/'+lesson+'.json', false ); // false for synchronous request
xmlHttp.send( null );
var json = JSON.parse(xmlHttp.responseText);

var content = document.querySelector("#content");
json.map(d=>{
	var node = document.createElement("div")
	node.classList.add('node')

	var title = document.createElement("div")
	title.classList.add("title")
	node.appendChild(title)

	var japanese = document.createElement("h2")
	japanese.classList.add("japanese")
	var japanese_t = document.createTextNode(d.vocabulary)
	japanese.appendChild(japanese_t)
	title.appendChild(japanese)

	var romaji = document.createElement("div")
	romaji.classList.add("romaji")
	var romaji_t = document.createTextNode(d.romaji)
	romaji.appendChild(romaji_t)
	title.appendChild(romaji)

	var audio = document.createElement("audio")
	audio.setAttribute("controls", true)
	var source = document.createElement("source")
	source.setAttribute("src", d.audio)
	audio.appendChild(source)
	node.appendChild(audio)

	var chinese = document.createElement("div")
	var chinese_t = document.createTextNode(d.chinese)
	chinese.appendChild(chinese_t)
	chinese.classList.add("chinese")
	node.appendChild(chinese)

	var chinese_detail = document.createElement("div")
	var chinese_detail_t = document.createTextNode(d.chinese_detail)
	chinese_detail.appendChild(chinese_detail_t)
	chinese_detail.classList.add("chinese_detail")
	node.appendChild(chinese_detail)

	content.appendChild(node)
})

function toggle(){
	var nav = document.querySelector('#nav')
	nav.classList.toggle("visible")
}
// どちら
// [DOCHIRA]
// <audio controls>
//   <source src="https://www.nhk.or.jp/lesson/update/mp3/le3_v_vl23.mp3" type="audio/mpeg">
// Your browser does not support the audio element.
// </audio>