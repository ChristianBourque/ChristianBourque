$('.imgzoomer').mouseover(function () {
    $(this).css("cursor", "pointer");
    $(this).css('transform','scale(1.2)');
})

$('.imgzoomer').mouseleave(function () {
    $(this).css("cursor", "pointer");
    $(this).css('transform', 'scale(1)');
})

$('#submit').click(function () {
    alert('Inscription réussie!!');
})
