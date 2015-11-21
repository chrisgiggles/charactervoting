import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar history={this.props.history} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;