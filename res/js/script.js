/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/   
$(document).ready(function(){
    $.getJSON('data.json',function(data){                
        var output="" 
        var outslide=""
        $.each(data, function(key,val){
          output+= '<div class="content" style="background-image:url(\'content/images/'+val.img.img1+'\')">';
          output+= '<div class="content-wrap"></div>';
            output+= '<div class="content-place">';
                output+= '<div class="content-menu">';
                output+= '<a href="#" class="link eye" data-sl1="'+val.img.img1+'" data-sl2="'+val.img.img2+'" data-sl3="'+val.img.img3+'" data-sl4="'+val.img.img4+'" data-sl5="'+val.img.img5+'" data-title="'+val.title+'" data-desc="'+val.desc+'" data-tags="'+val.tags+'" data-site="'+val.site+'"><img src="res/img/icon_eye.svg" class="icon" alt="eye icon" title="Look"></a>';
                output+= '<a href="'+val.site+'" class="link" target="_new"><img src="res/img/icon_chrome.svg" class="icon" alt="chrome icon" title="Browse"></a>';
                output+= '</div>';
                output+= '<div class="content-desc">'+val.title+'</div>';
                output+= '</div>';
          output+= '</div>';                
        });
        output+='<div class="clear"></div> <nav class="nav-content"><a href="#" id="loadMore">Load More</a></nav><div class="nav-content-err"><p>Ups! No More.</p></div>'
        $('.project').html(output);
        
    });
    
    $('.pop').hide();
    $(".content").slice(0, 6).show();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".content:hidden").slice(0, 6).slideDown();
            if ($(".content:hidden").length == 0) {
                $("#loadMore").fadeOut('slow');
                $(".nav-content").css({
                    "border":"none",
                });
                $(".nav-content-err").show();
            }
            $('html,.project').animate({
                scrollTop: $(this).offset().top
            }, 1200);
        });
        

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').css({
                "padding":"10px",
                "transition": "all 200ms ease-in-out",
            });
            $('.brand-name').fadeOut();
        }else{
            $('.header').css({
                "padding":"20px",
            });
            $('.brand-name').fadeIn();
        }
    });
   

    $('#top').click(function () {
        $('.project,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.totop a').fadeIn();
        } else {
            $('.totop a').fadeOut();
        }
    });

    $('.pop-close').click(function(){
        $('.pop').hide();
    });
    $(document).on('click', '.eye', function (e) {
        $('.pop').fadeIn();
        var dsl1=$(this).attr('data-sl1');
        var dsl2=$(this).attr('data-sl2');
        var dsl3=$(this).attr('data-sl3');
        var dsl4=$(this).attr('data-sl4');
        var dsl5=$(this).attr('data-sl5');
        var title=$(this).attr('data-title');
        var desc=$(this).attr('data-desc');
        var tags=$(this).attr('data-tags');

        // $('#slide1').css({
        //     "background-image":"url(content/images/"+dsl1+")"
        // });
        
        // $('#slide2').css({
        //     "background-image":"url(content/images/"+dsl2+")"
        // });
        // $('#slide3').css({
        //     "background-image":"url(content/images/"+dsl3+")"
        // });
        // $('#slide4').css({
        //     "background-image":"url(content/images/"+dsl4+")"
        // });
        // $('#slide5').css({
        //     "background-image":"url(content/images/"+dsl5+")"
        // });
        $('#slidezoom1').attr('src','content/images/'+dsl1);
        $('#slidezoom2').attr('src','content/images/'+dsl2);
        $('#slidezoom3').attr('src','content/images/'+dsl3);
        $('#slidezoom4').attr('src','content/images/'+dsl4);
        $('#slidezoom5').attr('src','content/images/'+dsl5);

        $('#slidezoom1').attr('alt',title);
        $('#slidezoom2').attr('alt',title);
        $('#slidezoom3').attr('alt',title);
        $('#slidezoom4').attr('alt',title);
        $('#slidezoom5').attr('alt',title);

        $('.board-title').html(title);
        $('.board-desc').html(desc);
        $('.board-tags').html(tags);
        
    });

});
