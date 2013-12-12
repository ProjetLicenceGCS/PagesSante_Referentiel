/* FONCTION DE NAVIGATION (PAGINATION) POUR LES TABLEAUX */

/**
 * fonction qui permet de changer de pages pour la visualisation du résultat de la recherche rapide
 */
function navigation(n){

	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numero de page a afficher
	
	$("#tableauPJ").load("/PagesSante"+servletPath+"/recherchepagesjaunes/change", {numpage:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/recherchepagesjaunes/changenavigation", {numpage:n});//on change les références des boutons suivant, précédent...
		
}

/**
 * fonction qui permet de changer de pages pour la visualisation du résultat de la recherche simple d'établissement
 * @param n
 */
function navigationEtablissement(n){
	
	if(document.getElementById("distance") != null){
		$("#chargementresultat").empty();
		$("#chargementresultat").show();
		$("#results").hide();	
	
		spinner("chargementresultat", 70, 120, 12, 25, "#000");
	}
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#navigation").load("/PagesSante"+servletPath+"/rechercheetablissement/changenavigation", {numpage:n});//on change les références des boutons suivant, précédent...
	$("#tableauEtab").load("/PagesSante"+servletPath+"/rechercheetablissement/change", {numpage:n});//on change le tableau
	
	
}

/**
 * fonction qui permet de changer de pages pour la visualisation du résultat de la recherche avancee d'établissement
 * @param n
 */
function navigationEtablissementAvancee(n){

	if(document.getElementById("distance") != null){
		$("#chargementresultat").empty();
		$("#chargementresultat").show();
		$("#results").hide();	
	
		spinner("chargementresultat", 70, 120, 12, 25, "#000");
	}
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauEtab").load("/PagesSante"+servletPath+"/rechercheetablissement/changeavancee", {numpage:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/rechercheetablissement/changenavigationavancee", {numpage:n});//on change les références des boutons suivant, précédent...
	
	$("#results").show();
	$("#chargementresultat").hide();
	
}

/**
 * fonction qui permet de changer de pages pour la visualisation du résultat de la recherche simple de professionnel
 * @param n
 */
function navigationProfessionnel(n){

	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauProf").load("/PagesSante"+servletPath+"/rechercheprofessionnel/change", {numpage:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/rechercheprofessionnel/changenavigation", {numpage:n});//on change les références des boutons suivant, précédent...
			
}


function navigationProfessionnelAvancee(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauProf").load("/PagesSante"+servletPath+"/rechercheprofessionnel/changeavancee", {numpage:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/rechercheprofessionnel/changenavigationavancee", {numpage:n});//on change les références des boutons suivant, précédent...

}

/**
 * fonction qui permet de changer de pages pour la visualisation du résultat de la recherche pour les groupes statiques
 * @param n
 */
