const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    let numTries = 0;
    let matched = false;
    
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    
    

        for (let key in data){
            if (key === passcode.value){
                console.log("match found");
                const message = document.querySelector("#message");
                message.innerHTML = data[key];
                matched = true;
                break;
            }
            else{
                console.log("no match");
                const message = document.querySelector("#message");
                numTries = numTries + 1;
                matched = false;
                console.log("Number of tries: " + numTries);
                message.innerHTML = "IMPORTANT: No messages found matching that passcode. Please try again.";
                /*if (numTries >= 5){
                    document.getElementById("viewMsg").disabled = true;
                    const message = document.querySelector("#message");
                    message.innerHTML = "Too many attempts, you can no longer view messages.";
                 } */

            }
                
        }

            
        
    })

}