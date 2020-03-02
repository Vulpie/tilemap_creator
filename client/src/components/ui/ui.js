import React, { Component } from 'react'
import LayerSelection from './layer_selection'
import ShowGrid from './show_grid'

class UI extends Component {
    handleGridOpacityChange = show => {
        this.props.handleGridOpacityChange(show)
    }
    handleLayerChange = active_layer => {
        this.props.handleLayerChange(active_layer)
        //console.log(`Active layer: ${active_layer}`)
    }

    render() {
        return (
            <div className="ui">
                <LayerSelection handleLayerChange={this.handleLayerChange} />
                <ShowGrid
                    handleGridOpacityChange={this.handleGridOpacityChange}
                />
            </div>
        )
    }
}

export default UI
