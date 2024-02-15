function sendMessage() {
    // Get the message from the textarea
    var message = document.getElementById("msg-bar").value;

    // Clear the textarea
    document.getElementById("msg-bar").value = "";

    // Create a new div element to represent the message
    var chattemplate = "<div class='msg'><div class='user-msg'>" + message + "</div></div>";

    // Convert the string into HTML elements
    var temp = document.createElement('div');
    console.log(temp);
    temp.innerHTML = chattemplate;
    console.log(temp.firstChild);
    var messageDiv = temp.firstChild;

    // Append the message div to the main div
    document.getElementById("main").appendChild(messageDiv);

    setTimeout(function() {
        var aiReply = "AI: Thanks for your message!";
        var chattemplate = "<div class='msg'><div class='ai-msg'>" + aiReply + "</div></div>";
        var temp = document.createElement("div");
        temp.innerHTML = chattemplate
        var aiReplyDiv = temp.firstChild;
        
        document.getElementById("main").appendChild(aiReplyDiv);
    }, 1000);
}
