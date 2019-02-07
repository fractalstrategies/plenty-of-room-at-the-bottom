import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Checkbox, Button } from '@material-ui/core'
import ListIcon from '@material-ui/icons/List'

class ToDoList extends React.Component {

    state = {
        categories: {
            'canvas': [
                { task: '3d scene, camera, renderer', completed: true },
                { task: 'scale display, controls', completed: false },
                { task: 'scale comparisons: human, cat, ant, tick, cell, transistor/protein, molecule, atom', completed: false },
                { task: 'geometry, leverage, chemical bonding, statistical mechanics', completed: false },
                { task: 'heat, stress, current', completed: false },
            ],
            'time': [
                { task: 'display, now', completed: false },
                { task: 'timer, start, stop, reset, repeat', completed: false },
                { task: 'rate, rate adjustment', completed: false },
            ],
            'atom': [
                { task: 'protons, neutrons, electrons, spin, orbital fields', completed: false },
                { task: 'color, radius, label', completed: false },
                { task: 'quantum properties', completed: false },
                { task: 'force needed to free one atom from its bond to other atoms by inter-molecular forces', completed: false },
            ],
            'molecule': [
                { task: 'atoms, bonds', completed: false },
                { task: 'atom arrangement, bond shape/color, label', completed: false },
                { task: 'shape, size, properties', completed: false },
                { task: 'conductivity, strength, ', completed: false },
            ],
            'tables': [
                { task: 'common orbital fields', completed: false },
                { task: 'common atoms', completed: false },
                { task: 'common molecules', completed: false },
                { task: 'common materials', completed: false },
                { task: 'diamond fiber', completed: false },
                { task: 'sapphire', completed: false },
                { task: 'superconductor', completed: false },
            ],
            'power supply': [
                { task: 'material, shape, size, mounting', completed: false },
                { task: 'amps, volts, watts', completed: false },
                { task: 'rate, control', completed: false },
                { task: 'charge, discharge', completed: false },
                { task: 'quantized energy levels/packets', completed: false },
            ],
            'light source': [
                { task: 'direction, wavelength, luminosity', completed: false },
                { task: 'intensity, electrons, power', completed: false },
            ],
            'scanning electron nanoscope': [
                { task: 'column for electron beam generation', completed: false },
                { task: 'specimen chamber', completed: false },
                { task: 'two stage high vacuum pump', completed: false },
                { task: 'monitor, control', completed: false },
                { task: 'cover plate, stage, sample holder', completed: false },
                { task: 'high voltage', completed: false },
                { task: 'thermionic cathode / negative pole of source', completed: false },
                { task: 'anode / metallic disk with a central borehole / positive pole of source', completed: false },
                { task: 'electromagnetic lens', completed: false },
                { task: 'electromagnetic deflection', completed: false },
                { task: 'primary electron flow / detector', completed: false },
                { task: 'point of incidence', completed: false },
                { task: 'secondary electron flow / detector', completed: false },
                { task: 'raster scan generator', completed: false },
                { task: 'control programs', completed: false },
                { task: 'non-destructive chemical analysis', completed: false },
            ],
            'lithography': [
                { task: 'steps, chemicals, output', completed: false },
                { task: 'tests', completed: false },
            ],
            'microelectromechanical systems (MEMS)': [
                { task: 'Micro Sensors', completed: false },
                { task: 'Micro Actuators', completed: false },
            ],
            'sensors': [
                { task: 'Acoustic wave', completed: false },
                { task: 'Biomedical and biosensors', completed: false },
                { task: 'Chemical', completed: false },
                { task: 'Optical', completed: false },
                { task: 'Pressure', completed: false },
                { task: 'Stress', completed: false },
                { task: 'Thermal', completed: false },
            ],
            'actuators': [
                { task: 'Grippers, tweezers and tongs', completed: false },
                { task: 'Motors - linear and rotary', completed: false },
                { task: 'Relays and switches', completed: false },
                { task: 'Valves and pumps', completed: false },
                { task: 'Optical equipment:', completed: false },
                { task: 'switches', completed: false },
                { task: 'lenses', completed: false },
                { task: 'mirrors', completed: false },
                { task: 'shutters', completed: false },
                { task: 'phase modulators', completed: false },
                { task: 'filters', completed: false },
                { task: 'waveguide splitters', completed: false },
                { task: 'latching', completed: false },
                { task: 'fiber alignment mechanisms', completed: false },
            ],
            'replicator': [
                { task: 'engines of creation, mechanical self-replicating cell', completed: false },
                { task: 'overall dimensions, bracing', completed: false },
                { task: 'pure material input, properties, positioning', completed: false },
                { task: 'pure output, properties, positioning', completed: false },
                { task: 'power, continuous processing', completed: false },
                { task: 'part-making', completed: false },
                { task: 'instructions written into the walls of the replicator', completed: false },
                { task: 'scaffold/frame, vascular/corridors, ', completed: false },
                { task: 'assembler', completed: false },
                { task: 'disassembler', completed: false },
            ],
            'amino acids': [
                { task: 'atoms, molecules, bonds', completed: false },
                { task: 'size, shape, color, label', completed: false },
            ],
            'proteins': [
                { task: 'base pairs', completed: false },
            ],
            'nanomachines': [
                { task: 'tests', completed: false },
                { task: 'repairs', completed: false },
            ],
            'nanocircuits': [
                { task: 'nanoelectronic switches', completed: false },
                { task: 'mechanical transistor', completed: false },
                { task: 'circuits of seven atoms', completed: false },
            ],
            'nanocomputer': [
                { task: 'polymer molecule to code information like punched paper tape', completed: false },
                { task: 'reader to translate patterns to arm motions', completed: false },
                { task: 'water cooling', completed: false },
            ],
            'other': [
                { task: 'cell repair machine', completed: false },
                { task: 'photosynthesis', completed: false },
                { task: 'lightsail', completed: false },
                { task: 'spacesuit', completed: false },
                { task: 'rocket engine', completed: false },
                { task: 'circulatory system', completed: false },
            ],
            'build roadmap': [
                { task: '1. construct small set of tools', completed: false },
                { task: '2. using this, construct smaller set of tools', completed: false },
                { task: '3. improve accuracy', completed: false },
                { task: '4. #2', completed: false },
            ],
        },
        openCategories: [],
    }

    componentWillMount() {
        this.props.fetchPosts()
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
                            <ListItem key={item.task}>
                                <Checkbox checked={item.completed} />
                                <ListItemText>
                                    {item.task}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </div>
        ))

        return (
            <List subheader='Components' style={{ width: '600px', marginLeft: '30%' }}>
                <Button variant='contained' color='primary'>Push Me</Button>
                {listCategories}
            </List>
        )

    }

}

ToDoList.PropTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    posts: state.posts.items,
})

export default connect(mapStateToProps, { fetchPosts })(ToDoList)
