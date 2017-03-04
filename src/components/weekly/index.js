import { h, render, Component } from 'preact';
import style from './style';
export default class Weekly extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div class = {style.weekly}>
                <table class = {style.weeklyTable}>
                    <tr class = {style.topRow}>
                        <th>Monday</th>
                        <td>7°C - 10°C</td>
                        <td> 40% </td>
                    </tr>
                    <tr>
                        <th>Tuesday</th>
                        <td>8°C - 12°C</td>
                        <td> 25% </td>
                    </tr>
                    <tr>
                        <th>Wednesday</th>
                        <td>5°C - 7°C</td>
                        <td> 15% </td>
                    </tr>
                    <tr>
                        <th>Thursday</th>
                        <td>7°C - 9°C</td>
                        <td> 40% </td>
                    </tr>
                    <tr>
                        <th>Friday</th>
                        <td>8°C - 10°C</td>
                        <td> 80% </td>
                    </tr>
                    <tr>
                        <th>Saturday</th>
                        <td>7°C - 15°C</td>
                        <td> 60% </td>
                    </tr>
                    <tr>
                        <th>Sunday</th>
                        <td>7°C - 11°C</td>
                        <td> 60% </td>
                    </tr>
                </table>
            </div>
        )
    }
}
