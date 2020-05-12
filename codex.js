/*Courses page begin  */
$(document).ready(function(){
    $("#course_html_top").click(function() {
        $("#html_slider").slideToggle();
        $("#css_slider").slideUp();
        $("#py_slider").slideUp();
        $("#server_slider").slideUp();
        $("#web_slider").slideUp();
        $("#xml_slider").slideUp();
    });
    $("#course_css_top").click(function() {
        $("#css_slider").slideToggle();
        $("#html_slider").slideUp();
        $("#py_slider").slideUp();
        $("#server_slider").slideUp();
        $("#web_slider").slideUp();
        $("#xml_slider").slideUp();

    });
    $("#course_py_top").click(function() {
        $("#py_slider").slideToggle();
        $("#html_slider").slideUp();
        $("#css_slider").slideUp();
        $("#server_slider").slideUp();
        $("#web_slider").slideUp();
        $("#xml_slider").slideUp();
    });
    $("#course_server_top").click(function() {
        $("#server_slider").slideToggle();
        $("#html_slider").slideUp();
        $("#py_slider").slideUp();
        $("#css_slider").slideUp();
        $("#web_slider").slideUp();
        $("#xml_slider").slideUp();

    });
    $("#course_web_top").click(function() {
        $("#web_slider").slideToggle();
        $("#html_slider").slideUp();
        $("#py_slider").slideUp();
        $("#css_slider").slideUp();
        $("#server_slider").slideUp();
        $("#xml_slider").slideUp();

    }); 
    $("#course_xml_top").click(function() {
        $("#xml_slider").slideToggle();
        $("#html_slider").slideUp();
        $("#py_slider").slideUp();
        $("#css_slider").slideUp();
        $("#server_slider").slideUp();
        $("#web_slider").slideUp();


    })
    
    
    })
  



/* Courses page end */


$(document).ready(function() {
    $("#login_btn").click(function() {
        $(".sign_input").slideToggle();
        $(".sign_up").slideToggle();
        $(".sign_in_p").text("Sign in now");
        $(".get_str_input").text("Sign in");
        $(".already_account").hide();
        $("#check").hide();
        $(".span_rem").hide();
        $(".forget").slideToggle();
    })
})


$(document).ready(function() {
    $(".forget").click(function(){
        window.open("contact.html")
    })
})


$(document).ready(function() {
    $(".icon_sld").click(function() {
        
        $(".hidden_main").slideToggle();
        
    })
})