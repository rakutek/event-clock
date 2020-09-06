import React from 'react';
import Column from "./Column";
import dateToFormatString from './Datefmt'


class Main extends React.Component {
    render() {


        const djlist = [
            // {
            //     name: "MASAHIRO",
            //     time: 30,
            //     start: "2020-08-26T17:10:00+09:00",
            //     end: "2020-08-26T17:21:00+09:00",
            // },
            {
                name: "UNO",
                time: 30,
                start: "2020-09-06T23:26:00+09:00",
                end: "2020-09-06T23:26:00+09:00",
            },
            {
                name: "SUKO",
                time: 30,
                start: "2020-08-26T17:30:00+09:00",
                end: "2020-08-26T17:34:00+09:00"
            },
            {
                name: "MAGOLLA",
                time: 30,
                start: "2020-08-28T17:30:00+09:00"
            },
            {
                name: "RYOSUKE",
                time: 30,
                start: "2020-08-28T17:30:00+09:00"
            },
            {
                name: "GARKO",
                time: 30,
                start: "2020-08-28T17:30:00+09:00"
            },
            {
                name: "TAISUKE",
                time: 30,
                start: "2020-08-28T17:30:00+09:00"
            },
            {
                name: "KENTA",
                time: 30,
                start: "2020-08-28T17:30:00+09:00"
            },
            {
                name: "JOKER",
                time: 30,
                start: "2020-08-28T17:30:00+09:00"
            },
            // {
            //     name: "YOSSHY WIZER",
            //     time: 30,
            //     start: "12:12:12"
            // },
            {
                name: "SENNA",
                time: 30,
                start: "2020-08-28T17:30:00+09:00"
            },
            {
                name: "HIJIRI-X",
                time: 30,
                start: "2020-08-28T17:30:00+09:00"
            },
            {
                name: "KAZUKICHI",
                time: 30,
                start: "2020-08-28T17:30:00+09:00"
            },
            {
                name: "MASAHIRO",
                time: 30,
                start: "2020-08-28T17:30:00+09:00"
            },


        ];

        return (
            <div>


                {
                    djlist.map((dj) => {

                        const date = dateToFormatString(new Date(), '%YYYY%-%MM%-%DD%T%HH%:%mm%:%ss%');


                        if (dj.end < date) {
                            // return (
                            //     <div>
                            //
                            //     </div>
                            // )
                            //
                            // window.location.reload();


                        } else {

                            return (

                                <Column
                                    name={dj.name}
                                    start={dj.start}
                                    // state={"AFTER"}
                                    state={dj.end}
                                />
                            );

                        }


                    })
                }
            </div>
        )


    }
}

export default Main;
