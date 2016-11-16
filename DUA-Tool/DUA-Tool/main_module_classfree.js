var canvas;
canvas = new fabric.Canvas('canv', { selection: false });
function addNode(left, top) {
    var c = new fabric.Circle({
        left: left,
        top: top,
        strokeWidth: 5,
        radius: 12,
        fill: '#fff',
        stroke: '#666'
    });
    c.hasBorders = c.hasControls = false;
    canvas.add(c);
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
function editStuff() {
}
function newPage() {
}
function draganddrop() {
}
//# sourceMappingURL=main_module_classfree.js.map