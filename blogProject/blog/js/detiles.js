$(document).ready(function(){
    const detail= JSON.parse(window.sessionStorage.getItem('subject'));
    console.log(detail);

    $('#heading').text(detail.subject);
    $('#sImg').attr('src',detail.img);
    $('#details').text(detail.description);
})