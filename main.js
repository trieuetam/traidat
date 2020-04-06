$('.btn').click(function(){
    $('span.xoa').toggleClass('v');
    $('i.xoa').toggleClass('y');
    $('.sidebar').toggleClass('active');
    $('.dark').toggleClass('on');
});

$('.btn2').click(function(){

    $('.search').toggleClass('down');
});

$('.form').click(function(){

    $('.search').removeClass('down');
});

$('.coment').click(function(){

    $('.search').removeClass('down');
});

$('span.x').click(function(){

    $('.sidebar').toggleClass('active');
    $('.dark').toggleClass('on');
    $('span.xoa').toggleClass('v');
    $('i.xoa').toggleClass('y');
});

$('.dark').click(function(){
    $(this).toggleClass('on');
    $('.sidebar').toggleClass('active');
    $('span.xoa').toggleClass('v');
    $('i.xoa').toggleClass('y');
});

$('.feat-btn').click(function(){
    $('nav ul .child').toggleClass('active')
    $('nav ul .first').toggleClass('rotate')
});

$('.serv-btn').click(function(){
    $('nav ul .child2').toggleClass('active2')
    $('nav ul .second').toggleClass('rotate')
});