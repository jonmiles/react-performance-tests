var DashboardItem = React.createClass({

	render: function () {

		var style = {
			backgroundColor: this.props.color
		};

		return (
			<div className='item' style={style} ></div>
		);
	}
});

var Dashboard = React.createClass({

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
			<div>
				{items.map(function (d) {
					return <DashboardItem color={d} />
				})}
			</div>
		);
	}
});
