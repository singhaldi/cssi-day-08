const onSubmit = () => {



    //console.log("submit button clicked");
    const passcodeInput = document.querySelector("#passcode").value;
    const messageInput = document.querySelector("#message").value;
    console.log(passcodeInput);
    console.log(messageInput);

    // password string
    var str = passcodeInput;
    // new MD5 instance and hexadecimal string encoding
    var MD5 = new Hashes.MD5().hex(str);
    console.log(MD5);

    const payload = {
        passcode: MD5, 
        message: messageInput
    };

    firebase.database().ref().push(payload);

}