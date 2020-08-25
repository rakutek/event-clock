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
                start: "12:12:12"
            },
            {
                name: "SUKO",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "MAGOLLA",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "RYOSUKE",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "GARKO",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "TAISUKE",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "KENTA",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "JOKER",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "YOSSHY WIZER",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "SENNA",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "HIJIRI-X",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "KAZUKICHI",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "MASAHIRO",
                time: 30,
                start: "12:12:12"
            },


        ];

        return (
            <dic>

                <div className={"column"}>
                    <hr/>
                    <div className={"flex"}>

                        <div className={"DJ"}>NOW</div>
                        <div className={"name"}>MASAHIRO</div>

                        <Timer/>
                    </div>


                </div>


                {
                    djlist.map((dj) => {
                        return (

                            <Column
                                name={dj.name}
                            />
                        );
                    })
                }
            </dic>
        )


    }
}

export default Main;