function navigationGroupe(n){
	
	$("#tableauGroupe").load("/PagesSante"+servletPath+"/recherchegroupe/change", {numpage:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/recherchegroupe/changenavigation", {numpage:n});//on change les références des boutons suivant, précédent...
			
}

/**
 * fonction qui permet de changer de pages pour la visualisation du résultat de la recherche pour les groupes dynamiques
 * @param n
 */
function navigationGroupeDynamique(n){
	
	$("#tableauGroupeDynamique").load("/PagesSante"+servletPath+"/recherchegroupe/changegroupedynamique", {numpage:n});//on change le tableau
	$("#navigationdynamique").load("/PagesSante"+servletPath+"/recherchegroupe/changenavigationgroupedynamique", {numpage:n});//on change les références des boutons suivant, précédent...
			
}

/* FONCTIONS POUR RETOURNER A LA RECHERCHE AVEC LES PARAMETRES PRECEDENTS */

/**
 * fonction qui permet de retourner à la recherche simple d'atablissement avec les paramètres saisit précédemment
 */
function retourEtablissement(){
	document.formEtab.action="/PagesSante"+servletPath+"/rechercheetablissement/retour";
	document.formEtab.method="post";
	document.formEtab.submit();
}

/**
 * fonction qui permet de retourner à la recherche simple d'atablissement avec les paramètres saisit précédemment
 */
function retourEtablissementAvancee(){
	document.formEtab.action="/PagesSante"+servletPath+"/rechercheetablissement/retouravancee";
	document.formEtab.method="post";
	document.formEtab.submit();
}

/**
 * fonction qui permet de retourner à la recherche simple d'atablissement avec les paramètres saisit précédemment
 */
function retourProfessionnel(){
	document.formEtab.action="/PagesSante"+servletPath+"/rechercheprofessionnel/retour";
	document.formEtab.method="post";
	document.formEtab.submit();
}

/**
 * fonction qui permet de retourner à la recherche simple d'atablissement avec les paramètres saisit précédemment
 */
function retourProfessionnelAvancee(){
	document.formEtab.action="/PagesSante"+servletPath+"/rechercheprofessionnel/retouravancee";
	document.formEtab.method="post";
	document.formEtab.submit();
}


/* FONCTIONS PERMETTANT DE FAIRE UNE NOUVELLE RECHERCHE */

/**
 * fonction qui permet de faire une nouvelle recherche simple d'établissement, sans les anciens paramètres
 */
function nouvelleRechercheEtablissement(){
	document.formEtab.action="/PagesSante"+servletPath+"/rechercheetablissement";
	document.formEtab.method="get";
	document.formEtab.submit();
}

/**
 * fonction qui permet de faire une nouvelle recherche simple d'établissement, sans les anciens paramètres
 */
function nouvelleRechercheEtablissementAvancee(){
	document.formEtab.action="/PagesSante"+servletPath+"/rechercheetablissement";
	document.formEtab.method="get";
	document.formEtab.submit();
}


/**
 * fonction qui permet de faire une nouvelle recherche simple d'établissement, sans les anciens paramètres
 */
function nouvelleRechercheProfessionnel(){
	document.formEtab.action="/PagesSante"+servletPath+"/rechercheprofessionnel";
	document.formEtab.method="get";
	document.formEtab.submit();
}

/**
 * fonction qui permet de faire une nouvelle recherche simple d'établissement, sans les anciens paramètres
 */
function nouvelleRechercheProfessionnelAvancee(){
	document.formEtab.action="/PagesSante"+servletPath+"/rechercheprofessionnel";
	document.formEtab.method="get";
	document.formEtab.submit();
}


/* VALIDATION DES RECHERCHES */

/**
 * permet de valider la recherche simple d'établissement
 */
function validRechercheEtablissementSimple(){

	if(document.getElementById("raisonsociale").value == '' ){
		alert("Veuillez saisir au moins un critère de recherche.");
	}
	else{
		
		if(document.getElementById("geosimple").checked == true){
			if (document.getElementById("localisationGPS").checked == true) {
				if (($("#lat").val()!=null)&&($("#lat").val()!="")&&($("#lng").val()!=null)&&($("#lng").val()!="")){
					
					$("#chargementresultat").empty();
					$("#chargementresultat").show();	

					spinner("chargementresultat", 70, 120, 12, 25, "#000");
					
					document.formRechEtab.submit();
				} else {
					alert("Une erreur s'est produite lors de la tentative de gélocalisation, veuiller saisir une adresse manuellement");
					$("#geolocalisationauto").hide();
					$("#geolocalisationmanuelle").show();
				}
			} else {
				if(trim(document.getElementById("ville").value) == ""){
					alert("Veuillez saisir une ville ou un code postal.");
				}
				else if(trim(document.getElementById("libellevoie").value) == ""){
					alert("Veuillez saisir un libellé de voie.");
				}
				else{
					
					$("#chargementresultat").empty();
					$("#chargementresultat").show();	

					spinner("chargementresultat", 70, 120, 12, 25, "#000");
					
					document.formRechEtab.submit();
				}
			}
		}
		else{
			
			$("#chargementresultat").empty();
			$("#chargementresultat").show();	

			spinner("chargementresultat", 70, 120, 12, 25, "#000");
			
			document.formRechEtab.submit();
		}
	}
}


/**
 * permet de valider la recherche avancée d'établissement
 */
function validRechercheEtablissementAvancee(){

	$("#chargementresultat").empty();
	$("#chargementresultat").show();	

	spinner("chargementresultat", 70, 120, 12, 25, "#000");
	
	var statuts = document.getElementsByName("statutsfiness");
	var activites = document.getElementsByName("activites");
	var espaces = document.getElementsByName("espacesanimation");
	var categories = document.getElementsByName("categoriesetablissement");
	var formes = document.getElementsByName("formes");
	var raison = document.getElementById("raisonsociale_avancee").value;
	var localisation = document.getElementsByName("localisation");
	
	if(formes.length<=0 && raison == '' && statuts.length<=0 && activites.length<=0 && espaces.length<=0 && categories.length<=0 && localisation.length<=0){
		alert("Veuillez saisir au moins un critère de recherche.");
	}
	else{
		
		if(document.getElementById("geoavancee").checked == true){
			if(trim(document.getElementById("villeavancee").value) == ""){
				alert("Veuillez saisir une ville ou un code postal.");
			}
			else if(trim(document.getElementById("libellevoieavancee").value) == ""){
				alert("Veuillez saisir un libellé de voie.");
			}
			else{
				document.formRechEtabAvancee.submit();
			}
		}
		else{
			document.formRechEtabAvancee.submit();
		}
		
	}	
}


/**
 * permet de valider la recherche simple de professionnel
 */
function validRechercheProfessionnelSimple(){
	
	$("#chargementresultat").empty();
	$("#chargementresultat").show();	

	spinner("chargementresultat", 70, 120, 12, 25, "#000");
	
	if(!document.getElementById("nom").value == '' ){
		document.formRechProf.submit();
	}
	else
		alert("Veuillez saisir au moins un critère de recherche.");
	
}


/**
 * permet de valider la recherche avancée d'établissement
 */
function validRechercheProfessionnelAvancee(){

	$("#chargementresultat").empty();
	$("#chargementresultat").show();	

	spinner("chargementresultat", 70, 120, 12, 25, "#000");
	
	var initpickertypesFonction = document.getElementsByName("initpickertypesFonction");
	var competences = document.getElementsByName("initpickercompetencesMedecin");
	var espaces = document.getElementsByName("espacesanimation");
	var offres = document.getElementsByName("initpickertypesOffre");
	var localisation = document.getElementsByName("localisation");
	var nom = document.getElementById("nom_avancee");
	var term =0;	
	
	if (nom != '')
		term = term + 2;
	
	if(localisation.length<=1)
		term = term +2;
	
	if(initpickertypesFonction.length<=1)
		term = term + 1;
	
	if(competences.length<=1)
		term = term + 1;
			
	if(espaces.length<=1)
		term = term + 1;
								
	if(offres.length<=1)
		term = term + 1;
					
	if(term < 2){
		alert("Veuillez saisir au moins un critère de recherche.");
	}
	else{
		document.formRechProfAvancee.submit();
	}	
}

function RechercheType(){
	
	
	var rechtype = document.getElementsByName("recherchetype");
	
	if (rechtype[0].checked == true){
		$('#list_typeelt').show();
	}
	else{
		$('#list_typeelt').hide();		
	}
	
}

function rechercheOrganisation(){
	
	if (document.getElementById("nomentite").value != "" ){
		document.formRechOrga.submit();
	}
	else{
		alert("Veuillez saisir un critère pour l'entité parente.");
	}
}

function rechercheFonction(){
	
	if (document.getElementById("nomentite").value != "" ){
		document.formRechFonction.submit();
	}
	else{
		alert("Veuillez saisir un critère pour l'entité parente.");
	}
	
}


/* FONCTIONS POUR LA RECHERCHE D'UNE PERSONNE (ANNUAIRE LDAP) */

/**
 * met dans un champ masqué l'identifiant de la personne sélectionnée (PagesSanté)
 */
function setIdpersonne(id){
	document.getElementById("idpersonne").value = id;
}

/**
 * met dans un champ masqué l'identifiant de la personne de l'annuaire LDAP
 * @param id
 */
function setLDAP(id){
	document.getElementById("regid").value = id;
}

/**
 * importe une personne de l'annuaire LDAP dans PagesSanté
 */
function importAnnuaireLDAP(){
		
	if(document.getElementById("idpersonne").value != "" && document.getElementById("idpersonne").value != "0" ){
		document.formLdap.action= "/PagesSante"+servletPath+"/recherchepersonne/importAnnuaire";
		document.formLdap.submit();
	}
	else{
		alert("Veuillez d'abord sélectionner une personne à descendre dans l'annuaire de sécurité.");
	}
	
}

/**
 * fusionne une personne de l'annuaire LDAP avec une personne de PagesSanté
 */
function fusionLDAP(){
	
	if (document.getElementById("regid").value != "" && document.getElementById("regid").value != "0" && document.getElementById("idpersonne").value != "" && document.getElementById("idpersonne").value != "0"){
		document.formLdap.action= "/PagesSante"+servletPath+"/recherchepersonne/fusion";
		document.formLdap.submit();
	}
	else{
		alert("Veuillez d'abord sélectionner les deux personnes à fusionner.");
	}
	
}

/**
 * importe une personne de PagesSanté dans l'annuaire LDAP
 */
function importPagesSante(){
	
	if(document.getElementById("regid").value != "" && document.getElementById("regid").value != "0"){
		document.formLdap.action= "/PagesSante"+servletPath+"/recherchepersonne/importPagesSante";
		document.formLdap.submit();
	}
	else{
		alert("Veuillez d'abord sélectionner une personne.");
	}
}


/* FONCTIONS POUR LA CREATION D'UNE ENTITE */

function creationStructure(){
	
	document.formRechStructure.action = "/PagesSante"+servletPath+"/structure/creationstructure";
	document.formRechStructure.submit();
	
}

function creationSite(){
	
	document.getElementById("libsite").value = document.getElementById("raisonsocialesite").value;
	
	document.formCreerSite.submit();
	
}

function creationElement(){
	

	document.getElementById("libelement").value = document.getElementById("liborganisation").value;
	
	document.formCreerElement.submit();
	
}

function creationFonction(){
	document.formCreerFonction.submit();
}

function creationPersonne(){
	document.formRechPersonne.action = "/PagesSante"+servletPath+"/personne/creationpersonne";
	document.formRechPersonne.method="post";
	document.formRechPersonne.submit();
}

function creationGroupe(){	
	window.location = "/PagesSante"+servletPath+"/groupe/creationgroupe";
}


/* FONCTIONS POUR LA CREATION D'UN GROUP */

// permet d'afficher le picker pour la création de groupes
function initAddToGroupe(typerecherche) {
	
	var url;
	
	// on change l'url en fonction de la recherche
	if (typerecherche == 'pro') {
		url = '/PagesSante'+servletPath+'/rechercheprofessionnel/addtogroup';
	} else {
		url = '/PagesSante'+servletPath+'/rechercheetablissement/addtogroup';
	}
	
	// on appel le jsp et on l'affiche dans le dialog
	$.get(url , function(data) {
		$('#pickergroupe').html(data);
		
		
		// on change l'action et l'url en fonction de la recherche
		if (typerecherche == 'pro') {
			$("#formAddToGroup").attr("action", "/PagesSante"+servletPath+"/rechercheprofessionnel/savetogroup");
		} else {
			$("#formAddToGroup").attr("action", "/PagesSante"+servletPath+"/rechercheetablissement/savetogroup");
		}
		
		$( "#pickergroupe" ).dialog({
			height:472,
			width:500,
			modal: true,
			title: "Ajouter à un groupe"
		});
		
	});

	
}

function validCreateGroupe(name) {
	
	alertNice("Création de groupe","Groupe \""+name+"\" correctement créé.");
	
	//on ferme le picker
	$( "#pickergroupe" ).dialog( "close" );
	
	//on vide le dialog
	$( "#pickergroupe" ).empty();
	
}

function validAddToGroupe(name) {
	
	alertNice("Ajout à un groupe","Résultat ajouté au groupe \""+name+"\".");
	
	//on ferme le picker
	$( "#pickergroupe" ).dialog( "close" );
	
	//on vide le dialog
	$( "#pickergroupe" ).empty();
	
}

function cancelAddToGroup() {
	//on ferme le picker
	$( "#pickergroupe" ).dialog( "close" );
	
	//on vide le dialog
	$( "#pickergroupe" ).empty();
}

function changeIntervallePJ(){
	
	n = document.getElementById("intervalle").value;//on récupère le numero de page a afficher
	
	$("#tableauPJ").load("/PagesSante"+servletPath+"/recherchepagesjaunes/changeintervalle", {intervalle:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/recherchepagesjaunes/changenavigation", {numpage:1});
	
}

function changeIntervalleRechEtabAv(){
	
	n = document.getElementById("intervalle").value;//on récupère le numero de page a afficher
	
	if(document.getElementById("distance") != null){
		$("#chargementresultat").empty();
		$("#chargementresultat").show();
		$("#results").hide();	
	
		spinner("chargementresultat", 70, 120, 12, 25, "#000");
	}

	$("#tableauEtab").load("/PagesSante"+servletPath+"/rechercheetablissement/changeintervalle", {intervalle:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/rechercheetablissement/changenavigationavancee", {numpage:1});
}

function changeIntervalleRechEtab(){
	
	n = document.getElementById("intervalle").value;//on récupère le numero de page a afficher
	
	if(document.getElementById("distance") != null){
		$("#chargementresultat").empty();
		$("#chargementresultat").show();
		$("#results").hide();	
	
		spinner("chargementresultat", 70, 120, 12, 25, "#000");
	}
	
	$("#tableauEtab").load("/PagesSante"+servletPath+"/rechercheetablissement/changeintervalle", {intervalle:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/rechercheetablissement/changenavigation", {numpage:1});
}

function changeIntervalleRechProAv(){
n = document.getElementById("intervalle").value;//on récupère le numero de page a afficher
	
	$("#tableauProf").load("/PagesSante"+servletPath+"/rechercheprofessionnel/changeintervalle", {intervalle:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/rechercheprofessionnel/changenavigationavancee", {numpage:1});
}

function changeIntervalleRechPro(){
n = document.getElementById("intervalle").value;//on récupère le numero de page a afficher
	
	$("#tableauProf").load("/PagesSante"+servletPath+"/rechercheprofessionnel/changeintervalle", {intervalle:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/rechercheprofessionnel/changenavigation", {numpage:1});
}

/* Recherches de gestion de données */

function rechercheStructure(){
	
	window.location = "/PagesSante"+servletPath+"/recherchestructure/recherche?raisonsociale=" + document.getElementById("raisonsociale").value;
	
}

function rechercheSite(){
	
	window.location = "/PagesSante"+servletPath+"/recherchesite/recherche?raisonsocialesite=" + document.getElementById("raisonsocialesite").value + "&raisonsocialestructure=" + document.getElementById("raisonsocialestructure").value;
	
}

function exportRechercheEtablissement(){
	
	// on appel le jsp et on l'affiche dans le dialog
	$.get("/PagesSante"+servletPath+"/rechercheetablissement/criteresexport" , function(data) {
		
		$('#dialog').html(data);
		
		
		$( "#dialog" ).dialog({
				height:300,
				width:300,
				modal: true,
				title: "Type d'export Excel",
		    	closeText: "Fermer"
		});
		
	});
	
}

function exportRechercheProfessionnel(){
	
	// on appel le jsp et on l'affiche dans le dialog
	$.get("/PagesSante"+servletPath+"/rechercheprofessionnel/criteresexport" , function(data) {
		
		$('#dialog').html(data);
		
		
		$( "#dialog" ).dialog({
				height:460,
				width:310,
				modal: true,
				title: "Type d'export Excel",
		    	closeText: "Fermer"
		});
		
	});
	
}

function fermerexport(){
	$('#dialog').dialog( "close" );
}

function telechargerExportEtablissement(lien){
	
	var reponse = "";
	
	reponse = 'L\'export s\'est bien déroulé, le fichier est disponible par le lien ci-dessous (utiliser "enregistrer-sous") <br /><br /> ';
	reponse = reponse + "<center><a href='" + lien + "' target='_new' >Télécharger l\'export</a></center> <br />";
	reponse = reponse + "<center><input type='submit' value='OK' class='btnexport' onclick='fermerexport()' /></center>";
	
	$('#dialog').html(reponse);
	
	
	$( "#dialog" ).dialog({
			height:200,
			width:300,
			modal: true,
			title: "Téléchargement de l'export",
	    	closeText: "Fermer"
	});
	
}

function telechargerExportProfessionnel(lien){
	
	var reponse = "";
	
	reponse = 'L\'export s\'est bien déroulé, le fichier est disponible par le lien ci-dessous (utiliser "enregistrer-sous") <br /><br /> ';
	reponse = reponse + "<center><a href='" + lien + "' target='_new' >Télécharger l\'export</a></center> <br />";
	reponse = reponse + "<center><input type='submit' value='OK' class='btnexport' onclick='fermerexport()' /></center>";
	
	$('#dialog').html(reponse);
	
	
	$( "#dialog" ).dialog({
			height:200,
			width:300,
			modal: true,
			title: "Téléchargement de l'export",
	    	closeText: "Fermer"
	});
	
}

/* Echelles de lettre */

function echelleLettreGroupeStatique(lettre){
	$("#tableauGroupe").load("/PagesSante"+servletPath+"/recherchegroupe/echellegroupestatique", {lettre:lettre});//on change le tableau
	
	var navigation = "<table>"
					+ "<tbody>"
					+ "<tr>"
					+ "<td>"
					+ "<input class='icone' type='image' src='/PagesSante/images/Transparent.gif'>"
					+ "</td>"
					+ "<td>"
					+ "<input class='icone' type='image' src='/PagesSante/images/Transparent.gif'>"
					+ "</td>"
					+ "<td>&nbsp;&nbsp;&nbsp;</td>"
					+ "<td>"
					+ "<span class='Valeur'></span>"
					+ "</td>"
					+ "<td>&nbsp;&nbsp;&nbsp;</td>"
					+ "<td>"
					+ "<input class='icone' type='image' src='/PagesSante/images/Transparent.gif'>"
					+ "</td>"
					+ "<td>"
					+ "<input class='icone' type='image' src='/PagesSante/images/Transparent.gif'>"
					+ "</td>"
					+ "</tr>"
					+ "</tbody>"
					+ "</table>";
	
	if (lettre == "tous"){
		$("#navigation").load("/PagesSante"+servletPath+"/recherchegroupe/changenavigation", {numpage:1});
	}
	else{
		$("#navigation").html(navigation);
	}
	
}

function echelleLettreGroupeDynamique(lettre){
	$("#tableauGroupeDynamique").load("/PagesSante"+servletPath+"/recherchegroupe/echellegroupedynamique", {lettre:lettre});//on change le tableau
	
	var navigation = "<table>"
					+ "<tbody>"
					+ "<tr>"
					+ "<td>"
					+ "<input class='icone' type='image' src='/PagesSante/images/Transparent.gif'>"
					+ "</td>"
					+ "<td>"
					+ "<input class='icone' type='image' src='/PagesSante/images/Transparent.gif'>"
					+ "</td>"
					+ "<td>&nbsp;&nbsp;&nbsp;</td>"
					+ "<td>"
					+ "<span class='Valeur'></span>"
					+ "</td>"
					+ "<td>&nbsp;&nbsp;&nbsp;</td>"
					+ "<td>"
					+ "<input class='icone' type='image' src='/PagesSante/images/Transparent.gif'>"
					+ "</td>"
					+ "<td>"
					+ "<input class='icone' type='image' src='/PagesSante/images/Transparent.gif'>"
					+ "</td>"
					+ "</tr>"
					+ "</tbody>"
					+ "</table>";
	
	if (lettre == "tous"){
		$("#navigationdynamique").load("/PagesSante"+servletPath+"/recherchegroupe/changenavigationgroupedynamique", {numpage:1});
	}
	else{
		$("#navigationdynamique").html(navigation);
	}

}
