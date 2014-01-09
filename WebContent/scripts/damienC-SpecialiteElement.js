/**
 * @author Damien
 * Ce fichier permet de faire des requêtes ajax au serveur
 * @returns {undefined}
 */
var dicoOffreSoin = new Array();
var discipline ="";

function setDisciplineSelected(id){
    discipline = id;
}

function setSelectedElements(id) {
    var i;
    var test = false;
    var pushed = false;
    if (dicoOffreSoin.length === 0) {
        dicoOffreSoin.push(id);
        pushed = true;
    }
    if (!pushed) {
        for (i = 0; i < dicoOffreSoin.length; i++) {
            if (dicoOffreSoin[i] === id) {
                test = true;
                dicoOffreSoin.splice(i);
                break;
            }
            if (test === false && dicoOffreSoin.length - 1 === i) {
                dicoOffreSoin.push(id);
                break;
            }
        }
    }
}

function specialiteElementRefDelete(oid, index) {
    $("#dialog-confirm").dialog({
        resizable: false,
        height: 140,
        modal: true,
        buttons: {
            "Supprimer": function() {
                $(this).dialog("close");
                $.ajax({
                    url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/specialiteelement/delete?id=' + oid,
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
function getDialog() {
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/dictionnaireoffressoins/getAjaxFile',
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 1000,
        error: function() {
           
            alert('Erreur chargement');
        },
        success: function(text) {
            if (text.indexOf("Impossible de supprimer.") != -1) {
                $("#alert").show();
                $(this).dialog("close");
            } else {
                document.getElementById("inner").innerHTML = text;
                if (dicoOffreSoin.length > 0) {
                    var i;
                    for (i = 0; i < dicoOffreSoin.length; i++) {
                        document.getElementById("dico" + dicoOffreSoin[i]).checked = true;
                    }
                }
                $("#dialog-dictionnaireoffressoins").dialog({
                    resizable: false,
                    height: 500,
                    width: 500,
                    modal: true,
                    buttons: {
                        "Fermer": function() {
                            var pluriel = "offres";
                            if (dicoOffreSoin.length == 1) {
                                pluriel = "offre";
                            }
                            document.getElementById("offreSoinNb").innerHTML = dicoOffreSoin.length + " " + pluriel;
                            $(this).dialog("close");
                        }
                    }
                });
            }
        }
    });
}
function addSpecialiteElementRef() {
    dicoOffreSoin = new Array();
    document.getElementById("offreSoinNb").innerHTML = "";
    $("#dialog-ajouter").dialog({
        resizable: false,
        height: 155,
        modal: true,
        buttons: {
            "Ajouter": function() {
                $.ajax({
                    url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/specialiteelement/add?description=' + $('#description').val() + "&offres=" + dicoOffreSoin.toString()+"&discipline="+discipline,
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
                        }else if(text.indexOf("DC") != -1){
                            
                            alert("Donnée déja entré.");
                        } else {
                            var table = document.getElementById("specialiteElementref");
                            var ligne = table.insertRow(table.rows.length);
                            var col1 = ligne.insertCell(0);
                            var col2 = ligne.insertCell(1);
                            var col3 = ligne.insertCell(2);
                            ligne.id = text;
                            col1.innerHTML = "<p title=\"\">" + $('#description').val() + "</p>";
                            col3.style = "width: 15px;";
                            col3.innerHTML = "<img style=\"display: block; margin-left: auto;  margin-right: auto;\" src=\"/PagesSante_Referentiel/images/icone_action_modifier.png\" onclick=\"updateSpecialiteElementRef(this.parentNode);\"/>";
                            col2.style = "width: 15px;";
                            col2.innerHTML = "<img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"/PagesSante_Referentiel/images/croix.png\" onclick=\"specialiteElementRefDelete('" + text + "',this.parentNode);\" />";
                        }
                        dicoOffreSoin = new Array();
                    }
                });
                $(this).dialog("close");
            },
            Annuler: function() {
                document.getElementById("description").value = "";
                dicoOffreSoin = new Array();
                $(this).dialog("close");
            }
        }
    });
}
var id;
function ajaxDiscipline(){
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/specialiteelement/knowIfADisciplineAreInTheEntity?id=' + id,
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 1000,
        error: function() {
            $("#alert").show();
            $("#dialog-modifier").dialog("close");
        },
        success: function(text) {
            if (text.indexOf("PB") != -1){
                $("#alert").show();
            } else if  (text.indexOf("aucun") != -1){
                document.getElementById("updisciplineNb").innerHTML = "aucune séléction.";
            } else {
                discipline = text;
                if(discipline!=""){
                    document.getElementById("updisciplineNb").innerHTML = "séléctionné.";
                }   
            }
        }
    });
}
function updateSpecialiteElementRef(element) {
    var idSpecialiteElementRefSelected = element.parentElement.id;
    id = idSpecialiteElementRefSelected;
    var descriptionSpecialiteElementRefSelected = element.parentElement.children.item(0).firstChild.innerText;
    var descriptionNormaliseSpecialiteElementRefSelected = element.parentElement.children.item(0).firstChild.title;
    document.getElementById("updescription").value = descriptionSpecialiteElementRefSelected;
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/specialiteelement/getCountDictionnaireOffreSoinBySpecialiteElement?id=' + id,
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 1000,
        error: function() {
            $("#alert").show();
            $("#dialog-modifier").dialog("close");
        },
        success: function(text) {
            ajaxDiscipline();
            if (text.indexOf("PB") != -1){
                $("#alert").show();
            } else if  (text.indexOf("aucuneOffre") != -1){
               document.getElementById("upoffreSoinNb").innerHTML = "0 offre";
            } else {
                var pluriel = "offres";
                if (text.length == 1) {
                    pluriel = "offre";
                }
                document.getElementById("upoffreSoinNb").innerHTML = text + " " + pluriel;
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
                    url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/specialiteelement/update?id='+idSpecialiteElementRefSelected+'&description=' + $('#updescription').val() + "&offres=" + dicoOffreSoin.toString(),
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
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/specialiteelement/getDictionnaireOffreSoinBySpecialiteElement?id=' + id,
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
function getDialogUpdate() {
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/dictionnaireoffressoins/getAjaxFile',
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 1000,
        error: function() {
            $("#alert").show();
            $("#dialog-modifier").dialog("close");
        },
        success: function(text) {
            if  (text.indexOf("Impossible de supprimer.") != -1) {
                $("#alert").show();
                $("#dialog-modifier").dialog("close");
            } else {
                document.getElementById("inner").innerHTML = text;
                if (dicoOffreSoin.length > 0) {
                    var i;
                    for (i = 0; i < dicoOffreSoin.length; i++) {
                        document.getElementById("dico" + dicoOffreSoin[i]).checked = true;
                    }
                }
                $("#dialog-dictionnaireoffressoins").dialog({
                    resizable: false,
                    height: 500,
                    width: 500,
                    modal: true,
                    buttons: {
                        "Fermer": function() {
                            var pluriel = "offres";
                            if (dicoOffreSoin.length == 1) {
                                pluriel = "offre";
                            }
                            document.getElementById("upoffreSoinNb").innerHTML = dicoOffreSoin.length + " " + pluriel;
                            $(this).dialog("close");
                        }
                    }
                });
            }
        }
    });
}
function getDialogForDiscipline(){
    $.ajax({
        url: 'http://localhost:8080/PagesSante_Referentiel/pagessante/specialiteelement/getDisciplineForAjaxFile',
        type: 'POST',
        dataType: 'text',
        width: 100,
        timeout: 1000,
        error: function() {
            $("#alert").show();
            $("#dialog-modifier").dialog("close");
        },
        success: function(text) {
            if  (text.indexOf("Impossible de supprimer.") != -1) {
                $("#alert").show();
                $("#dialog-modifier").dialog("close");
            } else {
                document.getElementById("inner").innerHTML = text;
                $("#dialog-disciplineRef").dialog({
                    resizable: false,
                    height: 500,
                    width: 500,
                    modal: true,
                    buttons: {
                        "Fermer": function() {
                            if(discipline!=""){
                                document.getElementById("disciplineNb").innerHTML = "séléctionné.";
                            }
                            $(this).dialog("close");
                        }
                    }
                });
            }
        }
    });
}
function getDialogForDisciplineWithUpdate(){
    getDialogForDiscipline();
    if(discipline!=""){
//        alert("discipline"+discipline);
        document.getElementById("discipline"+discipline).checked = true;
    }
}
