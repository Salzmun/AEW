var id = 0;

var stype: string;

function imageClick(url) {
            window.location = url;
        }

function click_addNode() {
    //$("#fileLoader").click();
    id++;
    var endpointOptions;
    var endpointOptions1;
    var anchorOptions;
    switch (stype) {
        case "ntree":
            endpointOptions = { isSource: false, isTarget: true };
            endpointOptions1 = { isSource: true, isTarget: false, maxConnections: -1, connector: ["Straight"] };
            break;
        case "ngraph":
            anchorOptions: { anchor: ["Perimeter", { shape: "Circle" }]
            endpointOptions = { isSource: false, isTarget: true, maxConnections: -1 };
            endpointOptions1 = { isSource: true, isTarget: false, maxConnections: -1, connector: ["Straight"] };
            break;
        case "nlist": 
            endpointOptions = { isSource: true, isTarget: true, maxConnections: 2 };
            endpointOptions1 = { isSource: true, isTarget: true, maxConnections: 2, connector: ["Bezier"] };
            break;
    }
    var structure = $('<div class="node ' + stype + '" id="' + id + '" > </div>');
    $('#canvas').append(structure);
    jsPlumb.addEndpoint(id.toString(), { anchors: ["Top", "Left"] }, endpointOptions);
    jsPlumb.addEndpoint(id.toString(), { anchors: ["Bottom", "Right"] }, endpointOptions1);
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

