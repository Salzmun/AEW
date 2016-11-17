var id = 0;
function imageClick(url) {
    window.location = url;
}

function hover(x) {
    x.style.opacity = "1.0";
}

function hoverout(x) {
    x.style.opacity = "0.5";
}

function click_open() {
    //$("#fileLoader").click();
    id++;
    var endpointOptions = { isSource: true, isTarget: true };

    var structure = $('<div class="node" id="' + id + '" > </div>');
    $('#canvas').append(structure);
    jsPlumb.addEndpoint(id.toString(), endpointOptions);
    jsPlumb.draggable(id.toString());
    jsPlumb.connect({ source: "1", target: "2" });

}

function treeClick() {
    hideButtons();
    showDrawing();
}

function graphClick() {
    hideButtons();
    showDrawing();
}

function listClick() {
    hideButtons();
    showDrawing();
}

function showDrawing() {
    $('#site_drawing').show();
}

function hideButtons() {
    $('#site_choice').hide();
}