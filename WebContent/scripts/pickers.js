/* FONCTIONS DE VALIDATION DES PICKERS */

/**
 * fonction qui permet d'afficher le statut sélectionné dans le picker dans la zone de recherche
 * @param id
 * @param description
 */

function validePickerTechnique(id, description){
	
	var tableau = document.getElementById("tabletechniques").innerHTML;
	var num = document.getElementsByName("technique").length;
	var classe = "";
	
	if(num%2 == 0){
		classe = "TableauLignes";
	}
	else{
		classe = "TableauLignesPyjama";
	}
	
	num = num +1;
	while (document.getElementById('t' + num) != null){
		num = num +1;
	}
	
	var nouvelleligne = '<tr id="t' + num + '">'		
						+ ' <td width="97%" class="' + classe + '">'
					    + description + '<input type="hidden" name="technique" value="' + id + '" />'
						+ '</td>'
						+ '<td width="3%" class="' + classe + '" >'
						+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceTechnique(\'t' + num + '\')">'
						+ '</td>'
						+ '</tr></tbody>';
	
	tableau = tableau.replace("</tbody>",nouvelleligne);
	tableau = tableau.replace("</TBODY>",nouvelleligne);
	
	document.getElementById("tabletechniques").innerHTML = tableau;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
	cookieModification();
	
}

function valideStatut(id, description,type){
	
	var existe = false;
	var contenu = "";
	var checkbox = "";
	var identifiant = "";
	
	if (type=="rechercheetablissement"){
		//On recherche si le critère est déjà dans la liste
		var elements = document.getElementsByName("statutsfiness");
		var len=elements.length;
		
	    for (var i=0; i<len; ++i){
	        if (elements[i].value == id) {
	            existe = true;
	        }
	    }
		
		if (existe == true){
			alert("Le statut sélectionné est déjà dans la liste.");
		}
		else{
			//on récupère les statuts déjà insérés dans la zone de recherche
			contenu = document.getElementById("statusfiness").innerHTML;

			//création du nouveau statut sous la forme de checkbox
			checkbox = '<tr id="s' + id + '" ><td style="font-size:12px;" ><input type="checkbox" checked="true" name="statutsfiness" value="' + id + '" />' + description + '<input type="hidden" name="description_statutsfiness" value="' + description + '" /></td></tr></tbody>';
			
			contenu = contenu.replace("</tbody>",checkbox);
			contenu = contenu.replace("</TBODY>",checkbox);
			
			//on l'insère dans la zone de recherche
			document.getElementById("statusfiness").innerHTML = contenu ;
	
			//on ferme le picker
			$( "#dialog" ).dialog( "close" );
			
			//on vide le dialog
			$( "#dialog" ).empty();
		}
	}
	else if (type=="site" || type == "structure"){
		
		//création ou modification de l'EJ
		identifiant = '<input type="hidden" name="statutsfiness" value="' + id + '"  />' + description;
		
		//on l'insère dans la zone de recherche
		document.getElementById("field_statutfiness").innerHTML = identifiant;
	
		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		cookieModification();
		
	}
	
}

/**
 * fonction qui permet d'afficher la catégorie sélectionnée dans le picker dans la zone de recherche
 */
function validepickercategorieEtablissement(id, description,type){
		
	var contenu = "";
	var checkbox = "";
	var identifiant = "";
	
	if (type=="rechercheetablissement"){
	
		//On recherche si le critère est déjà dans la liste
		var elements = document.getElementsByName("categoriesetablissement");
		var len=elements.length;
		var existe = false;
		
	    for (var i=0; i<len; ++i){
	        if (elements[i].value == id) {
	            existe = true;
	        }
	    }
		
		if (existe == true){
			alert("La catégorie sélectionnée est déjà dans la liste.");
		}
		else{
			//on récupère les catégories déjà insérées dans la zone de recherche
			contenu = document.getElementById("categoriesetablissement").innerHTML;
			
			//création de la nouvelle catégorie sous la forme de checkbox
			checkbox = '<tr id="c' + id + '" ><td style="font-size:12px;" ><input type="checkbox" checked="true" name="categoriesetablissement" value="' + id + '" />' + description + '<input type="hidden" name="description_categoriesetablissement" value="' + description + '" /></td></tr></tbody>';
			
			contenu = contenu.replace("</tbody>",checkbox);
			contenu = contenu.replace("</TBODY>",checkbox);
			
			//on l'insère dans la zone de recherche
			document.getElementById("categoriesetablissement").innerHTML = contenu;
		
			//on ferme le picker
			$( "#dialog" ).dialog( "close" );
			
			//on vide le dialog
			$( "#dialog" ).empty();
		}
	}
	else if (type=="site"){
		
		//création ou modification de l'EJ
		identifiant = '<input type="hidden" name="categoriesetablissement" value="' + id + '" />' + description;
		
		//on l'insère dans la zone de recherche
		document.getElementById("field_categoriejuridique").innerHTML = identifiant;
	
		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		cookieModification();
		
	}
}


/**
 * fonction qui permet d'afficher la forme juridique sélectionnée dans le picker dans la zone de recherche
 * @param id
 * @param description
 */
function valideFormeJuridique(id, description, page){
	
	if(page == "structure"){
		
	var identifiant = "";
	
	//création ou modification de la forme juridique
	identifiant = '<input type="hidden" name="formejuridique" value="' + id + '" />' + description;
	
	//on l'insère dans la zone de recherche
	document.getElementById("field_formejuridique").innerHTML = identifiant;
	
	cookieModification();
		
	}
	else{
		
		var existe = false;
		var elements = document.getElementsByName("formes");
		var len=elements.length;
		
	    for (var i=0; i<len; ++i){
	        if (elements[i].value == id) {
	            existe = true;
	        }
	    }
		
		if (existe == true){
			alert("La forme juridique sélectionnée est déjà dans la liste.");
		}
		else{
			//on récupère les statuts déjà insérés dans la zone de recherche
			contenu = document.getElementById("formes").innerHTML;

			//création du nouveau statut sous la forme de checkbox
			checkbox = '<tr id="f' + id + '" ><td style="font-size:12px;" ><input type="checkbox" checked="true" name="formes" value="' + id + '" />' + description + '<input type="hidden" name="description_formes" value="' + description + '" /></td></tr></tbody>';
			
			contenu = contenu.replace("</tbody>",checkbox);
			contenu = contenu.replace("</TBODY>",checkbox);
			
			//on l'insère dans la zone de recherche
			document.getElementById("formes").innerHTML = contenu ;
	
		}
		
	}
	
	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
}



/**
 * fonction qui permet d'afficher l'activite sélectionnée dans le picker dans la zone de recherche
 * @param id
 * @param description
 */
function valideCodeAPE(id, description,type){
	
	var contenu = "";
	var checkbox = "";
	var identifiant = "";
	
	
	if(type=="rechercheetablissement"){
		
		//On recherche si le critère est déjà dans la liste
		var elements = document.getElementsByName("activites");
		var len=elements.length;
		var existe = false;
		
	    for (var i=0; i<len; ++i){
	        if (elements[i].value == id) {
	            existe = true;
	        }
	    }
		
		if (existe == true){
			alert("L'activité sélectionnée est déjà dans la liste.");
		}
		else{
			//on récupère les activités déjà insérées dans la zone de recherche
			contenu = document.getElementById("activites").innerHTML;
			
			//création de la nouvelle activité sous la forme de checkbox
			checkbox = '<tr id="a' + id + '"><td style="font-size:12px;"  ><input type="checkbox" checked="true" name="activites" value="' + id + '" />' + description + '<input type="hidden" name="description_activites" value="' + description + '" /></td></tr></tbody>';
			
			contenu = contenu.replace("</tbody>",checkbox);
			contenu = contenu.replace("</TBODY>",checkbox);
			
			//on l'insère dans la zone de recherche
			document.getElementById("activites").innerHTML = contenu;
		
			//on ferme le picker
			$( "#dialog" ).dialog( "close" );
			
			//on vide le dialog
			$( "#dialog" ).empty();
		}
	}
	else if(type=="site" || type=="structure"){
		
		if(description.length > 100){
			description = description.substr(0,101) + " ...";
		}
		
		//création ou modification de l'EJ
		identifiant = '<input type="hidden" name="activites" value="' + id + '" />' + description;
		
		//on l'insère dans la zone de recherche
		document.getElementById("field_codeape").innerHTML = identifiant;
	
		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		cookieModification();
		
	}

}

/**
 * fonction qui permet d'afficher la localisation sélectionnée dans le picker dans la zone de recherche
 * @param id
 * @param description
 * @param type
 */
function validepickerLocalisation(id, description,type){
	
	var inputDescription = "";
	var inputTypeLocalisation = "";
		
	//on crée un champ input pour la description de la localisation
	inputDescription = '<input type="hidden" name="localisation" value="' + id + '" /><input type="hidden" name="descriptionlocalisation" value="' + description + '" />';
	
	//on crée un champ pour définir le type de la localisation (ville,département, région)
	inputTypeLocalisation = '<input type="hidden" name="typelocalisation" value="' + type + '" />';
	
	//insertion des deux champs dans la zone de recherche
	document.getElementById("localisation").innerHTML = description + inputDescription + inputTypeLocalisation;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
}

/**
 * fonction qui permet d'afficher la localisation ou l'ej ou l'eg ou l'élement sélectionné dans le picker dans la zone de recherche
 * @param id
 * @param description
 * @param type
 */
function validepickerEntiteElementLocalisation(id, description,type){
	
	var inputDescription = "";
	var inputDesc = "";
	
	
	inputDescription = '<input type="hidden" name="localisation" value=' + id + ' />';

	
	inputDesc = '<input type="hidden" name="description_localisation" value="' + description + '" />';
	
	//on crée un champ pour définir le type de la localisation (ville,département, région)
	inputTypeLocalisation = '<input type="hidden" name="typelocalisation" value="' + type + '" />';
	
	//insertion des deux champs dans la zone de recherche
	document.getElementById("localisation").innerHTML = description + inputDescription + inputTypeLocalisation + inputDesc;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
}

/**
 * fonction qui permet d'afficher l'espace d'animation territorial sélectionné dans le picker dans la zone de recherche
 * @param id
 * @param description
 */
function validepickerespacesAnimation(id, description){
	
	//On recherche si le critère est déjà dans la liste
	var elements = document.getElementsByName("espacesanimation");
	var len=elements.length;
	var existe = false;
	var contenu = "";
	var checkbox = "";
	
    for (var i=0; i<len; ++i){
        if (elements[i].value == id) {
            existe = true;
        }
    }
	
	if (existe == true){
		alert("L'espace sélectionné est déjà dans la liste.");
	}
	else{
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("espacesanimation").innerHTML;
		
		//création du nouvel espace d'animation territorial sous la forme de checkbox
		checkbox = '<tr id="e' + id + '"><td style="font-size:12px;" ><input type="checkbox" checked="true" name="espacesanimation" value=' + id + ' />' + description + '<input type="hidden" name="description_espacesanimation" value="' + description + '" /></td></tr></body>';
		
		contenu = contenu.replace("</tbody>",checkbox);
		contenu = contenu.replace("</TBODY>",checkbox);
		
		//on l'insère dans la zone de recherche
		document.getElementById("espacesanimation").innerHTML = contenu;

		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
	}

}

/**
 * fonction qui permet d'afficher le diplome(enseignement) sélectionné
 */
function validePickerDiplome(id,description){
	
	var existe = false;
	var contenu = "";
	var ligne = "";
	var capacite = "";
	var classe = "";
	var len = document.getElementsByName("diplome").length;
	
	if (len%2 == 0)
		classe = "TableauLignes";
	else	
		classe = "TableauLignesPyjama";
	
	if(document.getElementById("e" + id) != null)
		existe = true;
	
	capacite = document.getElementById("capacite").value;
	
	if (capacite == ""){
		capacite = "0";
	}
	
	var reg=new RegExp("^[0-9]+$","g");
	
	if (!reg.test(capacite) ){
		alert("Vous devez saisir un nombre pour la capacité.");
	}
	else{
	
		if(existe == false){
		
			//on récupère les espaces d'animations déjà insérés dans la zone de recherche
			contenu = document.getElementById("tableauenseignement").innerHTML;
	
					
			//création du nouvel espace d'animation territorial sous la forme de checkbox
			ligne = '<tr id="e' + id + '">' + 
			'<td class="' + classe + '" width="80%" ><input type="hidden" name="diplome" value=' + id + ' />' + description + '<input type="hidden" name="description_diplome" value="' + description + '" /></td>' +
			'<td class="' + classe + '" width="17%" ><input type="hidden" name="capacite" value="' + capacite + '" />' + capacite + '</td>' +
			'<td class="' + classe + '" width="3%" ><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceEnseignement(\'e' + id + '\')"></td></tr></tbody>';
			
			contenu = contenu.replace("</tbody>",ligne);
			contenu = contenu.replace("</TBODY>",ligne);		
			
			//on l'insère dans la zone de recherche
			document.getElementById("tableauenseignement").innerHTML = contenu ;
	
			//on ferme le picker
			$( "#dialog" ).dialog( "close" );
			
			//on vide le dialog
			$( "#dialog" ).empty();
			
			cookieModification();
			
		}
		else{
			alert("La discipline sélectionnée est déjà dans la liste.");
		}
	}
}

/**
 * affiche la discpipline sélectionné (cumul des pickers discpline, clientele, fonctionnement et capacite)
 */
function validepickerDiscipline(iddiscipline,descdiscipline,idclient,descclient,idfonctionnement,descfonctionnement){
	
	var existe = false;
	var homme = document.getElementById("homme").value;
	var femme = document.getElementById("femme").value;
	var total = document.getElementById("totale").value;
	
	if(homme==""){
		homme = "0";
	}
	
	if(femme==""){
		femme = "0";
	}
	
	if(total==""){
		total = "0";
	}
	
	var reg=new RegExp("^[0-9]+$","g");
	var reg2=new RegExp("^[0-9]+$","g");
	var reg3=new RegExp("^[0-9]+$","g");
	
	if (!reg.test(homme) || !reg2.test(femme) || !reg3.test(total)){
		alert("Vous devez saisir des nombres.");
	}
	else{
	
		var contenu = "";
		var ligne = "";
		var classe = "";
		var len = document.getElementsByName("discipline").length;
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		if(document.getElementById("h" + iddiscipline + idclient + idfonctionnement) != null)
			existe = true;
			
		
		if(existe == false){
			
			//on récupère les espaces d'animations déjà insérés dans la zone de recherche
			contenu = document.getElementById("tableaudiscipline").innerHTML;
	
			//création du nouvel espace d'animation territorial sous la forme de checkbox
			ligne = '<tr id="d' + iddiscipline + idclient + idfonctionnement + '">' + 
			'<td class="' + classe + '" width="26%" ><input type="hidden" name="discipline" value=' + iddiscipline + ' />' + descdiscipline + '<input type="hidden" name="description_discipline" value="' + descdiscipline + '" /></td>' +
			'<td class="' + classe + '" width="26%" ><input type="hidden" name="clientele" value=' + idclient + ' />' + descclient + '<input type="hidden" name="description_clientele" value="' + descclient + '" /></td>' +
			'<td class="' + classe + '" width="18%" ><input type="hidden" name="fonctionnement" value=' + idfonctionnement + ' />' + descfonctionnement + '<input type="hidden" name="description_fonctionnement" value="' + descfonctionnement + '" /></td>' +		
			'<td class="' + classe + '" width="9%" ><input type="hidden" name="homme" value="' + homme + '" />' + homme + '</td>' +		
			'<td class="' + classe + '" width="9%" ><input type="hidden" name="femme" value="' + femme + '" />' + femme + '</td>' +		
			'<td class="' + classe + '" width="9%" ><input type="hidden" name="total" value="' + total + '" />' + total + '</td>' +		
			'<td class="' + classe + '" width="3%" ><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceHabilitation(\'d' + iddiscipline + idclient + idfonctionnement + '\')"></td></tr></tbody>';
			
			contenu = contenu.replace("</tbody>",ligne);
			contenu = contenu.replace("</TBODY>",ligne);
			
			//on l'insère dans la zone de recherche
			document.getElementById("tableaudiscipline").innerHTML = contenu ;
	
			//on ferme le picker
			$( "#dialog" ).dialog( "close" );
			
			//on vide le dialog
			$( "#dialog" ).empty();
			
			cookieModification();
		}
		else{
			alert("La discipline sélectionnée est déjà dans la liste.");
		}
	}
		
	
}

/**
 * affiche l'habilitation sélectionnée (cumul des pickers activite, forme et modalite)
 */
function validepickerhabilitation(idactivite,descactivite,idforme,descforme,idmodalite,descmodalite){
	
	var existe = false;
	var contenu = "";
	var ligne = "";
	var classe = "";
	var len = document.getElementsByName("activite").length;
	
	if (len%2 == 0)
		classe = "TableauLignes";
	else	
		classe = "TableauLignesPyjama";
	
	if(document.getElementById("h" + idactivite + idforme + idmodalite) != null)
		existe = true;
		
	
	if(existe == false){
		
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("tableauhabilitation").innerHTML;

		//création du nouvel espace d'animation territorial sous la forme de checkbox
		ligne = '<tr id="h' + idactivite + idforme + idmodalite + '">' + 
		'<td class="' + classe + '" width="32%" ><input type="hidden" name="activite" value=' + idactivite + ' />' + descactivite + '<input type="hidden" name="description_activite" value="' + descactivite + '" /></td>' +
		'<td class="' + classe + '" width="33%" ><input type="hidden" name="forme" value=' + idforme + ' />' + descforme + '<input type="hidden" name="description_forme" value="' + descforme + '" /></td>' +
		'<td class="' + classe + '" width="32%" ><input type="hidden" name="modalite" value=' + idmodalite + ' />' + descmodalite + '<input type="hidden" name="description_modalite" value="' + descmodalite + '" /></td>' +		
		'<td class="' + classe + '" width="3%" ><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceHabilitation(\'h' + idactivite + idforme + idmodalite + '\')"></td></tr></tbody>';
				
		contenu = contenu.replace("</tbody>",ligne);
		contenu = contenu.replace("</TBODY>",ligne);
		
		//on l'insère dans la zone de recherche
		document.getElementById("tableauhabilitation").innerHTML = contenu;

		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		cookieModification();
		
	}
	else{
		alert("L'habilitation sélectionnée est déjà dans la liste.");
	}
	
}

/**
 * affiche la compétence de médecin sélectionné
 */
function validepickercompetencesMedecin(id, description,type){
	
	var existe = false;
	var contenu = "";
	var checkbox = "";
	var ligne = "";
	var classe = "";
	
	if (type=="rechercheprofessionnel"){
		//On recherche si le critère est déjà dans la liste
		var elements = document.getElementsByName("competencesMedecin");
		var len=elements.length;
		
	    for (var i=0; i<len; ++i){
	        if (elements[i].value == id) {
	            existe = true;
	        }
	    }
		
		if (existe == true){
			alert("La compétence sélectionnée est déjà dans la liste.");
		}
		else{
			//on récupère les espaces d'animations déjà insérés dans la zone de recherche
			contenu = document.getElementById("competencesMedecin").innerHTML;
			
			//création du nouvel espace d'animation territorial sous la forme de checkbox
			checkbox = '<tr id="c' + id + '"><td style="font-size:12px;" ><input type="checkbox" checked="true" name="competencesMedecin" value=' + id + ' />' + description + '<input type="hidden" name="description_competencesMedecin" value="' + description + '" /></td></tr></tbody>';
			
			contenu = contenu.replace("</tbody>",checkbox);
			contenu = contenu.replace("</TBODY>",checkbox);
			
			//on l'insère dans la zone de recherche
			document.getElementById("competencesMedecin").innerHTML = contenu;
	
			//on ferme le picker
			$( "#dialog" ).dialog( "close" );
			
			//on vide le dialog
			$( "#dialog" ).empty();
		}
	}
	else if(type=="fonction"){

		if(document.getElementById("c" + id) != null)
			existe = true;
		
		var elements = document.getElementsByName("competencesMedecin");
		var len=elements.length;
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		if(existe == false){
			
			document.cookie = 'modification=true;';
			
			//on récupère les espaces d'animations déjà insérés dans la zone de recherche
			contenu = document.getElementById("tableaucompetences").innerHTML;
	
			//création du nouvel espace d'animation territorial sous la forme de checkbox
			ligne = '<tr id="c' + id + '"><td class="' + classe + '" width="97%" ><input type="hidden" name="competencesMedecin" value=' + id + ' />' + description + '<input type="hidden" name="description_competencesMedecin" value="' + description + '" /></td><td width="3%" class="' + classe + '" ><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceCompetence(\'fonction\',\'c' + id + '\')"></td></tr></tbody>';
			
			contenu = contenu.replace("</tbody>",ligne);
			contenu = contenu.replace("</TBODY>",ligne);
			
			//on l'insère dans la zone de recherche
			document.getElementById("tableaucompetences").innerHTML = contenu;
	
			//on ferme le picker
			$( "#dialog" ).dialog( "close" );
			
			//on vide le dialog
			$( "#dialog" ).empty();
			
			
			
		}
		else{
			alert("La compétence sélectionnée est déjà dans la liste.");
		}
	}
}

/**
 * affiche l'attribution complémentaire sélectionné
 */
function validePickerAttributionComp(id,description){
	
	var existe = false;
	var contenu = "";
	var ligne = "";
	var classe = "";
	
	if(document.getElementById("a" + id) != null)
		existe = true;
		
	
	if(existe == false){
		
		var len = document.getElementsByName("attribcomp").length; 
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("tableauattrib").innerHTML;

		//création du nouvel espace d'animation territorial sous la forme de checkbox
		ligne = '<tr id="a' + id + '"><td class="' + classe + '" width="97%" ><input type="hidden" name="attribcomp" value=' + id + ' />' + description + '<input type="hidden" name="description_attribcomp" value="' + description + '" /></td><td width="3%" class="' + classe + '"><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceAttribComp(\'a' + id + '\')"></td></tr></tbody>';
		
		contenu = contenu.replace("</tbody>",ligne);
		contenu = contenu.replace("</TBODY>",ligne);
		
		//on l'insère dans la zone de recherche
		document.getElementById("tableauattrib").innerHTML = contenu;

		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		cookieModification();
		
	}
	else{
		alert("La compétence sélectionnée est déjà dans la liste.");
	}
	
}

/**
 * affiche la spécialisation sélectionnée
 */
function validePickerSpecialisation(id,description){
	
	var existe = false;
	var contenu = "";
	var ligne = "";
	
	if(document.getElementById("s" + id) != null)
		existe = true;
		
	
	if(existe == false){
		
		var elements = document.getElementsByName("specialisation");
		var len=elements.length;
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("tableauspecialisation").innerHTML;

		//création du nouvel espace d'animation territorial sous la forme de checkbox
		ligne = '<tr id="s' + id + '"><td class="' + classe + '" width="97%" ><input type="hidden" name="specialisation" value=' + id + ' />' + description + '<input type="hidden" name="description_specialisation" value="' + description + '" /></td><td width="3%" class="' + classe + '" ><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceSpecialisation(\'s' + id + '\')"></td></tr></tbody>';
		
		contenu = contenu.replace("</tbody>",ligne);
		contenu = contenu.replace("</TBODY>",ligne);
		
		//on l'insère dans la zone de recherche
		document.getElementById("tableauspecialisation").innerHTML = contenu;

		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		cookieModification();
		
	}
	else{
		alert("La spécialisation sélectionnée est déjà dans la liste.");
	}
	
}

/**
 * affiche la spécialité sélectionné
 */
function validePickerSpecialite(id,description,offressoinsid,offressoinsdescription,descdiscipline){
	
	var existe = false;
	var contenu = "";
	var ligne = "";
	var classe = "";
	var len = document.getElementsByName("specialite").length;
	
	if (len%2 == 0)
		classe = "TableauLignes";
	else	
		classe = "TableauLignesPyjama";
	
	if(document.getElementById("s" + id) != null)
		existe = true;
		
	
	if(existe == false){
		
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("tableauspecialite").innerHTML;

		//création du nouvel espace d'animation territorial sous la forme de checkbox
		ligne = '<tr id="s' + id + '"><td width="97%" class="' + classe + '" ><input type="hidden" name="specialite" value=' + id + ' />' + descdiscipline + " - " + description + '<input type="hidden" name="description_specialite" value="' + description + '" /></td><td width="3%" class="' + classe + '" ><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceSpecialite(\'s' + id + '\')"></td></tr></tbody>';
		
		contenu = contenu.replace("</tbody>",ligne);
		contenu = contenu.replace("</TBODY>",ligne);
		
		//on l'insère dans la zone de recherche
		document.getElementById("tableauspecialite").innerHTML = contenu;

		ligne = "";
		contenu = document.getElementById("tableauoffre").innerHTML;
		
		var listeid = offressoinsid.split(';');
		var listedesc = offressoinsdescription.split(';');
				
		len = document.getElementsByName("offressoins").length;
		
		for(var i=0;i<listeid.length-1;i++){
	
			if (len%2 == 0)
				classe = "TableauLignes";
			else	
				classe = "TableauLignesPyjama";
	
			ligne = ligne + '<tr id="o' + listeid[i] + '"><td width="84%" class="' + classe + '" ><input type="hidden" name="offressoins" value=' + listeid[i] + ' />' + listedesc[i] + '<input type="hidden" name="description_offressoins" value="' + listedesc[i] + '" /><input type="hidden" name="disponibiliteoffresoins" value="false" /><input type="hidden" value="0" name="nbequipement"><input type="hidden" value="0" name="nbtechnique">';		
			ligne = ligne + '</td><td width="10%" class="' + classe + '" >Non</td><td width="3%" class="' + classe + '"><img src="/PagesSante/images/icone_action_modifier.png" title="Modifier" alt="Modifier" onclick="modifierOffreSoins(\'o' + listeid[i] + '\')"></td><td width="3%" class="' + classe + '"><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceOffreSoins(\'o' + listeid[i] + '\')"></td></tr>';						
			
			len = len + 1;
		
		}
		
		ligne = ligne + "</tbody>";
		
		contenu = contenu.replace("</tbody>",ligne);
		contenu = contenu.replace("</TBODY>",ligne);
		
		document.getElementById("tableauoffre").innerHTML = contenu;
		
		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		cookieModification();
		
	}
	else{
		alert("La spécialité sélectionnée est déjà dans la liste.");
	}
	
}

/**
 * affiche l'offre de soins sélectionnée
 */
function validePickerOffresSoins(id,description){
	
	var identifiant = "";
	
	//création ou modification de l'EJ
	identifiant = '<input type="hidden" id="offresoins" value="' + id + '" /><input type="hidden" id="descoffresoins" value="' + description + '" />' + description;
	
	//on l'insère dans la zone de recherche
	document.getElementById("pick_offres").innerHTML = identifiant;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
	cookieModification();
	
}


/**
 * affiche la spécialité sélectionné
 */
function validePickerEquipement(id,description){
	
	var identifiant = "";
	
	//création ou modification de l'EJ
	identifiant = '<input type="hidden" id="equipement" value="' + id + '" /><input type="hidden" id="descequipement" value="' + description + '" />' + description;
	
	//on l'insère dans la zone de recherche
	document.getElementById("pick_equipement").innerHTML = identifiant;
	document.getElementById("libelleequipement").value = description;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
	cookieModification();
	
}

/**
 * affiche le titre honorifique sélectionné
 * @param id
 * @param description
 */
function validePickerTitre(id,description){
	
	var existe = false;
	var contenu = "";
	var ligne = "";
	
	if(document.getElementById("t" + id) != null)
		existe = true;
		
	
	if(existe == false){
		
		var elements = document.getElementsByName("titre");
		var len = elements.length;
		var classe = "";
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("tableautitre").innerHTML;

		//création du nouvel espace d'animation territorial sous la forme de checkbox
		ligne = '<tr id="t' + id + '"><td width="97%" class="' + classe + '" ><input type="hidden" name="titre" value=' + id + ' />' + description + '<input type="hidden" name="description_titre" value="' + description + '" /></td><td class="' + classe + '" width="3%" ><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceTitre(\'t' + id + '\')"></td></tr></tbody>';
		
		contenu = contenu.replace("</tbody>",ligne);
		contenu = contenu.replace("</TBODY>",ligne);
		
		//on l'insère dans la zone de recherche
		document.getElementById("tableautitre").innerHTML = contenu;

		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		cookieModification();
		
	}
	else{
		alert("Le titre sélectionné est déjà dans la liste.");
	}
	
}

/**
 * affiche la langue parlée sélectionnée
 */
function validePickerLangue(id,description){
	
	var existe = false;
	var contenu = "";
	var ligne = "";
	
	if(document.getElementById("l" + id) != null)
		existe = true;
		
	
	if(existe == false){
		
		var elements = document.getElementsByName("langue");
		var len = elements.length;
		var classe = "";
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("tableaulangue").innerHTML;

		//création du nouvel espace d'animation territorial sous la forme de checkbox
		ligne = '<tr id="l' + id + '"><td width="97%" class="' + classe + '" ><input type="hidden" name="langue" value=' + id + ' />' + description + '<input type="hidden" name="description_langue" value="' + description + '" /></td><td width="3%" class="' + classe + '" ><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceLangue(\'l' + id + '\')"></td></tr></tbody>';
		
		contenu = contenu.replace("</tbody>",ligne);
		contenu = contenu.replace("</TBODY>",ligne);
		
		//on l'insère dans la zone de recherche
		document.getElementById("tableaulangue").innerHTML = contenu;

		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		cookieModification();
		
	}
	else{
		alert("La spécialisation sélectionnée est déjà dans la liste.");
	}
	
}

/**
 * affiche le system sélectionné
 */
function validePickerSystem(id,description){
	
	var identifiant = "";
	
	//création ou modification de l'EJ
	identifiant = '<input type="hidden" id="selectsystem" value="' + id + '" />' + description;
	
	//on l'insère dans la zone de recherche
	document.getElementById("pick_system").innerHTML = identifiant;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
	cookieModification();
	
}

/**
 * affiche l'orientation particulière sélectionnée
 */
function validePickerOrientPart(id,description){
	
	var existe = false;
	var contenu = "";
	var ligne = "";
	var classe = "";
	
	if(document.getElementById("o" + id) != null)
		existe = true;
		
	
	if(existe == false){
		
		var elements = document.getElementsByName("orientpart");
		var len=elements.length;
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("tableauorient").innerHTML;

		//création du nouvel espace d'animation territorial sous la forme de checkbox
		ligne = '<tr id="o' + id + '"><td class="' + classe + '" width="97%" ><input type="hidden" name="orientpart" value=' + id + ' />' + description + '<input type="hidden" name="description_orientpart" value="' + description + '" /></td><td class="' + classe + '" width="3%" ><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceOrientPart(\'o' + id + '\')"></td></tr></tbody>';
		
		contenu = contenu.replace("</tbody>",ligne);
		contenu = contenu.replace("</TBODY>",ligne);
		
		//on l'insère dans la zone de recherche
		document.getElementById("tableauorient").innerHTML = contenu;

		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		cookieModification();
		
	}
	else{
		alert("L'orientation particulière sélectionnée est déjà dans la liste.");
	}
	
}

/**
 * affiche le type d'offre sélectionné
 */
function validepickertypesOffre(id, description){
	
	//On recherche si le critère est déjà dans la liste
	var elements = document.getElementsByName("typesOffre");
	var len=elements.length;
	var existe = false;
	var contenu = "";
	var checkbox = "";
	
    for (var i=0; i<len; ++i){
        if (elements[i].value == id) {
            existe = true;
        }
    }
	
	if (existe == true){
		alert("L'offre de soins sélectionnée est déjà dans la liste.");
	}
	else{
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("typesOffre").innerHTML;
		
		//création du nouvel espace d'animation territorial sous la forme de checkbox
		checkbox = '<tr id="t' + id + '"><td style="font-size:12px;" ><input type="checkbox" checked="true" name="typesOffre" value=' + id + ' />' + description + '<input type="hidden" name="description_typesOffre" value="' + description + '" /></td></tr></tbody>';
		
		contenu = contenu.replace("</tbody>",checkbox);
		contenu = contenu.replace("</TBODY>",checkbox);
		
		//on l'insère dans la zone de recherche
		document.getElementById("typesOffre").innerHTML = contenu;

		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
	}
}

/**
 * affiche le type de fonction sélectionné
 */
function validepickertypesFonction(id, description){
	
	//On recherche si le critère est déjà dans la liste
	var elements = document.getElementsByName("typesFonction");
	var len=elements.length;
	var existe = false;
	var contenu = "";
	var checkbox = "";
	
    for (var i=0; i<len; ++i){
        if (elements[i].value == id) {
            existe = true;
        }
    }
	
	if (existe == true){
		alert("La fonction sélectionnée est déjà dans la liste.");
	}
	else{
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("typesFonction").innerHTML;
		
		//création du nouvel espace d'animation territorial sous la forme de checkbox
		checkbox = '<tr id="ty' + id + '"><td style="font-size:12px;" ><input type="checkbox" checked="true" name="typesFonction" value=' + id + ' />' + description + '<input type="hidden" name="description_typesFonction" value="' + description + '" /></td></tr></tbody>';
		
		contenu = contenu.replace("</tbody>",checkbox);
		contenu = contenu.replace("</TBODY>",checkbox);
		
		//on l'insère dans la zone de recherche
		document.getElementById("typesFonction").innerHTML = contenu;

		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
	}
	
}

/**
 * affiche l'entité juridique (structure) sélectionné
 */
function validePickerEJ(id, description){
	
	var identifiant = "";
	
	//création ou modification de l'EJ
	identifiant = '<input type="hidden" name="ej" value="' + id + '" />' + description;
	
	//on l'insère dans la zone de recherche
	document.getElementById("pick_struc").innerHTML = identifiant;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
}

/**
 * affiche l'entité géographique (site) sélectionné
 */
function validePickerEG(id, description){
	
	var identifiant = "";
	
	//création ou modification de l'EJ
	identifiant = '<input type="hidden" name="eg" value="' + id + '" />' + description;
	
	//on l'insère dans la zone de recherche
	document.getElementById("pick_site").innerHTML = identifiant;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
}

/**
 * affiche l'élément sélectionné
 */
function validePickerElement(id, description){
	
	var identifiant = "";
	
	//création ou modification de l'EJ
	identifiant = '<input type="hidden" name="element" value="' + id + '" />' + description;
	
	//on l'insère dans la zone de recherche
	document.getElementById("pick_elt").innerHTML = identifiant;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
}


/**
 * affiche l'élément sélectionné
 */
function validePickerElementAssocier(id, description){
	
	var contenu = "";
	var ligne = "";
	var classe = "";		
	
		
	var elements = document.getElementsByName("idelement");
	var len = elements.length;//attention il y a un idelement qui n'est pas dans le tableau mais dans le formulaire de modification d'un élément
	var num = len - 1;
	
	if (num%2 == 0)
		classe = "TableauLignes";
	else	
		classe = "TableauLignesPyjama";
	
	//on récupère les espaces d'animations déjà insérés dans la zone de recherche
	contenu = document.getElementById("tableelement").innerHTML;

	//création du nouvel espace d'animation territorial sous la forme de checkbox
	ligne = '<tr id="e' + len + '"><td class="' + classe + '" width="91%"'
			+ 'onmouseover="var tds = this.parentNode.childNodes; for (var i = 0; i < tds.length; i ++) if (tds[i].nodeName.toLowerCase() == \'td\') {tds[i].className2 = tds[i].className; tds[i].className=\'TableauLignesRollOver\'};"' 
			+ 'onmouseout="var tds = this.parentNode.childNodes; for (var i = 0; i < tds.length; i ++) if (tds[i].nodeName.toLowerCase() == \'td\') tds[i].className=tds[i].className2;"'
			+ '>'
			+ '<a href="/PagesSante"+servletPath+"/element?idelement=' + id + '">'
			+ '<span id="libelemorga' + num + '" class="largeurTot LignesPJ">' + description + '</span>'
			+ '</a>'
			+ '<input type="hidden" name="idelement" value=' + id + ' /></td>'
			+ '<td class="' + classe + '" width="3%"'
			+ 'onmouseover="var tds = this.parentNode.childNodes; for (var i = 0; i < tds.length; i ++) if (tds[i].nodeName.toLowerCase() == \'td\') {tds[i].className2 = tds[i].className; tds[i].className=\'TableauLignesRollOver\'};"' 
			+ 'onmouseout="var tds = this.parentNode.childNodes; for (var i = 0; i < tds.length; i ++) if (tds[i].nodeName.toLowerCase() == \'td\') tds[i].className=tds[i].className2;"'
			+ '>'
			+ '<a href="/PagesSante"+servletPath+"/element?idelement=' + id + '"><img class="icone" src="/PagesSante/images/icone_action_rechercher_visualiser.png"></a></td>'
			+ '<td class="' + classe + '" width="3%"'
			+ 'onmouseover="var tds = this.parentNode.childNodes; for (var i = 0; i < tds.length; i ++) if (tds[i].nodeName.toLowerCase() == \'td\') {tds[i].className2 = tds[i].className; tds[i].className=\'TableauLignesRollOver\'};"' 
			+ 'onmouseout="var tds = this.parentNode.childNodes; for (var i = 0; i < tds.length; i ++) if (tds[i].nodeName.toLowerCase() == \'td\') tds[i].className=tds[i].className2;"'
			+ '>'
			+ '<img class="icone" onclick="modifierElement(' + id + ')" src="/PagesSante/images/icone_action_modifier.png"></td>'
			+ '<td class="' + classe + '" width="3%"'
			+ 'onmouseover="var tds = this.parentNode.childNodes; for (var i = 0; i < tds.length; i ++) if (tds[i].nodeName.toLowerCase() == \'td\') {tds[i].className2 = tds[i].className; tds[i].className=\'TableauLignesRollOver\'};"' 
			+ 'onmouseout="var tds = this.parentNode.childNodes; for (var i = 0; i < tds.length; i ++) if (tds[i].nodeName.toLowerCase() == \'td\') tds[i].className=tds[i].className2;"'
			+ '>'
			+ '<img class="icone" onclick="fermerElement(' + id + ',"libelemorga' + num + '","CreationElement")" src="/PagesSante/images/icone_action_supprimer.png"></td>'
			+ '</tr></tbody>';
	
	contenu = contenu.replace("</tbody>",ligne);
	contenu = contenu.replace("</TBODY>",ligne);
	
	//on l'insère dans la zone de recherche
	document.getElementById("tableelement").innerHTML = contenu;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
		
	
	
}

/**
 * affiche la personne sélectionnée
 */
function validePickerPersonne(id, description){
	
	var identifiant = "";
	
	//création ou modification de l'EJ
	identifiant = '<input type="hidden" name="personne" value="' + id + '" />' + description;
	
	//on l'insère dans la zone de recherche
	document.getElementById("pick_personne").innerHTML = identifiant;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
}

/**
 * affiche la personne sélectionnée dans l'annuaire LDAP
 */
function validePickerPersonneLDAP(ldap, description, uid){
	
	var identifiant = "";
	
	//création ou modification de l'EJ
	identifiant = '<input type="hidden" id="ldap" name="ldap" value="' + ldap + '" /><input type="hidden" id="uidcompte" name="uidcompte" value="' + uid + '" />' + description;
	
	//on l'insère dans la zone de recherche
	document.getElementById("pick_personne").innerHTML = identifiant;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
}


/**
 * affiche le gestionnaire sélectionné
 */
function validePickerGestionnaire(id, description,rattachement){
	
	var identifiant = "";
	
	//création ou modification de l'EJ
	identifiant = '<input type="hidden" id="rattachement" value="' + rattachement + '" /><input type="hidden" id="idgestionnaire" value="' + id + '" /><input type="hidden" id="descgestionnaire" value="' + description + '" />' + description;
	
	//on l'insère dans la zone de recherche
	document.getElementById("gestionnaire").innerHTML = identifiant;

	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
	
}


/* FONCTIONS PERMETTANT D'EFFACER LE RESULTAT DE LA SELECTION D'UN PICKER */

function deleteGestionnaire(){
	document.getElementById('gestionnaire').innerHTML = "";
}

/**
 * efface le system
 */
function effaceSystem(){
	document.getElementById('pick_system').inerHTML = "";
}


/**
 * efface les catégories sélectionnées
 */
function effaceCategorie(type){
	
	if (type=="rechercheetablissement"){
	
		var elements = document.getElementsByName("categoriesetablissement");
		var len=elements.length;
		
		for (var i=len-1; i>=0; i--){
	        if (elements[i].checked) {
	            document.getElementById('c' + elements[i].value).parentNode.removeChild(document.getElementById('c' + elements[i].value));
	        }
	    }
	}
	else if (type=="site"){
		document.getElementById('field_categoriejuridique').inerHTML = "";
	}
	    
}

/**
 * efface les fonctions sélectionnées
 */
function effaceFonction(){
	
	var elements = document.getElementsByName("typesFonction");
	var len=elements.length;
	
	for (var i=len-1; i>=0; i--){
        if (elements[i].checked) {
            document.getElementById('ty' + elements[i].value).parentNode.removeChild(document.getElementById('ty' + elements[i].value));
        }
    }
    
}


/**
 * efface les types d'offres sélectionnés
 */
function effaceOffre(){
	
	var elements = document.getElementsByName("typesOffre");
	var len=elements.length;
	
	for (var i=len-1; i>=0; i--){
        if (elements[i].checked) {
        	document.getElementById('t' + elements[i].value).parentNode.removeChild(document.getElementById('t' + elements[i].value));
        }
    }
	    
}

/**
 * efface la localisation
 */
function effacepickerLocalisation(){
	document.getElementById("localisation").innerHTML = "";
}

/**
 * efface les statuts sélectionnés
 */
function effaceStatut(type){
	
	if (type=="rechercheetablissement"){
		
		var elements = document.getElementsByName("statutsfiness");
		var len=elements.length ;

				
		for (var i=len-1; i>=0; i--){
	    		
	        if (elements[i].checked) {
	        	document.getElementById('s' + elements[i].value).parentNode.removeChild(document.getElementById('s' + elements[i].value));
	        }
	    }
	    
	}
	else if(type=="site"){
		document.getElementById("field_statutfiness").innerHTML = "";
	}
}

/**
 * efface les formes juridiques sélectionnées
 */
function effacepickerformejuridique(){
	
	var elements = document.getElementsByName("formes");
	var len=elements.length ;

			
	for (var i=len-1; i>=0; i--){
    		
        if (elements[i].checked) {
        	document.getElementById('f' + elements[i].value).parentNode.removeChild(document.getElementById('f' + elements[i].value));
        }
    }
	
}

/**
 * efface les compétences de medecin sélectionnées
 */
function effaceCompetence(type,id){
	
	if(type=="rechercheprofessionnel"){
		var elements = document.getElementsByName("competencesMedecin");
		var len=elements.length;
		
		for (var i=len-1; i>=0; i--){
	        if (elements[i].checked) {
	        	document.getElementById('c' + elements[i].value).parentNode.removeChild(document.getElementById('c' + elements[i].value));
	        }
	    }
	}
	else if(type=="fonction"){
		
		if (confirm("Etes-vous sûr de vouloir supprimer cette compétence ?")){
			document.getElementById(id).parentNode.removeChild(document.getElementById(id));
			cookieModification();
		}
	}
}

function effaceGestionnaire(id){
	document.getElementById(id).parentNode.removeChild(document.getElementById(id));
	
	if (document.getElementsByName('gestionnaire') == null){
		$('#pasgestionnaire').show();
		$('#tablegestionnaire').hide();
	}
	
}

/**
 * efface l'habilitation selectionnée
 */
function effaceHabilitation(id){
	 if (confirm("Etes-vous sûr de vouloir supprimer cette habilitation ?")){ 
		 document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		 cookieModification();
	 }
}

/**
 * efface la patientele selectionnée
 */
function effacePatientele(id){
	 if (confirm("Etes-vous sûr de vouloir supprimer cette patientele ?")){ 
		 document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		 cookieModification();
	 }
}

/**
 * efface la discipline selectionnée
 */
function effaceDiscipline(id){
	 if (confirm("Etes-vous sûr de vouloir supprimer cette discipline ?")){ 
		 document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		 cookieModification();
	 }
}

/**
 * efface l'offre de soins selectionnée
 */
function effacerOffresSoins(id){
	 if (confirm("Etes-vous sûr de vouloir supprimer cette offre de soins ?")) 
		 document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}

/**
 * efface le code APE selectionné
 */
function effaceCodeAPE(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette activité ?"))
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}

/**
 * efface le tablpharm(description fonction) selectionné
 */
function effaceTablPharm(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette description ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();
	}
}

