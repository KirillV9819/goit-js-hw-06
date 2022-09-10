
const body = document.body;
const ul = body.firstElementChild.nextElementSibling;
const list = ul.children;


console.log("Number of categories:", list.length)

for (const element of list) {
    console.log(element.firstElementChild.textContent)
    console.log("Elements:", element.firstElementChild.nextElementSibling.children.length)
}