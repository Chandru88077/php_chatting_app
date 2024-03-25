const form = document.querySelector(".typing-area");
inputField = form.querySelector(".input-filed");
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");


form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form form submitting
};

// Send messages
sendBtn.onclick = ()=>{
    // let's start Ajax
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "php/insert_chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                //let data = xhr.response;
                //console.log(data); // testing
                inputField.value = ""; // once message inserted into databse then leave blank the input field
                scrollToBottom();
            }
        }
    };
    // we have to send the form data through ajax to php
    let formData = new FormData(form); //creating new formData object
    xhr.send(formData); //seding the form data to php
};

chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
};
chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

// chatBox show
setInterval(()=>{
    // let's start Ajax
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "php/get_chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                //console.log(data); // testing
                chatBox.innerHTML = data;
                if(!chatBox.classList.contains("active")){ //if active class not contains in chatbox the scroll to bottom
                    scrollToBottom();
                }
            }
        }
    };
    // we have to send the form data through ajax to php
    let formData = new FormData(form); //creating new formData object
    xhr.send(formData); //seding the form data to php
},500); // this function will run frequently after 500

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}