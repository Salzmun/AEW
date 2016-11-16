function addNode() {
}
function deleteNode() {
}
function createConnector() {
}
function openFile() {
}
function saveFile() {
}
function labelStuff() {
}
function draganddrop() {
}
var Graphic;
(function (Graphic) {
    var exporter;
    function start() {
        if (!exporter)
            exporter = new Main();
    }
    Graphic.start = start;
    var Main = (function () {
        function Main() {
        }
        return Main;
    }());
})(Graphic || (Graphic = {}));
if ($)
    $(document).ready(Graphic.start);
//# sourceMappingURL=main_module.js.map