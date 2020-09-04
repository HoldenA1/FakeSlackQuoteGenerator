function createPreview() {
    var img = document.forms["myForm"]["img"].files[0];
    var imgElement = document.getElementById("profilePic");
    var reader = new FileReader();
    reader.onloadend = function () {
        imgElement.setAttribute("src", reader.result);
    };
    if (img) {
        reader.readAsDataURL(img);
    } else {
        imgElement.setAttribute("src", "");
    }

    var name = document.createTextNode(document.forms["myForm"]["name"].value);
    var nameElement = document.getElementById("previewName");
    // Removes old text
    while (nameElement.firstChild) {
        nameElement.removeChild(nameElement.lastChild);
    }
    // Adds new text
    nameElement.appendChild(name);

    var today = new Date();
    var letters = "PM";
    if (today.getHours() < 12) {
        letters = "AM";
    }
    var zero = "";
    if (today.getMinutes() < 10) {
        zero = "0";
    }
    var time = today.getHours()%12 + ":" + zero + today.getMinutes() + " " + letters;
    var timeElement = document.getElementById("time");
    // Removes old text
    while (timeElement.firstChild) {
        timeElement.removeChild(timeElement.lastChild);
    }
    // Adds new text
    timeElement.appendChild(document.createTextNode(time));

    var quote = document.createTextNode(document.forms["myForm"]["quote"].value);
    var quoteElement = document.getElementById("previewQuote");
    // Removes old text
    while (quoteElement.firstChild) {
        quoteElement.removeChild(quoteElement.lastChild);
    }
    // Adds new text
    quoteElement.appendChild(quote);

    var bgColor = document.forms["myForm"]["bgcolor"].value;

    var txtColor = document.forms["myForm"]["txtcolor"].value;

    var container = document.getElementById("previewContainer");
    container.style.backgroundColor = bgColor;
    container.style.color = txtColor;

    // Unhides outputContainer
    document.getElementById("outputContainer").setAttribute("style", "visibility: visible;");

    setTimeout(() => { 
        html2canvas(document.querySelector("#previewContainer")).then(canvas => {
            var capture = canvas.toDataURL("image/png");
            console.log(capture);

            // Start file download.
            document.getElementById("dl").addEventListener("click", function(){
                // Generate download
                var filename = "quote.png";
                
                download(filename, capture);
            }, false);
        });
    }, 100);

};

function download(filename, cap) {
    var element = document.createElement('a');
    element.setAttribute('href', cap);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}