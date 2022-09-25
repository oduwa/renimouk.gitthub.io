var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

$(document).ready(function(){
// jQuery methods go here...
    var bookId = getUrlParameter("bookId");
    $.ajax({ 
        type: 'GET', 
        url: 'https://www.googleapis.com/books/v1/volumes/' + bookId, 
        data: { get_param: 'value' }, 
        dataType: 'json',
        success: function (element) { 
            var image = $("<img src='" + element['volumeInfo']['imageLinks']['thumbnail'] + "'></a>");
            var title = $("<a href='" + "book" + "'><p></p></a>").text(element['volumeInfo']['title'] + ": " + element['volumeInfo']['subtitle']);
            var author = $("<p></p>").text("Authors: " + element['volumeInfo']['authors']);
            var description = $("<p></p>").html(element['volumeInfo']['description']);
            var lineBreak = $("<br />");
            $('body').append(image, title, author, description, lineBreak, lineBreak);
        }
    });
});