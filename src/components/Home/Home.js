import React, { Component } from "react";
import styles from "./Home.module.scss";
import { connect } from "react-redux";
import { SEARCH_MOVIES, GET_MOVIE_URL, SEARCH_MOVIES_NEW } from "../../actions/movies";

class Movie extends React.Component {
	render() {
		let { title, link, img } = this.props.movie;
		title = title.length > 30 ? title.slice(0, 30) + "..." : title;
		return (
			<div
				className={styles.movie}
				onClick={() => {
					GET_MOVIE_URL(link);
				}}
			>
				<img src={img} alt="cover" />
				<span className={styles.title}>{title}</span>
			</div>
		);
	}
}
@connect(state => ({ movies: state.movies }))
class Home extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = { search: "" };
	}
	onChange = ({ target }) => {
		this.setState({ search: target.value });
	};
	onKeyPress = ({ key }) => {
		let { search } = this.state;
		if (key === "Enter") {
			this.props.dispatch(SEARCH_MOVIES_NEW(search));
		}
	};
	render() {
		let { search } = this.state;
		let { movies } = this.props;
		let { loading, list } = movies;
		return (
			<div className={styles.Home}>
				<div className={styles.search_con}>
					<input
						autoFocus
						type="text"
						value={search}
						onChange={this.onChange}
						onKeyPress={this.onKeyPress}
					/>
				</div>
				<div className={styles.main}>
					{loading
						? "loading...!"
						: list.map((i, idx) => <Movie key={idx} movie={i} />)}
				</div>
			</div>
		);
	}
}

export default Home;
