let {ListGroup, Input, Row, Col, Panel} = ReactBootstrap;

ProposalList = React.createClass({
	getInitialState: function() {
		return {
			from: {},
			to: {},
			name: "",
			proposalList: []
		};
	},

	onNameChange(event) {
		this.setState({
			name: event.target.value
		});
	},

	onFromChange(event) {
		this.setState({
			from: event.target.value 
		});
	},

	onToChange(event) {
		this.setState({
			to: event.target.value 
		});
	},

	onNewProposal(event) {

		var that = this
		event.preventDefault();

		

		let {organizationAddress} = this.props;
		let {field, name, from, to} = this.state;

		var organization = Organization.at(organizationAddress);
		organization.makeProposal(name, moment(from).unix(), moment(to).unix(), {
						from: web3.eth.accounts[0]
		}, function(err, res) {
			var proposals = [];
			for (i = 0; i < organization.numProposals(); i++) {
				console.log('push')
				proposals.push(Proposal.at(organization.proposals(i)));
			}
			that.setState({
				proposalList: proposals
			});
		});

	},

     renderListElements(proposalList) {
     	let {organizationAddress} = this.props;

     	if(proposalList.length == 0) {
     		return (
			<div>
				<h1>Empty</h1>
			</div>
			)
     	}

     	componentList = proposalList.map(function(proposal, index) {
     		return (
     			<ProposalRow proposal={proposal} key={index} organizationAddress={organizationAddress} />
     		)
     	})

     	return(
	     		<ListGroup>
		     		{componentList}
		     	</ListGroup>
     	)
     },

     componentDidMount: function() {
     	let {organizationAddress} = this.props;

     	var organization = Organization.at(organizationAddress)
		var proposals = [];
		for (i = 0; i < organization.numProposals(); i++) {
			console.log('push')
			proposals.push(Proposal.at(organization.proposals(i)));
		}
		this.setState({
			proposalList: proposals
		});
     },

	render: function() {
		let {field, name, from, to, proposalList} = this.state;		
		let {organizationAddress} = this.props;

		return (
			<Col xs={10} xsOffset={1}>
				<Panel header="New proposal">
					<form onSubmit={this.onNewProposal}>
						<Row>
							<Col xs={5}>
					        <Input type="text" label="Name" placeholder="Subject of the proposal" value={name} onChange={this.onNameChange}></Input>
					        </Col>
					        <Col xs={2}>
					        <Input type="date" label="From" placeholder=" " value={from} onChange={this.onFromChange}></Input>
					        </Col>
					        <Col xs={2}>
					        <Input type="date" label="To" placeholder=" " value={to} onChange={this.onToChange}></Input>
					        </Col>
					        <Col xs={3}>
					        <Input type="submit"></Input>
					        </Col>
				        </Row>
				    </form> 
				</Panel>
				{this.renderListElements(proposalList)}	
			</Col>
		);
	}

});