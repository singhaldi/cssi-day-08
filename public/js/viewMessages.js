const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    let numTries = 0;
    let matched = false;
    
    
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    
        for (let key in data){
            if (data[key].passcode === passcode.value){
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