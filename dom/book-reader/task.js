const classFontSize = Array.from(document.getElementsByClassName('font-size'));
const classContent = document.querySelector('.book__content');

classFontSize.forEach (element => {
    element.addEventListener('click', function(evt) {
        evt.preventDefault();
        if (element.classList.contains('font-size_active')) {
            removeClassOfTabs(classFontSize, element.closest('book__control'));
            toggleText(classFontSize);
        } else {
            removeClassOfTabs(classFontSize, element.closest('book__control'));
            element.classList.add('font-size_active');
            toggleText(classFontSize);
        }
    })
})

function removeClassOfTabs (arr, tabsActive) {
    arr.forEach(element => {
        if (tabsActive === element.closest('book__control')) {
           element.classList.remove('font-size_active');
        }
    });
 }  

function toggleText (arr) {
    arr.forEach(element => {
        if (element.dataset.size === 'small') {
            // console.log(element.dataset.size)
            classContent.classList.add('book_fs-small');
         } else if (element.dataset.size === 'big') {
            // console.log(element.dataset.size)
            classContent.classList.remove('book_fs-small');
            classContent.classList.add('book_fs-big');
         } else {
            classContent.classList.remove('book_fs-small');
            classContent.classList.remove('book_fs-big');
        }
    })

}