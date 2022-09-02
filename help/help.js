//
const contents = document.querySelectorAll('.ui-btn')
console.log(contents)
contents.forEach(content => {
	console.log(content.id)
content.onclick = function(e) {
    chrome.storage.local.set({["clicked-help"] : content.id})
}

})

let questions = []

for(let i = 1; i <= 3; i++) {
let question = chrome.i18n.getMessage(`helpTitle${i}`)
questions.push(question)	
}

console.log(questions)
