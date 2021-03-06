var nodeid = 0; // ID-counter fopr div's added
var firstnodeid; // ID of the node firs selected in connector-modes (add / change)
var secondnodeid; // ID of the second node in connector-modes (add / change)
var chmod; //Number to check if   Value: 0 or 1
var conmod; //Number to check if "add Connector" mode is active, Value: 0 or 1
var delmod; //Number to check if delete mode is active, Value: 0 or 1
var txtmod; //Number to check if textEdit/textAdd mode is active, Value: 0 or 1
var stype; //
var contype; //
var overlays; //
window.onload = function () {
    chmod = 0;
    conmod = 0;
    delmod = 0;
    txtmod = 0;
	overlays = [["Label", { location: 0.5, id: "myLabel", cssClass: "lbl" }]];
};
/**
 *  Adds a div and sets it's css-classes according to the selected display mode ( graph, list, tree), sets it draggable to!
 *  Useable in all toolboxes
 */
function click_addNode() {
    nodeid++;
    var endpointOptions;
    var endpointOptions1;
    var anchorOptions;
    var structure = $('<div class="node ' + stype + '" id="' + nodeid + '" > </div>');
    $('#canvas').append(structure);
    jsPlumb.draggable($(".node"));
}
/**
 *  Function to access a div's or jsPlumb-Connector's text and let's the user change it through a prompt-popup
 *  Useable in all toolboxes
 */
function click_editText() {
    if (txtmod != 1) {
        txtmod = 1;
        $('#cbtn_add').hide();
        $('#cbtn_del').hide();
        $('#cbtn_con').hide();
        $('#toolbox').addClass("toolbox-teal");
		$('#cbtn_edt').removeClass("_edt");
        $('#cbtn_edt').addClass("cbtn-clicked");
        $('.node').bind('click', function () {
            var oldtext = document.getElementById(this.id).innerHTML;
            var text = prompt("Please enter a description", oldtext);
            if (text != null) {
                document.getElementById(this.id).innerHTML = text;
            }
        });
		if (stype == "ngraph"){
        jsPlumb.bind('click', function (conn) {
            var label = conn.getOverlay("myLabel");
            var oldtextc = label.getLabel();
            var textc = prompt("Please enter a description", oldtextc);
            if (textc != null) {
                label.setLabel('\n' + textc);
            }
        });
		}
    }
    else if (txtmod != 0) {
        txtmod = 0;
        $('#cbtn_add').show();
        $('#cbtn_del').show();
        $('#cbtn_con').show();
        $('#cbtn_edt').removeClass("cbtn-clicked");
		$('#cbtn_edt').addClass("_edt");
        $('#toolbox').removeClass("toolbox-teal");
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
function clickSelect(s1, s2) {
    $('#site_choice').hide();
    $('#site_drawing').show();
    stype = s1;
    contype = s2;
	if(stype == "nlist")
	{
		overlays = [
            ["Arrow", { location: -40 }]];
	}
}
/**
 * Activates the Delete-mode, which allows you to remove nodes and connections
 * used in all toolboxes
 */
function click_delete() {
    firstnodeid = 0;
    secondnodeid = 0;
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
    }
    else if (delmod != 0) {
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
* function to start the "add connector"-mode
* used in all toolboxes
*/
function click_addCon() {
    $('#' + firstnodeid).removeClass("_selected");
	firstnodeid = 0;
    secondnodeid = 0;

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
            if (firstnodeid == 0) {
                firstnodeid = this.id;
				$('#' + firstnodeid).addClass("_selected");
            }
            else if (secondnodeid == 0) {
                secondnodeid = this.id;
            }
            if (firstnodeid, secondnodeid != 0 && firstnodeid != secondnodeid) {
                jsPlumb.connect({
				source: firstnodeid, target: secondnodeid, connector: [contype], anchor: "Center", overlays: overlays, paintStyle:{strokeWidth:5, stroke:'rgb(0,0,0)'}});
                $('#' + firstnodeid).removeClass("_selected");
				firstnodeid = 0;
                secondnodeid = 0;
				
            }
            if (firstnodeid == secondnodeid) {
				$('#' + firstnodeid).removeClass("_selected");
				firstnodeid = 0;
                secondnodeid = 0;
				
            }
        });
    }
}
/**
 * function to toggle the connectors between simple line and arrow
 * Used in the Toolbox for graphs during add-connector mode
 */
function click_chgCon() {
    if (conmod != 1) {
        conmod = 1;
        $('#cbtn_conch').addClass("_conch-green");
        overlays = [
            ["Arrow", { location: -25 }],
            ["Label", { location: 0.25, id: "myLabel", cssClass: "lbl" }]
        ];
    }
    else if (conmod != 0) {
        conmod = 0;
        $('#cbtn_conch').removeClass("_conch-green");
        overlays = [["Label", { location: 0.5, id: "myLabel", cssClass: "lbl" }]];
    }
}
/**
 * Opens a new Page/File of the Structtool
 * Used in the Toolbox
 */
function click_newFile() {
    window.open('index.html', '_blank');
}
//# sourceMappingURL=app.js.map