import React from 'react';
import Column from "./Column";

class Main extends React.Component {
    render() {

        const djlist = [
            {
                name: "MASAHIRO",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "TAKUMU",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "EGUCHI",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "TAISUKE",
                time: 30,
                start: "12:12:12"
            },
            {
                name: "RAIN",
                time: 30,
                start: "12:12:12"
            },


        ];

        return (
            <dic>

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
