let {Col, Row, Grid, ResponsiveEmbed} = ReactBootstrap 

Welcome = React.createClass({

	render: function() {
		return (
			<Grid style={{textAlign:"center"}}>
				<Row xs={10} xsOffset={1}>
					<Row>
						<Col>
							<h1>{subtitle}</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<iframe class="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>
						</Col>
					</Row>
					<Row>
						<h3>{headp}</h3>
						<p>{par}</p>
					</Row>
				</Row>
			</Grid>
		);
	}

});

var subtitle = "(Vote)² is a Quadratic Voting system built on top of Ethereum."
var call2action = "You can setup a secured quadratic voting system for your organization within 45 seconds.";
var headp = "About Quadratic Voting"
var par = "Quadratic voting is a procedure that a group of people can use to choose a collective good for themselves.&br Each person can buy votes for or against a proposal by paying into a fund the square of the number of votes that they buy. The money is then returned to voters on a per capita basis.\n Weyl and Lalley proved that the collective decision rapidly approximates efficiency as the number of voters increases. \nBy contrast, no existant voting procedure is efficient. Majority rule based on one-person-one-vote notoriously results in tyranny of the majority – a large number of people who care only a little about an outcome prevail over a minority that cares passionately, resulting in a reduction of aggregate welfare."