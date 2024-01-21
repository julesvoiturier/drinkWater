let glasses = document.querySelectorAll(".glassesContainer")
let glass = document.querySelectorAll(".glass") 
let waterQuantity = document.querySelector("#current") // <quantité d'eau selectionnée
let remaining = document.querySelector("#remaining") //<quantité d'eau restante

console.log(glasses);

for(let i = 0; i < glasses.length; i++) {
    glasses[i].addEventListener("click", (e) => {

        let p = e.target.parentElement;
        let index = Array.prototype.indexOf.call(p.children, e.target);

        if(e.target.className.includes("glass")){
            e.target.firstElementChild.classList.add("fullGlass");
        }

        for (let x = 0; x < index; x++) {
            glass[x].firstElementChild.classList.add("fullGlass")
        }

        for (let x = 7; x > index; x--) {
            glass[x].firstElementChild.classList.remove("fullGlass")
        }

        switch (index) {
            case 0:
                waterQuantity.style.height = 10 + "%"
                remaining.style.height = 80 + "%"
                waterQuantity.firstElementChild.innerHTML = "0.25L"
                break;
            case 1:
                waterQuantity.style.height = 20 + "%"
                remaining.style.height = 70 + "%"
                waterQuantity.firstElementChild.innerHTML = "0.5L"
                break;
            case 2:
                waterQuantity.style.height = 30 + "%"
                remaining.style.height = 60 + "%"
                waterQuantity.firstElementChild.innerHTML = "0.75L"
                break;
            case 3:
                waterQuantity.style.height = 40 + "%"
                remaining.style.height = 50 + "%"
                waterQuantity.firstElementChild.innerHTML = "1L"
                break;
            case 4:
                waterQuantity.style.height = 50 + "%"
                remaining.style.height = 40 + "%"
                waterQuantity.firstElementChild.innerHTML = "1.25L"
                break;
            case 5:
                waterQuantity.style.height = 60 + "%"
                remaining.style.height = 30 + "%"
                waterQuantity.firstElementChild.innerHTML = "1.5L"
                break;
            case 6:
                waterQuantity.style.height = 70 + "%"
                remaining.style.height = 20 + "%"
                waterQuantity.firstElementChild.innerHTML = "1.75L"
                break;
            case 7:
                waterQuantity.style.height = 80 + "%"
                remaining.style.height = 10 + "%"
                waterQuantity.firstElementChild.innerHTML = "2L"
                break;
        }
    });
}