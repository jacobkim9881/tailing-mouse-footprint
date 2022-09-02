//
//
async function getContent() {
//let clickedContent = await 
chrome.storage.local.get(["clicked-help"], function(res) {
console.log(res)
})
//console.log(clickedContent)
}
getContent()
