
// 검색창 제어
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  //검색아이콘만 클릭해도 focus되게 만들기
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});




/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()
 