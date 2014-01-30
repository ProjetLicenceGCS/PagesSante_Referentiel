var specialiteElementRef = new Array();
function setSelectedElementsForDisipline(id) {
    var i;
    var test = false;
    var pushed = false;
    if (specialiteElementRef.length === 0) {
        specialiteElementRef.push(id);
        pushed = true;
    }
    if (!pushed) {
        for (i = 0; i < specialiteElementRef.length; i++) {
            if (specialiteElementRef[i] === id) {
                test = true;
                specialiteElementRef.splice(i);
                break;
            }
            if (test === false && specialiteElementRef.length - 1 === i) {
                specialiteElementRef.push(id);
                break;
            }
        }
    }
}
function disciplineRefDelete(oid, index) {
    $("#dialog-confirm").dialog({
        resizable: false,
        height: 140,
        modal: true,
        buttons: {
            "Supprimer": function() {
                $(this).dialog("close");
                $.ajax({
                    url: 'discipline/delete?id=' + oid,
                    type: 'POST',
                    dataType: 'text',
                    timeout: 1000,
                    error: function() {
                        $("#alert").show();
                        $(this).dialog("close");
                    },
                    success: function(text) {
                        if (text.indexOf("Impossible de supprimer.") != -1) {
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
function getDialogForAdd() {
    $.ajax({
        url: 'discipline/getSepecialites',
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
                document.getElementById("inner").innerHTML = text;
                $("#dialog-selectManySpecialite").dialog({
                    resizable: false,
                    height: 500,
                    width: 500,
                    modal: true,
                    buttons: {
                        "Fermer": function() {
                            var t = specialiteElementRef.length + " spécialitées séléctionnés";
                            if (specialiteElementRef.length == 1) {
                                t = " Une spécialité séléctionné.";
                            } else if (specialiteElementRef.length == 0) {
                                t = "";
                            }
                            $("#specialtiteNB").text(t);
                            $(this).dialog("close");
                        }
                    }
                });
            }

        }
    });
}
function addDisipline() {
    specialiteElementRef = new Array();
    $("#dialog-ajouter").dialog({
        resizable: false,
        height: 140,
        modal: true,
        buttons: {
            "Ajouter": function() {
                $.ajax({
                    url: 'discipline/add?description=' + $('#description').val() + "&specialite=" + specialiteElementRef.toString(),
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
                        } else if (text.indexOf("DC") != -1) {
                            alert("Donnée déja entrée.");
                        } else {
                            $("#table-disciplineref > tbody:last").append("<tr id=" + text + "> <td><p title=" + $('#description').val() + ">" + $('#description').val() + "</p></td>\n\
                        <td style=\"width: 15px;\"><img style=\"display: block; margin-left: auto;  margin-right: auto;\" src=\"/PagesSante_Referentiel/images/croix.png\" onclick=\"disciplineRefDelete('" + text + "', this.parentNode);\"></td>\n\
                        <td style=\"width: 15px;\"><img style=\"display: block; margin-left: auto;  margin-right: auto;\" src=\"/PagesSante_Referentiel/images/icone_action_modifier.png\"  onclick=\"updateDisciplineRef(this.parentNode);\"></td>\n\
                    </tr>");
                        }

                    }
                });
                $(this).dialog("close");
            },
            Annuler: function() {
                document.getElementById("description").value = "";
                specialiteElementRef = new Array();
                $(this).dialog("close");
            }
        }
    });
}
var id;
function updateDisciplineRef(node) {
    var idDisciplineRefSelected = node.parentElement.id;
    id = idDisciplineRefSelected;
    var descriptionDisciplineRefSelected = node.parentElement.children.item(0).firstChild.innerText;
    var descriptionNormaliseDisciplinetRefSelected = node.parentElement.children.item(0).firstChild.title;
    document.getElementById("descriptionMODIFIER").value = descriptionDisciplineRefSelected;

    $.ajax({
        url: 'discipline/countSpecialitebyID?id=' + id,
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
            } else if (text.indexOf("aucuneOffre") != -1) {
                document.getElementById("upoffreSoinNb").innerHTML = "0 offre";
            } else {
                var pluriel = "spécialitées";
                if (text == 1) {
                    pluriel = "spécialitée";
                }
                document.getElementById("specialtiteNBMODIFIER").innerHTML = text + " " + pluriel;
            }
        }
    });
    $("#dialog-modifier").dialog({
        resizable: false,
        height: 155,
        modal: true,
        buttons: {
            "Modifier": function() {
                $.ajax({
                    url: 'specialiteelement/update?id=' + idDisciplineRefSelected + '&description=' + $('#updescription').val() + "&offres=" + dicoOffreSoin.toString(),
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
                        } else {
                            element.parentElement.children.item(0).firstChild.innerText = document.getElementById("updescription").value;
                            element.parentElement.children.item(0).firstChild.title = document.getElementById("updescription").value.toUpperCase();
                        }
                        dicoOffreSoin = new Array();
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
function getDialogForUpdate() {
     $.ajax({
        url: 'discipline/getSpecialitesByID?id=' + id,
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
            } else if  (text.indexOf("aucuneOffre") != -1) {
                getDialogUpdate();
            } else {
                if (dicoOffreSoin == 0) {
                    var start = true;
                    while (start) {
                        var id;
                        if (text.indexOf(",") == -1) {
                            id = text.substring(0, text.length);
                            start = false;
                        } else {
                            id = text.substring(0, text.indexOf(","));
                            text = text.substring(text.indexOf(",") + 1, text.length);
                        }
                        dicoOffreSoin.push(id);
                    }
                }
                getDialogUpdate();
            }
        }
    });
}