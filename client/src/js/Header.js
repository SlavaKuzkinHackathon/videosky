
import React, { Component } from "react";



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }

    render() {
        const show = (this.state.menu) ? "show" : "";
        return (
            <nav className="navbar navbar-default" role="navigation">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" onClick={this.toggleMenu}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Brand</a>
                </div>

                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}

                <div className={"collapse navbar-collapse " + show}>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                        <li className="dropdown"  onClick={this.toggleMenu}>
                            <a href="#" class="dropdown-toggle" data-toggle="#dropdown">Dropdown <b class="caret"></b></a>
                            <ul className={"dropdown-menu" + show}>
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>{/* <!-- /.navbar-collapse --> */}

            </nav>
        );
    }
}



export default Header;


//<a className='navbar-brand' href='/'>VideoSky</a>