// from data.js
var tableData = data;
var table = d3.select("tbody");
data.forEach(function(results) {
    console.log(results);
    var row = table.append("tr");
    Object.entries(results).forEach(function([key, value]) {
      console.log(key, value);
      var cell = table.append("td");
      cell.text(value);
    });
  });

var lists = d3.select("select");

var value = "datetime";
lists.on("change", () =>{
    let placeholder = d3.select("#datetime");
    let label = d3.select("label")
    if (lists.property('value') =="city") {
    label.html("Enter a City");
    value = "city";
    document.getElementById('datetime').value = "";
    placeholder.attr('placeholder',"benton");
    
    }
    else if (lists.property('value') =="state"){
        label.html("Enter a State");
        value = "state";
        document.getElementById('datetime').value = "";
        placeholder.attr('placeholder',"ca");
    }
    else if (lists.property('value') =="country"){
        label.html("Enter a Country");
        value = "country";
        document.getElementById('datetime').value = "";
        placeholder.attr('placeholder',"us");
    }
    else if (lists.property('value') =="datetime"){
        label.html("Enter a Date");
        value = "datetime";
        document.getElementById('datetime').value = "";
        placeholder.attr('placeholder',"1/11/2011");
    }
    else if (lists.property('value') =="shape"){
        label.html("Enter a Shape");
        value = "shape";
        document.getElementById('datetime').value = "";
        placeholder.attr('placeholder',"circle");
    }
});


  var submit = d3.select("#filter-btn");
  submit.on("click", () => {
    
    var audio = new Audio('static/js/ufo-flying.mp3');
    audio.play();
    let marqueelist = d3.select(".hero");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property('value');
    console.log(tableData);
    let filteredData = tableData.filter(tableData => tableData[value] === inputValue);
    var filtered =  d3.select("tbody").html("");
    if (filteredData.length==0) {
        var row = filtered.append("tr");
        var cell = filtered.append("td");
        cell.text("Sorry, no results");
    }

    else {
    let  listufo = "";
    filteredData.forEach(function(results) {
        var row = filtered.append("tr");
        Object.entries(results).forEach(function([key, value]) {
          var cell = filtered.append("td");
          cell.text(''+ value);

          if (key == "city") {
            value = value.charAt(0).toUpperCase() +value.slice(1) +" " +key+",";
            key = "at"
          }
          else if (key=="state") {
            key="";
            value = value.charAt(0).toUpperCase() +value.slice(1)+ ",";
          }
          else if (key == "country") {
            key="";
            value = value.toUpperCase();
          }
          else if (key =="datetime") {
            key= key.charAt(0).toUpperCase() +key.slice(1)+":";
          value=value;
        }
        else{
          key= "-"+" "+key.charAt(0).toUpperCase() +key.slice(1)+":";
          value=value;
    }
        listufo = listufo + "     "+key+"     "  + value;
      });
      listufo=listufo+ "";
    });
  }
});