function clearContent(divID = "content") {
    var oldContent = document.getElementById(divID);
    if (oldContent) {
        oldContent.innerHTML="";
    }
}