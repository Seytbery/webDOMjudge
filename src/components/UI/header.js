import {submitHandler} from "../../assets/js/custom";

function Header() {
    return (
        <header>
            <img src={"https://www.sut.ru/doci/logo/sut-logo-white.png"} alt={"СПбГУТ)))"}/>
            <div className={'login'}>
                <div id={"loginInfo"}>
                </div>
                <button onClick={submitHandler} id={"loginInfoBtn"}>Войти</button>
            </div>
        </header>
    );
}

export default Header;
