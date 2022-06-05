import L from 'leaflet'

function appendStyleSheet() {
    let head = document.head
    let link = document.createElement("link")
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.integrity = "sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==";
    link.crossOrigin = "";
    link.href = "https://unpkg.com/leaflet@1.8.0/dist/leaflet.css";
  
    head.appendChild(link);
}

function appendScript() {
    const script = document.createElement("script");

    script.src = "https://unpkg.com/leaflet@1.8.0/dist/leaflet.js";
    script.integrity = "sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ==";
    script.crossOrigin = "";
    script.async = true;

    document.body.appendChild(script);
}

function createLeafletMap(props) {
    appendStyleSheet();

    appendScript();

    let coordinates = props.position;
    let zoom = props.zoom;
   
    let map = L.map('map').setView(coordinates, zoom);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    maxZoom: 16,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    let marker = L.marker(coordinates).addTo(map);
    let markerHtmlContent = props.markerTextLine1;
    marker.bindPopup(markerHtmlContent);

    L.Control.textbox = L.Control.extend({
		onAdd: function(map) {
			
		let text = L.DomUtil.create('div');
        text.style.backgroundColor = "white";
        text.style.maxWidth = "100%"
        text.style.padding = "0.5rem"
        text.style.border = "2px solid rgba(0,0,0,0.2)"
        text.style.margin = "0"
		text.id = "info_text";

        let p = document.createElement('p');
        p.textContent =  props.textBoxLine1;
        text.appendChild(p);
        let a = document.createElement('a');
        a.href = props.textBoxGoogleMapLink;
        a.target = '_blank';
        a.rel = 'noreferrer'
        a.textContent = props.textBoxLinkText
		text.appendChild(a);
		return text;
		},

		onRemove: function(map) {
			// Nothing to do here
		}
	});
	L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
	L.control.textbox({ position: 'bottomleft' }).addTo(map);
}

export default createLeafletMap;