var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var ohwtAPI = require('ohwtAPI');
var {Link} = require('react-router');

var Checklist = React.createClass({

    addFeature : function(e) {
        e.preventDefault(); 
        var newFeature = this.refs.newFeature.value;
        var id = this.props.params.id;
        if (newFeature.length > 0) {
            this.refs.newFeature.value = '';
            var {dispatch} = this.props;
            dispatch(actions.addChecklistItem(id, newFeature));
        } else {
            this.refs.newFeature.focus();
        }
    },
    render : function() {
        var key = 0;
        var {houses, dispatch} = this.props;
        var id = this.props.params.id;
        var house = ohwtAPI.findHouseById(houses, id);
        const HOUSE_URL = "/houseprofile/" + id;
        var checklist = house.checklist;
        return (
            <div className="checklist-main row">
                <div className="small-8 large-8 small-centered large-centered columns">
                	<div className="checklist-container card">
                			<table>
		                    {checklist.map((feature) => {
		                        return (
		                        	<tr className="feature row card-section">
			                            <div key={feature.id}>
			                                <div className="small-4 columns">
			                                    {feature.feature}
			                                </div>

			                                <div className="priority row">
												<div className="small-9 small-centered columns">
												    <ul className="button-group round toggle" data-toggle="buttons-radio">
												      <li>
												        <input type="radio" id="r1" name="r-group" data-toggle="button"/>
												        <label className="button" for="r1">Low</label>
												      </li>
												      <li>
												        <input type="radio" id="r2" name="r-group" data-toggle="button"/>
												        <label className="button" for="r2">Medium</label>
												      </li>
												      <li>
												        <input type="radio" id="r3" name="r-group" data-toggle="button"/>
												        <label className="button" for="r3">High</label>
												      </li>
												    </ul>
											 	</div>
											</div>

			                                <div className="small-2 columns">
			                                    <button className="alert button"onClick={() => {dispatch(actions.deleteFeature(id, feature.id))}}>Delete</button>
			                                </div>
			                            </div>
		                            </tr>
		                        )
		                    })}
		                	</table>
		                

		                <br/>
		                <div>
		                    <form onSubmit={this.addFeature} className="sameLine">
		                        <input type="text" ref="newFeature" placeholder ="Enter a feature for tracking"/>
		                        <button className="button primary"> Add Feature </button>
		                    </form>
		                     <Link to={HOUSE_URL} activeClassName="active-link">
		                        <button className="back button secondary">Go back</button>
		                     </Link>
		                </div>
	                </div>
                </div>
            </div>
        );
    }
})

module.exports = connect(
    (state) => {
        return {
            houses : state.houses
        }
    }
)(Checklist);