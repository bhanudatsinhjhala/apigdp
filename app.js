const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
var gdp = document.querySelector(".gdp");
var year = document.querySelector(".year");
var gdpData = [];
fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data.data);
    var dataset = data.data;
  function displayGDP(value){
    console.log(this.value);
    dataset.find((item)=>{
    //  console.log(item[0].slice(0,7));
    var result="";
      if(this.value==item[0].slice(0,7) ){
        console.log(item[1]);
        result=`The GDP of US during that month was ${item[1]}`;
      }else{
        console.log("invalid");
        result=`OHH!! you have entered wrong year or month. Please try again`;
      }
      gdp.innerHTML=result;
    });
  }
  year.addEventListener("change", displayGDP);
  });
