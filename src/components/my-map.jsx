import React from 'react'
import PropTypes from 'prop-types'
import createLeafletMap from '../scripts/create_leaflet_map.js'
import { myMapContainer } from './my-map.module.css'

class MyMap extends React.Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,
    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,
    /** If set, will display a marker, which when clicked will display this text **/
    markerTextLine1: PropTypes.string,
    textBoxLine1: PropTypes.string,
    textBoxGoogleMapLink: PropTypes.string,
    textBoxLinkText: PropTypes.string
  }

  static defaultProps = {
    position: [51, -1],
    zoom: 13,
    markerTextLine1: "",
    textBoxLine1: "",
    textBoxGoogleMapLink: "",
    textBoxLinkText: ""
  }

  componentDidMount() {
    createLeafletMap(this.props);
  }


  render() {
    return (
      <div id="map" className={myMapContainer}></div>
    );
  }
}
  
export default MyMap