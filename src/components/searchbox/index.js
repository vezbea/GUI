import { h, render, Component } from 'preact';
import style from './style';

export default class Searchbox extends Component {

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div class = {style.search}>
                <input type="text" id="search" placeholder="Search something..." />
                <div id="close-icon"></div>
            </div>
        )
    }
}
