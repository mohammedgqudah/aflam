import axios from "axios";
import { SET_MOVIES_LIST } from "../constants";
import cheerio from "cheerio";

export const SEARCH_MOVIES = query => {
	return async dispatch => {
		let res = await axios
			.get(
				"https://123tvstream.club/watch-the-dark-knight-full-movie-online-on-fmovies-9350.html"
			)
			.then(res => res.data);
		res = await axios
			.get(`http://w.cima4u.tv/?s=${query}`)
			.then(res => res.data);
		let $ = cheerio.load(res);
		let list = $("#dataTab .block").map((_i, i) => {
			return {
				link: $(i)
					.find("a")
					.attr("href"),
				title: $(i)
					.find(".boxtitle")
					.text(),
				img: $(i)
					.find(".img1")
					.css("background-image")
					.replace("url(", "")
					.replace(")", "")
					.replace(/\"/gi, "")
			};
		});
		dispatch({ type: SET_MOVIES_LIST, payload: list.toArray() });
	};
};
export const SEARCH_MOVIES_NEW = query => {
	return async dispatch => {
		let res = await axios
			.get(`https://123tvstream.club/search_movies?s=${query}`)
			.then(res => res.data);
		let $ = cheerio.load(res);
		let list = $(".movie-list > *")
			.filter((_i, i) => {
				return i.name === "div";
			})
			.map((_i, i) => {
				return {
					link: $(i)
						.find("a")
						.attr("href"),
					title: $(i)
						.find(".name")
						.text(),
					img: $(i)
						.find("img")
						.attr("src")
				};
			});
		dispatch({ type: SET_MOVIES_LIST, payload: list.toArray() });
	};
};
function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return "";
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
export const GET_MOVIE_URL = async url => {
	let res = await axios.get(url).then(res => res.data);
	let iframe =
		"https://videospider" + /https:\/\/videospider([^"]+)"/.exec(res)[1];
	const key = getParameterByName("key", iframe);
	const video_id = getParameterByName("video_id", iframe);
	const ticket = getParameterByName("ticket", iframe);
	console.log(key);
	// let $ = cheerio.load(res);
	// let next = $(".leftDetails a").attr("href");
	// res = await axios.get(next).then(res => res.data);
	// window.router.push(
	// 	`/movie/${next
	// 		.split("/")
	// 		.pop()
	// 		.replace(".html", "")}`
	// );
	window.router.push(`/movie/${key}/${video_id}/${ticket}`);
};
