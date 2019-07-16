$( document ).ready(function() {//função para tecla "Enter"
    $( "#search-btn" ).click(Consulta);
    $( "#search" ).on("keypress", function(e) {
        if (e.keyCode == 13) {
            $("#search-btn").click();
        }
    });
    Consulta(); 
});

function Consulta() {

    var cidade = $( "#search" ).val();
    $( "#search" ).val("");

    if (cidade == "") {
        cidade = "Quebrangulo"; //cidade padrão
    }
    
    $.getJSON({
        url: "https://api.hgbrasil.com/weather",
        data: {
            key: "be65aab9",// be65aab9
            format: "json-cors",
            city_name: cidade,
            locale: "pt", //site sempre em pt-br
        },

        type: "GET",
        dataType: "json",

    }).done(function( r1 ) {
         
        if (r1.by == "default") { // if para cidade não encontrada "by = default"
            $( "#city" ).html("CIDADE NÃO ENCONTRADA!");
            $("#temp").html ("");
            $("#description").html ("");
            $("#wind").html ("");
            $("#sunrise").html ("");
            $("#sunset").html ("");
            $( "#img" ).attr("src", "");
        } 
        
        else {
            d = r1.results;
            $("#city").html("Clima em " + d.city_name);// se a cidade for encontrada
            $("#temp").html ("Temperatura atual: " + d.temp + " °C");
            $("#description").html ("Descrição: " + d.description);
            $("#wind").html ("Velocidade do vento: " + d.wind_speedy);
            $("#sunrise").html ("Nascer do sol: " + d.sunrise);
            $("#sunset").html ("Por do sol: " + d.sunset );

            var imagem = "http://assets.api.hgbrasil.com/weather/images/" + d.img_id +".png";
            $("#img").attr("src", imagem);
        }
    });
}