/**
 * efface la forme juridque selectionnée
 */
function effaceFormeJuridique(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette forme juridique ?"))
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}

/**
 * efface l'enseignement selectionné
 */
function effaceEnseignement(id){
	
	if (confirm("Etes-vous sûr de vouloir supprimer cet enseignement ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();
	}
	
}

/**
 * efface le statut hospitalier selectionné
 */
function effaceStatutHospitalier(id){
	if (confirm("Etes-vous sûr de vouloir supprimer ce statut hospitalier ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();
	}
}

/**
 * efface l'attribution complémentaire sélectionnée
 */
function effaceAttribComp(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette attribution complémentaire ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();
	}
}


/**
 * efface l'attribution complémentaire sélectionnée
 */
function effaceTitre(id){
	if (confirm("Etes-vous sûr de vouloir supprimer ce titre honorifique ?")){		
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();	
	}
	
}

/**
 * efface la spécialité sélectionnée
 */
function effaceSpecialite(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette spécialité ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();
	}
}

/**
 * efface l'identifiant sélectionné
 */
function effaceIdentifiant(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cet identifiant ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));		
		cookieModification();		
	}
}

/**
 * efface l'adresse sélectionnée
 */
function effaceAdresse(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette adresse ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();
	}
}

/**
 * efface le mail sélectionné
 */
