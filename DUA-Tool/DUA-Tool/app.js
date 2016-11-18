var Graphic;
(function (Graphic) {
    var __script = ();
    function Main() {
        if (!__script)
            __script = new DUA();
    }
    Graphic.Main = Main;
    var DUA = (function () {
        function DUA() {
            var _this = this;
            this.imageClick = function (url) {
                window.location = url;
            };
            this.click_addNode = function () {
                //$("#fileLoader").click();
                _this._id++;
                var endpointOptions = { isSource: false, isTarget: true };
                var endpointOptions1 = { isSource: true, isTarget: false, maxConnections: -1, connector: ["Straight"] };
                var structure = $('<div class="' + _this._stype + '" id="' + _this._id + '" > </div>');
                $('#canvas').append(structure);
                jsPlumb.addEndpoint(id.toString(), { anchor: "Top" }, endpointOptions);
                jsPlumb.addEndpoint(id.toString(), { anchor: "Bottom" }, endpointOptions1);
                jsPlumb.draggable($(".node_tree"));
                //jsPlumb.connect({ source: "1", target: "2" });
            };
            this.treeClick = function () {
                _this.hideButtons();
                _this.showDrawing();
                _this._stype = "ntree";
            };
            this.graphClick = function () {
                _this.hideButtons();
                _this.showDrawing();
                _this._stype = "ngraph";
            };
            this.listClick = function () {
                _this.hideButtons();
                _this.showDrawing();
                _this._stype = "nlist";
            };
            this.showDrawing = function () {
                $('#site_drawing').show();
            };
            this.hideButtons = function () {
                $('#site_choice').hide();
            };
            this.click_delete = function () {
                $('.node_tree').bind('click', function () {
                    jsPlumb.detachAllConnections(this.id);
                    jsPlumb.removeAllEndpoints(this.id);
                    $(this).remove();
                });
                $('.canvas').bind('click', function () {
                    $('.node_tree').unbind();
                });
            };
            this._id = 0;
        }
        return DUA;
    }());
})(Graphic || (Graphic = {}));
if ($)
    $().ready(Graphic.Main);
//var id = 0;
//var stype: string;
//var ncon: string;
//function imageClick(url) {
//    window.location = url;
//}
//function click_addNode() {
//    //$("#fileLoader").click();
//    id++;
//    var endpointOptions = { isSource: false, isTarget: true };
//    var endpointOptions1 = { isSource: true, isTarget: false, maxConnections: -1, connector: ["Straight"] };
//    var structure = $('<div class="node_tree" id="' + id + '" > </div>');
//    $('#canvas').append(structure);
//    jsPlumb.addEndpoint(id.toString(), { anchor: "Top" }, endpointOptions);
//    jsPlumb.addEndpoint(id.toString(), { anchor: "Bottom" }, endpointOptions1);
//    jsPlumb.draggable($(".node_tree"));
//    //jsPlumb.connect({ source: "1", target: "2" });
//}
//function treeClick(str) {
//    hideButtons();
//    showDrawing();
//    stype = str;
//}
//function graphClick(str) {
//    hideButtons();
//    showDrawing();
//}
//function listClick() {
//    hideButtons();
//    showDrawing();
//}
//function showDrawing() {
//    $('#site_drawing').show();
//}
//function hideButtons() {
//    $('#site_choice').hide();
//}
//function click_delete() {
//    $('.node_tree').bind('click', function () {
//        jsPlumb.detachAllConnections(this.id);
//        jsPlumb.removeAllEndpoints(this.id);
//        $(this).remove();
//    });
//    $('.canvas').bind('click', function () {
//        $('.node_tree').unbind();
//    });
//}
//# sourceMappingURL=app.js.map