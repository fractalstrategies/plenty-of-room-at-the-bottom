import React from 'react'
import logo from '../images/logo.svg'
// import PropTypes from 'prop-types'

class Atom extends React.Component {

    state = {}

    render() {

        const style = {
            appLogo: {
                animation: 'App-logo-spin infinite 1s linear',
                height: '80px',
            },
        }

        return (
            <div>
                <img src={logo} style={style.appLogo} alt="logo" />
            </div>
        )

    }

}

// Atom.propTypes = {
// }

export default Atom
