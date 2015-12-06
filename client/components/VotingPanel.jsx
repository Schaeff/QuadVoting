let {Panel, Button, Input, Row, Col} = ReactBootstrap;

VotingPanel = React.createClass({

	getInitialState: function() {
		return {
			weight: 1 
		};
	},

	vote(choice) {
		let {proposalAddress, organizationAddress} = this.props;
		let {weight} = this.state;
		var organization = Organization.at(organizationAddress);
		organization.Vote().watch(function(err, res) {
			if (err) {
				console.log(err)
			} else {
				console.log(res)
			}
		})
		console.log("choice:", choice)
		console.log("weight:", weight)
		organization.vote(choice, weight, proposalAddress, {from: web3.eth.accounts[0]}, function(err, val) {
			console.log('err',err)
			console.log('val',val)
		})
	},

	onChangeWeight(event) {
		this.setState({
			weight: Math.max(1, event.target.value)
		});
	},

	onYes(event) {
		event.preventDefault();
		this.vote(true)
	},

	onNo(event) {
		event.preventDefault();
		this.vote(false)
	},



	render() {

		let {weight} = this.state;
		let {proposalAddress, organizationAddress} = this.props;

		console.log("get contract");
		var proposal = Proposal.at(proposalAddress);
		var organization = Organization.at(organizationAddress);
		var disabled = (weight > Number(organization.balances(web3.eth.accounts[0]).toString(10)))

		return (
			<Col xs={6} xsOffset={3}>
				<Panel header={proposal.name()}>
					<Row>
						<Col xs={3} xsOffset={3}>
							<Input label="Weight" type="number" value={weight} onChange={this.onChangeWeight} />
						</Col>
						<Col xs={3}>
							<Input label="Cost" type="number" value={weight*weight} disabled={true} />
						</Col>
					</Row>
					<Row>
						<Col xsOffset={3} xs={3}>
							<Button onClick={this.onYes} disabled={disabled} block>For</Button>
						</Col>
						<Col xs={3}>
							<Button onClick={this.onNo} disabled={disabled} block>Against</Button>
						</Col>
					</Row>
				</Panel>
			</Col>
		);
	}

});