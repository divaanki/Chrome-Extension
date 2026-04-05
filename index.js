let myLinks = []
const input = document.getElementById("user_input")
const save = document.getElementById("save")
const listItem = document.getElementById("list-item")
const del = document.getElementById("delete")
const saveTab = document.getElementById("tab")


// UTILITY FUNCTIONS - URL Validation
function isValidURL(urlString) {
    try {
        new URL(urlString)
        return true
    } catch (error) {
        return false
    }
}

function isValidDomain(domainString) {
    const domainRegex = /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/
    return domainRegex.test(domainString)
}

function formatURL(urlString) {
    if (!urlString.includes("://")) {
        if (isValidDomain(urlString)) {
            return "https://" + urlString
        }
        return null
    }
    return urlString
}

function truncateURL(url, maxLength = 60) {
    return url.length > maxLength ? url.substring(0, maxLength) + "..." : url
}

// STORAGE FUNCTIONS
function loadLinks() {
    const previousSavedLinks = JSON.parse(localStorage.getItem("myLinks"))
    if (previousSavedLinks) {
        myLinks = previousSavedLinks
        AddToList(myLinks)
    }
}

function saveLinks() {
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
}

function deleteAllLinks() {
    if (confirm("Are you sure you want to delete all links?")) {
        localStorage.clear()
        myLinks = []
        AddToList(myLinks)
    }
}

// DISPLAY FUNCTIONS
function AddToList(links) {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${links[i]}'>
                    ${links[i]}
                </a>
                <button class="delete-btn" data-index="${i}"><img src="delete_icon.png" alt="Delete"></button>
            </li>
        `
    }
    listItem.innerHTML = listItems
    attachDeleteListeners()
}

function attachDeleteListeners() {
    const deleteButtons = document.querySelectorAll(".delete-btn")
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.target.closest(".delete-btn").getAttribute("data-index")
            myLinks.splice(index, 1)
            saveLinks()
            AddToList(myLinks)
        })
    })
}


// EVENT LISTENERS
saveTab.addEventListener("click", () => { 
    input.value = ""   
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        let currentURL = truncateURL(tabs[0].url)
        myLinks.push(currentURL)
        saveLinks()
        AddToList(myLinks)
    })
})

save.addEventListener("click", () => {
    if (input.value) {
        const formattedURL = formatURL(input.value)
        if (formattedURL && isValidURL(formattedURL)) {
            myLinks.push(formattedURL)
            input.value = ""
            saveLinks()
            AddToList(myLinks)
        } else {
            alert("Please enter a valid URL (e.g., google.com or https://example.com)")
        } 
    } else {
        alert("Please enter a URL")
    }
})

del.addEventListener("click", deleteAllLinks)

loadLinks()
