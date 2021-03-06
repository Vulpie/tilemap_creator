import React, { Component } from 'react'
import GridTile from './tiles/gridTile'

import { createArrayOfTiles } from '../../helpers/layers_helper'

class GridLayer extends Component {
    state = {
        tiles: [],
        ground_width: 32,
        showGrid: true,
        tileSize: 32
    }

    componentDidMount() {
        const { height, width } = this.props
        let tiles = createArrayOfTiles(width, height)
        let ground_width = this.state.tileSize * width

        this.setState({ tiles, ground_width })
        console.log('Width: ', this.state.ground_width)
    }

    componentDidUpdate() {
        if (this.props.showGrid !== this.state.showGrid) {
            this.setState({ showGrid: this.props.showGrid })
        }
        if (this.props.tileSize !== this.state.tileSize) {
            const { width } = this.props
            let ground_width = this.props.tileSize * width
            this.setState({ tileSize: this.props.tileSize, ground_width })
            console.log('Width--: ', this.state.ground_width)
        }
    }

    /**
     * @param {object} tile - a single grid tile from tiles array
     * @returns {Component} - grid tile React Component
     */
    renderGridTile = tile => {
        return (
            <GridTile
                key={tile.id}
                id={tile.id}
                tileSize={this.state.tileSize}
            />
        )
    }

    render() {
        let grid
        if (this.state.showGrid) {
            grid = this.state.tiles.map(this.renderGridTile)
        } else {
            grid = null
        }
        return (
            <div
                className="grid-layer"
                style={{ width: this.state.ground_width }}
            >
                {grid}
            </div>
        )
    }
}

export default GridLayer
