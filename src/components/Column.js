import React from 'react';
import Timer from "./Timer";

import './Column.scss'

class Column extends React.Component {
    render() {

        return (

            <div className={"column"}>
                <hr/>
                <div className={"flex"}>

                    <div className={"DJ"}>{this.props.start.slice(11, 16)}</div>
                    <div className={"name"}>{this.props.name}</div>

                    <Timer state={this.props.state}
                           start={this.props.start}/>

                </div>


            </div>
        )
    }
}

export default Column;
