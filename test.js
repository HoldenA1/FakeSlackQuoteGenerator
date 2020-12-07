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
        heading.appendChild(statusElement);
    }

    var name = document.createTextNode("Charles");
    var nameElement = document.getElementById("previewName");
    nameElement.appendChild(name);

    var container = document.getElementById("previewContainer");
    container.style.backgroundColor = "black";
    container.style.color = "white";

    // Unhides outputContainer
    document.getElementById("outputContainer").setAttribute("style", "visibility: visible;");
};

async function download() {
    window.scrollTo(0,0);
    await html2canvas(document.querySelector("#previewContainer")).then(canvas => {
        document.body.appendChild(canvas);
    });
}