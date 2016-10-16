$(function(){
	var html = $('#profile').html();
	var profiles = [
	  {
	    name : "Кушнерук Марина Адамівна",
	    src : "img/avatar.jpg",
	    worker : 'Студенка НТУУ "КПІ"',
	    cause: ['Тому, що подобається програмувати', 'Тому, що мені це цікаво', 'Тому, що студентам мало платять:('],
	    telephone: '+380976129210',
	    linkVk: 'https://vk.com/id41462821',
	    feedback: 'Чекаю з нетерпінням зауважень по домашнім завданням'
	  }
	];
	var content = tmpl(html, {
		data: profiles
	});
	$('body').append(content);
});