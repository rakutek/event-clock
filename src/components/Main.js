import React from 'react';
import Column from "./Column";

class Main extends React.Component {
    render() {


        const djlist = [
            {
                name: "MASAHIRO",
                time: 30,
                start: "2020-08-26T12:30:00+09:00",
                end: "2020-08-26T14:00:00+09:00",
            },
            {
                name: "UNO",
                time: 30,
                start: "2020-08-28T11:30:00+09:00",
                end: "2020-08-26T14:00:00+09:00",
            },
            // {
            //     name: "SUKO",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },
            // {
            //     name: "MAGOLLA",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },
            // {
            //     name: "RYOSUKE",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },
            // {
            //     name: "GARKO",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },
            // {
            //     name: "TAISUKE",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },
            // {
            //     name: "KENTA",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },
            // {
            //     name: "JOKER",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },
            // // {
            // //     name: "YOSSHY WIZER",
            // //     time: 30,
            // //     start: "12:12:12"
            // // },
            // {
            //     name: "SENNA",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },
            // {
            //     name: "HIJIRI-X",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },
            // {
            //     name: "KAZUKICHI",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },
            // {
            //     name: "MASAHIRO",
            //     time: 30,
            //     start: "2020-08-28T17:30:00+09:00"
            // },


        ];

        return (
            <div>


                {
                    djlist.map((dj) => {
                        return (

                            <Column
                                name={dj.name}
                                start={dj.start}
                                // state={"AFTER"}
                                state={dj.end}
                            />
                        );
                    })
                }
            </div>
        )


    }
}

export default Main;
