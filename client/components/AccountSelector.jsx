let {Navbar, NavItem, NavDropdown, Nav, MenuItem} = ReactBootstrap;

AccountSelector = React.createClass({

	mixins: [LocalStorageMixin],

	getInitialState: function() {
		return {
			currentAccount: this.props.accounts[0] 
		};
	},

	onClickAccount(id, event) {
		event.preventDefault();
		console.log(event);
		console.log(id)
		this.setState({
			currentAccount: this.props.accounts[id]
		});
	},

	renderAccountItems() {

		let {accounts} = this.props;

		var that = this;

		accountItems = accounts.map(function(account, id) {
			return(
				<AccountItem key={id} account={account.address} onClick={that.onClickAccount.bind(that,id)} />
			)
		})
		return accountItems;
	},

	render() {
		let {accounts} = this.props;
		let {currentAccount} = this.state;

		return(
			<NavDropdown eventKey={3} title={currentAccount.address} id="basic-nav-dropdown">
	          {this.renderAccountItems()}
	        </NavDropdown>
		)
	}
});

