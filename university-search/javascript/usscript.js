$(document).ready(function() {
    $.getJSON("../data/unidata/malaysiaUni.json", function(data) {
       
        var i = 0;
        
        function appendUni() {
            for (i = 0; i < data.length; i+=1) {
                $(".universities").append("<div class='entry'><img src='" + data[i].logo + "'<div class='name'>" + data[i].name + "</div></div>");
            }
        }
        
        appendUni();
        
        
    });
});