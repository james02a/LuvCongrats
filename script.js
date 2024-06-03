


    dragElement(document.querySelector(".img-container"));
    dragElement(document.querySelector(".img-container2"));
    dragElement(document.querySelector(".img-container3"));
    dragElement(document.querySelector(".img-container4"));
    dragElement(document.querySelector(".img-container5"));
    dragElement(document.querySelector(".img-container6"));
    dragElement(document.querySelector(".img-container8"));


function dragElement(elmnt){
    var pos1 =0; pos2 = 0; pos3 = 0; pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e){
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;

    }
    function elementDrag(e){
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let newTop = elmnt.offsetTop -pos2;
        let newLeft = elmnt.offsetLeft - pos1;
        const minX = 0;
        const minY = 0;
        const maxX = window.innerWidth - elmnt.offsetWidth;
        const maxY = window.innerHeight - elmnt.offsetHeight;

        if (newTop < minY) newTop = minY;
        if (newLeft < minX) newLeft = minX;
        if (newTop > maxY) newTop = maxY;
        if (newLeft > maxX) newLeft = maxX;
        elmnt.style.top =newTop + "px";
        elmnt.style.left =newLeft + "px";


        
    }
    function closeDragElement(){
        document.onmouseup = null;
        document.onmousemove = null;
    }

}