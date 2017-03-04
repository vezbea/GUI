import { h, Component } from 'preact';
import style from './style';

export default class SunShade extends Component {
	render() {
		return (
			<div class={style.sunshade}>
				<h1>Sun Shade</h1>
				<p>This is the Sun Shade component.</p>
			</div>
		);
	}
}
