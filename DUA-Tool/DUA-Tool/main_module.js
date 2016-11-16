var Graphic;
(function (Graphic) {
    //var _graphic: Designer;
    //export function Start() {
    //    if (!_graphic)
    //        _graphic = new Designer();
    var Designer = (function () {
        function Designer() {
            this._canvas = new fabric.Canvas('canvas');
            fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
            this.addNode(100, 100);
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
            this._canvas.add(c);
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
    Graphic.Designer = Designer;
})(Graphic || (Graphic = {}));
var designer = new Graphic.Designer();
//# sourceMappingURL=main_module.js.map