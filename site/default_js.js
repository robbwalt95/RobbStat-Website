// Lock links
const lnk = document.getElementById('locked');
if (lnk) {

    if (window.addEventListener) {
        document.addEventListener('click', function (e) {
            if (e.target.id === lnk.id) {
                e.preventDefault();         // Comment this line to enable the link tag again.
                alert("Page is currently locked. \n\nBypassing is simple. \nThink outside of the box."); // Comment this line to enable the link tag again.
            }
     });
    }

}


// Set Footer String
const footerEl = document.getElementById("footer");
if (footerEl) footerEl.innerHTML ="Robb Walters - robbstat.tk - V2.5 - 2021.";

// Set Last Update String
const lastUpdateEl = document.getElementById("lastUpdate");
if (lastUpdateEl) lastUpdateEl.innerHTML ="Last Updated: 12/23/2021";


// Set Title Description String
const titleDescrEl = document.getElementById("titleDescr");
if (titleDescrEl) titleDescrEl.innerHTML ="Creating and Sharing";

// Display resume doc download link or not
var working = false;
if (working == false) {
	  var str = "--> Download Robb's Programming Resume! <--";
	  const result = str.link("docs/Robb_CompSci_Resume.docx");
	  if(result) document.getElementById("resume").innerHTML = result;
}

