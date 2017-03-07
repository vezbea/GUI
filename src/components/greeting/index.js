import style from './style';
import { h, render, Component } from 'preact';


export default class Greeting extends Component {
    constructor(props){
        super(props);

    }


    render() {

        return (

                <div class = {style.greeting}>

                    <p>{this.props.greeting}</p>
                    <p>{this.props.temp}°</p>
                    <div class = {style.sunny}></div>
                </div>

        );
      }
}
