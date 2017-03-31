const React = require('react');
const Nav = require('Nav');

var Main = (props) => {
    return (
            <div>
                <Nav />
                <p>React boilerplate</p>
                {props.children}
            </div>
            
        );
}

module.exports = Main;