function modifyPre() {
    var pres = document.getElementsByTagName('pre');
    for (var i = 0; i < pres.length; i++) {
	pres[i].className = 'prettyprint';
    }
    var codes = document.getElementsByTagName('code');
    for (var i = 0; i < codes.length; i++) {
	codes[i].className = 'prettyprint';
    }
}
