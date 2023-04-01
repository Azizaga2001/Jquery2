$('.work1 #btn1').click(function () {
    $('.work1').css({
        "background-color": "orange"
    })
})

$('.work2 #btn2').click(function () {
    $('.work2').css({
        "background-color": "orange",
        "border-radius": "50px"
    })
})

$('#btn3').click(function () {
    $('.work3').hide(100)
})

$('#btn31').click(function () {
    $('.work3').show(100)
})

$('#btn32').click(function () {
    $('.work3').toggle(100)
})

$('#btn4').click(function () {
    $('.work4').fadeOut(100)
})

$('#btn41').click(function () {
    $('.work4').fadeIn(100)
})

$('#btn42').click(function () {
    $('.work4').fadeToggle(100)
})

$('#btn5').click(function () {
    $('.work5').hide(100)
})

$('#btn51').click(function () {
    $('.work5').show(100)
})

$('#btn6').click(function () {
    $('.work6').toggle(100)
})

$('#btn7').dblclick(function () {
    $('.work7').css({
        "background-color": "orange"
    })
})