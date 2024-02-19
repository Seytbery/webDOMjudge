//Открытие окна Авторизации getClassNames

export default function submitHandler (event) {
    /* event.preventDefault();*/

    if (event.currentTarget.classList.contains("modalContainer")) {
        document.querySelector(".modalContainer").classList.remove("opened")
        document.querySelector(".loginModal").classList.remove("opened");
    } else {
        document.querySelector(".modalContainer").classList.add("opened");
        document.querySelector(".loginModal").classList.add("opened");
    }
};
/*
document.querySelector("#loginInfoBtn").onclick = (e)=>{
    document.querySelector(".modalContainer").classList.add("opened");
    document.querySelector(".loginModal").classList.add("opened");
}

//Закрытие окна авторизации
document.querySelector(".modalContainer").onclick = (e)=>{
    console.log(e.target.className)
    if (e.target.classList.contains("modalContainer")) {
        document.querySelector(".modalContainer").classList.remove("opened")
        document.querySelector(".loginModal").classList.remove("opened");
    }
}*/
