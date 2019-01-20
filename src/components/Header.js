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
                justifyContent: 'flex-start',
                color: 'white',
            },
            appLogo: {
                animation: 'App-logo-spin infinite 20s linear',
                height: '30px',
            },
        }

        return (
            <header style={style.appHeader}>
                <img src={logo} style={style.appLogo} alt="logo" />
                <p>There's Plenty of Room at the Bottom</p>
            </header>
        )

    }

}

export default Header
