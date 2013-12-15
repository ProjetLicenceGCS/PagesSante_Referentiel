var specialiteSelected = "";
function addOffreDeSoin() {
    $("#dialog-ajouter").dialog({
        resizable: false,
        height: 220,
        modal: true,
        buttons: {
            "Ajouter": function() {
                if (testIfWeCanAdd()) {
                    var idSpecialite = "";
                    if (specialiteSelected != "") {
                        idSpecialite = specialiteSelected;
                    } else {
                        idSpecialite = "AUCUNE";
                    }
                    $.ajax({
                        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/dictionnaireoffressoins/add?intitule=' + $('#addIntitule').val() + "&intituleNormalise=" + $("#addIntituleNormalise").val() + "&description=" + $("#addDescription").val() + "&motscles=" + $("#addMotsCles").val() + "&specialite=" + idSpecialite,
                        type: 'POST',
                        dataType: 'text',
                        width: 100,
                        timeout: 1000,
                        error: function() {
                            $("#alert").show();
                            $(this).dialog("close");
                        },
                        success: function(text) {
                            if (text.indexOf("PB") != -1) {
                                $("#alert").show();
                                $(this).dialog("close");
                            } else {
                                var table = document.getElementById("dictionnaireOffreDeSoin");
                                var ligne = table.insertRow(table.rows.length);
                                var col1 = ligne.insertCell(0);
                                var col2 = ligne.insertCell(1);
                                var col3 = ligne.insertCell(2);
                                var col4 = ligne.insertCell(3);
                                var col5 = ligne.insertCell(4);
                                ligne.id = text;
                                col1.innerHTML = "<p title=\"" + $("#addIntituleNormalise").val() + "\">" + $('#addIntitule').val() + "</p>";
                                col2.innerHTML = "<p>" + $("#addDescription").val() + "</p>";
                                col3.innerHTML = "<p>" + $("#addMotsCles").val() + "</p>";
                                col5.style = "width: 15px;";
                                col5.innerHTML = "<img style=\"display: block; margin-left: auto;  margin-right: auto;\" src=\"/PagesSante_Referentiel/images/icone_action_modifier.png\" onclick=\"updateSpecialiteElementRef(this.parentNode);\"/>";
                                col4.style = "width: 15px;";
                                col4.innerHTML = "<img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"/PagesSante_Referentiel/images/croix.png\" onclick=\"specialiteElementRefDelete('" + text + "',this.parentNode);\" />";
                            }
                        }
                    });
                    $(this).dialog("close");
                    cleanInputs();
                } else {
                    document.getElementById("alertADD").innerText = "Veuillez remplir les champs";
                }

            },
            Annuler: function() {
                cleanInputs();
                $(this).dialog("close");
            }
        }
    });
}
function cleanInputs() {
    document.getElementById("addIntituleNormalise").value = "";
    document.getElementById("addIntitule").value = "";
    document.getElementById("addDescription").value = "";
    document.getElementById("addMotsCles").value = "";
    document.getElementById("addSpecialitePrinter").value = "";
    document.getElementById("alertADD").innerText = "";
}
function testIfWeCanAdd() {
    if (specialiteSelected == "") {
        return false;
    }
    if ($("#addIntituleNormalise").val() == "") {
        return false;
    }
    if ($("#addIntitule").val() == "") {
        return false;
    }
    if ($("#addDescription").val() == "") {
        return false;
    }
    return true;
}

