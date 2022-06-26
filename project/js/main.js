

function getweather(searchQuery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=imperial&appid="+apiKey;

  $(".city").text("");
  $(".temp").text("");

  $.ajax(url,{success: function(data){
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);

  }, error: function(error){
    $(".error-message").text("An error occured");
  }})

}

function searchweather() {
  var searchQuery = $(".search").val();
  getweather(searchQuery);
}