class Bookts {
    title: string;
    author: string;
    isbn: number;

    constructor(title: string, author: string, isbn: number){
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
     
    setIsbn(newIsbn:number){
        this.isbn = newIsbn;
    }
}

let bookts1: Bookts = new Bookts("Pepe", "pepe", 1234);
console.log(bookts1.getAuthor());
console.log(bookts1.getIsbn());
bookts1.setIsbn("4321");
console.log(bookts1.getIsbn());