function showSelectOneSpecialite() {
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/specialiteelement/selectOneSpecialite',
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 1000,
        error: function() {
            $("#alert").show();
            $("dialog-ajouter").dialog("close");
            $(this).dialog("close");
        },
        success: function(text) {
            if (text.indexOf("PB") != -1) {
                $("#alert").show();
                $("dialog-ajouter").dialog("close");
                $(this).dialog("close");
            } else {
                document.getElementById("inner").innerHTML = text;
                $("#dialog-dictionnaireoffressoins").dialog({
                    resizable: false,
                    height: 500,
                    width: 500,
                    modal: true,
                    buttons: {
                        "Fermer": function() {
                            var print = "";
                            if (specialiteSelected != "") {
                                print = "Séléctionné.";
                            }
                            document.getElementById("addSpecialitePrinter").innerHTML = print;
                            $(this).dialog("close");
                        }
                    }
                });
            }
        }
    });
}
function setClick(id) {
    specialiteSelected = id;
}
function dictionnaireOffreDeSoinDelete(id, index) {
    $("#dialog-confirm").dialog({
        resizable: false,
        height: 140,
        modal: true,
        buttons: {
            "Supprimer": function() {
                $(this).dialog("close");
                $.ajax({
                    url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/dictionnaireoffressoins/delete?id=' + id,
                    type: 'POST',
                    dataType: 'text',
                    timeout: 1000,
                    error: function() {
                        $("#alert").show();
                        $(this).dialog("close");
                    },
                    success: function(text) {
                        if (text.indexOf("PB") != -1) {
                            $("#alert").show();
                            $(this).dialog("close");
                        } else {
                            index.parentNode.remove();
                        }
                    }
                });
            },
            Annuler: function() {
                $(this).dialog("close");
            }
        }
    });
}
function updateDictionnaireOffreDeSoinRef(element) {
    var idOffreSoinSelected = element.parentElement.id;
    var intituleOffreSoinSelected = element.parentElement.children.item(0).firstChild.innerText;
    var intituleNormaliseOffreSoinSelected = element.parentElement.children.item(0).firstChild.title;
    var descriptionOffreDeSoinSelected = element.parentElement.children.item(1).firstChild.innerText;
    var motsClesOffreDeSoinSelected = element.parentElement.children.item(2).firstChild.innerText;
    document.getElementById("upIntitule").value = intituleOffreSoinSelected;
    document.getElementById("upIntituleNormalise").value = intituleNormaliseOffreSoinSelected;
    document.getElementById("upDescription").value = descriptionOffreDeSoinSelected;
    document.getElementById("upMotsCles").value = motsClesOffreDeSoinSelected;
    document.getElementById("upSpecialitePrinter").value = " ";
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/dictionnaireoffressoins/getSpecialiteElementByOffre?id=' + idOffreSoinSelected,
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 1000,
        error: function() {
            $("#alert").show();
            $("#dialog-modifier").dialog("close");
        },
        success: function(text) {
            if (text.indexOf("PB") != -1) {
                $("#alert").show();
            } else if (text.indexOf("AUCUN") != -1) {
                document.getElementById("upSpecialitePrinter").value = " ";
            } else {
                specialiteSelected = text;
                document.getElementById("upSpecialitePrinter").value = "Séléctionné";
            }
        }
    });
    $("#dialog-modifier").dialog({
        resizable: false,
        height: 220,
        modal: true,
        buttons: {
            "Modifier": function() {
                $.ajax({
                    url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/dictionnaireoffressoins/update?intitule=' + $('#upIntitule').val() + "&intituleNormalise=" + $("#upIntituleNormalise").val() + "&description=" + $("#upDescription").val() + "&motscles=" + $("#upMotsCles").val() + "&specialite=" + specialiteSelected + "&id=" + idOffreSoinSelected,
                    type: 'POST',
                    dataType: 'text',
                    width: 100,
                    timeout: 1000,
                    error: function() {
                        $("#alert").show();
                        $(this).dialog("close");
                    },
                    success: function(text) {
                        if (text.indexOf("PB") != -1) {
                            $("#alert").show();
                        }
                        else {
                            element.parentElement.children.item(0).firstChild.innerText = document.getElementById("upIntitule").value;
                            element.parentElement.children.item(0).firstChild.title = document.getElementById("upIntituleNormalise").value;
                            element.parentElement.children.item(1).firstChild.innerText = document.getElementById("upDescription").value;
                            element.parentElement.children.item(2).firstChild.innerText = document.getElementById("upMotsCles").value;
                        }
                    }
                });
                $(this).dialog("close");
            },
            Annuler: function() {
                $(this).dialog("close");
            }
        }
    });
}