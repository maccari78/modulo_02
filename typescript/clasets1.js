var Bookts = /** @class */ (function () {
    function Bookts(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    Bookts.prototype.getTitle = function () {
        return this.title;
    };
    Bookts.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Bookts.prototype.getAuthor = function () {
        return this.author;
    };
    Bookts.prototype.setAuthor = function (newAuthor) {
        this.author = newAuthor;
    };
    Bookts.prototype.getIsbn = function () {
        return this.isbn;
    };
    Bookts.prototype.setIsbn = function (newIsbn) {
        this.isbn = newIsbn;
    };
    return Bookts;
}());
var bookts1 = new Bookts("Pepe", "pepe", 1234);
console.log(bookts1.getAuthor());
console.log(bookts1.getIsbn());
bookts1.setIsbn("4321");
console.log(bookts1.getIsbn());
