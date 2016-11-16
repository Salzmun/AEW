



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
    $("#fileLoader").click();
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

$(function () {
    $('#openfile_start').draggable();
});