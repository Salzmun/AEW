var Graphic;
(function (Graphic) {
    var _graphic;
    function Start() {
        if (!_graphic)
            _graphic = new Designer();
    }
    Graphic.Start = Start;
    var Designer = (function () {
        function Designer() {
            this.canvas = new fabric.Canvas('canv', { selection: false });
            fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
        }
        Designer.prototype.addNode = function (left, top) {
            var c = new fabric.Circle({
                left: left,
                top: top,
                strokeWidth: 5,
                radius: 12,
                fill: '#fff',
                stroke: '#666'
            });
            c.hasControls = c.hasBorders = false;
            canvas.add(c);
        };
        Designer.prototype.makeLine = function (coords) {
            var line = new fabric.Line(coords, {
                fill: 'black',
                stroke: 'black',
                strokeWidth: 5,
                selectable: false
            });
            return line;
        };
        Designer.prototype.deleteNode = function () {
        };
        Designer.prototype.createConnector = function () {
        };
        Designer.prototype.openFile = function () {
        };
        Designer.prototype.saveFile = function () {
        };
        Designer.prototype.labelStuff = function () {
        };
        Designer.prototype.editStuff = function () {
        };
        Designer.prototype.newPage = function () {
        };
        Designer.prototype.draganddrop = function () {
        };
        return Designer;
    }());
})(Graphic || (Graphic = {}));
if ($)
    $(document).ready(Graphic.Start);
//# sourceMappingURL=main_module.js.map