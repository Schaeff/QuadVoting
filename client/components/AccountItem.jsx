let {MenuItem} = ReactBootstrap;

AccountItem = React.createClass({

	render: function() {
		return (
			<MenuItem onClick={this.props.onClick}>{this.props.account}</MenuItem>
		);
	}

});