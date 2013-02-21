function(disp_map_elem, disp_dir1_elem, disp_dir2_elem, display_dir3_elem, generalInterestList, userLocation) {
    //Example data - 
    //{'features': [], 'activities': '', 'brave': False, 'description': '', 'nature': False, 'travel': False, 'exploration': False, location:(55.0152,-3.0141), 'learning': False, 'sport': True, 'type': '', 'friendly': True, 'name': 'Appleton Tower', 'type': 'Informatics'}

    var cloudmade = new CM.Tiles.CloudMade.Web({key: 'eb9238c6dc0248efb8cc8d6a285df878'});
    var map = new CM.Map(disp_map_elem, cloudmade);
    map.setCenter(new CM.LatLng(userLocation[0], userLocation[1]), 15);
    
//Our favourite place
    var infList = new Array();
    infList[0] = {name: "Appleton Tower", coordinates: [55.944436,-3.186819]};

//Routing
    var directions = new CM.Directions(map, display_dir1_elem, 'eb9238c6dc0248efb8cc8d6a285df878')
    var waypoints = [new CM.LatLng(userLocation[0], userLocation[1]), new CM.LatLng(top3List[0].coordinates[0],top3List[0].coordinates[1])];
    directions.loadFromWaypoints(waypoints, {
        travelMode : 'foot', 
        preserveViewport : 'True', 
        draggableWaypoints : 'True'
    }); 

    var directions1 = new CM.Directions(map, display_dir2_elem, 'eb9238c6dc0248efb8cc8d6a285df878')
    var waypoints1 = [new CM.LatLng(top3List[0].coordinates[0], top3List[0].coordinates[1]), new CM.LatLng(top3List[1].coordinates[0],top3List[1].coordinates[1])];
    directions.loadFromWaypoints(waypoints1, {
        travelMode : 'foot', 
        preserveViewport : 'True', 
        draggableWaypoints : 'True'
    }); 

    var directions2 = new CM.Directions(map, display_dir3_elem, 'eb9238c6dc0248efb8cc8d6a285df878')
    var waypoints2 = [new CM.LatLng(top3List[1].coordinates[0],top3List[1].coordinates[1]), new CM.LatLng(top3List[2].coordinates[0], top3List[2].coordinates[1])];
    directions2.loadFromWaypoints(waypoints2, {
        travelMode : 'foot', 
        preserveViewport : 'True', 
        draggableWaypoints : 'True'
    }); 


//Icons   
    var infIcon = new CM.Icon();
    infIcon.image = "markers/computers.png";
    infIcon.iconSize = new CM.Size(32, 37);
    
    museumIcon = new CM.Icon(infIcon, "markers/museum.png");
    parksIcon = new CM.Icon(infIcon, "markers/park.png");
    historicalIcon = new CM.Icon(infIcon, "markers/historical.png");
    cemetaryIcon = new CM.Icon(infIcon, "markers/grave.png");
    outdoorEducationIcon = new CM.Icon(infIcon, "markers/outdooreducation.png");
    communityCentreIcon = new CM.Icon(infIcon, "markers/communitycenter.png");
    mobileLibraryIcon = new CM.Icon(infIcon, "markers/library.png");
    playAreasIcon = new CM.Icon(infIcon, "markers/playground.png");
    sportsIcon = new CM.Icon(infIcon, "markers/sports.png");
    
    for (var i = 0; i < generalInterestList; i++) {
        if (generalInterestList[i].type == 'museum') 
           display(museumIcon, generalInterestList[i].type, generalInterestList[i].name, generalInterestList[i].location);
        else if (generalInterestList[i].type == 'park') 
           display(parksIcon, generalInterestList[i].type, generalInterestList[i].name, generalInterestList[i].location);
        else if (generalInterestList[i].type == 'historical') 
           display(historicalIcon, generalInterestList[i].type, generalInterestList[i].name, generalInterestList[i].location);
        else if (generalInterestList[i].type == 'cemetary') 
           display(cemetaryIcon, generalInterestList[i].type, generalInterestList[i].name, generalInterestList[i].location);
        else if (generalInterestList[i].type == 'outdoor_education') 
           display(outdoorEducationIcon, generalInterestList[i].type, generalInterestList[i].name, generalInterestList[i].location);
        else if (generalInterestList[i].type == 'mobile_library') 
           display(mobileLibraryIcon, generalInterestList[i].type, generalInterestList[i].name, generalInterestList[i].location);
        else if (generalInterestList[i].type == 'play_area') 
           display(playAreasIcon, generalInterestList[i].type, generalInterestList[i].name, generalInterestList[i].location);
        else if (generalInterestList[i].type == 'sports') 
           display(sportsIcon, generalInterestList[i].type, generalInterestList[i].name, generalInterestList[i].location);
        else display(generalInterestList[i].type, generalInterestList[i].name, generalInterestList[i].location);
    }
}
function display(ic, type, name, location) {
    var myMarkerLatLng = new CM.LatLng(location[0], location[1]);
    var myMarker = new CM.Marker(myMarkerLatLng, {
        title: name,
        icon: ic
    });
    map.addOverlay(myMarker);
}    

function display(type, name, location) {
    var myMarkerLatLng = new CM.LatLng(location[0], location[1]);
    var myMarker = new CM.Marker(myMarkerLatLng, {
	title: name
    });
    map.addOverlay(myMarker);

}
