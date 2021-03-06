const classFontSize = Array.from(document.getElementsByClassName('font-size'));
const classContent = document.querySelector('.book__content');

classFontSize.forEach (element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        delClass(classFontSize);
        delClassFontSize(classContent);
        // toggleFontSize(classFontSize);   
        // console.log(e.target);
        // console.log(element.dataset.size);
        if (element.dataset.size === 'small') {
            classContent.classList.add('book_fs-small');
            element.classList.add('font-size_active');
        } else if (element.dataset.size === 'big') {
            classContent.classList.add('book_fs-big');
            element.classList.add('font-size_active');
        } else {
            element.classList.add('font-size_active');
        }
    })
});

let delClass = (arr) => {
    arr.forEach((element) => {
      if (element.classList.contains('font-size_active')) {
          element.classList.remove('font-size_active');
        //   console.log(element)
       }
    })
};

let delClassFontSize = (element) => {
    if (element.classList.contains('book_fs-big')) {
        element.classList.remove('book_fs-big');
    } else if (element.classList.contains('book_fs-small')) {
        element.classList.remove('book_fs-small');
    } else {
        '';
    }
};