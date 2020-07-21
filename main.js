$('.btn-1').click(function(){
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

$('footer').click(function(){

    $('.search').removeClass('down');
});

$('i.x').click(function(){

    $('.sidebar').toggleClass('active');
    $('.dark').toggleClass('on');
    $('span.xoa').toggleClass('v');
    $('i.xoa').toggleClass('y');
});

$('.dark').click(function(){
    $(this).removeClass('on');
            $('.wrapper').removeClass("ledsd"); 
    $('.sidebar').toggleClass('active');
    $('span.xoa').toggleClass('v');
    $('i.xoa').toggleClass('y');
});

$('.feat-btn').click(function(){
    $('nav ul .childbar').toggleClass('active')
    $('nav ul .first').toggleClass('rotate')
});

$('.serv-btn').click(function(){
    $('nav ul .child2').toggleClass('active2')
    $('nav ul .second').toggleClass('rotate')
});



    $(window).ready (function(){
      $('.box-user').click(function(){
        $('.wrapper').toggleClass("ledsd")
            $('.dark').toggleClass('on');  
    });
        $('#log-click1').click(function(){
            $('.dark').removeClass('on');
        $('.wrapper').toggleClass("ledsd")});  
    
    });

    var x = document.getElementById("login");
        var y = document.getElementById("register");
        var z = document.getElementById("login2");

        function register(){
            x.style.left = "-120%"; 
            y.style.left = "10%";
            z.style.left = "112%";
        }
        function login(){
            x.style.left = "10%";
            y.style.left = "120%";
            z.style.left = "0px";
        }


            //Darkmode
    let darkMode = localStorage.getItem('darkMode');
    const darkModeToggle = $('.switch');

    const enableDarkMode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkMode', 'enabled')
    }

    const disableDarkMode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkMode', null)
    }

    //tuy chinh load trang co darkmode khong
    if(darkMode === 'enabled'){
        enableDarkMode();
    }

    darkModeToggle.click(function(){ 
        darkMode = localStorage.getItem('darkMode')
        if(darkMode !== 'enabled'){
            enableDarkMode();
        }
        else{
            disableDarkMode();
        }
    });
