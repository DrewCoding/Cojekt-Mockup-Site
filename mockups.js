// Repo Page
function downloadSource(){
    alert("Standard DOWNLOAD");
}

function discussion(){
    window.location.href = "discussmockup.html";
}



// Discussion Page
function discussionButton(){
    let discussionBox = document.getElementById("discussion-box");
    let text = discussionBox.value;

    if(text != ""){
        let userName = "username";
        let uploadDate = new Date();
        let discussionAdd = document.createElement("div");
        discussionAdd.textContent = userName + " (" + uploadDate.getHours() + " : " + uploadDate.getMinutes() + " : " + uploadDate.getSeconds() + ") - " + text;
        discussionAdd.className = "discussion-post";
        document.getElementById("discussion-section").appendChild(discussionAdd);
        discussionBox.value = "";
    }
    
}

function backButton(){
    window.location.href = "cojektmock.html";
}

function contribute(){
    window.location.href = "contribute.html";
}