const app = Vue.createApp({
    data() {
        return {

            showBooks: true,
            books: [{
                    title: "The Godfather",
                    author: "Mario puzo",
                    img: "./assets/godfather.jpg",
                    isFav: false

                },
                {
                    title: "The Great Gatsby",
                    author: "F. Scott Fitzgerald",
                    img: "./assets/greatgatsby.gif",
                    isFav: false

                },
                {
                    title: "A Clockwork Orange",
                    author: "Anthony Burgess",
                    img: "./assets/Clockwork-Orange.jpg",
                    isFav: false
                }
            ]
        };
    },

    methods: {
        toggleFav(book) {

            book.isFav = !book.isFav;

        },
        addBook(name, author, pic) {

        },

        toggleShow() {
            this.showBooks = !this.showBooks;
        }
    },

});


app.mount('#app');