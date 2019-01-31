import React from 'react'
import logo from '../images/logo.svg'

class Header extends React.Component {

    render() {

        const style = {
            appHeader: {
                backgroundColor: '#282c34',
                minHeight: '50px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'white',
            },
            appLogo: {
                animation: 'App-logo-spin infinite 1s linear',
                height: '30px',
            },
        }

        return (
            <header style={style.appHeader}>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <img src={logo} style={style.appLogo} alt="logo" />
                    <p>There's Plenty of Room at the Bottom</p>
                </div>
                <p>a simulation of nanotechnology</p>
                <div></div><div></div>
            </header>
        )

    }

}

export default Header
