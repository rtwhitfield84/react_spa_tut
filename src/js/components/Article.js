import React from "react";

export default class extends React.Component {

	render () {
	const { title } = this.props;

	return (
		<div class ="col-md-4">
		<h2>{title}</h2>
		<p>Scenester bushwick gentrify, marfa meditation hot chicken fingerstache mumblecore. Pabst poke cliche gentrify semiotics. Street art normcore viral, franzen tumeric selvage austin tilde. Synth fingerstache bespoke selvage 8-bit twee, kickstarter pop-up. Bushwick cronut etsy, vegan crucifix trust fund pok pok everyday carry ethical heirloom pabst. Readymade forage iPhone, fap banh mi asymmetrical swag fixie XOXO whatever pour-over drinking vinegar four dollar toast. Meh etsy yuccie gastropub, stumptown blog mustache prism.</p>
		<a class= "btn btn-default" href="#">More, More, More!</a>
		</div>
		);
	}
}