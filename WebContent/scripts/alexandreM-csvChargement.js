function chargerCSV() {
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/csv/charger',
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 10000000,//No time out long time processing
        error: function() {
            $("#alert").show();
        },
        success: function(text) {
            if(text.indexOf("PB") != -1){
                 $("#alert").show();
            }else{
                document.location = text;
            }
        }
    });
}