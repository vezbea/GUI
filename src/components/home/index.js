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


	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/ab4553ed5fce2e14/conditions/q/UK/London.json";
		//fetch API
		$.getJSON(
			url,
			parseResponse = (parsed_json) => {
				var location = parsed_json['location']['city'];
				var temp_c = parsed_json['current_observation']['temp_c'];
				// set states for fields so they could be rendered later on
				this.setState({
					locate: location,
					temp: temp_c
				});
			}
		)
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
											<Greeting />
											<Weatherbar />
										</div>
									</li>

									<li>
										<div class = {style.dailyweekly}>
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


}
