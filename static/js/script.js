// $(function() {
//     $(".testbtn").click(function() { // locationAcceptButton
//         $(".mainOverlayContainer").css({"animation-name" : "overlayHidden"});
//         $(".mainOverlayContainer").css({"animation-duration" : "2s"});
//         setTimeout(function(){
//             $(".mainOverlayContainer").remove();

//             $(".testbtn").remove(); //mainOverlayContainer
//         }, 2000)
//         getLocation();

//     })
// })



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        window.alert("Unable to access location service!");
    }
}

function showPosition(position) {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWVjaGFuaWMtZml4LXRoaW5ncyIsImEiOiJja2dwOGE4dHgxYXF2MnJyeGJmOHN2MWtwIn0.iYSZaRCu4X86By0vgkVZXQ';
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mechanic-fix-things/ckgp8lo950rla19lavgnbwt9g', // stylesheet location
        //center: [ position.coords.longitude,  position.coords.latitude], starting position [lng, lat] 
        center: [72.8310607,  21.1702401],
        zoom: 14, // starting zoom
        attributionControl: false    
    });
    var marker = new mapboxgl.Marker().setLngLat([72.8310607, 21.1702401]).addTo(map);
}


getLocation();