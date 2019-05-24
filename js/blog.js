class Article {
    constructor(domElement) {

        this.domElement = domElement;

        this.expandButton = domElement.querySelector('.expandButton');

        this.expandButton.textContent = 'Expand';

        this.expandButton.addEventListener('click', () => this.expandArticle());
    }

    expandArticle() {

        this.domElement.classList.toggle('article-open');
    }
}



let articles = document.querySelectorAll('.article');
articles.forEach(article => {
    new Article(article);
});


class ICONS {
    constructor(icon) {
        this.icon = icon;
        this.childs = icon.querySelector('.pkicon');
        this.icon.addEventListener('mouseover', () => this.hoverit());
        this.icon.addEventListener('mouseout', () => this.leaveit());
    }

    hoverit() {
        this.childs.classList.toggle('not-selected');
        // this.childs.classList.add('selected');

    }

    leaveit() {
        this.childs.classList.toggle('not-selected');
        //this.childs.classList.remove('selected');

    }
}

//create a new instance of the ICONS class for each item available
const selected = document.querySelectorAll('.icon');
selected.forEach(function (element) {
    return new ICONS(element);
});




const arrow = document.querySelector(".arrow");
const drawer = document.getElementById("drawer-nav");


arrow.addEventListener('click', function () {
    drawer.classList.toggle('drawer-hide');
    drawer.classList.toggle('drawer-out');

});


//slide-in

const slideInImg = document.querySelectorAll('.slide-in');
function slideIt() {
    slideInImg.forEach(image => {

        const slideIn = (window.scrollY + window.innerHeight) - image.height / 2;
        const imgBttm = image.offsetTop + image.height;
        const halfShown = slideIn > image.offsetTop;
        const isnotPastImg = window.scrollY < imgBttm;


        if (halfShown && isnotPastImg) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }


    });

}


window.addEventListener('scroll', slideIt);