import { h, render, Component } from 'preact';
import style from './style';

export default class Weatherbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class = {style.todayWeather}>
                <div class = {style.sunrise}>
                    <p>SUNRISE: </p>
                    <p>SUNSET: </p>
                </div>
                <div class = {style.visibility}>
                    <p>VISIBILITY: </p>
                </div>
                <div class = {style.cloud}>
                    <p>CLOUD COVER: </p>
                </div>
                <div class = {style.sData}>
                    <p>7:40</p>
                    <p>17:40</p>
                    <p>6 mi</p>
                    <p>70%</p>
                </div>
            </div>
        )
    }
}
