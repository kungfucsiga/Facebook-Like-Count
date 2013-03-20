
$(document).ready(function() {
    
    $("#likes_of_a_page_button").live('click',function() {
    
        var pageURL = $("#likes_of_a_page").val();
        $(".likebox").attr('title' , pageURL );
        $('span.likebox').fblikecount();
    })
    
    
    $("#likes_of_a_fb_page_button").live('click',function() {
        
        var pageURL = $("#likes_of_a_fb_page").val();
        $.getJSON("http://graph.facebook.com/" + pageURL, function(res) {
            
            var likes = res.likes;
            $(".result").text(likes);
        });
    })
})