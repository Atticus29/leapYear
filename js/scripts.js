// Back End
var isLeapYear = function(year){
  if (typeof year === "string"){
    return "Please enter a number";
  }
  else if(year%4 === 0 && year%100 !== 0 || year%400===0){
    return true;
  } else{
    return false;
  }
}

// Front End
$(function(){
  $("#submissionForm").submit(function(){
    $(".hiddenResult").show();
    $("#yearSpan").empty();
    $("#notSpan").empty();
    var usrYear = parseInt($("#year").val());
    $("#yearSpan").text(usrYear);
    if (isLeapYear(usrYear)){
      $("#notSpan").text("indeed");
    }else {
      console.log("got here");
      $("#notSpan").text("not");
    }
    event.preventDefault();
  });
});
