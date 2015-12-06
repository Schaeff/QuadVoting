
AccountSelectorWrapper = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return ({
			accounts: EthAccounts.find().fetch()
		})
	},

	render: function() {
		return (
			<AccountSelector accounts={this.data.accounts} />
		);
	}

});