class Article {
    constructor(domElement) {
        this.domElement = domElement;
        // Expand Button
        this.expandButton = document.querySelectorAll('.expandButton');
        // this.expandButton.textContent = 'expand';
        // this.expandButton.addEventListener('click', () => this.expandArticle());
        // this.domElement.textContent = 'Expand';
        // this.domElement.addEventListener('click', () => this.expandArticle());

        this.expandButton.forEach((btn, idx) => {
            btn.textContent = 'Expand';
            btn.addEventListener('click', () => this.expandArticle(idx));
        })


    }

    expandArticle(idx) {
        if (idx == 0) {
            this.domElement.classList.toggle('article-open');
        }
        console.log(idx);

    }
}

let articles = document.querySelectorAll('.article');
articles.forEach(article => {
    new Article(article);
})