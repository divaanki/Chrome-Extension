let myBookmarks = []

const input = document.getElementById("user_input")
const save = document.getElementById("save")
const listItem = document.getElementById("list-item")
const del = document.getElementById("delete")
const tab = document.getElementById("tab")

const previousSavedBookmarks = JSON.parse( localStorage.getItem("myBookmarks") )

if (previousSavedBookmarks) {
    myBookmarks = previousSavedBookmarks
    AddToList(myBookmarks)
}

tab.addEventListener("click", () => {    
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        myBookmarks.push(tabs[0].url)
        localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks) )
        AddToList(myBookmarks)
    })
})

save.addEventListener("click",() => {
    myBookmarks.push(input.value)
    input.value = ""
    localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks) )
    AddToList(myBookmarks)
})

del.addEventListener("dblclick", () => {
    localStorage.clear()
    myBookmarks = []
    AddToList(myBookmarks)
})

function AddToList(tabs) {
    let listItems = ""
    for (let i = 0; i < tabs.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${tabs[i]}'>
                    ${tabs[i]}
                </a>
            </li>
        `
    }
    listItem.innerHTML = listItems
}
