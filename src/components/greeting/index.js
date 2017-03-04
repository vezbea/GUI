import style from './style';
import { h, render, Component } from 'preact';


export default class Greeting extends Component {
    constructor(props){
        super(props);
        this.state.temp = '10';
        this.state.greeting = 'STAY DRY';
    }


    render() {

        return (

                <div class = {style.greeting}>

                    <p>{this.state.greeting}</p>
                    <p>{this.state.temp}°</p>
                    <div class = {style.sunny}></div>
                </div>

        );
      }
}