function effaceMail(id){
	if (confirm("Etes-vous sûr de vouloir supprimer ce mail ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();
	}
}

/**
 * efface le groupe sélectionné
 */
function effaceGroupe(id){
	if (confirm("Etes-vous sûr de vouloir supprimer ce groupe ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();
	}
}

/**
 * efface le site sélectionné
 */
function effaceSite(id){
	if (confirm("Etes-vous sûr de vouloir supprimer ce site ?"))
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}

/**
 * efface le téléphone sélectionné
 */
function effaceTelephone(id){
	if (confirm("Etes-vous sûr de vouloir supprimer ce téléphone ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();
	}
}

/**
 * efface l'équipement sélectionné
 */
function effaceEquipement(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cet équipement ?"))
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}

/**
 * Efface une technique pour une offre de soins.
 * @param id
 */
function effaceTechnique(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette technique ?"))
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}

/**
 * efface l'offre de soins sélectionnée
 */
function effaceOffreSoins(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette offre de soins ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		cookieModification();
	}
}

/**
 * efface l'attribution complémentaire sélectionnée
 */
function effaceLangue(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette langue parlée ?")){		
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));	
		cookieModification();	
	}
}

/**
 * efface l'orientation particulière sélectionnée
 */
function effaceOrientPart(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette orientation particulière ?")){		
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));	
		cookieModification();	
	}
}

