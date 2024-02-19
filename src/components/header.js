import submitHandler from "../assets/js";

function Header() {
    return (
        <header>
            <img src={"https://www.sut.ru/doci/logo/sut-logo-white.png"} alt={"СПбГУТ)))"}/>
            <div className={'login'}>
                <div id={"loginInfo"}>
                    Колобкова-Крупчатникова Елена-Кристина Агилеровна АБВ-02
                </div>
                <button onClick={submitHandler} id={"loginInfoBtn"}>Выйти</button>
            </div>
        </header>
    );
}

export default Header;
