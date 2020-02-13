import React from "react";
import styles from "./App.module.scss";
import Home from "./components/Home/Home.js";
import Player from "./components/Player/Player.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className={styles.App}>
			<Router>
				<Switch>
					<Route
						path="/"
						exact
						render={({ history }) => {
							window.router = history;
							return <Home />;
						}}
					/>
					<Route
						path="/movie/:key/:video_id/:ticket"
						render={({ match }) => {
							return (
								<Player
									_key={match.params.key}
									video_id={match.params.video_id}
									ticket={match.params.ticket}
								/>
							);
						}}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
