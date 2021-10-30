$('#submitt').click(function(){
    let txt= $('#exampleFormControlInput1').val();
    let text= $('#exampleFormControlTextarea1').val();
    console.log(text);
    $('.list').append('<li>' +txt+'</li>');
    $('.list').append('<li>' +text+'</li>');
    $('li').css('list-style-type','none');

});
