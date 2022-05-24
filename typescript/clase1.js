class Book {
    #title;
    #author;
    #isbn;

    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
 
    getTitle(){
        return this.title;
    }
     
    setTitle(newTitle){
        this.title = newTitle;
    }
     
    getAuthor(){
        return this.author;
    }
     
    setAuthor(newAuthor){
        this.author = newAuthor;
    }
     
    getIsbn(){
        return this.isbn;
    }
     
    setIsbn(newIsbn){
        this.isbn = newIsbn;
    }
}

let book1= new Book("Pepe", "pepe", 1234);
console.log(book1.getAuthor());
console.log(book1.getIsbn());
book1.setIsbn("4321");
console.log(book1.getIsbn());
console.log(book1.author + book1.isbn);
