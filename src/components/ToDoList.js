import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import ListIcon from '@material-ui/icons/List'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
// import PropTypes from 'prop-types'

class ToDoList extends React.Component {

    state = {
        categories: {
            'canvas': [
                '2d now, 3d later',
                'scale display, controls',
                'scale comparisons: human, cat, ant, tick, cell, transistor/protein, molecule, atom',
                'geometry, leverage, chemical bonding, statistical mechanics',
                'heat, stress, current',
            ],
            'time': [
                'display, now',
                'timer, start, stop, reset, repeat',
                'rate, rate adjustment',
            ],
            'atom': [
                'protons, neutrons, electrons, spin, orbital fields',
                'color, radius, label',
                'quantum properties',
            ],
            'molecule': [
                'atoms, bonds',
                'atom arrangement, bond shape/color, label',
                'shape, size, properties',
                'conductivity, strength, ',
            ],
            'tables': [
                'common orbital fields',
                'common atoms',
                'common molecules',
                'common materials',
                    'diamond fiber',
                    'sapphire',
                    'superconductor',
            ],
            'power supply': [
                'material, shape, size, mounting',
                'amps, volts, watts',
                'rate, control',
                'charge, discharge',
                'quantized energy levels/packets',
            ],
            'light source': [
                'direction, wavelength, luminosity',
                'intensity, electrons, power',
            ],
            'lithography': [
                'steps, chemicals, output',
                'tests',
            ],
            'replicator': [
                'engines of creation, mechanical self-replicating cell',
                'overall dimensions, bracing',
                'pure material input, properties, positioning',
                'pure output, properties, positioning',
                'power, continuous processing',
                'part-making',
                'instructions written into the walls of the replicator',
                'scaffold/frame, vascular/corridors, ',
                'assembler',
                'disassembler',
            ],
            'amino acids': [
                'atoms, molecules, bonds',
                'size, shape, color, label',
            ],
            'proteins': [
                'base pairs',
            ],
            'nanomachines': [
                'tests',
                'repairs',
            ],
            'nanocircuits': [
                'nanoelectronic switches',
                'mechanical transistor',
                'circuits of seven atoms',
            ],
            'nanocomputer': [
                'polymer molecule to code information like punched paper tape',
                'reader to translate patterns to arm motions',
                'water cooling',
            ],
            'other': [
                'cell repair machine',
                'photosynthesis',
                'lightsail',
                'spacesuit',
                'rocket engine',
                'circulatory system',
            ],
            'build roadmap': [
                '1. construct small set of tools',
                '2. using this, construct smaller set of tools',
                '3. improve accuracy',
                '4. #2',
            ],
        },
        openCategories: [],
    }

    componentDidMount() {
        this.setState(prevState => {
            return {
                openCategories: Object.keys(prevState.categories).map(item => false)
            }
        })
    }

    handleCategoryClick = (i) => {
        this.setState(prevState => {
            prevState.openCategories[i] = !prevState.openCategories[i]
            return prevState
        })
    }

    render() {

        const listCategories = Object.keys(this.state.categories).map((category, i) => (
            <div key={i}>
                <ListItem button onClick={()=>{this.handleCategoryClick(i)}}>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <b>{category}</b>
                    </ListItemText>
                </ListItem>
                <Collapse in={this.state.openCategories[i]}>
                    <List>
                        {this.state.categories[category].map(item => (
                            <ListItem key={item}>
                                <ListItemIcon>
                                    <CheckBoxOutlineBlankIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    {item}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </div>
        ))

        return (
            <List subheader='Pending Components' style={{ width: '600px', marginLeft: '30%' }}>
                {listCategories}
            </List>
        )

    }

}

// ToDoList.propTypes = {
// }

export default ToDoList
