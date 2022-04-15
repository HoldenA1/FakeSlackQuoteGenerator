function updateTime() {    
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
    document.forms["myForm"]["time"].value = time
}

function createPreview() {
    var profilePic = document.forms["myForm"]["profilePic"].files[0];
    var profilePicElement = document.getElementById("previewPic");
    var profReader = new FileReader();
    profReader.onloadend = function () {
        profilePicElement.setAttribute("src", profReader.result);
    };
    if (profilePic) {
        profReader.readAsDataURL(profilePic);
    } else {
        profilePicElement.setAttribute("src", "");
    }

    // Time element is created here to put the status before it
    var timeElement = document.getElementById("previewTime");
    var status = document.forms["myForm"]["status"].files[0];
    var heading = document.getElementById("heading"); 
    var statusElement = document.createElement("img");
    var statReader = new FileReader();
    statReader.onloadend = function () {
        statusElement.setAttribute("src", statReader.result);
    };
    if (status) {
        statusElement.setAttribute("style", "width: 16px;");
        statReader.readAsDataURL(status);
        heading.insertBefore(statusElement, timeElement);
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
    
    var time = document.forms["myForm"]["time"].value
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
};

async function download() {
    await html2canvas(document.querySelector("#previewContainer"), {
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        width: document.getElementById("previewContainer").offsetWidth-1,
        windowWidth: document.documentElement.offsetWidth
    }).then(canvas => {
        // Generate photo
        var capture = canvas.toDataURL("image/png");

        // Generate download link
        var filename = "quote.png";
        
        var element = document.createElement('a');
        element.setAttribute('href', capture);
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    });
}
