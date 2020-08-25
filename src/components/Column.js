import React from 'react';
import Timer from "./Timer";

import './Column.scss'

class Column extends React.Component {
    render() {
        return (


            <div className={"column"}>

                <div className={"flex"}>
                    <div className={"DJ"}>NOW DJ</div>
                    <div className={"name"}>MASAHIRO</div>
                </div>


                <Timer/>
                <hr/>
            </div>
        )
    }
}

export default Column;
