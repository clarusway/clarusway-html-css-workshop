mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA";


const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-73.96634, 40.773442], // starting position [lng, lat]
  zoom: 14, // starting zoom
});


// create the popup
const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<h6> Main st. , New York 11110</h6>
    <p> Phone number: 123-456-7890</p>
    `);

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({color: 'red'})
.setLngLat([-73.96634, 40.773442]).setPopup(popup).addTo(map)


window.addEventListener('scroll', (e)=>{
  if(scrollY<500){
    // hide the arrow Link
    document.getElementById('arrow-up').style.display = 'none';
  }else{
    // show the arrow Link
    document.getElementById('arrow-up').style.display = 'block';
  }
})

