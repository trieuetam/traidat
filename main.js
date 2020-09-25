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
    $('.sidebar').removeClass('active');

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
            x.style.left = "-100%"; 
            y.style.right = "10%";
            z.style.left = "112%";
        }
        function login(){
            x.style.left = "10%";
            y.style.right = "-100%";
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


//status-pc sticky && go to top

    
   //sticky
   window.addEventListener("scroll", function(){
        $(".status-pc").toggleClass("sticky", window.scrollY > 0);

        //go to top
        var showGoToTop = 700;
        if($(this).scrollTop() >= showGoToTop){
            $(".go-to-top").fadeIn();       
        }else{
            $(".go-to-top").fadeOut();        
        }

        $('.nav ul ul li').toggleClass('bg-444', window.scrollY > 0);

    });

   $(".go-to-top").click(function(){
        $('html, body').animate({ scrollTop: 0 });
   });


   $('.carousel').carousel({
    interval: 2000
  })