function consulta(city_name){

    var cidade = document.getElementById("nome_cidade").value

    $.getJSON({
        url: "https://api.hgbrasil.com/weather",
        data: {
            // be65aab9
            key: '5dd88861',
            format: 'json-cors',
            city_name: cidade
        },
        success: function( result ){
            data = result.results;
            city_name = data.city_name;

            $("#city").html("Clima em " + city_name);
            $("#temp").html ("Temperatura atual: " + data.temp + " °C");
            $("#description").html ("Descrição: " + data.description);
            $("#wind").html ("Velocidade do vento: " + data.wind_speedy);
            $("#sunrise").html ("Nascer do sol: " + data.sunrise);
            $("#sunset").html ("Por do sol: " +data.sunset );

            var url_img = "http://assets.api.hgbrasil.com/weather/images/" + data.img_id +".png";
            $("#img").attr("src", url_img);
        }
    })
}