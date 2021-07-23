const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    
    // password string
    var str = passcode.value;
    // new MD5 instance and hexadecimal string encoding
    var MD5 = new Hashes.MD5().hex(str);
    console.log(MD5);


    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    
        for (let key in data){
            if (data[key].passcode === MD5){
                console.log("match found");
                const message = document.querySelector("#message");
                message.innerHTML = data[key].message;
                matched = true;
                break;
            }

            else{
                console.log("no match");
                const message = document.querySelector("#message");
                message.innerHTML = "IMPORTANT: No messages found matching that passcode. Please try again.";

            }
            
                
        } 

            
        
    })

}