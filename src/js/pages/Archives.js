import React from "react";

export default class Archives extends React.Component {
	render() {
		console.log("this.props", this.props);
		const { query } = this.props.location;
		const { params } = this.props;
		const { article } = params;
		const { date, filter } = query;

		const Articles = [
		  "Slow-carb af",
		  "Franzen Wayfarers",
		  "Bicycle Rights Hammock",
		  "Master Cleanse",
		  "Hashtag Meggings",
		  "Three Wolf Moon",
		  "Dreamcatcher",
		  "La Croix",
		  "PBR",
		  "Semiotics Cronut",
		  "Thundercats",
		  "Hoodie Bushwick",
		].map((title, i) => <Article key={i} title={title}/> );
		return (
			<div>
			<h1>Archives</h1>
			article: {article}, date: {date}, filter: {filter}
			<div class="row">{Articles}</div>
			</div>
		);
	}
}