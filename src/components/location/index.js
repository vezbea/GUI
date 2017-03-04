import { h, Component } from 'preact';
import style from './style';

export default class Location extends Component {
	render() {
		return (
			<div class={style.location}>
				<h1>Location</h1>
				<p>This is the location component.</p>
			</div>
		);
	}
}
