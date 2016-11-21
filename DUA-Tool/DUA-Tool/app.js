var id = 0;
var stype;
var id1 = 0;
var id2 = 0;
var chmod = 0;
var stype;
var contype;
function imageClick(url) {
    window.location = url;
}
function click_addNode() {
    //$("#fileLoader").click();
    id++;
    var endpointOptions;
    var endpointOptions1;
    var anchorOptions;
    var structure = $('<div class="node ' + stype + '" id="' + id + '" > </div>');
    $('#canvas').append(structure);
    switch (stype) {
        case "ntree":
            endpointOptions = { isSource: false, isTarget: true };
            endpointOptions1 = { isSource: true, isTarget: false, maxConnections: -1, connector: [contype] };
            break;
        case "ngraph":
            endpointOptions = { isSource: true, isTarget: true, maxConnections: -1, connector: [contype] };
            //jsPlumb.addEndpoint(id.toString(), { anchors: "Top" }, endpointOptions);
            //jsPlumb.addEndpoint(id.toString(), { anchors: "Bottom" }, endpointOptions);
            break;
        case "nlist":
            endpointOptions = { isSource: true, isTarget: true, maxConnections: 2 };
            endpointOptions1 = { isSource: true, isTarget: true, maxConnections: 2, connector: [contype] };
            break;
    }
    jsPlumb.draggable($(".node"));
    //jsPlumb.connect({ source: "1", target: "2" });
}
function addText() {
}
function editText() {
}
function treeClick() {
    hideButtons();
    showDrawing();
    stype = "ntree";
    contype = "Straight";
    //$('#cbtn_con').hide();
}
function graphClick() {
    hideButtons();
    showDrawing();
    contype = "Straight";
    stype = "ngraph";
}
function listClick() {
    hideButtons();
    showDrawing();
    contype = "Bezier";
    stype = "nlist";
    //$('#cbtn_con').hide();
}
function showDrawing() {
    $('#site_drawing').show();
}
function hideButtons() {
    $('#site_choice').hide();
}
function click_delete() {
    id1 = 0;
    id2 = 0;
    $('.node').bind('click', function () {
        jsPlumb.detachAllConnections(this.id);
        jsPlumb.removeAllEndpoints(this.id);
        $(this).remove();
    });
    $('.canvas').bind('click', function () {
        $('.node').unbind();
        $('.canvas').unbind();
        chmod == 0;
    });
}
function click_chgCon() {
    id1 = 0;
    id2 = 0;
    if (chmod == 1) {
        $('#cbtn_add').show();
        $('.node').unbind();
        chmod = 0;
    }
    else if (chmod == 0) {
        $('#cbtn_add').hide();
        chmod = 1;
        $('.node').bind('click', function () {
            if (id1 == 0) {
                id1 = this.id;
            }
            else if (id2 == 0) {
                id2 = this.id;
            }
            if (id1, id2 != 0 && id1 != id2) {
                jsPlumb.connect({
                    source: id1, target: id2, connector: [contype], anchor: "Center", overlays: [
                        "Arrow",
                        ["Label", { label: "foo", location: 0.25, id: "myLabel" }]
                    ], });
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
//# sourceMappingURL=app.js.map