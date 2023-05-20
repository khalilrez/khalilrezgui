
try{var pdfButton = document.getElementById("pdf");
pdfButton.addEventListener("click",()=>{
    var link = document.createElement('a');
    link.href = "pdf/khalil_rezgui_cv.pdf";
    link.target = "_blank";
    link.download = "khalil_rezgui_cv.pdf";
    link.dispatchEvent(new MouseEvent('click'));
})}catch(e){
    console.error(e);
}

window.onblur = function() { 
    document.title = "HEY COME BACK HERE !"
}
window.onfocus = function(){
    document.title = "Khalil Rezgui's portfolio"

}

window.addEventListener("load", function(){
    if(this.sessionStorage.getItem("firstVisit") == null){
    const popup = new Popup({
        id: "override",
        title: "Hey, ",
        content: `This is my portfolio , You can find my github page,  my linkedIn and a link to my resume. You can also find my most recent projects
          custom-space-out big-margin§ {custom-style}[Click the play button for music]`,
        sideMargin: "1.5em",
        fontSizeMultiplier: "1.2",
        backgroundColor: "#FFFEE3",
        allowClose: true,
        css: `
        .popup.override .custom-space-out {
            display: flex;
            justify-content: center;
            gap: 1.5em;
        }
        .custom-style{
            font-size: 16px;
            font-variant: small-caps;
        }
        `
    });
    popup.show();
    sessionStorage.setItem("firstVisit","true");
}
})


// Listen for the mouse leaving the viewport
let counter = 0;
document.addEventListener("mouseout", function(event) {
    // If the mouse leaves from the top of the viewport (indicating exit intent)
    if (event.clientY <= 0 && !counter) {
      counter++;
      const popupLeave = new Popup({
        id: "disclaimer",
        title: "Wait !",
        content:
            "Before you leave , download my resume {a-pdf/khalil_rezgui_cv.pdf}[here].",
        sideMargin: "2.9vw",
        backgroundColor: "#FFFEE3",
        fontSizeMultiplier: 1.2,
        linkColor: "#5aec",
    });
    popupLeave.show();
    }

  });