/**
 * efface la spécialisation sélectionnée
 */
function effaceSpecialisation(id){
	if (confirm("Etes-vous sûr de vouloir supprimer cette spécialisation ?")){
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
	}
}

/**
 * efface les activités séectionnées
 */
function effacepickeractivite(type){
	
	if (type=="rechercheetablissement"){
		
		var elements = document.getElementsByName("activites");
		var len=elements.length;
		
		for (var i=len-1; i>=0; i--){
	        if (elements[i].checked) {
	        	document.getElementById('a' + elements[i].value).parentNode.removeChild(document.getElementById('a' + elements[i].value));
	        }
	    }
	    
	}
	else if (type=="site"){
		
		document.getElementById('field_codeape').innerHTML = "";
	
	}
}

/**
 * efface les espaces d'animation territorial sélectionnés
 */
function effaceEspace(){
	
	var elements = document.getElementsByName("espacesanimation");
	var len=elements.length;
	
	for (var i=len-1; i>=0; i--){
        if (elements[i].checked) {
        	document.getElementById('e' + elements[i].value).parentNode.removeChild(document.getElementById('e' + elements[i].value));
        }
    }
}



/* INITIALISATION (AFFICHAGE) DES PICKERS */

/**
 * permet d'afficher le picker pour les techniques pour une offre de soins.
 */
