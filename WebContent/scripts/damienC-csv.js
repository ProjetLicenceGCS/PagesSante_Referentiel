
function telechargerCSV() {
    var dictionnaireOffre = $("#DictionnaireOffresSoins").is(':checked');
    var specialiteElementRef = $("#SpecialiteElementRef").is(':checked');
    var discipline = $("#DisciplineRef").is(':checked');
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/csv/telecharger?DictionnaireOffresSoins=' + dictionnaireOffre + "&SpecialiteElementRef=" + specialiteElementRef + "&DisciplineRef=" + discipline,
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 100000000000000, //No time out long time processing
        error: function() {
            $("#alert").show();
        },
        success: function(text) {
            if (text.indexOf("PB") != -1) {
                $("#alert").show();
            } else {
                document.location = text;
            }
        }
    });
}
function onClickInCheckBox(element) {
    if (($("#DisciplineRef").is(':checked') == true && element.id == "DictionnaireOffresSoins") || ($("#DictionnaireOffresSoins").is(':checked') == true && element.id == "DisciplineRef")) {
        $("#SpecialiteElementRef").attr('checked', true);
    }
}

function importCSVFile() {
    $("#formChargerCSV").submit(importCSVFileOnSubmit());
}
function importCSVFileOnSubmit() {
    doProgress();
    var fd = new FormData();
    fd.append('file', $("#fichier").get(0).files[0]);
    $.ajax({
        url: 'csv/charger',
        type: 'POST',
        dataType: 'text',
        data: fd,
        contentType: false,
        processData: false,
        width: 100,
        timeout: 1000000, //No time out long time processing
        error: function() {
            doCancel();
            $("#alert").show();
        },
        success: function(text) {
            doCancel();
            if (text.indexOf("PB") != -1) {
                $("#alert").show();
            } else if(text.indexOf("AUCUN") != -1){
                
            }else{
                document.getElementById("inner").innerHTML = text;// 
                $("#dialog-message").dialog({
        resizable: false,
        height: 200,
        modal: true,
        buttons: {
            Annuler: function() {
                $(this).dialog("close");
            }
        }
    });
                
            }
        }
    });
}
function doProgress() {


    $("#calque").css("z-index", "auto");
    $("#calque").css("opacity", "0.2");
    $("#chargement").css("z-index", "auto");
    $("#chargement").css("display", "block");
}

function doCancel(){
    $("#calque").css("opacity", "1");
    $("#chargement").css("display", "none");
}