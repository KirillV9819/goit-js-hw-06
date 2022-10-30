

const listAll = document.querySelectorAll(".item")



function calculateAllLi() {

    console.log("Number of categories:", listAll.length)
    
    listAll.forEach((li) =>{
        console.log("Category:", li.firstElementChild.textContent);

        console.log("Elements:", li.lastElementChild.children.length);
    })


}

calculateAllLi()