function toggleMenu(){
    var element = document.querySelector(".menu");
    element.classList.toggle("show-menu");
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
