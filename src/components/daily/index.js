import { h, render, Component } from 'preact';
import style from './style';
export default class Daily extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div class = {style.daily}>
                <table class = {style.dailyTable}>
                    <tr>
                        <th> 18:00 </th>
                        <th> 20:00 </th>
                        <th> 22:00 </th>
                        <th> 00:00 </th>
                        <th> 02:00 </th>
                        <th> 04:00 </th>
                        <th> 06:00 </th>
                    </tr>
                    <tr>
                        <td> 7°C </td>
                        <td> 6°C </td>
                        <td> 4°C </td>
                        <td> 4°C </td>
                        <td> 2°C </td>
                        <td> 3°C </td>
                        <td> 4°C </td>
                    </tr>
                </table>
            </div>
        )
    }
}
