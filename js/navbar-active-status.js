// const ulTag = document.getElementById("nav-container")

// const listItems = ulTag.querySelectorAll("li")

// let lastClicked = null


// for (let singleListItem of listItems) {

//     singleListItem.addEventListener("click", function () {
//         if (lastClicked == null) {
//             // Style Purpose
//             // লাল হইতে দিব
//             singleListItem.style.backgroundColor = "red"
//             singleListItem.style.color = "white"
//             lastClicked = singleListItem
//         } else {
//             lastClicked.style.backgroundColor = "transparent"
//             lastClicked.style.color = "#eee"

//             singleListItem.style.backgroundColor = "red"
//             singleListItem.style.color = "white"
//             lastClicked = singleListItem
//         }
//     })

// }



// Practice 
const ulTag = document.getElementById('nav-container')

// const listItems = ulTag.getElementsByTagName('li')
            // ======  OR ========
const listItems2 = document.getElementsByTagName('li')

// console.log(ulTag, listItems, listItems2);

for(const singleItem of listItems2){
    singleItem.addEventListener('click', function(){
        // console.log(singleItem.innerText);
        // console.log(singleItem);
        singleItem.style.backgroundColor = 'red'
        singleItem.style.color = 'white'
        
        
    })
}