var pdfButton = document.getElementById("pdf");
pdfButton.addEventListener("click",()=>{
    var link = document.createElement('a');
    link.href = "pdf/khalil_rezgui_cv.pdf";
    link.target = "_blank";
    link.download = "khalil_rezgui_cv.pdf";
    link.dispatchEvent(new MouseEvent('click'));
})

window.onblur = function() { 
    document.title = "HEY COME BACK HERE !"
}
window.onfocus = function(){
    document.title = "Khalil Rezgui's portfolio"

}
