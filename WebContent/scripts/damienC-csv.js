
function telechargerCSV() {
    var dictionnaireOffre = $("#DictionnaireOffresSoins").is(':checked');
    var specialiteElementRef = $("#SpecialiteElementRef").is(':checked');
    var discipline = $("#DisciplineRef").is(':checked');
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/csv/telecharger?DictionnaireOffresSoins='+dictionnaireOffre+"&SpecialiteElementRef="+specialiteElementRef+"&DisciplineRef="+discipline,
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 10000000, //No time out long time processing
        error: function() {
            $("#alert").show();
        },
        success: function(text) {
            alert(text);
            if (text.indexOf("PB") != -1) {
                $("#alert").show();
            } else {
                document.location = text;
            }
        }
    });
}
