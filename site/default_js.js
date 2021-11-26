
// Set Footer String
const footerEl = document.getElementById("footer")
if (footerEl) footerEl.innerHTML ="Robb Walters - robbstat.tk - V2 - 2021.";

// Set Last Update String
const lastUpdateEl = document.getElementById("lastUpdate")
if (lastUpdateEl) lastUpdateEl.innerHTML ="Updated: 11/25/21";


// Set Title Description String
const titleDescrEl = document.getElementById("titleDescr")
if (titleDescrEl) titleDescrEl.innerHTML ="Creating and Sharing";

// Display resume doc download link or not
var working = false;
if (working == false) {
	  var str = "--> Download Robb's Programming Resume! <--";
	  var result = str.link("docs/Robb_CompSci_Resume.docx");
      document.getElementById("resume").innerHTML = result;
}
