import React from 'react';
import './Test.css';
class Test extends React.Component {
    render() {
        let count_end = this.props.check_count > 5 ? 'area2' : '';      //check count 
        let count_ends = this.props.check_count > 5 ? "Game Over !!" : "Time : " + this.props.check_count;  //check count when ended
        let test = `area ${count_end}`
        return (
            <div>
                <div className={test}>
                    <h1 className={test}>{this.count_end}{count_ends}</h1>
                </div>
            </div>
        )
    }
}
export default Test;