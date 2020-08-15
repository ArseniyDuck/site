
// Filters

$("#button-1").click(function(){
    if (!$("#button-1").hasClass("button-active")){
        $("#button-1").toggleClass('button-active')
        $('#button-2').removeClass('button-active')
        $('#button-3').removeClass('button-active')
        $('#button-4').removeClass('button-active')
        $('#button-5').removeClass('button-active')
    }
})
$("#button-2").click(function(){
    if (!$("#button-2").hasClass("button-active")){
        $('#button-1').removeClass('button-active')
        $("#button-2").toggleClass('button-active')
        $('#button-3').removeClass('button-active')
        $('#button-4').removeClass('button-active')
        $('#button-5').removeClass('button-active')
    }
})
$("#button-3").click(function(){
    if (!$("#button-3").hasClass("button-active")){
        $('#button-1').removeClass('button-active')
        $('#button-2').removeClass('button-active')
        $("#button-3").toggleClass('button-active')
        $('#button-4').removeClass('button-active')
        $('#button-5').removeClass('button-active')
    }
})
$("#button-4").click(function(){
    if (!$("#button-4").hasClass("button-active")){
        $('#button-1').removeClass('button-active')
        $('#button-2').removeClass('button-active')
        $('#button-3').removeClass('button-active')
        $("#button-4").toggleClass('button-active')
        $('#button-5').removeClass('button-active')
    }
})
$("#button-5").click(function(){
    if (!$("#button-5").hasClass("button-active")){
        $('#button-1').removeClass('button-active')
        $('#button-2').removeClass('button-active')
        $('#button-3').removeClass('button-active')
        $('#button-4').removeClass('button-active')
        $("#button-5").toggleClass('button-active')
    }
})



// Mobile Menu

$(".menu-burger").click(function(){
    $('#ul-toggle').toggleClass("menu-toggle");
    $(".menu-burger").toggleClass("menu-active");
})