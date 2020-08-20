function createQuoteElement() {
    var img = document.forms["myForm"]["img"].files[0];
    var imgElement = document.createElement("img");
    var reader = new FileReader();
    reader.onloadend = function () {
        imgElement.setAttribute("src", reader.result);
    };
    if (img) {
        reader.readAsDataURL(img);
    } else {
        imgElement.setAttribute("src", "");
    }
    imgElement.setAttribute("width", "50");
    imgElement.setAttribute("height", "50");

    var name = document.createTextNode(document.forms["myForm"]["name"].value);
    var nameElement = document.createElement("span");
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
    var timeElement = document.createElement("span");
    timeElement.appendChild(document.createTextNode(time));

    var div = document.createElement("div");
    div.appendChild(imgElement);
    div.appendChild(nameElement);
    div.appendChild(timeElement);

    var quote = document.createTextNode(document.forms["myForm"]["quote"].value);
    var quoteElement = document.createElement("p");
    quoteElement.appendChild(quote);

    var bgColor = document.forms["myForm"]["bgcolor"].value;

    var txtColor = document.forms["myForm"]["txtcolor"].value;

    var container = document.getElementById("quoteContainer");
    container.style.backgroundColor = bgColor;
    container.style.color = txtColor;
    container.appendChild(div);
    container.appendChild(quoteElement);
};