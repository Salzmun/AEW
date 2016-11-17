module Graphic {
    //var _graphic: Designer;

    //export function Start() {
    //    if (!_graphic)
    //        _graphic = new Designer();

    export class Designer {
        _canvas: fabric.ICanvas;

        constructor() {

            this._canvas = new fabric.Canvas('c');
            this._canvas.interactive = false;
            fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

            this._canvas.add(this.addNode(100, 100));
        }

        addNode(left, top) {
            var c = new fabric.Circle({
                left: left,
                top: top,
                strokeWidth: 5,
                radius: 12,
                fill: '#fff',
                stroke: '#666'
            });
            return c;
        }

        makeLine(coords) {
            var line = new fabric.Line(coords, {
                fill: 'black',
                stroke: 'black',
                strokeWidth: 5,
                selectable: false
            });
            return line;
        }


        deleteNode() {
        }

        createConnector() {

        }

        openFile() {

        }

        saveFile() {

        }

        labelStuff() {

        }

        editStuff() {
        }

        newPage() {
        }

        draganddrop() {
        }

    }
}

var designer = new Graphic.Designer();

