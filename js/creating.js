function checkusername() {
    var userName = document.getElementsByName("userName")[0].value;
    console.log(userName);
    var conPw = document.getElementsByName("conPw")[0].value;
    console.log(conPw);
    var userPass = "some_password_value"; // 假设这是从某处获取的密码值
    var tel = document.getElementsByName("tel")[0].value;
    console.log(tel);

    var regstr = /^[A-Za-z0-9]{8,12}$/; // 用户名必须是8到12位的字母和数字
    var regstr2 = /^\d{11}$/; // 电话号码必须是11位数字

    if (userName == "") {
        alert("name can not be none!");
        document.getElementsByName("userName")[0].focus();
    } else if (!regstr.test(userName)) {
        alert("the name must use word and number length8-12!");
        document.getElementsByName("userName")[0].focus();
    } else if (!regstr2.test(tel)) { // 使用正确的正则表达式来检查电话号码
        alert("The phone number must be 11 digits");
        document.getElementsByName("tel")[0].focus();
    } else if (!document.getElementsByName("gender")[0].checked) { // 假设性别是通过名称定义的
        alert("Gender must be chosen!");
    } else if (conPw != userPass) {
        alert("The password and confirmation password do not match");
        document.getElementsByName("conPw")[0].focus();
        document.getElementsByName("gender")[0].focus();
    } else if (!document.getElementsByName("ch1")[0].checked) { // 假设同意条款是通过名称定义的
        alert("You must agree to the terms first!");
        document.getElementsByName("ch1")[0].focus();
    } else {
        alert("succeed");
    }
}
