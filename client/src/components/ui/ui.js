import React, { Component } from 'react'
import LayerSelection from './layer_selection'
import ShowGrid from './show_grid'
import TileSize from './TileSize'
import TilesSelection from './TilesSelection'
import MapSize from './MapSize'

/**
 * Root component for UI
 */
class UI extends Component {
    state = {
        activeLayer: 'ground_layer'
    }

    handleGridOpacityChange = show => {
        this.props.handleGridOpacityChange(show)
    }

    handleLayerChange = active_layer => {
        this.props.handleLayerChange(active_layer)
        this.setState({ activeLayer: active_layer })
    }

    handleMapScaling = tileSize => {
        this.props.handleMapScaling(tileSize)
    }

    handleTileChange = selectedTile => {
        this.props.handleTileChange(selectedTile)
    }

    render() {
        return (
            <div className="ui">
                <MapSize />
                <LayerSelection handleLayerChange={this.handleLayerChange} />
                <ShowGrid
                    handleGridOpacityChange={this.handleGridOpacityChange}
                />
                <TileSize handleMapScaling={this.handleMapScaling} />
                <TilesSelection
                    handleTileChange={this.handleTileChange}
                    activeLayer={this.state.activeLayer}
                />

                <a href="localhost:5000/tutorial" target="_blank">
                    Get help
                </a>
            </div>
        )
    }
}

export default UI
