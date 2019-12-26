$('#js-game-modal').on("mousedown mouseup", function(e) {
    alert(e.type + " event fired at coords: " + e.pageX + ", " + e.pageY);
    });
    
    x_coord = 1;
    y_coord = 1;
    
    var e = jQuery.Event( "mousedown", { pageX: x_coord, pageY: y_coord } );
    $('#js-game-modal').trigger(e);
    
    // execute more code
    x_coord = 255;
    y_coord = 255;
    
    var e = jQuery.Event( "mouseup", { pageX: x_coord, pageY: y_coord } );
    $('#js-game-modal').trigger(e);