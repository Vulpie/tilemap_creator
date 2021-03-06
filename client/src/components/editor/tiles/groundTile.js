import React, { Component } from 'react'
import grass_1 from '../../../tiles/grass_1.png'
import grass_2 from '../../../tiles/grass_2.png'
import grass_3 from '../../../tiles/grass_3.png'
import grass_4 from '../../../tiles/grass_4.png'
import road_1 from '../../../tiles/road_h_left-end.png'
import road_2 from '../../../tiles/road_h.png'
import road_3 from '../../../tiles/road_h_right-end.png'
import road_4 from '../../../tiles/road_v_top-end.png'
import road_5 from '../../../tiles/road_v.png'
import road_6 from '../../../tiles/road_v_bottom-end.png'

import { compare } from '../../../helpers/tiles_helper'

class GroundTile extends Component {
    state = {
        tiles_img: [
            grass_1,
            grass_2,
            grass_3,
            grass_4,
            road_1,
            road_2,
            road_3,
            road_4,
            road_5,
            road_6
        ],
        tile: 0,
        tileSet: 'groundTiles',
        width: 32,
        height: 32,
        selectedTile: 0
    }

    componentDidUpdate() {
        const changeTileSize = compare(this.props.tileSize, this.state.width)
        const changeSelectedTile = compare(
            this.props.selectedTile,
            this.state.selectedTile
        )

        if (changeTileSize) {
            this.setState({
                width: this.props.tileSize,
                height: this.props.tileSize
            })
        }

        if (changeSelectedTile) {
            this.setState({ selectedTile: this.props.selectedTile })
        }
    }

    /**
     * Change the image of current tile to the image selected in Tile Selection component
     */
    changeTile = () => {
        if (this.state.tile !== this.state.selectedTile) {
            this.setState({ tile: this.state.selectedTile })
        }
    }

    render() {
        return (
            <React.Fragment>
                <img
                    src={this.state.tiles_img[this.state.tile]}
                    alt="ground tile"
                    className="tile"
                    onClick={this.changeTile}
                    id={this.props.id}
                    style={{
                        width: this.state.width,
                        height: this.state.height
                    }}
                />
            </React.Fragment>
        )
    }
}

export default GroundTile
