$(document).ready(function() {
   
    // Initiatlize 
    
    var uniData = [];
    var i = 0, n = 0;
    var left = 0, right = 0;

    // Retrieve Malaysian Universities
    function retreiveUni(index, screen) {
        $.getJSON("data/unidata/malaysiaUni.json", function(data) {
            appendUni(data[index], screen);
        });
    }
    
    // Change the Unis 
    function appendUni(uni, screen) {
        if (screen == 1) {
            $(".uniName1").text(uni.name);
            $(".qsRank1").text("QS Rank: " + uni.qsrank);
            $(".theRank1").text("THE Rank: " + uni.therank);
            $(".age1").text("Age: " + uni.age);
            $(".status1").text("Status: " + uni.status);
            $(".staff1").text("Total: " + uni.academic_staff);
            $(".intstaff1").text("International: " + uni.academic_int);
            $(".student1").text("Total: " + uni.students_total);
            $(".intstudent1").text("International: " + uni.students_int);
            $(".desc1").text(uni.desc);
            $("#undergrad1").text("");
            $("#postgrad1").text("");
            for (var c = 0; c < uni.undergrad.length; c+=1) {    
                $("#undergrad1").append("<div class='pCourse' id='under" + c + "'>" + uni.undergrad[c].course + "</p>");
            }
            for (var c = 0; c < uni.postgrad.length; c+=1) {
                $("#postgrad1").append("<div class='pCourse' id='post" + c + "'>" + uni.postgrad[c].course + "</p>");
            }
        } else {
            $(".uniName2").text(uni.name);
            $(".qsRank2").text("QS Rank: " + uni.qsrank);
            $(".theRank2").text("THE Rank: " + uni.therank);
            $(".age2").text("Age: " + uni.age);
            $(".status2").text("Status: " + uni.status);
            $(".staff2").text("Total: " + uni.academic_staff);
            $(".intstaff2").text("International: " + uni.academic_int);
            $(".student2").text("Total: " + uni.students_total);
            $(".intstudent2").text("International: " + uni.students_int);
            $(".desc2").text(uni.desc);
            $("#undergrad2").text("");
            $("#postgrad2").text("");
            for (var c = 0; c < uni.undergrad.length; c+=1) {    
                $("#undergrad2").append("<div class='pCourse' id='under" + c + "'>" + uni.undergrad[c].course + "</p>");
            }
            for (var c = 0; c < uni.postgrad.length; c+=1) {
                $("#postgrad2").append("<div class='pCourse' id='post" + c + "'>" + uni.postgrad[c].course + "</p>");
            }
        }
    }
    
    // Display University Choices
    function uniChoice(filter, result) {
        $.getJSON("data/unidata/malaysiaUni.json", function(data) {
            if(filter == 0) {
                    for (i = 0; i < data.length; i+=1) {
                        $(".allChoice").append("<div id='choose" + i + "'>" + data[i].name + "</div>" + "<hr>");
                } 
            } else if (filter == 1) {
                for (i = 0; i < data.length; i+=1) {
                    for (n = 0; n < result.length; n+=1) {
                        console.log(result[n].name);
                        console.log(data[i].name);
                        console.log(result[n].name == data[i].name);
                        if (result[n].name == data[i].name) {
                            $("#choiceOne").append("<div id='choose" + i + "'>" + data[i].name + "</div>" + "<hr>");
                        }
                    }
                }
            } else if (filter == 2) {
                for (i = 0; i < data.length; i+=1) {
                    for (n = 0; n < result.length; n+=1) {
                        console.log(result[n].name);
                        console.log(data[i].name);
                        console.log(result[n].name == data[i].name);
                        if (result[n].name == data[i].name) {
                            $("#choiceTwo").append("<div id='choose" + i + "'>" + data[i].name + "</div>" + "<hr>");
                        }
                    }
                }
            }

        });
    }
    
    // Switch Between Choosing and Comparing
    function switchScreen(n) {
        if (n == 1) {
            if ($(".infoItem1").hasClass("hidden")) {
                $(".selectItem1").addClass("hidden");
                $(".selectItem1").removeClass("animated fadeIn");
                $(".infoItem1").removeClass("hidden");
                $(".infoItem1").addClass("animated fadeIn");
            } else {
                $(".infoItem1").addClass("hidden");
                $(".infoItem1").removeClass("animated fadeIn");
                $(".selectItem1").removeClass("hidden");
                $(".selectItem1").addClass("animated fadeIn");
            }
        } else {
            if ($(".infoItem2").hasClass("hidden")) {
                $(".selectItem2").addClass("hidden");
                $(".selectItem2").removeClass("animated fadeIn");
                $(".infoItem2").removeClass("hidden");
                $(".infoItem2").addClass("animated fadeIn");
            } else {
                $(".infoItem2").addClass("hidden");
                $(".infoItem2").removeClass("animated fadeIn");
                $(".selectItem2").removeClass("hidden");
                $(".selectItem2").addClass("animated fadeIn");
            }
        }
    }
    
    function changeCourse(id, screen, type) {
        $.getJSON("data/unidata/malaysiaUni.json", function(data) { 
            if (screen == 1) {
                if (type == 1) {
                    $(".name1").replaceWith("<h4>Course: </h4><h5>" + data[left].undergrad[id].course + "</h5>");
                    $(".require1").text("");
                    $(".require1").append("<h4>Requirements: </h4>");
                    for (var c = 0; c < data[left].undergrad[id].requirement.length; c+=1) {
                        $(".require1").append("<h5>" + data[left].undergrad[id].requirement[c] + "</h5>");
                    }
                    $(".cost1local").replaceWith("<h4>Local Cost: </h4><h5>" + data[left].undergrad[id].cost.local+ "</h5>");
                    $(".cost1int").replaceWith("<h4>International Cost: </h4><h5>" + data[left].undergrad[id].cost.local + "</h5>");
                    $(".courseSelection1").addClass("hidden");
                    $("#courseInfo1").removeClass("hidden");
                } else {
                    $(".name1").replaceWith("<h4>Course: </h4><h5>" + data[left].postgrad[id].course + "</h5>");
                    $(".require1").text("");
                    $(".require1").append("<h4>Requirements: </h4>");
                    for (var c = 0; c < data[left].postgrad[id].requirement.length; c+=1) {
                        $(".require1").append("<h5>" + data[left].postgrad[id].requirement[c] + "</h5>");
                    }
                    $(".cost1local").replaceWith("<h4>Local Cost: </h4><h5>" + data[left].postgrad[id].cost.local + "</h5>");
                    $(".cost1int").replaceWith("<h4>International Cost: </h4><h5>" + data[left].postgrad[id].cost.local + "</h5>");
                    $(".courseSelection1").addClass("hidden");
                    $("#courseInfo1").removeClass("hidden");
                }
            } 
            else {
                if (type == 1) {
                    $(".name2").replaceWith("<h4>Course: </h4><h5>" + data[right].undergrad[id].course + "</h5>");
                    $(".require2").text("");
                    $(".require2").append("<h4>Requirements: </h4>");
                    for (var c = 0; c < data[right].undergrad[id].requirement.length; c+=1) {
                        console.log(data[right].undergrad[id].requirement[c]);
                        $(".require2").append("<h5>" + data[right].undergrad[id].requirement[c] + "</h5>");
                    }
                    $(".cost2local").replaceWith("<h4>Local Cost: </h4><h5>" + data[right].undergrad[id].cost.local + "</h5>");
                    $(".cost2int").replaceWith("<h4>International Cost: </h4><h5>" + data[right].undergrad[id].cost.local + "</h5>");
                    $(".courseSelection2").addClass("hidden");
                    $("#courseInfo2").removeClass("hidden");
                } 
                else {
                    $(".name2").replaceWith("<h4>Course: </h4><h5>" + data[right].postgrad[id].course + "<h5>");
                    $(".require2").text("");
                    $(".require2").append("<h4>Requirements: </h4>");
                    for (var c = 0; c < data[right].postgrad[id].requirement.length; c+=1) {
                        $(".require2").append("<h5>" + data[right].postgrad[id].requirement[c] + "</h5>");
                    }
                    $(".cost2local").replaceWith("<h4>Local Cost: </h4><h5>" + data[right].postgrad[id].cost.local + "</h5>");
                    $(".cost2int").replaceWith("<h4>International Cost: </h4><h5>" + data[right].postgrad[id].cost.local + "</h5>");
                    $(".courseSelection2").addClass("hidden");
                    $("#courseInfo2").removeClass("hidden");
                }
            }
        });
    }
    
    // Fuzzy Search
    function fuzzSearch(id, input) {
        $.getJSON("data/unidata/malaysiaUni.json", function(data) {
            var options = {
                shouldSort: true,
                thresold: 0.1,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                keys: [
                    "name"
                ]
            };
            
            var fuse = new Fuse(data, options);
            var result = fuse.search(input);
            
            if (input != "") {
                uniChoice(id, result);
            } else {
                uniChoice(id, data);
            }
            
        });
    }
    
    // Call functions
    uniChoice(0, {});
    
    // Text Input for Fuzzy Search
    $(".fuzzSearch1").keyup(function() {
        var input = $(this).val();
        $("#choiceOne").text("");
        
        fuzzSearch(1, input);
    });
    
    $(".fuzzSearch2").keyup(function() {
        var input = $(this).val();
        $("#choiceTwo").text("");
        
        fuzzSearch(2, input);
    });
    
    // Dropdown menus
    $(".dropdown1").click(function() {
        switchScreen(1);
    });
    
    $(".dropdown2").click(function() {
       switchScreen(2); 
    });
     
    // Universities choices
    $("#choiceOne").delegate("div", "click", function() {
        var id = $(this).attr("id").replace("choose", "");
        left = id;
        retreiveUni(id, 1);
        switchScreen(1);
    });
    
    $("#choiceTwo").delegate("div", "click", function() {
       var id = $(this).attr("id").replace("choose", "");
        right = id;
        retreiveUni(id, 2);
        switchScreen(2);
    });
    
    $("#undergrad1").delegate("div", "click", function() {
        var id = $(this).attr("id").replace("under", "");
        changeCourse(id, 1, 1);
    });
    
    $("#undergrad2").delegate("div", "click", function() {
        var id = $(this).attr("id").replace("under", "");
        changeCourse(id, 2, 1);
    });;
    
    $("#postgrad1").delegate("div", "click", function() {
        var id = $(this).attr("id").replace("post", "");   
        changeCourse(id, 1, 2);
    });
    
    $("#postgrad2").delegate("div", "click", function() {
        var id = $(this).attr("id").replace("post", ""); 
        changeCourse(id, 2, 2);
    });
    
    $(".courseExit1").click(function() {
        $(".courseSelection1").removeClass("hidden");
        $("#courseInfo1").addClass("hidden");
    });
    
    $(".courseExit2").click(function() {
        $(".courseSelection2").removeClass("hidden");
        $("#courseInfo2").addClass("hidden");
    });
    
});