import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Search
  search: function(bookName){
    let BASEURL_START = "https://www.googleapis.com/books/v1/volumes?q="
    let BASEURL_END = "&maxResults=10&orderBy=relevance"
    console.log(BASEURL_START + bookName + BASEURL_END)
    return axios.get(BASEURL_START + bookName + BASEURL_END)
  }
};


//https://www.googleapis.com/books/v1/volumes?q=1984&maxResults=10&orderBy=relevance
// GET 

// Return

    // {
    //     authors: res.items[i].volumeInfo.authors
    //     description: res.items[i].volumeInfo.description
    //     image: res.items[i].volumeInfo.imageLinks.thumbnail
    //     link: res.items[i].volumeInfo.previewLink
    //     title: res.items[i].volumeInfo.title
    //   }
      

// {
//     "kind": "books#volumes",
//     "totalItems": 2310,
//     "items": [
//      {
//       "kind": "books#volume",
//       "id": "yxv1LK5gyV4C",
//       "etag": "nfDdbTtRfGE",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/yxv1LK5gyV4C",
//       "volumeInfo": {
//        "title": "1984",
//        "subtitle": "A Novel",
//        "authors": [
//         "George Orwell",
//         "Erich Fromm"
//        ],
//        "publisher": "Univ. Press of Mississippi",
//        "publishedDate": "1977",
//        "description": "Portrays life in a future time when a totalitarian government watches over all citizens and directs all activities.",
//        "industryIdentifiers": [
//         {
//          "type": "ISBN_10",
//          "identifier": "0451524934"
//         },
//         {
//          "type": "ISBN_13",
//          "identifier": "9780451524935"
//         }
//        ],
//        "readingModes": {
//         "text": false,
//         "image": false
//        },
//        "pageCount": 328,
//        "printType": "BOOK",
//        "categories": [
//         "Fiction"
//        ],
//        "averageRating": 4.0,
//        "ratingsCount": 2320,
//        "maturityRating": "NOT_MATURE",
//        "allowAnonLogging": false,
//        "contentVersion": "1.0.0.0.preview.0",
//        "panelizationSummary": {
//         "containsEpubBubbles": false,
//         "containsImageBubbles": false
//        },
//        "imageLinks": {
//         "smallThumbnail": "http://books.google.com/books/content?id=yxv1LK5gyV4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//         "thumbnail": "http://books.google.com/books/content?id=yxv1LK5gyV4C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//        },
//        "language": "en",
//        "previewLink": "http://books.google.com/books?id=yxv1LK5gyV4C&dq=1984&hl=&cd=1&source=gbs_api",
//        "infoLink": "http://books.google.com/books?id=yxv1LK5gyV4C&dq=1984&hl=&source=gbs_api",
//        "canonicalVolumeLink": "https://books.google.com/books/about/1984.html?hl=&id=yxv1LK5gyV4C"
//       },
//       "saleInfo": {
//        "country": "US",
//        "saleability": "NOT_FOR_SALE",
//        "isEbook": false
//       },
//       "accessInfo": {
//        "country": "US",
//        "viewability": "NO_PAGES",
//        "embeddable": false,
//        "publicDomain": false,
//        "textToSpeechPermission": "ALLOWED",
//        "epub": {
//         "isAvailable": false
//        },
//        "pdf": {
//         "isAvailable": false
//        },
//        "webReaderLink": "http://play.google.com/books/reader?id=yxv1LK5gyV4C&hl=&printsec=frontcover&source=gbs_api",
//        "accessViewStatus": "NONE",
//        "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//        "textSnippet": "Portrays life in a future time when a totalitarian government watches over all citizens and directs all activities."
//       }
//      }
//     ]
//    }
   

// //