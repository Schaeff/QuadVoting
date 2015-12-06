let {ListGroupItem, Grid, Row, Col, Button} = ReactBootstrap

ProposalRow = React.createClass({

	onVote() {
		FlowRouter.go('/orgs/' + this.props.organizationAddress + '/proposals/' + this.props.proposal.address)
	},

	onCloseVote(event) {
		event.preventDefault();
		let {proposal, organizationAddress} = this.props;

		var organization = Organization.at(organizationAddress);

		organization.getResult(proposal.address, {from: web3.eth.accounts[0]});
	},

	render: function() {

		let {proposal, organizationAddress} = this.props;
		var organization = Organization.at(organizationAddress);
		var rawResult = organization.propResults(proposal.address).toString();
		var color = ""
		if(rawResult !== "-1") {
			color = (rawResult === "1") ? "success" : "danger";
		}

		var close = (<Button onClick={this.onCloseVote} disabled={now <= proposal.endTime()} block>Close</Button>)


		var now = Math.floor(Date.now() / 1000);

		return (
			<ListGroupItem bsStyle={color} header={proposal.name()}>
				<Grid>
					<Row>
						<Col xs={2} xsOffset={8}>
							{moment.unix(proposal.startTime()).format("MM/DD/YY")}
						</Col>
						<Col xs={2}>
							{moment.unix(proposal.endTime()).format("MM/DD/YY")}
						</Col>
					</Row>
					<Row>
						<Col xs={1} xsOffset={8}>
							{close}
						</Col>
						<Col xs={1}>
						</Col>
						<Col xs={1}>
							<Button onClick={this.onVote} bsStyle="success" value="Vote" block disabled={!(now >= proposal.startTime() && now < proposal.endTime())}>Vote</Button>
						</Col>
					</Row>
				</Grid>
			</ListGroupItem>
		);
	}

});