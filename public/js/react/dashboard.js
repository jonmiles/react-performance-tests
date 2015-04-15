var DashboardItem = React.createClass({displayName: "DashboardItem",

	render: function () {

		var style = {
			backgroundColor: this.props.color
		};

		return (
			React.createElement("div", {className: "item", style: style}, 
				React.createElement("label", null, this.props.val, "%")
			)
		);
	}
});

var Dashboard = React.createClass({displayName: "Dashboard",

	getInitialState: function () {
		return {
			elapsed: 0
		};
	},

	update: function () {
		this.props.factory.update();
		this.setState({ elapsed: this.state.elapsed + 1 });
	},

	render: function() {
		
		var items = this.props.factory.data;

		return (
			React.createElement("div", null, 
				items.map(function (d) {
					return React.createElement(DashboardItem, {color: d.color, val: d.val})
				})
			)
		);
	}
});
