import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Menu from './menu';
import Greeting from './greeting';
import Weatherbar from './weatherbar';
import Home from './home';
import Searchbox from './searchbox';
import Weekly from './weekly';
import SunShade from './sunshade';
import Location from './location';
import Settings from './settings';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">

				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<SunShade path="/sunshade/" />
					<Location path="/location/" />
					<Settings path="/settings/" />
					<Menu path="/menu/" />
					<Greeting path="/greeting/" />
					<Weatherbar path="/weatherbar/" />
					<Searchbox path="/searchbox/" />
				</Router>
			</div>
		);
	}
}
