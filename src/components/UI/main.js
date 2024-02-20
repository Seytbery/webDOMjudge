import React from 'react';
import Header from "./header";
class Main extends React.Component {

    componentDidMount() {
        //const apiUrl = 'http://91.238.230.106:12345/api/v4/contests';
        const  apiUrl = "http://192.168.1.47:12345/api/v4/users";
        //const q = btoa(`ApiTestReader:ApiTestReader459021`);
        const q = btoa(`test:Qwerty12345`);
        const requestOptions = {
           // mode: 'no-cors',
            method: "GET",
            headers: {
            //    "Content-Type": "application/json",
                "Authorization": `Basic ${q}`,
          //      "Access-Control-Allow-Origin": "*",
            },
        }

        let Head = new Headers();
        Head.set('Content-Type', 'application/json');
        Head.set("Authorization", `Basic ${q}`);
        fetch(apiUrl, {method: "GET", mode: 'cors',
            headers: Head,
        })
            .then((response) => {console.log(response)}/*response.json()*/)
            //.then((data) => console.log('This is your data', data));
        /*fetch(apiUrl, {headers: Head})
            .then((response) => response.json())
            .then((data) => console.log('This is your data', data));*/
    }
    render() {
        return (
            <main>
                <div className="contestStart">
                    <h1>Чемпионат по спортивному программированию</h1>
                    <h2>Начало 24.03.24 в 8:00</h2>
                    <button>Начать соревнование</button>
                </div>
            </main>
        )
    }
}

export default Main;
