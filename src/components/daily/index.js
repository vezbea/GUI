import { h, render, Component } from 'preact';
import style from './style';
import $ from 'jquery';

export default class Daily extends Component {
    constructor(props){
        super(props);
      //  this.parseHourlyWeatherData();
    }


    parseHourlyWeatherData = (parsed_json) => {

        var hr1 = parsed_json['hourly_forecast'][0]['FCTTIME']['hour_padded'];
        var hr2 = parsed_json['hourly_forecast'][1]['FCTTIME']['hour_padded'];
        var hr3 = parsed_json['hourly_forecast'][2]['FCTTIME']['hour_padded'];
        var hr4 = parsed_json['hourly_forecast'][3]['FCTTIME']['hour_padded'];
        var hr5 = parsed_json['hourly_forecast'][4]['FCTTIME']['hour_padded'];
        var hr6 = parsed_json['hourly_forecast'][5]['FCTTIME']['hour_padded'];
        var hr7 = parsed_json['hourly_forecast'][6]['FCTTIME']['hour_padded'];

        var temp1 = parsed_json['hourly_forecast'][0]['temp']['metric'];
        var temp2 = parsed_json['hourly_forecast'][1]['temp']['metric'];
        var temp3 = parsed_json['hourly_forecast'][2]['temp']['metric'];
        var temp4 = parsed_json['hourly_forecast'][3]['temp']['metric'];
        var temp5 = parsed_json['hourly_forecast'][4]['temp']['metric'];
        var temp6 = parsed_json['hourly_forecast'][5]['temp']['metric'];
        var temp7 = parsed_json['hourly_forecast'][6]['temp']['metric'];

    		console.log("Success");
    		// set the states for fields so they could be rendered later on with all the datas saved into states.
    		this.setState({
    					hour1 : hr1,
              hour2 : hr2,
              hour3 : hr3,
              hour4 : hr4,
              hour5 : hr5,
              hour6 : hr6,
              hour7 : hr7,

              t1 : temp1,
              t2 : temp2,
              t3 : temp3,
              t4 : temp4,
              t5 : temp5,
              t6 : temp6,
              t7 : temp7,
    		});
    }

    componentWillMount = () => {
        var url = "http://api.wunderground.com/api/7785277273971137/hourly/q/UK/London.json";
        //fetch API
        $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: this.parseHourlyWeatherData,
              error: function(req, err) { console.log('API call failed ' + err); }
          })
  }

    render (){
        return (
            <div class = {style.daily}>
            <table class = {style.dailyTable}>
                <tr>
                    <th> {this.state.hour1}:00 </th>
                    <th> {this.state.hour2}:00 </th>
                    <th> {this.state.hour3}:00 </th>
                    <th> {this.state.hour4}:00 </th>
                    <th> {this.state.hour5}:00 </th>
                    <th> {this.state.hour6}:00 </th>
                    <th> {this.state.hour7}:00 </th>
                </tr>
                <tr>
                    <td> {this.state.t1}°C </td>
                    <td> {this.state.t2}°C </td>
                    <td> {this.state.t3}°C </td>
                    <td> {this.state.t4}°C </td>
                    <td> {this.state.t5}°C </td>
                    <td> {this.state.t6}°C </td>
                    <td> {this.state.t7}°C </td>
                </tr>
            </table>
            </div>
        )
    }
}
