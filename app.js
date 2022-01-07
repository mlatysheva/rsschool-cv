var checkExist = setInterval(() => {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    clearInterval(checkExist);
  }

  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", smallscreenMenu);

  function smallscreenMenu() {
    hamburger.classList.toggle("active");
    console.log('hamburger clicked');
    navMenu.classList.toggle("active");
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach(n => n.addEventListener("click", closeMenu));

  function closeMenu() {
    console.log('nav link clicked')
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
})


console.log(`
Самооценка 120/120 баллов 

Выполненные пункты:
1) студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages 
2) вёрстка валидная. 
3) header, main, footer 
4) элемент nav 
5) только один заголовок h1 
6) заголовки h2 
7) в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс. 
8) для оформления СV используются css-стили 
9) при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону 
10) на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt
11) навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10. 
12) краткую информацию о себе 
13) контакты для связи 
14) перечень навыков 
15) пример кода. Код добавляется при помощи символов и тегов, а не картинкой 
16) перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения 
17) информацию об образовании и уровне английского 
18) CV выполнено на английском языке 
`)
