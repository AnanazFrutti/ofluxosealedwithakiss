function getFileContent(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var fileContent = rawFile.responseText;
                document.getElementsByTagName("body")[0].innerHTML = fileContent;
            }
        }
    }
    rawFile.send(null);
}

var width = window.innerWidth;
var height = window.innerHeight;

if (width  > 600) {
    getFileContent("index.html");
} else {
    getFileContent("mobile.html");
}

//on load
var element = document.getElementsByClassName('startImage');
console.log(element);

setTimeout(function(){
    // element[0].classList.add("hide");
    $(".startImage").fadeOut("slow");
}, 2000);
