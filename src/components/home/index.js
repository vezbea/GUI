import { h, render, Component } from 'preact';
import style from './style';
import Menu from '../menu';
import Greeting from '../greeting';
import Weatherbar from '../weatherbar';
import Searchbox from '../searchbox';
import Weekly from '../weekly';
import Daily from '../daily';
import $ from 'jquery';


export default class Home extends Component {

	constructor(props){
		super(props);
	}


	componentWillMount = () => {
var url = "http://api.wunderground.com/api/7785277273971137/geolookup/conditions/forecast/q/UK/London.json";
//fetch API
$.ajax({
            url: url,
            dataType: "jsonp",
            success: this.parseResponse,
            error: function(req, err) { console.log('API call failed ' + err); }
        })
}

	render() {
			//const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
			return (
					<div class ={ style.container }>

						<div class={style.home}>
							<div class = {style.overflow}>
								<ul>
									<li>
										<div class = {style.header}>
											<Menu />
											<Searchbox />
										</div>
										<div class = {style.forecast}>
											<Greeting temp = {this.state.temp}/>
											<Weatherbar />
										</div>
									</li>

									<li>
										<div class = {style.dailyweekly }>
											<div class = {style.daily}>
												<Daily />
											</div>
												<div class = {style.weekly}>
													<Weekly />
												</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

		);
	}

parseResponse = (parsed_json) => {
		var city = parsed_json['current_observation']['display_location']['city'];
		var country = parsed_json['current_observation']['display_location']['country'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];

		console.log("Success");
		// set the states for fields so they could be rendered later on with all the datas saved into states.
		this.setState({
					currentCity: city,
					currentCountry: country,
					temp: temp_c,
					cond: conditions
		});
}


}
