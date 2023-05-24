import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {
    
    const navigate = useNavigate();

    // const handleLogOut = () => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('user');
    //     localStorage.removeItem('Client');
    // }

  return (
    <nav className="navbar navbar-expand-md navbar-main navbar-dark bg-dark p-2">
            <div className="container-fluid">

                <Link
                    className="navbar-brand"
                    to="/home" 
                >
                    Archivo Maestro
                </Link>
                <button 
                    className="navbar-toggler collapsed"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink
                            className={ ({isActive}) => 
                                `nav-item nav-link ${isActive ? 'active' : ''}` 
                            }
                            to="/home"
                        >
                            Archivo Maestro
                        </NavLink>

                        <NavLink
                            className={ ({isActive}) => 
                                `nav-item nav-link ${isActive ? 'active' : ''}` 
                            }
                            to="/daily-notes"
                        >
                            Archivo Notas Diarias
                        </NavLink>

                        <NavLink
                            className={ ({isActive}) => 
                                `nav-item nav-link ${isActive ? 'active' : ''}` 
                            }
                            to="/attached-file"
                        >
                            Archivo Anexo
                        </NavLink>
                       
                    </div>
                    {/* <div className="navbar-collapse navbar-nav w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">
                            <NavLink
                                activeClassName="nav-item nav-link"
                                className="nav-item nav-link p-menuitem-icon pi pi-power-off textIcon" 
                                exact
                                to='/login'
                                onClick={ handleLogOut }
                            >
                                <br />Cerrar sesión
                            </NavLink>
                        </ul>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
