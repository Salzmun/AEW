var id = 0;
jsPlumb.ready(function (e) {
    jsPlumb.setContainer($('#canvas'));
    $(".toolbox").draggable({
        helper: 'clone',
        cursor: 'pointer',
        tolerance: 'fit',
        revert: true
    });
    $("#canvas").droppable({
        accept: '.toolbox',
        containment: 'canvas',
        drop: function (e, ui) {
            var droppedElement = ui.helper.clone();
            ui.helper.remove();
            $(droppedElement).removeAttr("class");
            jsPlumb.repaint(ui.helper);
            $(droppedElement).addClass("node_tree");
            $(droppedElement).draggable({
                containment: "canvas"
            });
            droppedElement.appendTo('#canvas');
        }
    });
});
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
    var endpointOptions = { isSource: false, isTarget: true };
    var endpointOptions1 = { isSource: true, isTarget: false, maxConnections: -1, connector: ["Straight"] };
    var structure = $('<div class="node_p" id="' + id + '" > </div>');
    $('#canvas').append(structure);
    jsPlumb.addEndpoint(id.toString(), { anchor: "Top" }, endpointOptions);
    jsPlumb.addEndpoint(id.toString(), { anchor: "Bottom" }, endpointOptions1);
    jsPlumb.draggable($(".node_p"));
    //jsPlumb.connect({ source: "1", target: "2" });
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
function click_delete() {
    $('.node_p').bind('click', function () {
        jsPlumb.detachAllConnections(this.id);
        jsPlumb.removeAllEndpoints(this.id);
        $(this).remove();
    });
    $('#canvas').bind('click', function () {
        $('.node_p').unbind();
    });
}
//# sourceMappingURL=app.js.map