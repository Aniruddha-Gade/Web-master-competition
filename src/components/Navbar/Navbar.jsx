

import logo from "../../assets/logo.webp"
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <div className="logo-line">
                    <div>
                        <img
                            src={logo}
                            className="logo"
                        />
                    </div>
                    <h1 className="text-green-700 logo-text">
                        Makaan
                    </h1>
                </div>

                <div>
                    <ul className="navbar-list">
                        <button>HOME</button>
                        <button>ABOUT</button>
                        <button>PROPERTY</button>
                        <button>PAGES</button>
                        <button>CONTACT</button>
                        <li className="add-property-btn">
                            <button>
                                Add Property
                            </button> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar