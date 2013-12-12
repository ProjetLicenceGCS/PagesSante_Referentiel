var regexpdate = "^((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))\/((0[1-9])|(1[0-2]))\/([0-9]{4})$";

/* FONCTION DE NAVIGATION (PAGINATION) POUR LES TABLEAUX */

function navigationFonctionsCreationSite(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher

	$("#tableauFonction").load("/PagesSante"+servletPath+"/site/changetableaufonction", {numpage:n,page:'TableauFonctionsCreationSite'});//on change le tableau
	$("#navigationFonction").load("/PagesSante"+servletPath+"/site/changenavigationfonction", {numpage:n,page:'NavigationFonctionsCreationSite'});//on change les références des boutons suivant, précédent...

}


function navigationOrganisationsCreationSite(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauOrganisation").load("/PagesSante"+servletPath+"/site/changetableauorganisation", {numpage:n,page:'TableauOrganisationsCreationSite'});//on change le tableau
	$("#navigationOrganisation").load("/PagesSante"+servletPath+"/site/changenavigationorganisation", {numpage:n,page:'NavigationOrganisationsCreationSite'});//on change les références des boutons suivant, précédent...
	
}

function navigationFonctionsCreationStructure(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauFonction").load("/PagesSante"+servletPath+"/structure/changetableaufonction", {numpage:n,page:'TableauFonctionsCreationStructure'});//on change le tableau
	$("#navigationFonction").load("/PagesSante"+servletPath+"/structure/changenavigationfonction", {numpage:n,page:'NavigationFonctionsCreationStructure'});//on change les références des boutons suivant, précédent...

}

function navigationOrganisationsCreationStructure(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauOrganisation").load("/PagesSante"+servletPath+"/structure/changetableauorganisation", {numpage:n,page:'TableauOrganisationsCreationStructure'});//on change le tableau
	$("#navigationOrganisation").load("/PagesSante"+servletPath+"/structure/changenavigationorganisation", {numpage:n,page:'NavigationOrganisationsCreationStructure'});//on change les références des boutons suivant, précédent...

}


function navigationFonctionsCreationElement(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauFonction").load("/PagesSante"+servletPath+"/element/changetableaufonction", {numpage:n,page:'TableauFonctionsCreationElement'});//on change le tableau
	$("#navigationFonction").load("/PagesSante"+servletPath+"/element/changenavigationfonction", {numpage:n,page:'NavigationFonctionsCreationElement'});//on change les références des boutons suivant, précédent...

}

function navigationOrganisationsCreationElement(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauOrganisation").load("/PagesSante"+servletPath+"/element/changetableauorganisation", {numpage:n,page:'TableauOrganisationsCreationElement'});//on change le tableau
	$("#navigationOrganisation").load("/PagesSante"+servletPath+"/element/changenavigationorganisation", {numpage:n,page:'NavigationOrganisationsCreationElement'});//on change les références des boutons suivant, précédent...

}

/* GESTION DE L'ONGLET LOCALISATION */

/**
 * 	affiche les champs de detail d'une adresse
 */
function detailsAdresse(){
	
	$("#ville").val("");
	$("#numeroadr").val("");
	$("#complement").val("");
	$("#libellevoie").val("");
	$("#bp").val("");
	$("#libvoie").val("");
	$("#libville").val("");
	$("#codeinsee").val("");
	$("#codepostal").val("");
	
	$("#detailsadresse").show();
	$("#btnvalideradr").show();
	$("#btnmodifieradr").hide();
}

/**
 * affiche les champs de detail d'un téléphone
 */
function detailsTelephone(){
	
	$("#numerotel").val("");
	
	$("#detailstelephone").show();
	$("#btnvalidertel").show();
	$("#btnmodifiertel").hide();
}

/**
 * affiche les champs de detail d'un courriel
 */
function detailsCourriel(){
	
	$("#mail").val("");
	
	$("#detailscourriel").show();
	$("#btnvalidermail").show();
	$("#btnmodifiermail").hide();
}

/**
 * ajoute au tableau l'adresse
 */
function valideAdresse(){
	
	var listenumero = document.getElementsByName("numeroadresse");
	var listevoie = document.getElementsByName("libellevoie");
	var listebp = document.getElementsByName("boitepostal");
	var listecodeinsee = document.getElementsByName("codeinsee");
	var existeadr = false;
	
	var tableau = document.getElementById("tableadresse").innerHTML; 
	var nb = document.getElementsByName("ville").length;	
	var type = document.getElementById("typeadr").value.split(',');
	var ville = document.getElementById("libville").value;
	var cp = document.getElementById("codepostal").value;
	var numero = document.getElementById("numeroadr").value;
	var voie = trim(document.getElementById("libvoie").value);
	var complement = document.getElementById("complement").value;
	var codeinsee = document.getElementById("codeinsee").value;
	var statut = document.getElementById("statutadr").value;
	var bp =  trim(document.getElementById("bp").value);

	if(listecodeinsee != null){
		for(var i = 0; i < listecodeinsee.length; i++ ){
			if(trim(listenumero[i].value) == trim(numero) && listecodeinsee[i].value == codeinsee ){
				if(voie != ""){
					if(voie == listevoie[i].value){
						existeadr = true;
					}
				}
				else{
					if(listebp[i].value == bp){
						existeadr = true;
					}
				}
			}
		}
	}
	
	if(existeadr == true){
		alert("L'adresse existe déjà sous un autre type.");
	}
	else if (trim(ville[0]) == ""){
		alert("Veuillez sélectionner une ville ou un code postal.");
	}
	else if ((voie == "" && bp == "") || voie == "aucun résultat." ){
		alert("Veuillez sélectionner le libelle d'une voie ou saisir une boite postale.");
	}
	else{
		
		if (nb%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		nb = nb +1;
		
		if (bp == ""){
			bp = " ";
		}
		else{
			if(bp.split("BP").length < 2 && bp.split("bp").length < 2){
				bp = "BP " + bp;
			}
		}
		
		if (numero == ""){
			numero = " ";
		}
		
		if (complement == ""){
			complement = " ";
		}
		
		
		var nouvelleligne = '<tr id="a' + nb + '">'
							+ '	<td width="10%" class="' + classe + '">'
						    + type[1] + '<input type="hidden" name="typeadresse" value="' + type[0] + '" /><input type="hidden" name="libelletypeadresse" value="' + type[1] + '" /><input type="hidden" name="statutadresse" value="' + statut + '" />'
							+ '	</td>'
							+ '	<td width="8%" class="' + classe + '">'
							+ numero  + '<input type="hidden" name="numeroadresse" value="' + numero + ' " />'                                                                   
							+ '	</td>'
							+ '	<td width="24%" class="' + classe + '">'
							+  voie  + '<input type="hidden" name="libellevoie" value="' + voie + ' " />'  
							+ '	</td>'
							+ '	<td width="19%" class="' + classe + '">'
							+ complement   + '<input type="hidden" name="complement" value="' + complement + '" /><input type="hidden" name="boitepostal" value="' + bp + '" />'   
							+ '	</td>'
							+ '	<td width="14%" class="' + classe + '">'
							+ cp   + '<input type="hidden" name="codepostal" value="' + cp + '" />'
							+ '	</td>'
							+ '	<td width="19%" class="' + classe + '">'
							+ ville  + '<input type="hidden" name="ville" value="' + ville + '" /><input type="hidden" name="codeinsee" value="' + codeinsee + '" />'   
							+ '	</td>'
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_modifier.png" title="Modifier" alt="Modifier" onclick="modifierAdresse(\'a' + nb + '\')">'    
							+ '	</td>'
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceIdentifiant(\'a' + nb + '\')">'
							+ '	</td>'
							+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tableadresse").innerHTML = tableau;
		
		$("#detailsadresse").hide();
		
		cookieModification();
	}
	
}

/**
 * affichage de l'enregistrement à modifier dans les champs de detail
 * @param id
 */
function modifierAdresse(id){

var tableau = document.getElementById("tableadresse").innerHTML.split('<tr id="');
var indice = 0;	

for (var i=0;i<tableau.length;i++){
	
	if(tableau[i].substr(0,2)==id){
		indice = i-1;
	}
}

var type = document.getElementsByName("typeadresse")[indice].value;
var libtype = document.getElementsByName("libelletypeadresse")[indice].value;
var ville = document.getElementsByName("ville")[indice].value;
var cp = document.getElementsByName("codepostal")[indice].value;
var numero = document.getElementsByName("numeroadresse")[indice].value;
var voie = document.getElementsByName("libellevoie")[indice].value;
var complement = document.getElementsByName("complement")[indice].value;
var codeinsee = document.getElementsByName("codeinsee")[indice].value;
var statut = document.getElementsByName("statutadresse")[indice].value;
var bp = document.getElementsByName("boitepostal")[indice].value;

document.getElementById("typeadr").value = type + "," + libtype;
document.getElementById("ville").value = ville + " (" + cp + ")";
document.getElementById("libville").value = ville;
document.getElementById("codepostal").value = cp;
document.getElementById("numeroadr").value = numero;
document.getElementById("libellevoie").value = voie;
document.getElementById("libvoie").value = voie;
document.getElementById("complement").value = complement;
document.getElementById("codeinsee").value = codeinsee;
document.getElementById("statutadr").value = statut;
document.getElementById("bp").value = bp;

$("#btnvalideradr").hide();
$("#btnmodifieradr").show();
$("#detailsadresse").show();
$("#sousDetailsAdresse").show();

$("#libellevoie").autocomplete({
	source: "/PagesSante"+servletPath+"/hexaviavoie2" + "?codeinsee=" + $("#codeinsee").val(),
	dataType: "json",
	minLength: 2,
	delay: 500,
	select: function( event, ui ) {
		document.getElementById("libvoie").value = ui.item.value;
	}		
});

document.getElementById("btnmodifieradr").onclick = function () { modificationAdresse(id); };

}

/**
 * affiche les modifications dans le tableau
 */
function modificationAdresse(id){

	
	var tableau = document.getElementById("tableadresse").innerHTML.split('<tr id="');
	var indice = 0;	

	for (var i=0;i<tableau.length;i++){
		
		if(tableau[i].substr(0,2)==id){
			indice = i-1;
		}
	}

	//ancienne adresse
	var ancnumero = document.getElementsByName("numeroadresse")[indice].value;
	var ancvoie = document.getElementsByName("libellevoie")[indice].value;
	var anccodeinsee = document.getElementsByName("codeinsee")[indice].value;
	var ancbp = document.getElementsByName("boitepostal")[indice].value;
	

	var classe = "";		
	var ligne = document.getElementById(id).innerHTML;
	var test = ligne.split('TableauLignesPyjama');
	
	if (test.length == 1)
		classe = "TableauLignes";
	else	
		classe = "TableauLignesPyjama";
		
	//nouvelle adresse
	var type = document.getElementById("typeadr").value.split(',');
	var ville = document.getElementById("libville").value;
	var cp = document.getElementById("codepostal").value;
	var numero = document.getElementById("numeroadr").value;
	var voie = document.getElementById("libvoie").value;
	var complement = document.getElementById("complement").value;
	var codeinsee = document.getElementById("codeinsee").value;
	var statut = document.getElementById("statutadr").value;
	var bp =  trim(document.getElementById("bp").value);
	
	
	var listenumero = document.getElementsByName("numeroadresse");
	var listevoie = document.getElementsByName("libellevoie");
	var listebp = document.getElementsByName("boitepostal");
	var listecodeinsee = document.getElementsByName("codeinsee");
	var existeadr = false;

	if(listenumero != null){
		for(var i = 0; i < listenumero.length; i++ ){
			if(trim(listenumero[i].value) == trim(numero) && listecodeinsee[i].value == codeinsee ){
				if(voie != ""){
					if(voie == listevoie[i].value){
						if(ancnumero != numero || ancvoie != voie || anccodeinsee != codeinsee){
							existeadr = true;
						}
					}
				}
				else{
					if(listebp[i].value == bp){
						if(ancnumero != numero || ancbp != bp || anccodeinsee != codeinsee){
							alert("true");
							existeadr = true;
						}
					}
				}
			}
		}
	}

	if(existeadr == true){
		alert("il existe déjà la même adresse avec un type différent.");
	}
	else if (ville == ""){
		alert("Veuillez sélectionner une ville ou un code postal.");
	}
	else if ((voie == "" && bp == "") || voie == "aucun résultat."){
		alert("Veuillez sélectionner le libelle d'une voie ou saisir une boite postale.");
	}
	else{
	
		if (bp == ""){
			bp = " ";
		}
		else{
			if(bp.split("BP").length < 2 && bp.split("bp").length < 2){
				bp = "BP " + bp;
			}
		}
		
		if (numero == ""){
			numero = " ";
		}
		
		if (complement == ""){
			complement = " ";
		}

		var nouvelleligne = ' <td width="10%" class="' + classe + '">'
						    + type[1] + '<input type="hidden" name="typeadresse" value="' + type[0] + '" /><input type="hidden" name="libelletypeadresse" value="' + type[1] + '" /><input type="hidden" name="statutadresse" value="' + statut + '" />'
							+ '	</td>'
							+ '	<td width="8%" class="' + classe + '">'
							+ numero  + '<input type="hidden" name="numeroadresse" value="' + numero + ' " />'                                                                   
							+ '	</td>'
							+ '	<td width="24%" class="' + classe + '">'
							+  voie  + '<input type="hidden" name="libellevoie" value="' + voie + ' " />'  
							+ '	</td>'
							+ '	<td width="19%" class="' + classe + '">'
							+ complement + ' ' + bp + '<input type="hidden" name="complement" value="' + complement + '" /><input type="hidden" name="boitepostal" value="' + bp + '" />'   
							+ '	</td>'
							+ '	<td width="14%" class="' + classe + '">'
							+ cp   + '<input type="hidden" name="codepostal" value="' + cp + '" />'
							+ '	</td>'
							+ '	<td width="19%" class="' + classe + '">'
							+ ville  + '<input type="hidden" name="ville" value="' + ville + '" /><input type="hidden" name="codeinsee" value="' + codeinsee + '" />'   
							+ '	</td>'
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_modifier.png" title="Modifier" alt="Modifier" onclick="modifierAdresse(\'' + id + '\')">'    
							+ '	</td>'
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceIdentifiant(\'' + id + '\')">'
							+ '	</td>';
		
		$("#" + id).html(nouvelleligne);

		document.getElementById("btnmodifieradr").onclick = function () { modificationAdresse(id); };

		$("#detailsadresse").hide();
		
		 cookieModification();
	}
		 
}

function effaceLibVoie(){
	if(trim(document.getElementById("libellevoie").value) != trim(document.getElementById("libvoie").value) ){
		document.getElementById("libvoie").value = "";
	}
}

/**
 * affiche le téléphone dans le tableau
 */
function valideTelephone(){
	
	var tableau = document.getElementById("tabletel").innerHTML; 
	var nb = document.getElementsByName("numerotelephone").length;
		
	if (nb%2 == 0)
		classe = "TableauLignes";
	else	
		classe = "TableauLignesPyjama";
	
	nb = nb +1;
	
	var type = document.getElementById("typetel").value.split(',');
	var numero = document.getElementById("numerotel").value;
	var statut = document.getElementById("statuttel").value;
	var libstatut = "";
	var listerouge =  document.getElementById("listerouge").checked;
	var liblisterouge = "";
	
	if(listerouge == true){
		liblisterouge = "Oui";
	}
	else{
		liblisterouge = "Non";
	}
	
	if(statut == 1){
		libstatut = "Public";
	}
	else if(statut == 2){
		libstatut = "Confidentiel";
	}
	else{
		libstatut = "Très confidentiel";
	}	
	
	
	if (/^[0-9]{10}$/.test(numero)) {
	
		var nouvelleligne = '<tr id="t' + nb + '">'
						+ '	<td width="42%" class="' + classe + '">'
					    + type[1] + '<input type="hidden" name="typetelephone" value="' + type[0] + '" /><input type="hidden" name="libelletypetelephone" value="' + type[1] + '" />'
						+ '	</td>'
						+ '	<td width="20%" class="' + classe + '">'
						+ numero  + '<input type="hidden" name="numerotelephone" value="' + numero + '" />'                                                                   
						+ '	</td>'
						+ '	<td width="19%" class="' + classe + '">'
						+  libstatut  + '<input type="hidden" name="statuttelephone" value="' + statut + '" />'  
						+ '	</td>'
						+ '	<td width="13%" class="' + classe + '">'
						+ liblisterouge   + '<input type="hidden" name="listerouge" value=' + listerouge + ' />'   
						+ '	</td>'						
						+ '	<td width="3%" class="' + classe + '">'
						+ '<img src="/PagesSante/images/icone_action_modifier.png" title="Modifier" alt="Modifier" onclick="modifierTelephone(\'t' + nb + '\')">'    
						+ '	</td>'
						+ '	<td width="3%" class="' + classe + '">'
						+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceTelephone(\'t' + nb + '\')">'
						+ '	</td>'
						+ '</tr></tbody>';
	
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tabletel").innerHTML = tableau;
		
		$("#detailstelephone").hide();
	}
	else{
		alert("Numéro de téléphone non valide!");
	}
	
	cookieModification();
	
}

/**
 * affiche l'enregistrement sélectionné dans les champs de détail
 * @param id
 */
function modifierTelephone(id){

	var tableau = document.getElementById("tabletel").innerHTML.split('<tr id="');
	var indice = 0;	

	for (var i=0;i<tableau.length;i++){
		
		if(tableau[i].substr(0,2)==id){
			indice = i-1;
		}
	}
	
	var type = document.getElementsByName("typetelephone")[indice].value;
	var libtype = document.getElementsByName("libelletypetelephone")[indice].value;	
	var numero = document.getElementsByName("numerotelephone")[indice].value;
	var statut = document.getElementsByName("statuttelephone")[indice].value;
	var listerouge =  document.getElementsByName("listerouge")[indice].value;


	document.getElementById("typetel").value = type + "," + libtype;
	document.getElementById("numerotel").value = numero;
	document.getElementById("statuttel").value = statut;
	
	if (listerouge == "true"){
		document.getElementById("listerouge").checked = true;
	}
	else{
		document.getElementById("listerouge").checked = false;
	}
		
	$("#btnvalidertel").hide();
	$("#btnmodifiertel").show();
	$("#detailstelephone").show();

	document.getElementById("btnmodifiertel").onclick = function () { modificationTelephone(id); };

}

/**
 * affiche les changements dans le tableau 
 * @param id
 */
function modificationTelephone(id){
	
	var classe = "";
	
	var ligne = document.getElementById(id).innerHTML;
	var test = ligne.split('TableauLignesPyjama');
	
	if (test.length == 1)
		classe = "TableauLignes";
	else	
		classe = "TableauLignesPyjama";
		
	var type = document.getElementById("typetel").value.split(',');
	var numero = document.getElementById("numerotel").value;
	var statut = document.getElementById("statuttel").value;
	var libstatut = "";
	var listerouge =  document.getElementById("listerouge").checked;
	var liblisterouge = "";
	
	if(listerouge == true){
		liblisterouge = "Oui";
	}
	else{
		liblisterouge = "Non";
	}
	
	if(statut == 1){
		libstatut = "Public";
	}
	else if(statut == 2){
		libstatut = "Confidentiel";
	}
	else{
		libstatut = "Très confidentiel";
	}
	
	if (/^[0-9]{10}$/.test(numero)) {
	
		var nouvelleligne = ' <td width="42%" class="' + classe + '">'
					    + type[1] + '<input type="hidden" name="typetelephone" value="' + type[0] + '" /><input type="hidden" name="libelletypetelephone" value="' + type[1] + '" />'
						+ '	</td>'
						+ '	<td width="20%" class="' + classe + '">'
						+ numero  + '<input type="hidden" name="numerotelephone" value="' + numero + '" />'                                                                   
						+ '	</td>'
						+ '	<td width="19%" class="' + classe + '">'
						+  libstatut  + '<input type="hidden" name="statuttelephone" value="' + statut + '" />'  
						+ '	</td>'
						+ '	<td width="13%" class="' + classe + '">'
						+ liblisterouge   + '<input type="hidden" name="listerouge" value=' + listerouge + ' />'   
						+ '	</td>'						
						+ '	<td width="3%" class="' + classe + '">'
						+ '<img src="/PagesSante/images/icone_action_modifier.png" title="Modifier" alt="Modifier" onclick="modifierTelephone(\'' + id + '\')">'    
						+ '	</td>'
						+ '	<td width="3%" class="' + classe + '">'
						+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceTelephone(\'' + id + '\')">'
						+ '	</td>';
	
	
		document.getElementById(id).innerHTML = nouvelleligne;
		
		$("#detailstelephone").hide();
		
	}else{
		alert("Numéro de téléphone non valide!");
	}
	
	cookieModification();
	 		
}

/**
 * affiche le mail dans le tableau
 */
function valideMail(){
	
	var tableau = document.getElementById("tablemail").innerHTML; 
	var nb = document.getElementsByName("mail").length;
		
	if (nb%2 == 0)
		classe = "TableauLignes";
	else	
		classe = "TableauLignesPyjama";
	
	nb = nb +1;
	
	var type = document.getElementById("typemail").value.split(',');
	var mail = document.getElementById("mail").value;
	var statut = document.getElementById("statutmail").value;
	
	if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(mail)) {
	    	
		var nouvelleligne = '<tr id="m' + nb + '">'
							+ '	<td width="40%" class="' + classe + '">'
						    + type[1] + '<input type="hidden" name="typemail" value="' + type[0] + '" /><input type="hidden" name="libelletypemail" value="' + type[1] + '" />'
							+ '	</td>'
							+ '	<td width="54%" class="' + classe + '">'
							+ mail  + '<input type="hidden" name="mail" value="' + mail + '" /><input type="hidden" name="statutmail" value="' + statut + '" />'                                                                   
							+ '	</td>'												
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_modifier.png" title="Modifier" alt="Modifier" onclick="modifierMail(\'m' + nb + '\')">'    
							+ '	</td>'
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceTelephone(\'m' + nb + '\')">'
							+ '	</td>'
							+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tablemail").innerHTML = tableau;
		
		$("#detailscourriel").hide();
	}else{
		alert("Adresse mail non valide!");
	}
	
	cookieModification();
		 
}

/**
 * affiche l'enregistrement sélectionné dans les champs de detail
 * @param id
 */
function modifierMail(id){

	var tableau = document.getElementById("tablemail").innerHTML.split('<tr id="');
	var indice = 0;	

	for (var i=0;i<tableau.length;i++){
		
		if(tableau[i].substr(0,2)==id){
			indice = i-1;
		}
	}
	
	var type = document.getElementsByName("typemail")[indice].value;
	var libtype = document.getElementsByName("libelletypemail")[indice].value;	
	var mail = document.getElementsByName("mail")[indice].value;
	var statut = document.getElementsByName("statutmail")[indice].value;

	document.getElementById("typemail").value = type + "," + libtype;
	document.getElementById("mail").value = mail;
	document.getElementById("statutmail").value = statut;
	
		
	$("#btnvalidermail").hide();
	$("#btnmodifiermail").show();
	$("#detailscourriel").show();

	document.getElementById("btnmodifiermail").onclick = function () { modificationMail(id); };

}

/**
 * affiche les modification dans le tableau
 * @param id
 */
function modificationMail(id){
	
	var classe = "";
	
	var ligne = document.getElementById(id).innerHTML;
	var test = ligne.split('TableauLignesPyjama');
	
	if (test.length == 1)
		classe = "TableauLignes";
	else	
		classe = "TableauLignesPyjama";
		
	var type = document.getElementById("typemail").value.split(',');
	var mail = document.getElementById("mail").value;
	var statut = document.getElementById("statutmail").value;
	
	if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(mail)) {
		var nouvelleligne = ' <td width="40%" class="' + classe + '">'
						    + type[1] + '<input type="hidden" name="typemail" value="' + type[0] + '" /><input type="hidden" name="libelletypemail" value="' + type[1] + '" />'
							+ '	</td>'
							+ '	<td width="54%" class="' + classe + '">'
							+ mail  + '<input type="hidden" name="mail" value="' + mail + '" /><input type="hidden" name="statutmail" value="' + statut + '" />'                                                                   
							+ '	</td>'												
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_modifier.png" title="Modifier" alt="Modifier" onclick="modifierMail(\'' + id + '\')">'    
							+ '	</td>'
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceTelephone(\'' + id + '\')">'
							+ '	</td>';
		
		
		document.getElementById(id).innerHTML = nouvelleligne;
		
		$("#detailscourriel").hide();
	}
	else{
		alert("Adresse mail non valide!");
	}
	
	cookieModification();
	 		
}


/* SUPPRESION */

function deleteAll(id){
	document.getElementById(id).innerHTML = "";
	cookieModification();
}





function ajoutIdentifiant(){
	
	var selectsystem = document.getElementById("selectsystem").value;
	var system = document.getElementsByName("system");
	var classe = "";
	var tableau = document.getElementById("tableIdentifiant").innerHTML; 
	var existe = false;
	var sys = "";
	
	var len=system.length;

    for (var i=0; i<len; ++i){
    	
        if (selectsystem == system[i].value) {
            existe = true;
        }
    }

	if (existe == true){
		alert("Il existe déjà un identifiant pour ce system.");
	}
	else{
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		sys = document.getElementById("pick_system").innerHTML;
		sys = sys.replace('id="selectsystem"','name="system"');
		
		var nouvelleligne = '<tr id="s' + selectsystem + '">'
          	+ '<td width="47%" class="' + classe + '" >'
			+ sys                                                             
			+ '</td>'
			+ '<td width="50%" class="' + classe + '" >'
			+ document.getElementById("identifiant").value + '<input type="hidden" name="identifiant" value="' + document.getElementById("identifiant").value + '" />'
			+ '</td>'
			+ '<td width="3%" class="' + classe + '">'
			+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceIdentifiant(\'s' + selectsystem + '\')">'
			+ '</td>'
			+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tableIdentifiant").innerHTML = tableau;
		
	}
	
	$("#detailidentifiant").hide();
	cookieModification();
	
}

/* CREATION D'UN GROUPE (STATIQUE) */

function enregistrerGroupe(page){
	
	var titre = trim(document.getElementById("titre").value);
	
	if (titre == ""){
		alert("Veuillez saisir un titre.");
	}
	else{
		document.cookie = 'modification=false;';			
		document.getElementById("pageretour").value = page;
		document.getElementById("retour").value = false;
		
		var active = $( "#Onglets" ).tabs( "option", "active" );
		document.getElementById("tab").value = active;
		document.formRechGest.submit();
	}
	
}

function retourCreationGroupe(){
	
	document.getElementById("ouinon").innerHTML = "<p>Désirez vous enregistrer avant de quitter ?</p>";
	
	$( "#ouinon" ).dialog({
	      modal: true,
	      dialogClass: "no-close",
	      title:"Quitter la saisie",
	      position:"center",
	      height:180,
	      width:400,
	      buttons: {
	        "Oui": function() {
	        	                	
	        	$( this ).dialog( "close" );
	        	document.getElementById("retour").value = "true";
	        	
	        	var titre = trim(document.getElementById("titre").value);
	        	
	        	if (titre == ""){
	        		alert("Veuillez saisir un titre.");
	        	}
	        	else{
	        		document.formRechGest.submit();
	        	}
	        	
	        },
	        "Non": function() {
	        		        		        	
	        	$( this ).dialog( "close" );
	        	
	        	if(document.getElementById("pageretour").value == "RechercheGroupe"){
	        		window.location = "/PagesSante"+servletPath+"/recherchegroupe";
	        	}
	        	else{
	        		window.location = "/PagesSante"+servletPath+"/groupe?idgroupe=" + document.getElementById("idgroupe").value;
	        	}
	        	
	        }
	      }
	    });
	
}

function ajouterGroupeStructure(idstructure){
	
	var groupe = document.getElementById("groupe").value.split(',');
	var existe = false;
	var archive = false;
	var libgroupe = "";
	var numarchive = 0;

	var elements = document.getElementsByName("idgroupe");
	var len=elements.length;
	var num = len +1;

    for (var i=0; i<len; ++i){
        if (elements[i].value == groupe[0]) {
            existe = true;
            numarchive = i + 1;
            var groupes = $("#g" + numarchive).html().split("(Archivé)");
            
            if(groupes.length > 1){
            	archive = true;
            	libgroupe = $("#g" + numarchive).html().split("(Archivé)")[0];            	
            }
        }
    }
	
	if (existe == true){
		if(archive == false){
			alert("Le groupe sélectionné est déjà dans la liste.");
		}
		else{
			if(confirm("Le groupe est archivé, voulez-vous l'enlever des archives?")){
				$.get('/PagesSante'+servletPath+'/groupe/supprimerarchive?idgroupe=' + groupe[0] + "&identite=" + idstructure + "&typeentite=structure");
				$("#g" + numarchive).html(libgroupe);
				$("#archive" + numarchive).val("false");
			}
		}
	}
	else{
		
		var tableau = document.getElementById("tablegroupe").innerHTML;		
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		var nouvelleligne = '<tr>'		
							+ ' <td width="30%" class="' + classe + '">'
						    + ' <span id="g' + num + '" >' +  groupe[1] + '</span><input type="hidden" name="libellegroupe" value="' + groupe[1] + '" /><input type="hidden" name="idgroupe" value="' + groupe[0] + '" /><input type="hidden" id="archive' + num + '" name="archive" value="false" />'
							+ '	</td>'
							+ '	<td width="67%" class="' + classe + '">'
							+ groupe[2]  + '<input type="hidden" name="descriptiongroupe" value="' + groupe[2] + '" />'                                                                   
							+ '	</td>'												
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="archiverAdhesionGroupeStructure("archive' + num + '","g' + num + '",' + groupe[0] + ',' + idstructure + ',"structure")">'
							+ '	</td>'
							+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tablegroupe").innerHTML = tableau;
		
	}
	
	cookieModification();
}

function ajouterGroupeSite(idsite){
	
	var groupe = document.getElementById("groupe").value.split(',');
	var existe = false;
	var archive = false;
	var libgroupe = "";
	var numarchive = 0;
	
	var elements = document.getElementsByName("idgroupe");
	var len=elements.length;
	var num = len +1;

    for (var i=0; i<len; ++i){
        if (elements[i].value == groupe[0]) {
        	existe = true;
            numarchive = i + 1;
            var groupes = $("#g" + numarchive).html().split("(Archivé)");
            
            if(groupes.length > 1){
            	archive = true;
            	libgroupe = $("#g" + numarchive).html().split("(Archivé)")[0];            	
            }
        }
    }
	
	if (existe == true){
		if(archive == false){
			alert("Le groupe sélectionné est déjà dans la liste.");
		}
		else{
			if(confirm("Le groupe est archivé, voulez-vous l'enlever des archives?")){
				$.get('/PagesSante'+servletPath+'/groupe/supprimerarchive?idgroupe=' + groupe[0] + "&identite=" + idsite + "&typeentite=site");
				$("#g" + numarchive).html(libgroupe);
				$("#archive" + numarchive).val("false");
			}
		}
	}
	else{
		
		var tableau = document.getElementById("tablegroupe").innerHTML;		
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		var nouvelleligne = '<tr>'		
							+ ' <td width="30%" class="' + classe + '">'
						    + ' <span id="g' + num + '" >' +  groupe[1] + '</span><input type="hidden" name="libellegroupe" value="' + groupe[1] + '" /><input type="hidden" name="idgroupe" value="' + groupe[0] + '" /><input type="hidden" id="archive' + num + '" name="archive" value="false" />'
							+ '	</td>'
							+ '	<td width="67%" class="' + classe + '">'
							+ groupe[2]  + '<input type="hidden" name="descriptiongroupe" value="' + groupe[2] + '" />'                                                                   
							+ '	</td>'												
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="archiverAdhesionGroupeSite("archive' + num + '","g' + num + '",' + groupe[0] + ',' + idsite + ',"site")">'
							+ '	</td>'
							+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tablegroupe").innerHTML = tableau;
		
	}
	
	cookieModification();
}


function ajouterGroupeElement(idelement){
	
	var groupe = document.getElementById("groupe").value.split(',');
	var existe = false;
	var archive = false;
	var libgroupe = "";
	var numarchive = 0;
	
	var elements = document.getElementsByName("idgroupe");
	var len=elements.length;
	var num = len +1;

    for (var i=0; i<len; ++i){
        if (elements[i].value == groupe[0]) {
        	existe = true;
            numarchive = i + 1;
            var groupes = $("#g" + numarchive).html().split("(Archivé)");
            
            if(groupes.length > 1){
            	archive = true;
            	libgroupe = $("#g" + numarchive).html().split("(Archivé)")[0];            	
            }
        }
    }
	
	if (existe == true){
		if(archive == false){
			alert("Le groupe sélectionné est déjà dans la liste.");
		}
		else{
			if(confirm("Le groupe est archivé, voulez-vous l'enlever des archives?")){
				$.get('/PagesSante'+servletPath+'/groupe/supprimerarchive?idgroupe=' + groupe[0] + "&identite=" + idelement + "&typeentite=element");
				$("#g" + numarchive).html(libgroupe);
				$("#archive" + numarchive).val("false");
			}
		}
	}
	else{
		
		var tableau = document.getElementById("tablegroupe").innerHTML;		
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		var nouvelleligne = '<tr>'		
							+ ' <td width="30%" class="' + classe + '">'
						    + ' <span id="g' + num + '" >' +  groupe[1] + '</span><input type="hidden" name="libellegroupe" value="' + groupe[1] + '" /><input type="hidden" name="idgroupe" value="' + groupe[0] + '" /><input type="hidden" id="archive' + num + '" name="archive" value="false" />'
							+ '	</td>'
							+ '	<td width="67%" class="' + classe + '">'
							+ groupe[2]  + '<input type="hidden" name="descriptiongroupe" value="' + groupe[2] + '" />'                                                                   
							+ '	</td>'												
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="archiverAdhesionGroupeElement("archive' + num + '","g' + num + '",' + groupe[0] + ',' + idelement + ',"element")">'
							+ '	</td>'
							+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tablegroupe").innerHTML = tableau;
		
	}
	
	cookieModification();
}


function ajouterGroupeFonction(idfonction){
	
	var groupe = document.getElementById("groupe").value.split(',');
	var existe = false;
	var archive = false;
	var libgroupe = "";
	var numarchive = 0;
	
	var elements = document.getElementsByName("idgroupe");
	var len=elements.length;
	var num = len +1;

    for (var i=0; i<len; ++i){
        if (elements[i].value == groupe[0]) {
        	existe = true;
            numarchive = i + 1;
            var groupes = $("#g" + numarchive).html().split("(Archivé)");
            
            if(groupes.length > 1){
            	archive = true;
            	libgroupe = $("#g" + numarchive).html().split("(Archivé)")[0];            	
            }
        }
    }
	
	if (existe == true){
		if(archive == false){
			alert("Le groupe sélectionné est déjà dans la liste.");
		}
		else{
			if(confirm("Le groupe est archivé, voulez-vous l'enlever des archives?")){
				$.get('/PagesSante'+servletPath+'/groupe/supprimerarchive?idgroupe=' + groupe[0] + "&identite=" + idfonction + "&typeentite=fonction");
				$("#g" + numarchive).html(libgroupe);
				$("#archive" + numarchive).val("false");
			}
		}
	}
	else{
		
		var tableau = document.getElementById("tablegroupe").innerHTML;		
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		var nouvelleligne = '<tr>'		
							+ ' <td width="30%" class="' + classe + '">'
						    + ' <span id="g' + num + '" >' +  groupe[1] + '</span><input type="hidden" name="libellegroupe" value="' + groupe[1] + '" /><input type="hidden" name="idgroupe" value="' + groupe[0] + '" /><input type="hidden" id="archive' + num + '" name="archive" value="false" />'
							+ '	</td>'
							+ '	<td width="67%" class="' + classe + '">'
							+ groupe[2]  + '<input type="hidden" name="descriptiongroupe" value="' + groupe[2] + '" />'                                                                   
							+ '	</td>'												
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="archiverAdhesionGroupeFonction("archive' + num + '","g' + num + '",' + groupe[0] + ',' + idfonction + ',"fonction")">'
							+ '	</td>'
							+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tablegroupe").innerHTML = tableau;
		
	}
	
	cookieModification();
}


function ajouterGroupePersonne(idpersonne){
	
	var groupe = document.getElementById("groupe").value.split(',');
	var existe = false;
	var archive = false;
	var libgroupe = "";
	var numarchive = 0;
	
	var elements = document.getElementsByName("idgroupe");
	var len=elements.length;
	var num = len +1;

    for (var i=0; i<len; ++i){
        if (elements[i].value == groupe[0]) {
        	existe = true;
            numarchive = i + 1;
            var groupes = $("#g" + numarchive).html().split("(Archivé)");
            
            if(groupes.length > 1){
            	archive = true;
            	libgroupe = $("#g" + numarchive).html().split("(Archivé)")[0];            	
            }
        }
    }
	
	if (existe == true){
		if(archive == false){
			alert("Le groupe sélectionné est déjà dans la liste.");
		}
		else{
			if(confirm("Le groupe est archivé, voulez-vous l'enlever des archives?")){
				$.get('/PagesSante'+servletPath+'/groupe/supprimerarchive?idgroupe=' + groupe[0] + "&identite=" + idpersonne + "&typeentite=personne");
				$("#g" + numarchive).html(libgroupe);
				$("#archive" + numarchive).val("false");
			}
		}
	}
	else{
		
		var tableau = document.getElementById("tablegroupe").innerHTML;		
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		var nouvelleligne = '<tr>'		
							+ ' <td width="30%" class="' + classe + '">'
						    + ' <span id="g' + num + '" >' +  groupe[1] + '</span><input type="hidden" name="libellegroupe" value="' + groupe[1] + '" /><input type="hidden" name="idgroupe" value="' + groupe[0] + '" /><input type="hidden" id="archive' + num + '" name="archive" value="false" />'
							+ '	</td>'
							+ '	<td width="67%" class="' + classe + '">'
							+ groupe[2]  + '<input type="hidden" name="descriptiongroupe" value="' + groupe[2] + '" />'                                                                   
							+ '	</td>'												
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="archiverAdhesionGroupePersonne("archive' + num + '","g' + num + '",' + groupe[0] + ',' + idpersonne + ',"personne")">'
							+ '	</td>'
							+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tablegroupe").innerHTML = tableau;
		
	}
	
	cookieModification();
}

/* CREATION D'UNE STRUCTURE */

function enregistrerStructure(page, idprofil){
		
	var raisonsociale = "";
	var dateouverture = "";
	var typeadresse = document.getElementsByName("typeadresse");
	var existeadr = false;
	
	if( typeadresse != null){
		for(var i = 0; i < typeadresse.length; i++){
			if(typeadresse[i].value == 1){
				existeadr = true;
			}
		}	
	}
	
	raisonsociale = trim(document.getElementById("raisonsociale").value);
	dateouverture = document.getElementById("datepickerouverture").value;
	datefermeture = trim(document.getElementById("datepickerfermeture").value);
	
	if(existeadr == false){
		alert("Veuillez saisir une adresse publique.");
		$( "#Onglets" ).tabs("option","active","1");
	}
	else if(raisonsociale == ""){
		alert("Veuillez entrer une raison sociale.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(dateouverture == ""){

		$( "#Onglets" ).tabs("option","active","0");
		alert("Veuillez entrer une date d'ouverture");
	}
	else{
	
		var reg=new RegExp(regexpdate,"g");
		var reg2=new RegExp(regexpdate,"g");

		if (!reg.test(dateouverture)){
			alert("Le format de la date d'ouverture n'est pas valide.");
			$( "#Onglets" ).tabs("option","active","0");
		}
		else if (datefermeture != "" && !reg2.test(datefermeture)){
			alert("Le format de la date de fermeture n'est pas valide.");
			$( "#Onglets" ).tabs("option","active","0");
		}
		else{
			
			if(idprofil == 5){
							
				$.ajax({
			        url: "/PagesSante"+servletPath+"/structure/presencegroupears", // le nom du fichier indiqué dans le formulaire
			        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
			        data: $("form[name^='formEnrStruc']").serialize(),
			        dataType: 'json',
			        success: function(json) { // je récupère la réponse du fichier PHP
			         	
						//si la réponse est pas OK
			            if(json.reponse == 'OK') {
							
			            	document.cookie = 'modification=false;';			
							document.getElementById("page").value = page;
							document.getElementById("retour").value = false;
							
							var active = $( "#Onglets" ).tabs( "option", "active" );
							document.getElementById("tab").value = active;
					
							document.formEnrStruc.submit();
			                
			            } else {

			            	$( "#ouinon" ).html(json.reponse);
			            	
			            	$( "#ouinon" ).dialog({
			      		      modal: true,
			      		      dialogClass: "no-close",
			      		      title:"Quitter la saisie",
			      		      position:"center",
			      		      height:180,
			      		      width:400,
			      		      buttons: {
			      		        "Oui": function() {
			      		        	
			      		        	document.cookie = 'modification=false;';			
			      					document.getElementById("page").value = page;
			      					document.getElementById("retour").value = false;
			      					
			      					var active = $( "#Onglets" ).tabs( "option", "active" );
			      					document.getElementById("tab").value = active;
			      			
			      					document.formEnrStruc.submit();
			      					
			      		        	$( this ).dialog( "close" );
			      		        },
			      		        "Non": function() {
			      		        				      		        				      		        	
			      		        	$( this ).dialog( "close" );
			      		        	
			      		        }
			      		      }
			      		    });
			            	
			            }
			        }
			    });
				
			}
			else{
			
				document.cookie = 'modification=false;';			
				document.getElementById("page").value = page;
				document.getElementById("retour").value = false;
				
				var active = $( "#Onglets" ).tabs( "option", "active" );
				document.getElementById("tab").value = active;
		
				document.formEnrStruc.submit();
			
			}
		}
	}
	
}


function retourCreationStructure(page, idprofil){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true"){
	
		document.getElementById("ouinon").innerHTML = "<p>Désirez vous enregistrer avant de quitter ?</p>";
		document.getElementById("page").value = page;
		document.getElementById("retour").value = true;
		
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var raisonsociale = "";
		        	var dateouverture = "";
		        	var typeadresse = document.getElementsByName("typeadresse");
		        	var existeadr = false;
		        	
		        	if( typeadresse != null){
		        		for(var i = 0; i < typeadresse.length; i++){
		        			if(typeadresse[i].value == 1){
		        				existeadr = true;
		        			}
		        		}	
		        	}
		        	
		        	raisonsociale = trim(document.getElementById("raisonsociale").value);
		        	dateouverture = trim(document.getElementById("datepickerouverture").value);
		        	datefermeture = trim(document.getElementById("datepickerfermeture").value);
		        	
		        	if(existeadr == false){
		        		alert("Veuillez saisir une adresse publique.");
		        		$( "#Onglets" ).tabs("option","active","1");
		        	}
		        	else if(raisonsociale == ""){
		        		alert("Veuillez entrer une raison sociale.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(dateouverture == ""){
		        		alert("Veuillez entrer une date d'ouverture");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else{
		        	
		        		var reg=new RegExp(regexpdate,"g");
		        		var reg2=new RegExp(regexpdate,"g");
		        		
		        		if (!reg.test(dateouverture)){
		        			alert("Le format de la date d'ouverture n'est pas valide.");
		        			$( "#Onglets" ).tabs("option","active","0");
		        		}
		        		else if (datefermeture != "" && !reg2.test(datefermeture)){
		        			alert("Le format de la date de fermeture n'est pas valide.");
		        			$( "#Onglets" ).tabs("option","active","0");
		        		}
		        		else{
		        			
		        			if(idprofil == 5){
								
		        				$.ajax({
		        			        url: "/PagesSante"+servletPath+"/structure/presencegroupears", // le nom du fichier indiqué dans le formulaire
		        			        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
		        			        data: $("form[name^='formEnrStruc']").serialize(),
		        			        dataType: 'json',
		        			        success: function(json) { // je récupère la réponse du fichier PHP
		        			         	
		        						//si la réponse est pas OK
		        			            if(json.reponse == 'OK') {
		        							
		        			            	document.getElementById("enregistrer").value = true;
		        	        				document.formEnrStruc.submit();
		        			                
		        			            } else {

		        			            	$( "#ouinon" ).html(json.reponse);
		        			            	
		        			            	$( "#ouinon" ).dialog({
		        			      		      modal: true,
		        			      		      dialogClass: "no-close",
		        			      		      title:"Quitter la saisie",
		        			      		      position:"center",
		        			      		      height:180,
		        			      		      width:400,
		        			      		      buttons: {
		        			      		        "Oui": function() {
		        			      		        	
		        			      		        	document.getElementById("enregistrer").value = true;
		        			        				document.formEnrStruc.submit();
		        			      					
		        			      		        	$( this ).dialog( "close" );
		        			      		        },
		        			      		        "Non": function() {
		        			      		        				      		        				      		        	
		        			      		        	$( this ).dialog( "close" );
		        			      		        	
		        			      		        }
		        			      		      }
		        			      		    });
		        			            	
		        			            }
		        			        }
		        			    });
		        				
		        			}
		        			else{
		        				document.getElementById("enregistrer").value = true;
		        				document.formEnrStruc.submit();
		        			}
		        			
		        		}
		        	}
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        	
		        	
		        	document.getElementById("enregistrer").value = false;
		        	document.formEnrStruc.submit();
		        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		document.getElementById("page").value = page;
		document.getElementById("retour").value = true;
		document.getElementById("enregistrer").value = false;
    	document.formEnrStruc.submit();
	}
	
	
}

function ajouterEntiteGeographique(){
	
	var cookie = getCookie("modification");
	document.getElementById("entiteacreer").value = "site";
	
	if (cookie == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous allez quitter la structure.</p><p>Pour continuer vous devez enregistrer la structure.</p><p>Voulez-vous continuer ?</p>";
		
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	document.getElementById("page").value = "CreationStructure";
		    		document.formEnrStruc.submit();
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
		
	}
	else{
		document.getElementById("page").value = "CreationStructure";
		document.formCreerSite.submit();
	}
	
}



/* CREATION D'UN SITE */

function enregistrerSite(page, idprofil){
	
	var raisonsociale = "";
	var dateouverture = "";
	var datefermeture = "";
	var ej			  = "";
	
	raisonsociale 	= trim(document.getElementById("raisonsociale").value);
	dateouverture 	= trim(document.getElementById("datepickerouverture").value);
	datefermeture 	= trim(document.getElementById("datepickerfermeture").value);
	ej 				= trim(document.getElementsByName("ej")[0].value);
	
	if(raisonsociale == ""){
		alert("Veuillez entrer une raison sociale.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(dateouverture == ""){
		alert("Veuillez entrer une date d'ouverture");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(ej == "" || ej == "0"){
		alert("Veuillez sélectionner une structure de rattachement.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else{
	
		var reg=new RegExp(regexpdate,"g");
		var reg2=new RegExp(regexpdate,"g");
		
		if (!reg.test(dateouverture)){
			alert("Le format de la date d'ouverture n'est pas valide.");
			$( "#Onglets" ).tabs("option","active","0");
		}
		else if (datefermeture != "" && !reg2.test(datefermeture)){
			alert("Le format de la date de fermeture n'est pas valide.");
			$( "#Onglets" ).tabs("option","active","0");
		}
		else{
		

			if(idprofil == 5){
				
				$.ajax({
			        url: "/PagesSante"+servletPath+"/site/presencegroupears", // le nom du fichier indiqué dans le formulaire
			        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
			        data: $("form[name^='formEnrSite']").serialize(),
			        dataType: 'json',
			        success: function(json) { // je récupère la réponse du fichier PHP
			         	
						//si la réponse est pas OK
			            if(json.reponse == 'OK') {
							
			            	document.cookie = 'modification=false;';			
			    			document.getElementById("page").value = page;
			    			document.getElementById("retour").value = false;
			    			
			    			var active = $( "#Onglets" ).tabs( "option", "active" );
			    			document.getElementById("tab").value = active;
			    			
			    			document.formEnrSite.submit();
			                
			            } else {

			            	$( "#ouinon" ).html(json.reponse);
			            	
			            	$( "#ouinon" ).dialog({
			      		      modal: true,
			      		      dialogClass: "no-close",
			      		      title:"Quitter la saisie",
			      		      position:"center",
			      		      height:180,
			      		      width:400,
			      		      buttons: {
			      		        "Oui": function() {
			      		        	
			      		        	document.cookie = 'modification=false;';			
			      					document.getElementById("page").value = page;
			      					document.getElementById("retour").value = false;
			      					
			      					var active = $( "#Onglets" ).tabs( "option", "active" );
			      					document.getElementById("tab").value = active;
			      					
			      					document.formEnrSite.submit();
			      					
			      		        	$( this ).dialog( "close" );
			      		        },
			      		        "Non": function() {
			      		        				      		        				      		        	
			      		        	$( this ).dialog( "close" );
			      		        	
			      		        }
			      		      }
			      		    });
			            	
			            }
			        }
			    });
				
			}
			else{
				
				document.cookie = 'modification=false;';			
				document.getElementById("page").value = page;
				document.getElementById("retour").value = false;
				
				var active = $( "#Onglets" ).tabs( "option", "active" );
				document.getElementById("tab").value = active;
				
				document.formEnrSite.submit();
				
			}
		}
	}
		
}


function retourCreationSite(page, idprofil){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true"){
	
		document.getElementById("ouinon").innerHTML = "<p>Désirez vous enregistrer avant de quitter ?</p>";
		document.getElementById("page").value = page;
		document.getElementById("retour").value = true;
		
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var raisonsociale = "";
		        	var dateouverture = "";
		        	var datefermeture = "";
		        	var ej			  = "";
		        	
		        	raisonsociale 	= trim(document.getElementById("raisonsociale").value);
		        	dateouverture 	= trim(document.getElementById("datepickerouverture").value);
		        	datefermeture 	= trim(document.getElementById("datepickerfermeture").value);
		        	ej 				= trim(document.getElementById("ej").value);
		        	
		        	if(raisonsociale == ""){
		        		alert("Veuillez entrer une raison sociale.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(dateouverture == ""){
		        		alert("Veuillez entrer une date d'ouverture");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(ej == "" || ej == "0"){
		        		alert("Veuillez sélectionner une structure de rattachement.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else{
		        	
		        		var reg=new RegExp(regexpdate,"g");
		        		var reg2=new RegExp(regexpdate,"g");
		        		
		        		if (!reg.test(dateouverture)){
		        			alert("Le format de la date d'ouverture n'est pas valide.");
		        			$( "#Onglets" ).tabs("option","active","0");
		        		}
		        		else if (datefermeture != "" && !reg2.test(datefermeture)){
		        			alert("Le format de la date de fermeture n'est pas valide.");
		        			$( "#Onglets" ).tabs("option","active","0");
		        		}
		        		else{
		        			
		        			if(idprofil == 5){
		        			
		        				$.ajax({
			    			        url: "/PagesSante"+servletPath+"/site/presencegroupears", // le nom du fichier indiqué dans le formulaire
			    			        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
			    			        data: $("form[name^='formEnrSite']").serialize(),
			    			        dataType: 'json',
			    			        success: function(json) { // je récupère la réponse du fichier PHP
			    			         	
			    						//si la réponse est pas OK
			    			            if(json.reponse == 'OK') {
			    							
			    			            	document.getElementById("enregistrer").value = true;
			    		        			document.formEnrSite.submit();
			    			                
			    			            } else {
	
			    			            	$( "#ouinon" ).html(json.reponse);
			    			            	
			    			            	$( "#ouinon" ).dialog({
			    			      		      modal: true,
			    			      		      dialogClass: "no-close",
			    			      		      title:"Quitter la saisie",
			    			      		      position:"center",
			    			      		      height:180,
			    			      		      width:400,
			    			      		      buttons: {
			    			      		        "Oui": function() {
			    			      		        	
			    			      		        	document.getElementById("enregistrer").value = true;
			    				        			document.formEnrSite.submit();
			    			      					
			    			      		        	$( this ).dialog( "close" );
			    			      		        },
			    			      		        "Non": function() {
			    			      		        				      		        				      		        	
			    			      		        	$( this ).dialog( "close" );
			    			      		        	
			    			      		        }
			    			      		      }
			    			      		    });
			    			            	
			    			            }
			    			        }
			    			    });
		    				
			    			}
			    			else{
			        			document.getElementById("enregistrer").value = true;
			        			document.formEnrSite.submit();
			    			}
		        		}
		    			
		        	}
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        	
		        	
		        	document.getElementById("enregistrer").value = false;
		        	document.formEnrSite.submit();
		        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		document.getElementById("page").value = page;
		document.getElementById("retour").value = true;
		document.getElementById("enregistrer").value = false;
    	document.formEnrSite.submit();
	}
	
	
}

function ajouterElement(typeentiterattachment){
	
	var cookie = getCookie("modification");
	document.getElementById("entiteacreer").value = "element";
	
	if (cookie == "true"){
		
		if (typeentiterattachment == "structure"){
			document.getElementById("ouinon").innerHTML = "<p>Vous allez quitter la structure.</p><p>Pour continuer vous devez enregistrer la structure.</p><p>Voulez-vous continuer ?</p>";
		}
		else if (typeentiterattachment == "site"){
			document.getElementById("ouinon").innerHTML = "<p>Vous allez quitter le site.</p><p>Pour continuer vous devez enregistrer le site.</p><p>Voulez-vous continuer ?</p>";
		}
		else if (typeentiterattachment == "element"){
			document.getElementById("ouinon").innerHTML = "<p>Vous allez quitter l'élément.</p><p>Pour continuer vous devez enregistrer l'élément.</p><p>Voulez-vous continuer ?</p>";
		}
		
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	if (typeentiterattachment == "structure"){
		        		
		        		document.getElementById("page").value = "CreationStructure";
			    		document.formEnrStruc.submit();
		        		
		        	}
		        	else if (typeentiterattachment == "site"){
		        		
		        		document.getElementById("page").value = "CreationSite";
			    		document.formEnrSite.submit();
		        		
		        	}
	        		else if (typeentiterattachment == "element"){
		        		
		        		document.getElementById("page").value = "CreationElement";
			    		document.formEnrElement.submit();
		        		
		        	}
		        	
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
		
	}
	else{
		
		if (typeentiterattachment == "structure"){
    		
    		document.getElementById("page").value = "CreationStructure";
    		document.formCreerElement.submit();
    		
		}
		else if (typeentiterattachment == "site"){
    		
    		document.getElementById("page").value = "CreationSite";
    		document.formCreerElement.submit();
    		
		}
		else if (typeentiterattachment == "element"){
    		
    		document.getElementById("page").value = "CreationElement";
    		document.formCreerElement.submit();
    		
		}

	}
	
	
} 


/* CREATION D'UN ELEMENT */

function ajouterPatientele(){
	
	var patientele = document.getElementById("selectpatientele").value.split('|');
	var existe = false;

	var elements = document.getElementsByName("patientele");
	var len = elements.length;
	
    for (var i=0; i<len; ++i){
        if (elements[i].value == patientele[0]) {
            existe = true;
        }
    }
	
	if (existe == true){
		alert("Cette patientèle est déjà présente, veuillez sélectionner une autre patientèle.");
	}
	else{
		
		var tableau = document.getElementById("tableaupatientele").innerHTML;		
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		var nouvelleligne = '<tr id="p' + patientele[0] + '">'		
							+ ' <td width="97%" class="' + classe + '">'
						    + patientele[1] + '<input type="hidden" name="patientele" value="' + patientele[0] + '" />'
							+ '	</td>'												
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effacePatientele(\'p' + patientele[0] + '\')">'
							+ '	</td>'
							+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tableaupatientele").innerHTML = tableau;
		
		$("#detailspatientele").hide();
		
	}
	
	cookieModification();
}

function ajoutEquipement(){
	
	var idequipement = document.getElementById("equipement").value;
	var descequipement = document.getElementById("descequipement").value;
	var libequipement = document.getElementById("libelleequipement").value;
	var actif = document.getElementById("actif").checked;
	var num = document.getElementsByName("equipement").length;
	
	var tableau = document.getElementById("tableequipements").innerHTML;		
		
	if (actif == true)
		classe = "TableauLignesOuvert";
	else	
		classe = "TableauLignesFerme";
	
	num = num +1;
	while (document.getElementById('e' + num) != null){
		num = num +1;
	}
	
	var nouvelleligne = '<tr id="e' + num + '">'		
						+ ' <td width="48%" class="' + classe + '">'
					    + descequipement + '<input type="hidden" name="equipement" value="' + idequipement + '" /><input type="hidden" name="descequipement" value="' + descequipement + '" /><input type="hidden" name="actifequip" value="' + actif + '" />'
						+ '	</td>'
						+ ' <td width="49%" class="' + classe + '">'
					    + libequipement + '<input type="hidden" name="libequipement" value="' + libequipement + '" />'
						+ '	</td>'	
						+ '	<td width="3%" class="' + classe + '">'
						+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceEquipement(\'e' + num + '\')">'
						+ '	</td>'
						+ '</tr></tbody>';
	
	tableau = tableau.replace("</tbody>",nouvelleligne);
	tableau = tableau.replace("</TBODY>",nouvelleligne);
	
	document.getElementById("tableequipements").innerHTML = tableau;

	cookieModification();
	
}

function ajouterOffresSoins(){
	
	var offre = trim(document.getElementById("offresoins").value);

	if (offre != null && offre != ""){
		var descoffre = document.getElementById("descoffresoins").value;
		var disponibilite = document.getElementById("disponibilite").checked;
		
		var typeequipement = document.getElementsByName("equipement");
		var libequipement = document.getElementsByName("libequipement");
		var actifequip = document.getElementsByName("actifequip");
		var descequipement = document.getElementsByName("descequipement");
		
		var tableau = document.getElementById("tableauoffre").innerHTML;		
		
		var elements = document.getElementsByName("offressoins");
		var len = elements.length;
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		var nouvelleligne = '<tr id="o' + offre + '">'		
							+ ' <td width="84%" class="' + classe + '">'
						    + descoffre + '<input type="hidden" name="offressoins" value="' + offre + '" /><input type="hidden" name="nbequipement" value="' + typeequipement.length + '" /><input type="hidden" name="disponibiliteoffresoins" value="' + disponibilite + '" /><input type="hidden" name="description_offressoins" value="' + descoffre + '" />';
		
		for (var i = 0; i < typeequipement.length; i++){
			
			nouvelleligne = nouvelleligne 	+ '<input type="hidden" name="equipementoffresoins" value="' + typeequipement[i].value + '" /><input type="hidden" name="libequipementoffresoins" value="' + libequipement[i].value + '" /><input type="hidden" name="actifequipement" value="' + actifequip[i].value + '" /><input type="hidden" name="descriptionequipement" value="' + descequipement[i].value + '" />';
			
		}
		
						    
		nouvelleligne = nouvelleligne 	+ '	</td>'
										+ ' <td width="10%" class="' + classe + '">'
									    + 'Oui' + '<input type="hidden" name="definie" value="true" />'
										+ '	</td>'	
										+ '	<td width="3%" class="' + classe + '">'
										+ '<img src="/PagesSante/images/icone_action_modifier.png" title="Modifier" alt="Modifier" onclick="modifierOffreSoins(\'o' + offre + '\')">'
										+ '	</td>'
										+ '	<td width="3%" class="' + classe + '">'
										+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceOffreSoins(\'o' + offre + '\')">'
										+ '	</td>'
										+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tableauoffre").innerHTML = tableau;
		$("#detailsoffre").hide();
		
		cookieModification();
	}
	else{
		alert("Veuillez sélectionner une offre de soins.");
	}
}

function ajoutpatientele(){
	$("#detailspatientele").show();
}

function ajoutoffre(){
	$("#btnajoutoffre").show();
	$("#btnmodifoffre").hide();
	$("#detailsoffre").show();
	$("#pick_offres").html("<input id='offresoins' type='hidden' value='' />");
	$(".tableauEquipement tbody").html("");
}

function modifierOffreSoins(id){
	
	var tableau = document.getElementById("tableauoffre").innerHTML.split('<tr id="');
	var indice = 0;	
	var j = 0;
	var totequipement = 0;
	var equipementoffresoins = new Array;
	var libequipementoffresoins = new Array;
	var actifequipement = new Array;
	var descequipement = new Array;
	
	for (var i=0;i<tableau.length;i++){
		if(tableau[i].substr(0,id.length)==id){
			indice = i-1;
		}
	}

	var offressoins = document.getElementsByName("offressoins")[indice].value;
	var description_offressoins = document.getElementsByName("description_offressoins")[indice].value;	
	var disponibiliteoffresoins = document.getElementsByName("disponibiliteoffresoins")[indice].value;
	
	for (var i=0;i<indice;i++){
		totequipement = totequipement + parseInt(document.getElementsByName("nbequipement")[i].value);
	}
	
	var max = parseInt(document.getElementsByName("nbequipement")[indice].value) + totequipement;
	
	for (var i=totequipement;i< max ;i++){

			if(document.getElementsByName("equipementoffresoins").length - totequipement > 0){

				equipementoffresoins[j] = document.getElementsByName("equipementoffresoins")[i].value;
				libequipementoffresoins[j] = document.getElementsByName("libequipementoffresoins")[i].value;
				actifequipement[j] = document.getElementsByName("actifequipement")[i].value;
				descequipement[j] = document.getElementsByName("descriptionequipement")[i].value;
					
				j = j + 1;
			}
	}
	
	document.getElementById("pick_offres").innerHTML = '<input type="hidden" id="offresoins" value="' + offressoins + '" /><input type="hidden" id="descoffresoins" value="' + description_offressoins + '" />' + description_offressoins;
	document.getElementById("disponibilite").checked = disponibiliteoffresoins;
	
	var tableau = document.getElementById("tableequipements").innerHTML;
	var nouvelleligne = "";
	
	for (var i = 0;i<equipementoffresoins.length;i++){
			
		
		if (actifequipement[i] == "true")
			classe = "TableauLignesOuvert";
		else	
			classe = "TableauLignesFerme";
		
		var num = i +1;
		
		nouvelleligne = nouvelleligne + '<tr id="e' + num + '">'		
							+ ' <td width="48%" class="' + classe + '">'
						    + descequipement[i] + '<input type="hidden" name="equipement" value="' + equipementoffresoins[i] + '" /><input type="hidden" name="descequipement" value="' + descequipement[i] + '" /><input type="hidden" name="actifequip" value="' + actifequipement[i] + '" />'
							+ '	</td>'
							+ ' <td width="49%" class="' + classe + '">'
						    + libequipementoffresoins[i] + '<input type="hidden" name="libequipement" value="' + libequipementoffresoins[i] + '" />'
							+ '	</td>'	
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceEquipement(\'e' + num + '\')">'
							+ '	</td>'
							+ '</tr>';
		
	}
		
	nouvelleligne = nouvelleligne + "</tbody>";
	
	tableauvide = tableau.split("<tbody>");
	if (tableauvide.length <= 1 ){
		tableauvide = tableau.split("<TBODY>");
	}

	tableau = tableauvide[0] + "<tbody></tbody>";
	
	tableau = tableau.replace("</tbody>",nouvelleligne);
	tableau = tableau.replace("</TBODY>",nouvelleligne);
	
	document.getElementById("tableequipements").innerHTML = tableau;
	
	
	$("#btnajoutoffre").hide();
	$("#btnmodifoffre").show();
	$("#detailsoffre").show();

	document.getElementById("btnmodifoffre").onclick = function () { modificationOffreSoins(id); };
	
}

function modificationOffreSoins(id){
	
	var classe = "";		
	var ligne = document.getElementById(id).innerHTML;
	var test = ligne.split('TableauLignesPyjama');
	
	if (test.length == 1)
		classe = "TableauLignes";
	else	
		classe = "TableauLignesPyjama";

	var offre = trim(document.getElementById("offresoins").value);
	
	if (offre != null && offre != ""){
		var descoffre = document.getElementById("descoffresoins").value;
		var disponibilite = document.getElementById("disponibilite").checked;
		
		var typeequipement = document.getElementsByName("equipement");
		var libequipement = document.getElementsByName("libequipement");
		var actifequip = document.getElementsByName("actifequip");
		var descequipement = document.getElementsByName("descequipement");
			
		var nouvelleligne = '<td width="84%" class="' + classe + '">'
						    + descoffre + '<input type="hidden" name="offressoins" value="' + offre + '" /><input type="hidden" name="nbequipement" value="' + typeequipement.length + '" /><input type="hidden" name="disponibiliteoffresoins" value="' + disponibilite + '" /><input type="hidden" name="description_offressoins" value="' + descoffre + '" />';
		
		for (var i = 0; i < typeequipement.length; i++){
			
			nouvelleligne = nouvelleligne 	+ '<input type="hidden" name="equipementoffresoins" value="' + typeequipement[i].value + '" /><input type="hidden" name="libequipementoffresoins" value="' + libequipement[i].value + '" /><input type="hidden" name="actifequipement" value="' + actifequip[i].value + '" /><input type="hidden" name="descriptionequipement" value="' + descequipement[i].value + '" />';
			
		}
		
						    
		nouvelleligne = nouvelleligne 	+ '	</td>'
										+ ' <td width="10%" class="' + classe + '">'
									    + 'Oui' + '<input type="hidden" name="definie" value="true" />'
										+ '	</td>'	
										+ '	<td width="3%" class="' + classe + '">'
										+ '<img src="/PagesSante/images/icone_action_modifier.png" title="Modifier" alt="Modifier" onclick="modifierOffreSoins(\'o' + offre + '\')">'
										+ '	</td>'
										+ '	<td width="3%" class="' + classe + '">'
										+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceOffreSoins(\'o' + offre + '\')">'
										+ '	</td>';
		

		$("#" + id).html(nouvelleligne);
		document.getElementById("btnmodifoffre").onclick = function () { modificationOffreSoins(id); };

		$("#detailsoffre").hide();
		
		 cookieModification();
	}
	else{
		alert("Veuillez sélectionner une offre de soins.");
	}
	
}

function retourCreationElement(page, idprofil){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true"){
	
		document.getElementById("ouinon").innerHTML = "<p>Désirez vous enregistrer avant de quitter ?</p>";
		document.getElementById("page").value = page;
		document.getElementById("retour").value = true;
		
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var libelle = "";
		        	var dateouverture = "";
		        	var structure = "";
		        	var site = "";
		        	var element = "";
		        	
		        	if( document.getElementsByName("ej").length != 0){
		        		structure = document.getElementsByName("ej")[0].value;
		        	}
		        	
		        	if(document.getElementsByName("eg").length != 0){
		        		site = document.getElementsByName("eg")[0].value;
		        	}
		        	
		        	if(document.getElementsByName("element").length != 0){
		        		element = document.getElementsByName("element")[0].value;
		        	}
		        	
		        	libelle = trim(document.getElementById("libelle").value);
		        	dateouverture = trim(document.getElementById("datepickerouverture").value);
		        	datefermeture = trim(document.getElementById("datepickerfermeture").value);
		        	
		        	if(structure == "" && site == "" && element == ""){
		        		alert("Veuillez selectionner une entité de rattachement.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(structure != "" && (site != "" || element != "")){
		        		alert("Veuillez selectionner une seule entité de rattachement.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(libelle == ""){
		        		alert("Veuillez entrer un libellé.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(dateouverture == ""){
		        		alert("Veuillez entrer une date de début");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else{
		        	
		        		var reg=new RegExp(regexpdate,"g");
		        		var reg2=new RegExp(regexpdate,"g");
		        		
		        		if (!reg.test(dateouverture)){
		        			alert("Le format de la date de début n'est pas valide.");
		        			$( "#Onglets" ).tabs("option","active","0");
		        		}
		        		else if (datefermeture != "" && !reg2.test(datefermeture)){
		        			alert("Le format de la date de fin n'est pas valide.");
		        			$( "#Onglets" ).tabs("option","active","0");
		        		}
		        		else{
	        				
		        			if(idprofil == 5){
			        			
		        				$.ajax({
			    			        url: "/PagesSante"+servletPath+"/site/presencegroupears", // le nom du fichier indiqué dans le formulaire
			    			        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
			    			        data: $("form[name^='formEnrElement']").serialize(),
			    			        dataType: 'json',
			    			        success: function(json) { // je récupère la réponse du fichier PHP
			    			         	
			    						//si la réponse est pas OK
			    			            if(json.reponse == 'OK') {
			    							
			    			            	document.getElementById("enregistrer").value = true;
					        				document.formEnrElement.submit();
			    			                
			    			            } else {
	
			    			            	$( "#ouinon" ).html(json.reponse);
			    			            	
			    			            	$( "#ouinon" ).dialog({
			    			      		      modal: true,
			    			      		      dialogClass: "no-close",
			    			      		      title:"Quitter la saisie",
			    			      		      position:"center",
			    			      		      height:180,
			    			      		      width:400,
			    			      		      buttons: {
			    			      		        "Oui": function() {
			    			      		        	
			    			      		        	document.getElementById("enregistrer").value = true;
			    			        				document.formEnrElement.submit();
			    			      					
			    			      		        	$( this ).dialog( "close" );
			    			      		        },
			    			      		        "Non": function() {
			    			      		        				      		        				      		        	
			    			      		        	$( this ).dialog( "close" );
			    			      		        	
			    			      		        }
			    			      		      }
			    			      		    });
			    			            	
			    			            }
			    			        }
			    			    });
		    				
			    			}
		        			else{
			        			document.getElementById("enregistrer").value = true;
		        				document.formEnrElement.submit();
		        			}
		        		}
		        	}
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        	
		        	
		        	document.getElementById("enregistrer").value = false;
		        	document.formEnrElement.submit();
		        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		document.getElementById("page").value = page;
		document.getElementById("retour").value = true;
		document.getElementById("enregistrer").value = false;
    	document.formEnrElement.submit();
	}
	
	
}


function enregistrerElement(page, idprofil){
	
	
	var libelle = "";
	var dateouverture = "";
	var structure = "";
	var site = "";
	var element = "";

	if( document.getElementsByName("ej").length != 0){
		structure = document.getElementsByName("ej")[0].value;
	}
	
	if(document.getElementsByName("eg").length != 0){
		site = document.getElementsByName("eg")[0].value;
	}
	
	if(document.getElementsByName("element").length != 0){
		element = document.getElementsByName("element")[0].value;
	}
	
	libelle = trim(document.getElementById("libelle").value);
	dateouverture = trim(document.getElementById("datepickerouverture").value);
	datefermeture = trim(document.getElementById("datepickerfermeture").value);

	if(structure == "" && site == "" && element == ""){
		alert("Veuillez selectionner une entité de rattachement.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(structure != "" && (site != "" || element != "")){
		alert("Veuillez selectionner une seule entité de rattachement.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(libelle == ""){
		alert("Veuillez entrer un libellé.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(dateouverture == ""){
		alert("Veuillez entrer une date de début");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else{
	
		var reg=new RegExp(regexpdate,"g");
		var reg2=new RegExp(regexpdate,"g");
		
		if (!reg.test(dateouverture)){
			alert("Le format de la date de début n'est pas valide.");
			$( "#Onglets" ).tabs("option","active","0");
		}
		else if (datefermeture != "" && !reg2.test(datefermeture)){
			alert("Le format de la date de fin n'est pas valide.");
			$( "#Onglets" ).tabs("option","active","0");
		}
		else{
		
			if(idprofil == 5){
    			
				$.ajax({
			        url: "/PagesSante"+servletPath+"/site/presencegroupears", // le nom du fichier indiqué dans le formulaire
			        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
			        data: $("form[name^='formEnrElement']").serialize(),
			        dataType: 'json',
			        success: function(json) { // je récupère la réponse du fichier PHP
			         	
						//si la réponse est pas OK
			            if(json.reponse == 'OK') {
							
			            	document.cookie = 'modification=false;';			
							document.getElementById("page").value = page;
							document.getElementById("retour").value = false;
							
							var active = $( "#Onglets" ).tabs( "option", "active" );
							document.getElementById("tab").value = active;
							
							document.formEnrElement.submit();
			                
			            } else {

			            	$( "#ouinon" ).html(json.reponse);
			            	
			            	$( "#ouinon" ).dialog({
			      		      modal: true,
			      		      dialogClass: "no-close",
			      		      title:"Quitter la saisie",
			      		      position:"center",
			      		      height:180,
			      		      width:400,
			      		      buttons: {
			      		        "Oui": function() {
			      		        	
			      		        	document.cookie = 'modification=false;';			
			      					document.getElementById("page").value = page;
			      					document.getElementById("retour").value = false;
			      					
			      					var active = $( "#Onglets" ).tabs( "option", "active" );
			      					document.getElementById("tab").value = active;
			      					
			      					document.formEnrElement.submit();
			      					
			      		        	$( this ).dialog( "close" );
			      		        },
			      		        "Non": function() {
			      		        				      		        				      		        	
			      		        	$( this ).dialog( "close" );
			      		        	
			      		        }
			      		      }
			      		    });
			            	
			            }
			        }
			    });
			
			}
			else{
				document.cookie = 'modification=false;';			
				document.getElementById("page").value = page;
				document.getElementById("retour").value = false;
				
				var active = $( "#Onglets" ).tabs( "option", "active" );
				document.getElementById("tab").value = active;
				
				document.formEnrElement.submit();
			}
		}
	}
	
}

function afficherStatutHospitalier(){
	$("#ajoutstatuthospitalier").show();
}

function ajouterStatutHospitalier(){
	
	statut = document.getElementById("selectstatuthospitalier").value.split('|');
	
	var existe = false;

	var elements = document.getElementsByName("statuthospitalier");
	var len = elements.length;
	
    for (var i=0; i<len; ++i){
        if (elements[i].value == statut[0]) {
            existe = true;
        }
    }
	
	if (existe == true){
		alert("Ce statut hopitalier est déjà présent, veuillez sélectionner un autre statut hospitalier.");
	}
	else{
		
		var tableau = document.getElementById("tableStatutHospitalier").innerHTML;		
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		var nouvelleligne = '<tr id="s' + statut[0] + '">'		
							+ ' <td width="97%" class="' + classe + '">'
						    + statut[1] + '<input type="hidden" name="statuthospitalier" value="' + statut[0] + '" />'
							+ '	</td>'												
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceStatutHospitalier(\'s' + statut[0] + '\')">'
							+ '	</td>'
							+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tableStatutHospitalier").innerHTML = tableau;
		
	}
	
	cookieModification();
	
	$("#ajoutstatuthospitalier").hide();
}

function afficheCompetences(){
	
	fonction = document.getElementById("selectfonction").value.split('|');
	
	if(fonction[1] == "1"){
		$("#sanscompetences").hide();
		$("#affichecompetence").show();
		$("#afficheattribution").show();
		$("#afficheorientations").show();
		$("#affichedescriptionfonction").hide();
		$("#affichespecialisation").hide();
		$("#ajoutdescriptionfonction").hide();
	}
	else if(fonction[1] == "2"){
		$("#sanscompetences").hide();
		$("#affichecompetence").hide();
		$("#afficheattribution").hide();
		$("#afficheorientations").hide();
		$("#affichedescriptionfonction").show();
		$("#affichespecialisation").hide();
		$("#ajoutdescriptionfonction").hide();
	}
	else if(fonction[1] == "3"){
		$("#sanscompetences").hide();
		$("#affichecompetence").hide();
		$("#afficheattribution").hide();
		$("#afficheorientations").hide();
		$("#affichedescriptionfonction").hide();
		$("#affichespecialisation").show();
		$("#ajoutdescriptionfonction").hide();
	}
	else{
		$("#sanscompetences").show();
		$("#affichecompetence").hide();
		$("#afficheattribution").hide();
		$("#afficheorientations").hide();
		$("#affichedescriptionfonction").hide();
		$("#affichespecialisation").hide();
		$("#ajoutdescriptionfonction").hide();
	}
	
	document.getElementById("commentaire").value = fonction[2];
	
}

function ajouterDescriptionFonction(){
	
	descfonction = document.getElementById("selectdescriptionfonction").value.split('|');
	
	var existe = false;

	var elements = document.getElementsByName("tablpharm");
	var len = elements.length;
	
    for (var i=0; i<len; ++i){
        if (elements[i].value == descfonction[0]) {
            existe = true;
        }
    }
	
	if (existe == true){
		alert("Cette description de fonction est déjà présente, veuillez sélectionner une autre description.");
	}
	else{
		
		var tableau = document.getElementById("tableaudescriptionfct").innerHTML;		
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		var nouvelleligne = '<tr id="t' + descfonction[0] + '">'		
							+ ' <td width="97%" class="' + classe + '">'
						    + descfonction[1] + '<input type="hidden" name="tablpharm" value="' + descfonction[0] + '" />'
							+ '	</td>'												
							+ '	<td width="3%" class="' + classe + '">'
							+ '<img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceTablPharm(\'t' + descfonction[0] + '\')">'
							+ '	</td>'
							+ '</tr></tbody>';
		
		tableau = tableau.replace("</tbody>",nouvelleligne);
		tableau = tableau.replace("</TBODY>",nouvelleligne);
		
		document.getElementById("tableaudescriptionfct").innerHTML = tableau;
		
	}
	
	cookieModification();
	
	$("#ajoutdescriptionfonction").hide();
}

function afficheselectfonction(){
	$("#ajoutdescriptionfonction").show();
}


/* CREATION D'UNE FONCTION */

function enregistrerFonction(page, idprofil){
	

	var fonction = "";
	var dateouverture = "";
	var datefermeture = "";
	var description = "";
	var structure = "";
	var site = "";
	var element = "";
	
	if( document.getElementsByName("ej").length != 0){
		structure = document.getElementsByName("ej")[0].value;
	}
	
	if(document.getElementsByName("eg").length != 0){
		site = document.getElementsByName("eg")[0].value;
	}
	
	if(document.getElementsByName("element").length != 0){
		element = document.getElementsByName("element")[0].value;
	}
	
	fonction = trim(document.getElementById("selectfonction").value);
	dateouverture = trim(document.getElementById("datepickerouverture").value);
	datefermeture = trim(document.getElementById("datepickerfermeture").value);
	description = trim(document.getElementById("commentaire").value);

	if(structure == "" && site == "" && element == ""){
		alert("Veuillez selectionner une entité de rattachement.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(structure != "" && (site != "" || element != "") || (site != "" && element != "")){
		alert("Veuillez selectionner une seule entité de rattachement.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(fonction == "0|0"){
		alert("Veuillez sélectionner une fonction.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(description == ""){
		alert("Veuillez entrer une description de la fonction.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(dateouverture == ""){
		alert("Veuillez entrer une date de prise de fonction");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else{

		var reg=new RegExp(regexpdate,"g");
		var reg2=new RegExp(regexpdate,"g");
		
		if (!reg.test(dateouverture)){
			alert("Le format de la date de prise de fonction n'est pas valide.");
			$( "#Onglets" ).tabs("option","active","0");
		}
		else if (datefermeture != "" && !reg2.test(datefermeture)){
			alert("Le format de la date de fin de fonction n'est pas valide.");
			$( "#Onglets" ).tabs("option","active","0");
		}
		else{

			if(idprofil == 5){
    			
				$.ajax({
			        url: "/PagesSante"+servletPath+"/site/presencegroupears", // le nom du fichier indiqué dans le formulaire
			        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
			        data: $("form[name^='formEnrFonction']").serialize(),
			        dataType: 'json',
			        success: function(json) { // je récupère la réponse du fichier PHP
			         	
						//si la réponse est pas OK
			            if(json.reponse == 'OK') {
							
			            	document.cookie = 'modification=false;';			
							document.getElementById("page").value = page;
							document.getElementById("retour").value = false;
				
							var active = $( "#Onglets" ).tabs( "option", "active" );
							document.getElementById("tab").value = active;
				
							document.formEnrFonction.submit();
			                
			            } else {

			            	$( "#ouinon" ).html(json.reponse);
			            	
			            	$( "#ouinon" ).dialog({
			      		      modal: true,
			      		      dialogClass: "no-close",
			      		      title:"Quitter la saisie",
			      		      position:"center",
			      		      height:180,
			      		      width:400,
			      		      buttons: {
			      		        "Oui": function() {
			      		        	
			      		        	document.cookie = 'modification=false;';			
			      					document.getElementById("page").value = page;
			      					document.getElementById("retour").value = false;
			      		
			      					var active = $( "#Onglets" ).tabs( "option", "active" );
			      					document.getElementById("tab").value = active;
			      		
			      					document.formEnrFonction.submit();
			      					
			      		        	$( this ).dialog( "close" );
			      		        },
			      		        "Non": function() {
			      		        				      		        				      		        	
			      		        	$( this ).dialog( "close" );
			      		        	
			      		        }
			      		      }
			      		    });
			            	
			            }
			        }
			    });
			
			}
			else{
				document.cookie = 'modification=false;';			
				document.getElementById("page").value = page;
				document.getElementById("retour").value = false;
	
				var active = $( "#Onglets" ).tabs( "option", "active" );
				document.getElementById("tab").value = active;
	
				document.formEnrFonction.submit();
			}
		}
	}
	
}

function ajouterFonction(typeentiterattachment){
	
	var cookie = getCookie("modification");
	document.getElementById("entiteacreer").value = "fonction";
	
	if (cookie == "true"){
		
		if (typeentiterattachment == "structure"){
			document.getElementById("ouinon").innerHTML = "<p>Vous allez quitter la structure.</p><p>Pour continuer vous devez enregistrer la structure.</p><p>Voulez-vous continuer ?</p>";
		}
		else if (typeentiterattachment == "site"){
			document.getElementById("ouinon").innerHTML = "<p>Vous allez quitter le site.</p><p>Pour continuer vous devez enregistrer le site.</p><p>Voulez-vous continuer ?</p>";
		}
		else if (typeentiterattachment == "element"){
			document.getElementById("ouinon").innerHTML = "<p>Vous allez quitter l'élément.</p><p>Pour continuer vous devez enregistrer l'élément.</p><p>Voulez-vous continuer ?</p>";
		}
		
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	if (typeentiterattachment == "structure"){
		        		
		        		document.getElementById("page").value = "CreationStructure";
			    		document.formEnrStruc.submit();
		        		
		        	}
		        	else if (typeentiterattachment == "site"){
		        		
		        		document.getElementById("page").value = "CreationSite";
			    		document.formEnrSite.submit();
		        		
		        	}
	        		else if (typeentiterattachment == "element"){
		        		
		        		document.getElementById("page").value = "CreationElement";
			    		document.formEnrElement.submit();
		        		
		        	}
		        	
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
		
	}
	else{
		
		if (typeentiterattachment == "structure"){   		
    		document.getElementById("page").value = "CreationStructure";   		    		
		}
		else if (typeentiterattachment == "site"){   		
    		document.getElementById("page").value = "CreationSite";
		}
		else if (typeentiterattachment == "element"){    		
    		document.getElementById("page").value = "CreationElement";   		
		}
		
		document.formCreerFonction.submit();

	}
	
}

function retourCreationFonction(page, idprofil){

	var cookie = getCookie("modification");

	if (cookie == "true"){
	
		document.getElementById("ouinon").innerHTML = "<p>Désirez vous enregistrer avant de quitter ?</p>";
		document.getElementById("page").value = page;
		document.getElementById("retour").value = true;
		
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var fonction = "";
		        	var dateouverture = "";
		        	var datefermeture = "";
		        	var description = "";
		        	var structure = "";
		        	var site = "";
		        	var element = "";
		        	
		        	if( document.getElementsByName("ej").length != 0){
		        		structure = document.getElementsByName("ej")[0].value;
		        	}
		        	
		        	if(document.getElementsByName("eg").length != 0){
		        		site = document.getElementsByName("eg")[0].value;
		        	}
		        	
		        	if(document.getElementsByName("element").length != 0){
		        		element = document.getElementsByName("element")[0].value;
		        	}
		        	
		        	fonction = trim(document.getElementById("selectfonction").value);
		        	dateouverture = trim(document.getElementById("datepickerouverture").value);
		        	datefermeture = trim(document.getElementById("datepickerfermeture").value);
		        	description = trim(document.getElementById("commentaire").value);

		        	if(structure == "" && site == "" && element == ""){
		        		alert("Veuillez selectionner une entité de rattachement.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(structure != "" && (site != "" || element != "") || (site != "" && element != "")){
		        		alert("Veuillez selectionner une seule entité de rattachement.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(fonction == "0|0"){
		        		alert("Veuillez sélectionner une fonction.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(description == ""){
		        		alert("Veuillez entrer une description de la fonction.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(dateouverture == ""){
		        		alert("Veuillez entrer une date de prise de fonction");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else{
		        	
		        		var reg=new RegExp(regexpdate,"g");
		        		var reg2=new RegExp(regexpdate,"g");
		        		
		        		if (!reg.test(dateouverture)){
		        			alert("Le format de la date de prise de fonction n'est pas valide.");
		        			$( "#Onglets" ).tabs("option","active","0");
		        		}
		        		else if (datefermeture != "" && !reg2.test(datefermeture)){
		        			alert("Le format de la date de fin de fonction n'est pas valide.");
		        			$( "#Onglets" ).tabs("option","active","0");
		        		}
		        		else{
		        			
		        			if(idprofil == 5){
		            			
		        				$.ajax({
		        			        url: "/PagesSante"+servletPath+"/site/presencegroupears", // le nom du fichier indiqué dans le formulaire
		        			        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
		        			        data: $("form[name^='formEnrFonction']").serialize(),
		        			        dataType: 'json',
		        			        success: function(json) { // je récupère la réponse du fichier PHP
		        			         	
		        						//si la réponse est pas OK
		        			            if(json.reponse == 'OK') {
		        							
		        			            	document.getElementById("enregistrer").value = true;
		    			        			document.formEnrFonction.submit();
		        			                
		        			            } else {

		        			            	$( "#ouinon" ).html(json.reponse);
		        			            	
		        			            	$( "#ouinon" ).dialog({
		        			      		      modal: true,
		        			      		      dialogClass: "no-close",
		        			      		      title:"Quitter la saisie",
		        			      		      position:"center",
		        			      		      height:180,
		        			      		      width:400,
		        			      		      buttons: {
		        			      		        "Oui": function() {
		        			      		        	
		        			      		        	document.getElementById("enregistrer").value = true;
		        				        			document.formEnrFonction.submit();
		        			      					
		        			      		        	$( this ).dialog( "close" );
		        			      		        },
		        			      		        "Non": function() {
		        			      		        				      		        				      		        	
		        			      		        	$( this ).dialog( "close" );
		        			      		        	
		        			      		        }
		        			      		      }
		        			      		    });
		        			            	
		        			            }
		        			        }
		        			    });
		        			
		        			}
		        			else{
			        			document.getElementById("enregistrer").value = true;
			        			document.formEnrFonction.submit();
		        			}
		        		}
		        	}
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        	
		        	
		        	document.getElementById("enregistrer").value = false;
		        	document.formEnrFonction.submit();
		        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		document.getElementById("page").value = page;
		document.getElementById("retour").value = true;
		document.getElementById("enregistrer").value = false;
    	document.formEnrFonction.submit();
	}
	
	
}

/* PERSONNE */

function afficheridentifiant(){
	$("#detailidentifiant").show();
}

function enregistrerPersonne(page, idprofil){
	
	
	var nom = "";
	var prenom = "";
	
	nom = trim(document.getElementById("nomusuel").value);
	prenom = trim(document.getElementById("prenom").value);
	
	var reg=new RegExp("^[a-zA-ZÀ-ÿ]{1,2}$","g");
	var reg2=new RegExp("^[a-zA-ZÀ-ÿ]+(((\\s{1})|(['-]{1}))[a-zA-ZÀ-ÿ]+)*[\.]?$","g");
	var reg3=new RegExp("^[a-zA-ZÀ-ÿ]{1,2}$","g");
	var reg4=new RegExp("^[a-zA-ZÀ-ÿ]+(((\\s{1})|(['-]{1}))[a-zA-ZÀ-ÿ]+)*[\.]?$","g");
		
	if(nom == ""){
		alert("Veuillez saisir un nom usuel.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if(prenom == ""){
		alert("Veuillez saisir un prénom");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else if (!reg.test(nom) && !reg2.test(nom)){
		alert("Veuillez saisir un nom correct.");
		$( "#Onglets" ).tabs("option","active","0");
	}	
	else if (!reg3.test(prenom) && !reg4.test(prenom)){
		alert("Veuillez saisir un prénom correct.");
		$( "#Onglets" ).tabs("option","active","0");
	}
	else{
	
		if(idprofil == 5){
			
			$.ajax({
		        url: "/PagesSante"+servletPath+"/site/presencegroupears", // le nom du fichier indiqué dans le formulaire
		        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
		        data: $("form[name^='formEnrPersonne']").serialize(),
		        dataType: 'json',
		        success: function(json) { // je récupère la réponse du fichier PHP
		         	
					//si la réponse est pas OK
		            if(json.reponse == 'OK') {
						
		            	document.cookie = 'modification=false;';			
		    			document.getElementById("page").value = page;
		    			document.getElementById("retour").value = false;
		    			
		    			var active = $( "#Onglets" ).tabs( "option", "active" );
		    			document.getElementById("tab").value = active;
		    			
		    			document.formEnrPersonne.submit();
		                
		            } else {

		            	$( "#ouinon" ).html(json.reponse);
		            	
		            	$( "#ouinon" ).dialog({
		      		      modal: true,
		      		      dialogClass: "no-close",
		      		      title:"Quitter la saisie",
		      		      position:"center",
		      		      height:180,
		      		      width:400,
		      		      buttons: {
		      		        "Oui": function() {
		      		        	
		      		        	document.cookie = 'modification=false;';			
		      					document.getElementById("page").value = page;
		      					document.getElementById("retour").value = false;
		      					
		      					var active = $( "#Onglets" ).tabs( "option", "active" );
		      					document.getElementById("tab").value = active;
		      					
		      					document.formEnrPersonne.submit();
		      					
		      		        	$( this ).dialog( "close" );
		      		        },
		      		        "Non": function() {
		      		        				      		        				      		        	
		      		        	$( this ).dialog( "close" );
		      		        	
		      		        }
		      		      }
		      		    });
		            	
		            }
		        }
		    });
		
		}
		else{
			document.cookie = 'modification=false;';			
			document.getElementById("page").value = page;
			document.getElementById("retour").value = false;
			
			var active = $( "#Onglets" ).tabs( "option", "active" );
			document.getElementById("tab").value = active;
			
			document.formEnrPersonne.submit();
		}
		
	}
	
}

function retourCreationPersonne(page, idprofil){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true"){
	
		document.getElementById("ouinon").innerHTML = "<p>Désirez vous enregistrer avant de quitter ?</p>";
		document.getElementById("page").value = page;
		document.getElementById("retour").value = true;
		
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var nom = "";
		        	var prenom = "";
		        	
		        	nom = trim(document.getElementById("nomusuel").value);
		        	prenom = trim(document.getElementById("prenom").value);
		        	
		        	var reg=new RegExp("^[a-zA-ZÀ-ÿ]{1,2}$","g");
		        	var reg2=new RegExp("^[a-zA-ZÀ-ÿ]+(['-\s]{1}[a-zA-ZÀ-ÿ]+)*[\.]?$","g");
		        	var reg3=new RegExp("^[a-zA-ZÀ-ÿ]{1,2}$","g");
		        	var reg4=new RegExp("^[a-zA-ZÀ-ÿ]+(['-\s]{1}[a-zA-ZÀ-ÿ]+)*[\.]?$","g");
		        		
		        	if(nom == ""){
		        		alert("Veuillez saisir un nom usuel.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if(prenom == ""){
		        		alert("Veuillez saisir un prénom");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else if (!reg.test(nom) && !reg2.test(nom)){
		        		alert("Veuillez saisir un nom correct.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}	
		        	else if (!reg3.test(prenom) && !reg4.test(prenom)){
		        		alert("Veuillez saisir un prénom correct.");
		        		$( "#Onglets" ).tabs("option","active","0");
		        	}
		        	else{
		        		
		        		if(idprofil == 5){
		        			
		        			$.ajax({
		        		        url: "/PagesSante"+servletPath+"/site/presencegroupears", // le nom du fichier indiqué dans le formulaire
		        		        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
		        		        data: $("form[name^='formEnrPersonne']").serialize(),
		        		        dataType: 'json',
		        		        success: function(json) { // je récupère la réponse du fichier PHP
		        		         	
		        					//si la réponse est pas OK
		        		            if(json.reponse == 'OK') {
		        						
		        		            	document.getElementById("enregistrer").value = true;
		    				        	document.formEnrPersonne.submit();
		        		                
		        		            } else {

		        		            	$( "#ouinon" ).html(json.reponse);
		        		            	
		        		            	$( "#ouinon" ).dialog({
		        		      		      modal: true,
		        		      		      dialogClass: "no-close",
		        		      		      title:"Quitter la saisie",
		        		      		      position:"center",
		        		      		      height:180,
		        		      		      width:400,
		        		      		      buttons: {
		        		      		        "Oui": function() {
		        		      		        	
		        		      		        	document.getElementById("enregistrer").value = true;
		        					        	document.formEnrPersonne.submit();
		        		      					
		        		      		        	$( this ).dialog( "close" );
		        		      		        },
		        		      		        "Non": function() {
		        		      		        				      		        				      		        	
		        		      		        	$( this ).dialog( "close" );
		        		      		        	
		        		      		        }
		        		      		      }
		        		      		    });
		        		            	
		        		            }
		        		        }
		        		    });
		        		
		        		}
		        		else{
			        		document.getElementById("enregistrer").value = true;
				        	document.formEnrPersonne.submit();
		        		}
		        	}
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        	
		        	
		        	document.getElementById("enregistrer").value = false;
		        	document.formEnrPersonne.submit();
		        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		document.getElementById("page").value = page;
		document.getElementById("retour").value = true;
		document.getElementById("enregistrer").value = false;
    	document.formEnrPersonne.submit();
	}
	
	
}

function ajoutPersonne(){
	
	var cookie = getCookie("modification");
	document.getElementById("entiteacreer").value = "personne";
	
	if (cookie == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous allez quitter la fonction.</p><p>Pour continuer vous devez enregistrer la fonction.</p><p>Voulez-vous continuer ?</p>";
		
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	document.getElementById("page").value = "CreationPersonne";
		    		document.formEnrFonction.submit();
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
		
	}
	else{
		document.getElementById("page").value = "CreationFonction";
		document.formCreerPersonne.submit();
	}
	
}


/***************************************************/
/*** 			GESTION DES CALENDRIER			 ***/
/***************************************************/

function creerCalendrier(){

	$.get("/PagesSante" + servletPath + "/calendrier/creercalendrier" , function(data) {
		
		$("#dialog").html(data);			
					    
		$( "#dialog" ).dialog({
			height:600,
			width:500,
	        modal: true,
			title: "Ajouter un événement",
			open: function (event, ui) {
				
				$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');

		    },
		    close:function (){calendar.fullCalendar("refetchEvents");},
		    buttons:[{  text:"Enregistrer",
    			click: function(){submitCalendrier();},
    			icons: {primary:"ui-icon-check"}
			 },
			 {	text:"Annuler",
				click: function(){$( this ).dialog( "close" );},
				icons:{primary: "ui-icon-cancel"}
			 }
			],
	    	closeText: "Fermer"
		    
		});
		
		$( ".dateCalendrier" ).datepicker();		
		$( ".timeCalendrier" ).timepicker({showPeriodLabels: false,onSelect: function (){this.focus();}});
		
	});
	
}

function copieCalendrier(jour){
	
	var jouracopier = "";
	var debutjc = "";
	var finjc = "";
	var debutmatin = "";
	var finmatin = "";
	var debutaprem = "";
	var finaprem = "";
	
	switch (jour){
	
	case "mardi":
		jouracopier = "lundi";
		break;
		
	case "mercredi":
		jouracopier = "mardi";
		break;
		
	case "jeudi":
		jouracopier = "mercredi";
		break;
		
	case "vendredi":
		jouracopier = "jeudi";
		break;
		
	case "samedi":
		jouracopier = "vendredi";
		break;
		
	case "dimanche":
		jouracopier = "samedi";
		break;
	
	}
	
	var periodes = document.getElementsByName("periode" + jouracopier);
	var periode = "";
	var i = 0;
	var indiceperiode = 1;
	
	for(i = 0; i <periodes.length; i++){
		if(periodes[i].checked == true){
			periode = periodes[i].value;
			indiceperiode = i;
		}
	}
	
	switch (periode){
	
		case "continue":
			debutjc = document.getElementById("debutjc" + jouracopier).value;
			finjc = document.getElementById("finjc" + jouracopier).value;
			
			document.getElementById("debutjc" + jour).value = debutjc;
			document.getElementById("finjc" + jour).value = finjc;			
			
			break;
			
		case "ampm":
			debutmatin = document.getElementById("debutmatin" + jouracopier).value;
			finmatin = document.getElementById("finmatin" + jouracopier).value;
			debutaprem = document.getElementById("debutaprem" + jouracopier).value;
			finaprem = document.getElementById("finaprem" + jouracopier).value;
			
			document.getElementById("debutmatin" + jour).value = debutmatin;
			document.getElementById("finmatin" + jour).value = finmatin;
			document.getElementById("debutaprem" + jour).value = debutaprem;
			document.getElementById("finaprem" + jour).value = finaprem;
			
			break;
			
		default:
		
	}
	
	document.getElementsByName("periode" + jour)[indiceperiode].checked = true;
	
}

function cancelAddCalendar(){
	$("#dialog").dialog( "close" );
	$("#dialog").empty();
}

function changerSemaines(){
	
	var annee = document.getElementsByName("anneecalendrier")[0].value;
	
	$.get('/PagesSante'+servletPath+'/calendrier/changersemaines?annee=' + annee, function(data) {
		$('#semaineseule').html(data);		
		$('#debsemaine').html(data);
		$('#finsemaine').html(data);
	});
	
}

function touteLaJourneeCalendrier(){
	
	
	if(document.getElementById("toutelajournee").checked == true){
		$("#heurefinindisponibilite").hide();
		$("#heuredebindisponibilite").hide();
	}
	else{
		$("#heurefinindisponibilite").show();
		$("#heuredebindisponibilite").show();
	}
	
}

function addOrModifyCalendar(date,month,year,startdate){

	var toUpdate = new Date(year,month,date);
	var start = new Date(startdate);
	start.setHours(0, 0, 0, 0);
	
	if(toUpdate < start){
		alert("Vous ne pouvez ajouter ou modifier un événement sur cette semaine car elle est déjà passée.");
	}
	else{
	
		$( "#dialog" ).empty();

		$.get("/PagesSante" + servletPath + "/calendrier/ajouteroumodifiercalendrier?date=" + date + "&month=" + month + "&year=" + year , function(data) {

			$('#dialog').html(data);	
								
			$( "#dialog" ).dialog({				
				width:500,
				height:600,
				modal: true,
				title: "Ajouter un événement",
				open: function (type, data) {
					$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');					
			    },
			    close:function (){calendar.fullCalendar("refetchEvents");},
			    buttons:[{  text:"Enregistrer",
			    			click: function(){submitCalendrier();},
			    			icons: {primary:"ui-icon-check"}
		    			 },
		    			 {	text:"Annuler",
		    				click: function(){$( this ).dialog( "close" );},
		    				icons:{primary: "ui-icon-cancel"}
		    			 }
		    			],
		    	closeText: "Fermer"
			});					
			
			$( ".dateCalendrier" ).datepicker();
			$( ".timeCalendrier" ).timepicker({showPeriodLabels: false,onSelect: function (){this.focus();}});
			
		});
		
	}
	
}

function supprimerIndispo(id){

	if(confirm("Etes-vous sûr de vouloir supprimer cette indisponibilité?")){
		$.get("/PagesSante" + servletPath + "/calendrier/supprimerindispo?id=" + id , function(data) {
			
			$( "#dialog" ).dialog( "close" );
		
		});
	}
	
}

function modifyIndispo(id){
	
	$.get("/PagesSante" + servletPath + "/calendrier/modifierindispo?id=" + id , function(data) {
		
		$('#dialog').html(data);
		
		$( "#dialog" ).dialog({
			height:600,
			width:500,
			modal: true,
			title: "Modification d'une indisponibilité",
			open: function (type, data) {
				$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
		    },
		    close:function (){calendar.fullCalendar("refetchEvents");},
		    buttons:[{  text:"Enregistrer",
    			click: function(){submitCalendrier();},
    			icons: {primary:"ui-icon-check"}
			 },
			 {	text:"Annuler",
				click: function(){$( this ).dialog( "close" );},
				icons:{primary: "ui-icon-cancel"}
			 }
			],
	    	closeText: "Fermer"
		});
		
		$( ".dateCalendrier" ).datepicker();		
		$( ".timeCalendrier" ).timepicker({showPeriodLabels: false,onSelect: function (){this.focus();}});
		
		// Load les onglets
		$( "#OngletsCalendrier" ).tabs();
		// charge l'onglet en paramètre
		$( "#OngletsCalendrier" ).tabs("option","active","1");
				
	});
	
	

}

function modifyDispo(id, date, month, year,startdate){
	
	var toUpdate = new Date(year,month,date);
	var start = new Date(startdate);

	if(toUpdate < start){
		alert("Vous ne pouvez ajouter ou modifier un événement sur cette semaine car elle est déjà passée.");
	}
	else{
	
		$.get("/PagesSante" + servletPath + "/calendrier/modifiercalendrier?date=" + date + "&month=" + month + "&year=" + year + "&id=" + id , function(data) {
		
			$('#dialog').html(data);
				
			$( "#dialog" ).dialog({
				height:600,
				width:500,
				modal: true,
				title: "Modification d'un événement",
				open: function (type, data) {
					$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
			    },
			    buttons:[{  text:"Enregistrer",
	    			click: function(){submitCalendrier();},
	    			icons: {primary:"ui-icon-check"}
    			 },
    			 {	text:"Annuler",
    				click: function(){$( this ).dialog( "close" );},
    				icons:{primary: "ui-icon-cancel"}
    			 }
    			],
		    	closeText: "Fermer"
			    
			});
			
			$( ".dateCalendrier" ).datepicker();		
			$( ".timeCalendrier" ).timepicker({showPeriodLabels: false,onSelect: function (){this.focus();}});
			
		});
	
		
	}

}

function modifyOrDeleteIndispo(id, titre){
	
$.get("/PagesSante" + servletPath + "/calendrier/modifierousupprimerindispo?id=" + id , function(data) {
		
	$('#dialog').html(data);
	
	$( "#dialog" ).dialog({
		height:130,
		width:350,
		modal: true,
		title: titre,
		open: function (type, data) {
			$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
	    },
	    close:function (){calendar.fullCalendar("refetchEvents");},
	    buttons:[],
    	closeText: "Fermer"
	});
		
});	

}

function dropIndispo(id, start, end){
	
	var mois = start.getMonth() + 1;
	var debut = mois + "/" + start.getDate() + "/" + start.getFullYear() + " " + start.getHours() + ":" + start.getMinutes();
	var fin = mois + "/" + end.getDate() + "/" + end.getFullYear() + " " + end.getHours() + ":" + end.getMinutes();

	$.get("/PagesSante" + servletPath + "/calendrier/dropindispo?id=" + id + "&start="+ debut + "&end=" + fin , function(data) {
		
	});
		
}

function submitCalendrier(){

	var active = $( "#OngletsCalendrier" ).tabs( "option", "active" );
	var idform = "";
	
	//si c'est une disponiblité
	if(active == 0){
		idform = "formCalendrier";
	}//sinon, une indisponibilité
	else{
		idform = "formCalendrierIndispo";
	}
	
	// appel Ajax
    $.ajax({
        url: $("#" + idform).attr('action'), // le nom du fichier indiqué dans le formulaire
        type: $("#" + idform).attr('method'), // la méthode indiquée dans le formulaire (get ou post)
        data: $("#" + idform).serialize(), // je sérialise les données (voir plus loin), ici les $_POST
        dataType: 'json',
        success: function(json) { // je récupère la réponse du fichier PHP
         	
			//si la réponse est pas OK
            if(json.reponse == 'OK') {
				
				//on ferme le picker
				$( "#dialog" ).dialog( "close" );
				
				//on vide le dialog
				$( "#dialog" ).empty();
                
            } else {
            	alertNice("Erreur",json.reponse); // j'affiche cette réponse
            }
        }
    });
    
}

function setFinIndispo(){
	var dateindispo = $("#datedebutindispo").val();
	$("#datefinindispo").val(dateindispo);
}

function ajouterEquipementOffre(){
	
	$( "#ajouterequipement" ).dialog({
		height:200,
		width:680,
		modal: true,
		title: "Ajout d'un équipement",
		open: function (type, data) {
			$(this).parent().children().children(".ui-dialog-titlebar-close").attr('type','button');
	    },
    	closeText: "Fermer",
    	buttons:[{  text:"Enregistrer",
			click: function(){ajoutEquipement();$( this ).dialog( "close" );},
			icons: {primary:"ui-icon-check"}
		 },
		 {	text:"Annuler",
			click: function(){$( this ).dialog( "close" );},
			icons:{primary: "ui-icon-cancel"}
		 }
		]
	});
	
}

function enregistrerOffreSoins(){
	
	var offre = trim(document.getElementsByName("libelle")[0].value);
	
	if(offre == ""){
		alert("Veuillez saisir un libellé pour l'offre de soins.");
	}
	else{
		var active = $( "#Onglets" ).tabs( "option", "active" );
		document.getElementById("tab").value = active;
		
		document.formEnrOffre.submit();
	}
	
}

function retourCreationOffreSoins(){
	
	
	$( "#ouinon" ).html("Désirez vous enregistrer avant de quitter ?");
	
	$( "#ouinon" ).dialog({
	      modal: true,
	      dialogClass: "no-close",
	      title:"Quitter la saisie",
	      position:"center",
	      height:180,
	      width:400,
	      buttons: {
	        "Oui": function() {
	        	
	        	var offre = trim(document.getElementsByName("libelle")[0].value);
	        	
	        	if(offre == ""){
	        		alert("Veuillez saisir un libellé pour l'offre de soins.");
	        	}
	        	else{
					document.getElementById("retour").value = true;
					
					var active = $( "#Onglets" ).tabs( "option", "active" );
					document.getElementById("tab").value = active;
			
					document.formEnrOffre.submit();
	        	}
				
	        	$( this ).dialog( "close" );
	        },
	        "Non": function() {
	        	
	        	document.getElementById("retour").value = true;
	        	document.getElementById("enregistrer").value = false;
	        	
	        	document.formEnrOffre.submit();
	        	
	        	$( this ).dialog( "close" );
	        	
	        }
	      }
	    });
}