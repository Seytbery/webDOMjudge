//Открытие окна Авторизации getClassNames

export const submitHandler = (event) => {
    event.stopPropagation();
    /* event.preventDefault();*/
    document.querySelector(".modalContainer").classList.add("opened");
    document.querySelector(".loginModal").classList.add("opened");
};

export const closeModal = (event) => {
    event.stopPropagation();
    document.querySelector(".modalContainer").classList.remove("opened")
    document.querySelector(".loginModal").classList.remove("opened");
}
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
