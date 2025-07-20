// log.js
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // مقدارهای ورودی رو بردار
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // اعتبارسنجی (مثلاً نام کاربری admin و رمز 1234)
    if(username === "admin" && password === "1234") {
        window.location.href = "index1.html";
    } else {
        document.querySelector('.error-message').style.display = "block";
        document.querySelector('.error-message').textContent = "نام کاربری یا رمز اشتباه است!";
    }
});ض
