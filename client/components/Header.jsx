// Header = React.createClass({

// 	renderTokenCount() {
// 		var organization = Organization.at(this.props.organization);
// 		console.log(organization.members(web3.eth.accounts[0]));
// 		if(!organization.members(web3.eth.accounts[0])) {
// 			return(<div></div>)
// 		}
// 		return(
// 			organization.balances(web3.eth.accounts[0]).toString(10) + "£"
// 		)
// 	},

// 	render: function() {
// 		if(!this.props.organization) {
// 			return( <nav></nav>)
// 		}
// 		return (
// 			<nav>
// 			    <ul>
// 			        <li>
// 			            <a href={"/orgs/" + this.props.organization + "/proposals"}>
// 			                <span>Proposals</span>
// 			            </a>
// 			            <a href={"/orgs/" + this.props.organization + "/members"}>
// 			                <span>Members</span>
// 			            </a>
// 			        </li>
// 			        <li>
// 			        	<a>
// 			        		<span>{this.renderTokenCount()}</span>
// 			        	</a>
// 			        </li>
// 			        <li>
// 			        	<AccountSelector />
// 			        </li>	
// 			    </ul>
// 			</nav>
// 		);
// 	}

// });

let {Navbar, NavItem, NavDropdown, Nav, MenuItem} = ReactBootstrap;

Header = React.createClass({

	renderTokenCount() {
		var organization = Organization.at(this.props.organization);
		console.log(organization.members(web3.eth.accounts[0]));
		if(!organization.members(web3.eth.accounts[0])) {
			return(<div></div>)
		}
		return(
			organization.balances(web3.eth.accounts[0]).toString(10) + "£"
		)
	},

	renderWithOrg() {
		console.log("with");
		return(
		<Navbar.Collapse>
	      <Nav>
	        <NavItem eventKey={1} href={"/orgs/" + this.props.organization + "/proposals"}>Proposals</NavItem>
	        <NavItem eventKey={2} href={"/orgs/" + this.props.organization + "/members"}>Members</NavItem>
	      </Nav>
	      <Nav pullRight>
	        <NavItem eventKey={2} href="#">{this.renderTokenCount()}</NavItem>
	        <AccountSelectorWrapper />
	      </Nav>
	    </Navbar.Collapse>
		)
	},


	renderWithoutOrg() {
		return(
		<Navbar.Collapse>
	      <Nav pullRight>
	        <AccountSelectorWrapper />
	      </Nav>
	    </Navbar.Collapse>
		)
	},



	render() {

	var partialHeader = (this.props.organization == '') ? this.renderWithoutOrg() : this.renderWithOrg();

	return(
	  <Navbar inverse>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="/">QuadVote</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    {partialHeader}
  	</Navbar>
  	)
}
});