$(document).ready(function(){
    $('p').click(function(){
        $(this).hide()
    })

    $('.hide').click(function(){
        $('.box').hide(1000)
    })
    $('.show').click(function(){
        $('.box').show(1000)
    })
    $('.toggol').click(function(){
        $('.box').toggle(1000)
    })

    $('.dropbtn').click(function(){
        $('.dropdown').slideToggle()
    })
    $('.colaps').click(function(){
        $('.menu').slideToggle()
    })
}) 