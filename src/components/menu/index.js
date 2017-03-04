import style from './style';
import { h, render, Component } from 'preact';

export default class Menu extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class = { style.menu }>
                <span >

                    <div class={style.menuline}></div>
                    <div class={style.menuline}></div>
                    <div class={style.menuline}></div>

                </span>
                <div class= {style.dropdownContent}>

                    <p>SETTINGS</p>

                </div>
            </div>
        )
    }
}
