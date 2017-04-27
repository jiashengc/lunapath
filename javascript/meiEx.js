$(document).ready(function() {
    var bot = new RiveScript();
    
    bot.loadFile([
        "../rivescript/beginMei.rive",
        "../rivescript/mei.rive"
    ], loading_done, loading_error);
    
    function loading_done(batch_num) {
        console.log("Batch #" + batch_num + " has finished loading!");
        bot.sortReplies();
    }
    
    function loading_error(error) {
        console.log("Error when loading files: " + error);
    }
    
    $(".userInput").keypress(function(key) {
       if (key.which == 13) {
           var input = $(this).val();
           var reply = bot.reply("local-user", input);
           
           console.log("You: " + input);
           console.log("Mei: " + reply);
           
           $(".chatSpace").append("<p><strong>You</strong>: " + input + "</p>");
           $(".chatSpace").append("<p><strong>Mei</strong>: " + reply + "</p>");
           
           var objDiv = document.getElementsByName("chatSpace");
           objDiv.scrollTop = objDiv.scrollHeight;
           
           $(this).val("");
       } 
    });
    
    $(".chatBot").click(function() {
        if ($(".chatBox").hasClass("fadeOut") || $(".chatBox").hasClass("hidden")) {
            $(".chatBox").removeClass("hidden");
            $(".chatBox").removeClass("fadeOut");
            $(".chatBox").addClass("fadeIn");
        } else {
            $(".chatBox").addClass("fadeOut");
            
            setTimeout(function() {
                $(".chatBox").addClass("hidden");
            }, 1500);
        }
    });
    
});