function initpickertechnique() {
	
	$.get('/PagesSante'+servletPath+'/offresoins/listetechnique' , function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Techniques",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les statuts
 */
function initpickerstatutfiness(type) {
	
	$.get('/PagesSante'+servletPath+'/pickerstatutfiness?m=picker&p=0&type=' + type , function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Statut FINESS",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les catégories d'établissement
 */
function initpickercategorieEtablissement(type) {

	$.get('/PagesSante'+servletPath+'/pickercategorieetablissement?m=picker&type=' + type, function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Categorie d'établissement",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les activités
 */
function initpickercodeape(type) {

	$.get('/PagesSante'+servletPath+'/pickercodeape?m=picker&type=' + type, function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Activité (APE)",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les activités
 */
function initpickerFormejuridique(page) {

	$.get('/PagesSante'+servletPath+'/pickerFormejuridique?m=picker&page=' + page , function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Forme juridique",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}


/**
 * permet d'afficher le picker pour la localisation
 */
function initpickerLocalisation() {
	
	$.get('/PagesSante'+servletPath+'/pickerlocalisation?m=&type=', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Localisation",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les espaces d'animation
 */
function initpickerespacesAnimation() {

	$.get('/PagesSante'+servletPath+'/pickerespacesanimation?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:300,
	width:500,
	modal: true,
	title: "Espaces d'animation",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}


/**
 * permet d'afficher le picker pour les types de fonction
 */
function initpickertypesFonction() {
	
	$.get('/PagesSante'+servletPath+'/pickertypesfonction?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Type de fonction",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les compétences de medecin
 */
function initpickercompetencesMedecin(type) {

	$.get('/PagesSante'+servletPath+'/pickercompetencesMedecin?m=picker&type=' + type , function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Compétence",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les localisation / entite / element
 */
function initpickerlocalisationEntiteElement() {

	$.get('/PagesSante'+servletPath+'/pickerentiteelementlocalisation?m=picker&type=', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "EJ / EG / Organisation / Ville / Département / Région",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les langues parlée
 */
function initpickerlangue() {

	$.get('/PagesSante'+servletPath+'/pickerlangue?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Langue parlée",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les system
 */
function initpickersystem() {

	$.get('/PagesSante'+servletPath+'/pickersystem?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Système",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}


/**
 * permet d'afficher le picker pour les titres honorifiques
 */

function initpickertitre() {

	$.get('/PagesSante'+servletPath+'/pickertitre', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({		
	height:600,
	width:500,
	modal: true,
	title: "Titre honorifique",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}


function initpickerSpecialite(){
	
	$.get('/PagesSante'+servletPath+'/pickerspecialite', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({		
	height:600,
	width:500,
	modal: true,
	title: "Spécialité",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

function initpickeroffressoins(){
	
	$('#dialog').html("<div id='spin'></div>");
	
	$.get('/PagesSante'+servletPath+'/pickeroffressoins', function(data) {
		$('#dialog').html(data);
		$("#spin").empty();
		$("#spin").hide();
	});
	
	$( "#dialog" ).dialog({		
	height:600,
	width:500,
	modal: true,
	title: "Offre de soins",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
		$("#spin").show();
		spinner("spin", 70, 120, 12, 25, "#000");
    },
	closeText: "Fermer"
	});
	
}

function initpickerequipement(){
	
	$.get('/PagesSante'+servletPath+'/pickerequipement', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({		
	height:600,
	width:500,
	modal: true,
	title: "Equipement de l'offre",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

/**
 * permet d'afficher le picker pour les personnes
 */
function initpickerpersonne() {

	$.get('/PagesSante'+servletPath+'/pickerpersonne?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Rechercher une personne",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}


/**
 * permet d'afficher le picker pour les personnes de l'annuaire LDAP
 */
function initpickerpersonneldap() {

	$.get('/PagesSante'+servletPath+'/pickerpersonneldap?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Rechercher une personne",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les spécialisations
 */
function initpickerspecialisation() {

	$.get('/PagesSante'+servletPath+'/pickerspecialisation', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Spécialisation",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les attributions complémentaires
 */
function initpickerattribcomp(){
	
	$.get('/PagesSante'+servletPath+'/pickerattributioncomp', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:400,
	width:500,
	modal: true,
	title: "Attribution Complémentaire",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

/**
 * permet d'afficher le picker pour les attributions complémentaires
 */
function initpickerorientpart(){
	
	$.get('/PagesSante'+servletPath+'/pickerorientationparticuliere', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:400,
	width:500,
	modal: true,
	title: "Orientation Particulière",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}


/**
 * permet d'afficher le picker pour les elements
 */
function initpickerelement() {

	$.get('/PagesSante'+servletPath+'/pickerelement?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Rechercher un élement",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}


/**
 * permet d'afficher le picker pour les elements à associer à une structure, un site ou un autre élément lors de la création
 */
function initpickerelementassocier() {

	$.get('/PagesSante'+servletPath+'/pickerelementassocier?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Rechercher un élement",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les structures
 */
function initpickerej() {

	$.get('/PagesSante'+servletPath+'/pickerej?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Rechercher une structure",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

/**
 * permet d'afficher le picker pour les sites
 */
function initpickereg() {

	$.get('/PagesSante'+servletPath+'/pickereg?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Rechercher un site",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

function initpickerpickerEnseignement(){
	
	$.get('/PagesSante'+servletPath+'/pickerEnseignement', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Enseignement",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

function initpickerDiscipline(){
	
	$.get('/PagesSante'+servletPath+'/pickerDiscipline', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Discipline",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

function initpickerClientele(iddiscipline,descdiscipline){
	
	$.get('/PagesSante'+servletPath+'/pickerClientele?id=' + iddiscipline + '&desc=' + descdiscipline, function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Clientèle",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

function initpickerFonctionnement(iddiscipline,descdiscipline,idclient,descclient){
	
	$.get('/PagesSante'+servletPath+'/pickerFonctionnement?iddisc=' + iddiscipline + '&descdisc=' + descdiscipline + '&idclient=' + idclient + '&descclient=' + descclient, function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Fonctionnement",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

function initpickerCapacite(iddiscipline,descdiscipline,idclient,descclient,idfonctionnement,descfonctionnement){

	$.get('/PagesSante'+servletPath+'/pickerCapacite?iddisc=' + iddiscipline + '&descdisc=' + descdiscipline + '&idclient=' + idclient + '&descclient=' + descclient + '&idfonc=' + idfonctionnement + '&descfonc=' + descfonctionnement,  function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:200,
	width:600,
	modal: true,
	title: "Capacité",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}


function initpickeractivite(){
	
	$.get('/PagesSante'+servletPath+'/pickerActivite', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Activité",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

function initpickerForme(idactivite,descactivite){
	
	$.get('/PagesSante'+servletPath+'/pickerForme?id=' + idactivite + '&desc=' + descactivite, function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Forme",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

function initpickerModalite(idactivite,descactivite,idforme,descforme){
	
	$.get('/PagesSante'+servletPath+'/pickerModalite?idact=' + idactivite + '&descact=' + descactivite + '&idforme=' + idforme + '&descforme=' + descforme, function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Modalité",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

/**
 * permet d'afficher le picker pour les espaces d'animation
 */
function initpickertypesOffre() {

	$.get('/PagesSante'+servletPath+'/pickertypesOffre?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Type d'offre de soins",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});

}

function initpickerGestionnaire(){
	
	$.get('/PagesSante'+servletPath+'/pickergestionnaire?m=picker', function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:600,
	width:500,
	modal: true,
	title: "Rechercher une personne",
	open: function (type, data) {
		$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
    },
	closeText: "Fermer"
	});
	
}

/* AFFICHAGE RESULTAT DU FILTRE DES PICKERS */

function pickerlangue(){
	
	var m = "";
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickerlangue?m=' + m, function(data) {
		$('#pickerlangueparlee').html(data);
	});
	
}

function pickersystem(){
	
	var m = "";
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickersystem?m=' + m, function(data) {
		$('#pickersystem').html(data);
	});
	
}

/**
 * permet de filtrer les données du picker pour les personnes
 */
function pickerpersonne(){
	
	$("#spin").show();
	spinner("spin", 70, 120, 12, 25, "#000");
	
	var m = "";
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickerpersonne?m=' + m, function(data) {
		$('#pickerpersonne').html(data);
		$("#spin").empty();
		$("#spin").hide();
	});	
	
}


/**
 * permet de filtrer les données du picker pour les personnes de l'annuaire LDAP
 */
function pickerpersonneldap(){
	
	var m = "";
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickerpersonneldap?m=' + m, function(data) {
		$('#pickerpersonne').html(data);
	});
}


/**
 * permet de filtrer les données du picker pour les gestionnaires
 */
function pickergestionnaire(){
	
	var m = "";
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickergestionnaire?m=' + m, function(data) {
		$('#pickerpersonne').html(data);
	});
}

/**
 * permet de filtrer les données du picker pour les éléments
 */
function pickerelement(){
	
	var m = "";
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickerelement?m=' + m, function(data) {
		$('#pickerelement').html(data);
	});
}

/**
 * permet de filtrer les données du picker pour les éléments à associer à une structure, site ou un autre élément lors de la création
 */
function pickerelementassocier(){
	
	var m = "";
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickerelementassocier?m=' + m, function(data) {
		$('#pickerelementassocier').html(data);
	});
}

/**
 * permet de filtrer les données du picker pour les structures
 */
function pickerej(){
	
	var m = "";
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickerej?m=' + m, function(data) {
		$('#pickerej').html(data);
	});
}

/**
 * permet de filtrer les données du picker pour les sites
 */
function pickereg(){
	
	var m = "";
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickereg?m=' + m, function(data) {
		$('#pickereg').html(data);
	});
}

/**
 * permet de filtrer les données du picker pour les competences medecin
 */
function pickercompetencesMedecin(type){
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickercompetencesMedecin?m=' + m + '&type=' + type, function(data) {
		$('#pickercompetencesMedecin').html(data);
	});
	
}


/**
 * permet de filtrer les données du picker pour les types de fonction
 */
function pickertypesFonction(){
	
	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickertypesfonction?m=' + m, function(data) {
		$('#pickertypesFonction').html(data);
	});
	
}

/**
 * permet de filtrer les données du picker pour les types d'offres de soins
 */
function pickertypesOffre(){
	
	m = document.getElementById("m").value;
	
	$.get('/PagesSante'+servletPath+'/pickertypesOffre?m=' + m, function(data) {
		$('#pickertypesOffre').html(data);
	});
	
}

/**
 * permet de filtrer les données du picker pour les statuts
 */
function pickerstatusfiness(type) {

	m = document.getElementById("m").value;

	if (Math.abs(m) >= 0){//nombre
		$.get('/PagesSante'+servletPath+'/pickerstatutfiness?p=' + m + "&m=null&type=" + type, function(data) {
			$('#pickerfiness').html(data);
		});
	}
	else{	
		$.get('/PagesSante'+servletPath+'/pickerstatutfiness?m=' + m + "&p=0&type=" + type, function(data) {
			$('#pickerfiness').html(data);
		});
	}	
}

/**
 * permet de filtrer les données du picker pour les catégories d'établissement
 */
function pickercategorieEtablissement(type) {

	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickercategorieetablissement?m=' + m + "&p=0&type=" + type, function(data) {
		$('#pickercategorieetablissement').html(data);
	});	

}

/**
 * permet de filtrer les données du picker pour les activités,code APE
 */
function pickercodeAPE(type) {

	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickercodeape?m=' + m + '&type=' + type, function(data) {
		$('#initpickerActivite').html(data);
	});
	
}


/**
 * permet de filtrer les données du picker pour les formes juridique
 */
function pickerFormejuridique(page) {

	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickerFormejuridique?m=' + m + '&page=' + page , function(data) {
		$('#pickerFormejuridique').html(data);
	});
	
}

/**
 * permet de filtrer les données du picker pour la localisation
 */
function pickerLocalisation() {

	var m = "";
	var type = "";
	
	m = document.getElementById("m").value;

	var elements = document.getElementsByName("typerecherche");
	var len=elements.length;
	
    for (var i=0; i<len; ++i){
        if (elements[i].checked) {
            type = elements[i].value;
        }
    }

	$.get('/PagesSante'+servletPath+'/pickerlocalisation?m=' + m + "&type=" + type, function(data) {
		$('#pickerlocalisation').html(data);
	});	

}

/**
 * permet de filtrer les données du picker pour entité / élement / localisation
 */
function pickerentiteelementLocalisation(){
	
	var m = "";
	var type = "";
	
	m = document.getElementById("m").value;

	var elements = document.getElementsByName("typerecherche");
	var len=elements.length;

    for (var i=0; i<len; ++i){
        if (elements[i].checked) {
            type = elements[i].value;
        }
    }

	$.get('/PagesSante'+servletPath+'/pickerentiteelementlocalisation?m=' + m + "&type=" + type, function(data) {
		$('#pickerentiteelementlocalisation').html(data);
	});	
	
}

/**
 * permet de filtrer les données du picker pour les espaces d'animation territorial
 */
function pickerespacesAnimation() {

	m = document.getElementById("m").value;

	$.get('/PagesSante'+servletPath+'/pickerespacesanimation?m=' + m, function(data) {
		$('#pickerespacesanimation').html(data);
	});	

}
