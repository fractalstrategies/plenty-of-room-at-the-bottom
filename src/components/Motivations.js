import React from 'react'
// import PropTypes from 'prop-types'

class Motivations extends React.Component {

    state = {}

    render() {

        return (
            <div>
                <h3>Motivations</h3>
                <ul>
                    <li>Small systems can move or stop more quickly than larger systems due to low mechanical inertia. They are thus ideal for precision movements and for rapid actuation.</li>
                    <li>Miniaturized systems encounter less thermal distortion and mechanical vibration due to low mass.</li>
                    <li>Miniaturized devices are particularly suited for biomedical and aerospace applications due to their minute sizes.</li>
                    <li>Small systems have higher dimensional stability at high temperature because of low thermal expansion.</li>
                    <li>Smaller size of the systems means less space requirements. This feature allows the packaging of more functional components in a single device.</li>
                    <li>Less material requirements in smaller systems mean low cost of production and transportation.</li>
                    <li>Being small, they can be mass-produced in batches.</li>
                </ul>
            </div>
        )

    }

}

// Motivations.propTypes = {
// }

export default Motivations
