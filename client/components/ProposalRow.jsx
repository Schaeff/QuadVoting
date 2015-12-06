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
		var result = organization.propResults(proposal.address).toString(10)

		var now = Math.floor(Date.now() / 1000);

		return (
			<div style={{"display":"inline-flex"}}>
				<div className="col-6 fixed">
					<h3>{proposal.name()}</h3>
				</div>
				<div className="col-2 fixed">
					<h3>{proposal.nbVoters().toString()}</h3>
				</div>
				<div className="col-3">
					{moment.unix(proposal.startTime()).format("MM/DD/YY")}
				</div>
				<div className="col-3">
					{moment.unix(proposal.endTime()).format("MM/DD/YY")}
				</div>
				<div className="col-2">
					{(result == -1) ? "" : result}
				</div>
				<div className="col-3">
					<input type="button" onClick={this.onCloseVote} value="Close" disabled={now <= proposal.endTime()} />
				</div>
				<div className="col-3">
					<input type="button" onClick={this.onVote} value="Vote" disabled={!(now >= proposal.startTime() && now < proposal.endTime())} />
				</div>
			</div>
		);
	}

});