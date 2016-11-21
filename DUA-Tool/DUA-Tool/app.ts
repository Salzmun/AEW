var id = 0;
var id1 = 0;
var id2 = 0;
var chmod = 0;
var conmod = 0;
var delmod = 0;
var stype: string;
var contype: string;
var overlays= "";

function imageClick(url) {
            window.location = url;
        }

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
 * 
 */
function editText() {
    $('.node').bind('click', function () {
        return this.id;
    });



    $('.canvas').bind('click', function () {
        $('.node').unbind();
        jsPlumb.unbind();
        $('.canvas').unbind();
    });
}

/**
 * 
 */
function clickSelect(s1:string, s2:string) { 
    $('#site_choice').hide();
    $('#site_drawing').show();
    stype = s1;
    contype = s2;
}

//function treeClick() {
//    hideButtons();
//    showDrawing();
//    stype = "ntree";
//    contype = "Straight";
//    //$('#cbtn_con').hide();
//}

//function graphClick() {
//    hideButtons();
//    showDrawing();
//    contype = "Straight";
//    stype = "ngraph";
//}

//function listClick() {
//    hideButtons();
//    showDrawing();
//    contype = "Bezier";
//    stype = "nlist";
//    //$('#cbtn_con').hide();
//}

//function showDrawing() {
//            $('#site_drawing').show();
//        }

//  function hideButtons() {
//            $('#site_choice').hide();
//        }

/**
 * 
 */
function click_delete() {
    id1 = 0;
    id2 = 0;
    if (delmod == 0) {
        delmod = 1;
        $('#toolbox').addClass("toolbox-red");
        $('.node').bind('click', function () {
            jsPlumb.detachAllConnections(this.id);
            jsPlumb.removeAllEndpoints(this.id);
            $(this).remove();
        });

        jsPlumb.bind('click', function (conn) {
            jsPlumb.detach(conn);
        });
    } else if (delmod == 1) {
        delmod = 0;
        $('.node').unbind();
        jsPlumb.unbind();
        $('#toolbox').removeClass("toolbox-red");
    }



    }


/**
*this is a description of the function click_chgCon()
*/
function click_addCon() {
    id1 = 0;
    id2 = 0;
    if (chmod == 1) {
        $('#toolbox').removeClass("toolbox-blue");
        $('#cbtn_add').show();
        if (stype == "ngraph") {
            $('#cbtn_conch').hide();
        }
        $('.node').unbind();
        chmod = 0;
    }
    else if (chmod == 0) {
        $('#toolbox').addClass("toolbox-blue");
        $('#cbtn_add').hide();
        if (stype == "ngraph") {
            $('#cbtn_conch').show();
        }
        chmod = 1;
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

function click_chgCon() {
    if (conmod == 0) {
        $('#toolbox').addClass("toolbox-green");
        conmod = 1;
        overlays = [
            ["Arrow", { location: -25 }],
            ["Label", { label: "foo", location: 0.25, id: "myLabel" }]
        ]

    } else if (conmod == 1) {
        $('#toolbox').removeClass("toolbox-green");
        overlays = "";
        conmod = 0;
    }
}

/**
 * 
 */
function click_newFile() {
    window.open('index.html', '_blank');
}

