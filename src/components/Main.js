import React from 'react';
import Column from "./Column";
import Timer from "./Timer";

class Main extends React.Component {
    render() {


        const djlist = [
            // {
            //     name: "MASAHIRO",
            //     time: 30,
            //     start: "12:12:12"
            // },
            {
                name: "UNO",
                time: 30,
                start: "2020-08-26T03:30:00+09:00"
            },
            {
                name: "SUKO",
                time: 30,
                start: "2020-08-26T04:00:00+09:00"
            },
            {
                name: "MAGOLLA",
                time: 30,
                start: "2020-08-26T04:30:00+09:00"
            },
            {
                name: "RYOSUKE",
                time: 30,
                start: "2020-08-26T05:00:00+09:00"
            },
            {
                name: "GARKO",
                time: 30,
                start: "2020-08-26T05:30:00+09:00"
            },
            {
                name: "TAISUKE",
                time: 30,
                start: "2020-08-26T06:00:00+09:00"
            },
            {
                name: "KENTA",
                time: 30,
                start: "2020-08-26T06:30:00+09:00"
            },
            {
                name: "JOKER",
                time: 30,
                start: "2020-08-26T07:00:00+09:00"
            },
            // {
            //     name: "YOSSHY WIZER",
            //     time: 30,
            //     start: "12:12:12"
            // },
            {
                name: "SENNA",
                time: 30,
                start: "2020-08-26T07:30:00+09:00"
            },
            {
                name: "HIJIRI-X",
                time: 30,
                start: "2020-08-26T08:00:00+09:00"
            },
            {
                name: "KAZUKICHI",
                time: 30,
                start: "2020-08-26T08:30:00+09:00"
            },
            {
                name: "MASAHIRO",
                time: 30,
                start: "2020-08-26T09:00:00+09:00"
            },


        ];

        return (
            <dic>

                <div className={"column"}>
                    <hr/>
                    <div className={"flex"}>

                        <div className={"DJ"}>NOW</div>
                        <div className={"name"}>MASAHIRO</div>

                        <Timer date={`2020-08-26T03:00:00+09:00`}
                               state={"REMAIN"}/>
                    </div>


                </div>


                {
                    djlist.map((dj) => {
                        return (

                            <Column
                                name={dj.name}
                                start={dj.start}
                                steate={"AFTER"}
                            />
                        );
                    })
                }
            </dic>
        )


    }
}

export default Main;
