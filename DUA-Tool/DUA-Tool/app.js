var id = 0;
var stype;
var id1 = 0;
var id2 = 0;
var chmod = 0;
function imageClick(url) {
    window.location = url;
}
function hover(x) {
    x.style.opacity = "1.0";
}
function hoverout(x) {
    x.style.opacity = "0.5";
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
            endpointOptions1 = { isSource: true, isTarget: false, maxConnections: -1, connector: ["Straight"] };
            break;
        case "ngraph":
            endpointOptions = { isSource: true, isTarget: true, maxConnections: -1, connector: ["Straight"] };
            //jsPlumb.addEndpoint(id.toString(), { anchors: "Top" }, endpointOptions);
            //jsPlumb.addEndpoint(id.toString(), { anchors: "Bottom" }, endpointOptions);
            break;
        case "nlist":
            endpointOptions = { isSource: true, isTarget: true, maxConnections: 2 };
            endpointOptions1 = { isSource: true, isTarget: true, maxConnections: 2, connector: ["Bezier"] };
            break;
    }
    jsPlumb.draggable($(".node"));
    //jsPlumb.connect({ source: "1", target: "2" });
}
function treeClick() {
    hideButtons();
    showDrawing();
    stype = "ntree";
    $('#cbtn_con').hide();
}
function graphClick() {
    hideButtons();
    showDrawing();
    stype = "ngraph";
}
function listClick() {
    hideButtons();
    showDrawing();
    stype = "nlist";
    $('#cbtn_con').hide();
}
function showDrawing() {
    $('#site_drawing').show();
}
function hideButtons() {
    $('#site_choice').hide();
}
function click_delete() {
    $('.node').bind('click', function () {
        jsPlumb.detachAllConnections(this.id);
        jsPlumb.removeAllEndpoints(this.id);
        $(this).remove();
    });
    $('.canvas').bind('click', function () {
        $('.node').unbind();
    });
}
function click_chgCon() {
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
                alert(id1);
            }
            else if (id2 == 0) {
                id2 = this.id;
                alert(id2);
            }
            if (id1, id2 != 0 && id1 != id2) {
                jsPlumb.connect({ source: id1, target: id2, connector: "Straight", anchor: "Center" });
                id1 = 0;
                id2 = 0;
            }
            else if (id1 == id2) {
                id1 = 0;
                id2 = 0;
            }
            alert(id1 + ":" + id2);
        });
    }
}
//# sourceMappingURL=app.js.map