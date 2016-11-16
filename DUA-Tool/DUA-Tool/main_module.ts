module Graphic {
    var _graphic: Designer;

    export function Start() {
        if (!_graphic)
            _graphic = new Designer();
    }

    class Designer {

        canvas: fabric.ICanvas;

        constructor() {
            this.canvas = new fabric.Canvas('canv', { selection: false });
            fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

        }4

        addNode(left, top) {
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

if ($)
    $(document).ready(Graphic.Start);