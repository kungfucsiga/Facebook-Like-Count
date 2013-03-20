<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Facebook Like Count</title>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <script type="text/javascript" src="js/fb_like_count_plugin.js"></script>
        <script type="text/javascript" src="js/fb_like_count.js"></script>
    </head>
    <body>
        
        <h1>Oldal likejainak száma</h1>
        <input placeholder="pl: http://www.index.hu" id="likes_of_a_page" type="text" /> 
        <input id="likes_of_a_page_button" type="button" value="Mehet" />
        
        
        <h1>Facebook oldal likejainak száma</h1>
        <input placeholder="pl: hyundai.hungary" id="likes_of_a_fb_page" type="text" />
        <input id="likes_of_a_fb_page_button" type="button" value="Mehet" />
        
        <h1>Eredmény</h1>
        <div class="result"></div>
        
        <span style="display: none;" class="likebox" title="http://www.index.hu"></span>
        
    </body>
</html>
