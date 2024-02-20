import {closeModal} from "../../assets/js/custom";
import React from 'react';

/*const submitHandler = (event) => {
   /!* event.preventDefault();*!/
    console.log('event.target.className')
    console.log(event.target.className);

};*/

class Form extends React.Component {
    render() {
        return (
            <div className={"modalContainer"}>
                <div className={"loginModal"}>
                    <svg onClick={closeModal} className="close-icon" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM9.87896 8.81803C9.58607 8.52513 9.1112 8.52513 8.8183 8.81803C8.52541 9.11092 8.52541 9.5858 8.8183 9.87869L10.9396 12L8.81831 14.1213C8.52542 14.4142 8.52542 14.8891 8.81831 15.182C9.1112 15.4749 9.58608 15.4749 9.87897 15.182L12.0003 13.0607L14.1216 15.182C14.4145 15.4749 14.8894 15.4749 15.1823 15.182C15.4752 14.8891 15.4752 14.4142 15.1823 14.1213L13.0609 12L15.1823 9.87869C15.4752 9.5858 15.4752 9.11092 15.1823 8.81803C14.8894 8.52513 14.4145 8.52513 14.1216 8.81803L12.0003 10.9394L9.87896 8.81803Z"
                                  data-darkreader-inline-fill=""></path>
                        </g>
                    </svg>
                    <form>
                        <div>
                            <p>Логин</p>
                            <input autoComplete="off" type="login" name="login" required/>
                        </div>
                        {/*<div>
                       <p>Пароль</p>
                       <input type="password" name="password" required/>
                   </div>*/}
                        <button type={"submit"}>Войти</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Form;
