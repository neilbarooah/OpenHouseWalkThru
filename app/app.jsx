var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var UserProfile = require('UserProfile');
var Dashboard = require('Dashboard');
var HouseSummary = require('HouseSummary');
var Score = require('Score');
var HouseProfile = require('HouseProfile');
var AverageDistance = require('AverageDistance');
var Settings = require('Settings');
var Logout = require('Logout');

// Load Foundation
$(document).foundation();

//SCSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path='/userprofile' component={UserProfile}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Route path='/housesummary' component={HouseSummary}></Route>
            <Route path='/score' component={Score}></Route>
            <Route path='/houseprofile' component={HouseProfile}></Route>
            <Route path='/averagedistance' component={AverageDistance}></Route>
            <Route path='/settings' component={Settings}></Route>
            <Route path='/logout' component={Logout}></Route>
        </Route>
    </Router>,
    document.getElementById('app'));