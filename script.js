var buttonAppearanceTime;  // lưu thời điểm button xuất hiện
$(document).ready(function() {
    // Click"
    $(document).on("click", "#generateButton", function () {
        console.log("clicked"); 
        var clickTime = new Date();  // Lấy thời điểm được click
        var elapsedTime = (clickTime - buttonAppearanceTime) / 1000;  // Tính time của 2 lần click (ms)
        console.log(elapsedTime); 
        $('#time').text("Your time: " + elapsedTime.toFixed(2) + "s");
        createRandomButton();
    });
});
// tạo button và đặt vị trí ngẫu nhiên
function createRandomButton() {
    var buttonToDelete = document.getElementById("generateButton");
    if (buttonToDelete) {
        buttonToDelete.remove();
    }
    // Tạo button mới
    var button = $('<button id="generateButton"></button>');
    // Đặt class cho button
    var cssClass = ["random-button", "random1-button", "random2-button", "triangle-button",
     "circle-button", "circle1-button", "circle2-button"];
    console.log(cssClass[Math.floor(Math.random() * cssClass.length)]);
    button.addClass(cssClass[Math.floor(Math.random() * cssClass.length)]);
    // Đặt vị trí ngẫu nhiên lên màn hình
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var randomX = Math.random() * (screenWidth - 150);
    var randomY = Math.random() * (screenHeight - 150);
    button.css({
        left: randomX + "px" ,
        top: randomY + "px"
    });
    buttonAppearanceTime = new Date();
    $('#buttonContainer').append(button);
}
