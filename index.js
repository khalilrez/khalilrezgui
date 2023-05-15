var pdfButton = document.getElementById("pdf");
pdfButton.addEventListener("click",()=>{
    var link = document.createElement('a');
    link.href = "pdf/khalil_rezgui_cv.pdf";
    link.target = "_blank";
    link.download = "khalil_rezgui_cv.pdf";
    link.dispatchEvent(new MouseEvent('click'));
})