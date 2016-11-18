module Graphic{

    var __script: DUA();
    export function Main() {
        if (!__script)
            __script = new DUA();


    }

   class DUA {
        _id: number;
        _stype: String;
        _ncon: String;

        constructor() {
            this._id = 0;
        }

        imageClick =(url)=> {
            window.location = url;
        }

        click_addNode =() => {
            //$("#fileLoader").click();
            this._id++;
            var endpointOptions = { isSource: false, isTarget: true };
            var endpointOptions1 = { isSource: true, isTarget: false, maxConnections: -1, connector: ["Straight"] };

            var structure = $('<div class="' + this._stype +'" id="' + this._id + '" > </div>');
            $('#canvas').append(structure);
            jsPlumb.addEndpoint(id.toString(), { anchor: "Top" }, endpointOptions);
            jsPlumb.addEndpoint(id.toString(), { anchor: "Bottom" }, endpointOptions1);
            jsPlumb.draggable($(".node_tree"));
            //jsPlumb.connect({ source: "1", target: "2" });

        }

        treeClick = () => {
            this.hideButtons();
            this.showDrawing();
            this._stype = "ntree";
        }

        graphClick = () => {
            this.hideButtons();
            this.showDrawing();
            this._stype = "ngraph";
        }

        listClick=()=> {
            this.hideButtons();
            this.showDrawing();
            this._stype = "nlist";
        }

        showDrawing =()=> {
            $('#site_drawing').show();
        }

        hideButtons =()=> {
            $('#site_choice').hide();
        }

        click_delete=()=> {
            $('.node_tree').bind('click', function () {
                jsPlumb.detachAllConnections(this.id);
                jsPlumb.removeAllEndpoints(this.id);
                $(this).remove();
            });

            $('.canvas').bind('click', function () {
                $('.node_tree').unbind();
            });
        }

    }


}

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
