$('#submitt').click(function(){
    let txt= $('#exampleFormControlTextarea1').val();
    $('.list').append('<li>' +txt+'</li>');
    $('li').css('text-align','center');
});
   
