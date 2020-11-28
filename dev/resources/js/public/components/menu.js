let menu = document.getElementById('uk-sticky-menu');

function verifyScroll(menu)
{
	let positionY = window.scrollY;
	if (positionY > 10)
	{
		menu.classList.add('menu__sticky--dark');
	}
	else
	{
		menu.classList.remove('menu__sticky--dark');
	}
}

verifyScroll(menu);
document.addEventListener("scroll", function () {
	verifyScroll(menu)
});
