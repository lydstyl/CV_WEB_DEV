function initialiserCarte(){
    if(!navigator.geolocation){
        alert("Votre navigateur ne gère pas la géolocalisation");
        return false
    }
    var centreGoogleMap = new google.maps.LatLng(48.0833, -1.6833);
    var optionsGoogleMap = {
        zoom: 8,
        center: centreGoogleMap,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var maCarte = new google;
    maps.Map(document.getElementById("maCarte"),optionsGoogleMap);
}