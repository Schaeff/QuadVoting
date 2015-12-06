let {Col, Row, Grid, ResponsiveEmbed, Button} = ReactBootstrap 

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
							<iframe style={{margin: "30px"}} width="640" height="350" className="embed-responsive-item" src="//www.youtube.com/embed/xz9dGRs7FOQ"></iframe>
						</Col>
					</Row>
					<Row>
						<Button href="/" bsSize="large">Set up a secured Quadratic Voting system in 45 seconds</Button>
					</Row>
					<Row>
						<h3>{headp}</h3>
						<p style={{fontSize: 20}}><a target="_blank" href={target}>{link}</a>{par}</p>
					</Row>
				</Row>
			</Grid>
		);
	}

});

var target = "http://ssrn.stanford.edu/delivery.php?ID=355025009087122066127014094124072067014057084078086094127025004100031097068075098002097006055007116104052101095093028083028007112073005049029104107098124108005030011081092067025111082086069070023112097120006065077001021115109122014082097078115027083091&EXT=pdf"
var subtitle = "(Vote)² is a Quadratic Voting system built on top of Ethereum."
var call2action = "You can setup a secured quadratic voting system for your organization within 45 seconds.";
var headp = "About Quadratic Voting"
var link = "Quadratic Voting"
var par = " is a procedure that a group of people can use to choose a collective good for themselves.&br Each person can buy votes for or against a proposal by paying into a fund the square of the number of votes that they buy. The money is then returned to voters on a per capita basis.\n Weyl and Lalley proved that the collective decision rapidly approximates efficiency as the number of voters increases. \nBy contrast, no existant voting procedure is efficient. Majority rule based on one-person-one-vote notoriously results in tyranny of the majority – a large number of people who care only a little about an outcome prevail over a minority that cares passionately, resulting in a reduction of aggregate welfare."