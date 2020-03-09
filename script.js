var overlay = document.getElementById('overlay');
var trKliknut = document.getElementsByClassName('row');
var table = document.getElementById('glavna-tabela');
var txtCont = document.getElementsByClassName('text-container');

for (var i = 0; i < trKliknut.length; i++) {
		trKliknut[i].addEventListener('click', function(e) {
			overlay.style.display = 'flex';		
			var brKlikReda = e.target.parentNode.rowIndex;
			txtCont[brKlikReda - 1].style.display = "block";
	});
}

overlay.addEventListener('click', function(e) {
	overlay.style.display = 'none';
	for (var i = 0; i < txtCont.length; i++) {
		txtCont[i].style.display = 'none';
	}
});
