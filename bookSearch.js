$(document).ready(function(){
    // jQuery methods go here...
    $.ajax({ 
        type: 'GET', 
        url: 'https://www.googleapis.com/books/v1/volumes?q=modern%20web', 
        data: { get_param: 'value' }, 
        dataType: 'json',
        success: function (data) { 
            $.each(data['items'], function(index, element) {
                var image = $("<img src='" + element['volumeInfo']['imageLinks']['thumbnail'] + "'></a>");
                var title = $("<a href='book.html?bookId=" + element['id'] + "'><p></p></a>").text(element['volumeInfo']['title'] + ": " + element['volumeInfo']['subtitle']);
                var author = $("<p></p>").text("Authors: " + element['volumeInfo']['authors']);
                var lineBreak = $("<br />");
                $('body').append(image, title, author, lineBreak, lineBreak);
            });
        }
    });
});