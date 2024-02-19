import submitHandler from "../assets/js";


/*const submitHandler = (event) => {
   /!* event.preventDefault();*!/
    console.log('event.target.className')
    console.log(event.target.className);

};*/
function Form() {
    return (
       <div className={"modalContainer"}>
           <div className={"loginModal"}>
               <form>
                   <div>
                       <p>Логин</p>
                       <input type="login" name="login" required/>
                   </div>
                   <div>
                       <p>Пароль</p>
                       <input type="password" name="password" required/>
                   </div>
                   <button onClick={submitHandler} type={"submit"}>Войти</button>
               </form>
           </div>
       </div>
    );
}

export default Form;
