function telechargerCSV() {
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/csv/telecharger',
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 1000,
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