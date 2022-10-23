var image = document.createElement("img");
image.src = chrome.extension.getURL("images/logo.jpg");
document.getElementsByTagName("body")[0].appendChild(image);