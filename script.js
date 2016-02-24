var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var colorIndex = 0;
$(document).ready(function() {
    $('#changer').click(function() {
        $('body').css('background-color', colors[colorIndex]);
        colorIndex ++;
        if (colorIndex > colors.length) {
            colorIndex = 0;
        }
    });
    for (var i = 0; i < colors.length; i++) {
       $('#colorsList').append(
           '<button class="specific">' + colors[i] + '</button>'
        );
    }
    $(".specific").click(function(e) {
        $('body').css('background-color', $(e.target).text());
    });
});