'use strict';
const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = document.querySelector('.tab__contents');
const tabNavigator = document.querySelector('.tab__navigation');
// console.log(tabs);
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
// console.log(tabsContent);
function removeClassOfTabs (arr, tabsActive) {
   arr.forEach(element => {
       if (tabsActive === element.closest('div.tab__navigation')) {
          element.classList.remove('tab_active');
       }
   });
}


function changeClassOfContent (arr, tabsActive) {
   arr.forEach(element => {
       if (tabsActive === element.closest('tab__content')) {
           element.classList.remove('tab__content_active');
       } else if (!element.classList.contains('tab__content_active')) {
           element.classList.add('tab__content_active');
       }
   });
}


tabs.forEach(function(element) {
   element.addEventListener('click', function () {
      if (element.classList.contains('tab_active')) {
         removeClassOfTabs(tabs, element.closest('div.tab__navigation'));
         changeClassOfContent(tabsContent, element.closest('tab__content'));
      } else  {
         removeClassOfTabs(tabs, element.closest('div.tab__navigation'));
         changeClassOfContent(tabsContent, element.closest('tab__content'));
         element.classList.add('tab_active');
      }
   });
});