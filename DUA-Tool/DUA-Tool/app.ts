var id = 0;
var id1: number;
var id2: number;
var chmod = 0;
var conmod = 0;
var delmod: number;
var txtmod: number;
var stype: string;
var contype: string;
var overlays: string;


function imageClick(url) {
            window.location = url;
        }

/**
 *  Adds a div and sets it's css-classes according to the selected display mode ( graph, list, tree), sets it draggable to!
 */
function click_addNode() {
    id++;
    var endpointOptions;
    var endpointOptions1;
    var anchorOptions;
    var structure = $('<div class="node ' + stype + '" id="' + id + '" > </div>');
    $('#canvas').append(structure);
    jsPlumb.draggable($(".node"));
}

/**
 *  Function to access a div's or jsPlumb-Connector's text and let's the user change it through a prompt-popup
 *  
 */
function click_editText() {
    if (txtmod != 1) {
        txtmod = 1;
        
        $('#cbtn_add').hide();
        $('#cbtn_del').hide();
        $('#cbtn_con').hide();
        $('#cbtn_edt').addClass("cbtn-clicked");
        $('.node').bind('click', function () {
            var oldtext = document.getElementById(this.id).innerHTML;
            var text = prompt("Please enter a description", oldtext);

            if (text != null) {
                document.getElementById(this.id).innerHTML = text;
            }

        });

        jsPlumb.bind('click', function (conn) {
            var label = conn.getOverlay("myLabel");
            var oldtextc = label.getLabel();
            var textc = prompt("Please enter a description", oldtextc);
            if (textc != null) {
                label.setLabel(textc);
            }
        }
    } else if (txtmod != 0) {
        txtmod = 0;
        $('#cbtn_add').show();
        $('#cbtn_del').show();
        $('#cbtn_con').show();
        $('#cbtn_edt').removeClass("cbtn-clicked");
        $('.node').unbind();
        jsPlumb.unbind();
    }
}

/**
 * Function to set CSS-Styles for added nodes and toolbox, aka "Choose your struct!"
 * Used at the selection screen
 @param {string} s1 - selected structure-type
 @param {string} s2 - according style for the connectors
 */
function clickSelect(s1:string, s2:string) { 
    $('#site_choice').hide();
    $('#site_drawing').show();
    stype = s1;
    contype = s2;
}


/**
 * 
 */
function click_delete() {
    id1 = 0;
    id2 = 0;
    if (delmod != 1) {
        delmod = 1;
        $('#cbtn_add').hide();
        $('#cbtn_edt').hide();
        $('#cbtn_con').hide();
        $('#toolbox').addClass("toolbox-red");
        $('#cbtn_del').addClass("cbtn-clicked");
        $('.node').bind('click', function () {
            jsPlumb.detachAllConnections(this.id);
            jsPlumb.removeAllEndpoints(this.id);
            $(this).remove();
        });

        jsPlumb.bind('click', function (conn) {
            jsPlumb.detach(conn);
        });
    } else if (delmod != 0) {
        delmod = 0;
        $('#cbtn_add').show();
        $('#cbtn_edt').show();
        $('#cbtn_con').show();
        $('.node').unbind();
        jsPlumb.unbind();
        $('#toolbox').removeClass("toolbox-red");
        $('#cbtn_del').removeClass("cbtn-clicked");
    }
}


/**
* This function is used to change the used connector type while in connector-adding mode for graphs.
*/
function click_addCon() {
    id1 = 0;
    id2 = 0;
    if (chmod != 0) {
        chmod = 0;
        $('#toolbox').removeClass("toolbox-blue");
        $('#cbtn_con').removeClass("cbtn-clicked");
        $('#cbtn_add').show();
        $('#cbtn_edt').show();
        $('#cbtn_del').show();
        if (stype == "ngraph") {
            $('#cbtn_conch').hide();
        }
        $('.node').unbind();
        
    }
    else if (chmod != 1) {
        chmod = 1;
        $('#toolbox').addClass("toolbox-blue");
        $('#cbtn_con').addClass("cbtn-clicked");
        $('#cbtn_add').hide();
        $('#cbtn_edt').hide();
        $('#cbtn_del').hide();
        if (stype == "ngraph") {
            $('#cbtn_conch').show();
        }
        
        $('.node').bind('click', function () {
            if (id1 == 0) {
                id1 = this.id;
            } else if (id2 == 0) {
                id2 = this.id;
            }

            if (id1, id2 != 0 && id1 != id2) {
                jsPlumb.connect({
                    source: id1, target: id2, connector: [contype], anchor: "Center", overlays: overlays });
                id1 = 0;
                id2 = 0;
            } 

            if (id1 == id2) {
                id1 = 0;
                id2 = 0;
            }

        });

    }

}

/**
 * 
 */
function click_chgCon() {
    if (conmod != 1) {
        conmod = 1;
        $('#cbtn_conch').addClass("cbtn_conch-green");
        overlays = [
            ["Arrow", { location: -25 }],
            ["Label", { location: 0.25, id: "myLabel" }]
        ]

    } else if (conmod != 0) {
        conmod = 0;
        $('#cbtn_conch').removeClass("cbtn_conch-green");
        overlays = "";
    }
}

/**
 * Opens a new Page/File of the Structtool 
 */
function click_newFile() {
    window.open('index.html', '_blank');
}

