import React from "react";
import styles from "./Player.module.scss";
class Player extends React.Component {
	componentDidMount = () => {
		console.log("===============");
		console.log(this.e);
		window.temp = this.e;
	};
	render() {
		let { _key, video_id, ticket } = this.props;
		let url = `https://videospider.stream/getvideo?key=${_key}&video_id=${video_id}&ticket=${ticket}`;
		return (
			<div className={styles.main}>
				<iframe
					className={styles.frame}
					src={url}
					title="ye"
					allowFullScreen
					onLoad={this.onLoad}
					ref={e => (this.e = e)}
				/>
			</div>
			// <embed src={url} width="600" height="400" ref={e => (this.e = e)}></embed>
		);
	}
}

export default Player;
