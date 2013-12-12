/* FONCTIONS GENERALES */

function getCookie(name){
    if(document.cookie.length == 0)
      return null;

    var regSepCookie = new RegExp('(; )', 'g');
    var cookies = document.cookie.split(regSepCookie);

    for(var i = 0; i < cookies.length; i++){
      var regInfo = new RegExp('=', 'g');
      var infos = cookies[i].split(regInfo);
      if(infos[0] == name){
        return unescape(infos[1]);
      }
    }
    return null;
  }

function trim (myString)
{
	return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
}

function toggle_visibility(frameset_obj,obj) {
	
    //var max_height = 150;
    //var min_height = 58;
    var frameset = top.document.getElementById(frameset_obj);
    var el = document.getElementById(obj);

    //cache le bandeau
    if (el.style.display != 'none') {
       el.style.display = 'none';
    } else {
       el.style.display = 'block';
    }
    
    //reduit le frameset
    if (frameset.rows != '150px,*') {
       frameset.rows = '150px,*';
    } else {
       frameset.rows = '58px,*';
    }
}

function quit() {
	
 opener = self;
 self.close();
 top.location.href="https://www.fc-sante.fr/portail/";
 
}

function cleanField(elementId, originalValue) {
	
	var element = document.getElementById(elementId);
		
	if (element.value == originalValue) {
		element.value = "";
	}

}

function restoreField(elementId, originalValue) {
	
	var element = document.getElementById(elementId);
	if (element.value.replace(/\s/g,"") == "") {
			element.value = originalValue;
	}
	
}

//fonction d'alerte à base je JQuery
function alertNice(titre,texte) {
	$("#dialog-message").html("<p>"+texte+"</p>");
	
	$( "#dialog-message" ).dialog({
	    modal: true,
	    dialogClass: "no-close",
	    title:titre,
	    position:"center",
	    buttons: {
	    	"Ok": function() {      	
	        	$( this ).dialog( "close" );
	        }
	      }
	    });
}


/* AUTRES */


function navigationDerniereMAJ(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauMAJ").load("/PagesSante"+servletPath+"/dernieremiseajour/changetableaumaj", {numpage:n});//on change le tableau

}

function afficherDerniereMAJ(){

	$("#chargementresultat").empty();
	$("#chargementresultat").show();	

	spinner("chargementresultat", 70, 120, 12, 25, "#000");
	
	var date = document.getElementById("datepicker").value;		
	var dateco = date.substr(3,2) + "/" + date.substr(0,2) + "/" + date.substr(6,4);	
	
	$("#tableauMAJ").load("/PagesSante"+servletPath+"/dernieremiseajour/afficher", {dateconnexion:dateco});//on change le tableau

	
}

function navigationMembreGroupe(n){
	
	$("#tableauMembre").load("/PagesSante"+servletPath+"/groupe/changetableaugroupe", {numpage:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/groupe/changenavigationgroupe", {numpage:n});//on change les références des boutons suivant, précédent...

}

function navigationMembreGroupeDynamique(n){
	
	$("#tableauMembre").load("/PagesSante"+servletPath+"/groupedynamique/changetableaugroupe", {numpage:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/groupedynamique/changenavigationgroupe", {numpage:n});//on change les références des boutons suivant, précédent...

}

function navigationMembreCreationGroupe(n){
	
	$("#tableauMembre").load("/PagesSante"+servletPath+"/groupe/changetableaumembre", {numpage:n});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/groupe/changenavigationmembre", {numpage:n});//on change les références des boutons suivant, précédent...

}

function navigationFonctionsSite(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauFonction").load("/PagesSante"+servletPath+"/site/changetableaufonction", {numpage:n,page:'TableauFonctionsSite'});//on change le tableau
	$("#navigationFonction").load("/PagesSante"+servletPath+"/site/changenavigationfonction", {numpage:n,page:'NavigationFonctionsSite'});//on change les références des boutons suivant, précédent...

	
}

function navigationOrganisationsSite(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauOrganisation").load("/PagesSante"+servletPath+"/site/changetableauorganisation", {numpage:n,page:'TableauOrganisationsSite'});//on change le tableau
	$("#navigationOrganisation").load("/PagesSante"+servletPath+"/site/changenavigationorganisation", {numpage:n,page:'NavigationOrganisationsSite'});//on change les références des boutons suivant, précédent...

	
}

function navigationFonctionsStructure(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauFonction").load("/PagesSante"+servletPath+"/structure/changetableaufonction", {numpage:n,page:'TableauFonctionsStructure'});//on change le tableau
	$("#navigationFonction").load("/PagesSante"+servletPath+"/structure/changenavigationfonction", {numpage:n,page:'NavigationFonctionsStructure'});//on change les références des boutons suivant, précédent...

}

function navigationOrganisationsStructure(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauOrganisation").load("/PagesSante"+servletPath+"/structure/changetableauorganisation", {numpage:n,page:'TableauOrganisationsStructure'});//on change le tableau
	$("#navigationOrganisation").load("/PagesSante"+servletPath+"/structure/changenavigationorganisation", {numpage:n,page:'NavigationOrganisationsStructure'});//on change les références des boutons suivant, précédent...
	
}


function navigationFonctionsElement(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauFonction").load("/PagesSante"+servletPath+"/element/changetableaufonction", {numpage:n,page:'TableauFonctionsElement'});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/element/changenavigationfonction", {numpage:n,page:'NavigationFonctionsElement'});//on change les références des boutons suivant, précédent...

	
}

function navigationOrganisationsElement(n){
	
	if(n == 0)
		n = document.getElementById("pagerech").value;//on récupère le numéro de page à afficher
	
	$("#tableauFonction").load("/PagesSante"+servletPath+"/element/changetableauorganisation", {numpage:n,page:'TableauOrganisationsElement'});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/element/changenavigationorganisation", {numpage:n,page:'NavigationOrganisationsElement'});//on change les références des boutons suivant, précédent...

	
}

/**
 * affiche le gestionnaire sélectionné (création d'un groupe)
 */
function valideGestionnaire(){
	
	var existe = false;
	var id = "";
	var description = "";
	var idtypegestionnaire = "";
	var typegestionnaire = "";
	var rattachement = "";
	
	id = document.getElementById("idgestionnaire").value;
	description = document.getElementById("descgestionnaire").value;
	idtypegestionnaire = document.getElementById('idtypegestionnaire').value.split(',')[0];
	typegestionnaire = document.getElementById('idtypegestionnaire').value.split(',')[1];
	rattachement = document.getElementById("rattachement").value;
	
	if(document.getElementById("g" + id) != null)
		existe = true;
		
	
	if(existe == false){
		
		$("#tablegestionnaire").show();
		
		var classe = "";
		var len = document.getElementsByName("gestionnaire").length;
		
		if (len%2 == 0)
			classe = "TableauLignes";
		else	
			classe = "TableauLignesPyjama";
		
		//on récupère les espaces d'animations déjà insérés dans la zone de recherche
		contenu = document.getElementById("tablegestionnaire").innerHTML;

		//création du nouvel espace d'animation territorial sous la forme de checkbox
		ligne = '<tr id="g' + id + '"><td class="' + classe + '" ><input type="hidden" name="gestionnaire" value="' + id + '" />' + description + '</td><td class="' + classe + '" >' + rattachement + '</td><td class="' + classe + '" ><input type="hidden" name="typegestionnaire" value="' + idtypegestionnaire + '" />' + typegestionnaire + '</td><td class="' + classe + '" ><img src="/PagesSante/images/icone_action_supprimer.png" title="Supprimer" alt="Supprimer" onclick="effaceGestionnaire(\'g' + id + '\')"></td></tr></tbody>';
		
		contenu = contenu.replace("</tbody>",ligne);
		contenu = contenu.replace("</TBODY>",ligne);
		
		//on l'insère dans la zone de recherche
		document.getElementById("tablegestionnaire").innerHTML = contenu;

		//on ferme le picker
		$( "#dialog" ).dialog( "close" );
		
		//on vide le dialog
		$( "#dialog" ).empty();
		
		//on affiche la table
		$('#tablegestionnaire').show();
		$('#pasgestionnaire').hide();
		
	}
	else{
		alert("La compétence sélectionnée est déjà dans la liste.");
	}
	
}


function declarerWarning(){
	document.formWarning.submit();
}


function modifierStructure(idstructure,tab,pageretour, idprofil){

	var active = 0;
	
	if(tab == 2){
		active = $( "#Onglets" ).tabs( "option", "active" );		
	}

	if(idprofil == 5){
	
		$.ajax({
	        url: "/PagesSante"+servletPath+"/structure/isgestionnaire?idstructure=" + idstructure + "&action=modification", // le nom du fichier indiqué dans le formulaire
	        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
	        dataType: 'json',
	        success: function(json) { // je récupère la réponse du fichier PHP
	         	
				//si la réponse est pas OK
	            if(json.reponse == 'OK') {
					
	            	window.location = "/PagesSante"+servletPath+"/structure/modificationstructure?idstructure=" + idstructure + "&pageretour=" + pageretour + "&tab=" + active;
	                
	            } else {
	            	alertNice("Erreur",json.reponse); // j'affiche cette réponse
	            }
	        }
	    });
		
	}
	else{
		window.location = "/PagesSante"+servletPath+"/structure/modificationstructure?idstructure=" + idstructure + "&pageretour=" + pageretour + "&tab=" + active;
	}
		
}

function modifierElement(idelement,tab,pageretour, idprofil){
		
	var active = 0;
	
	if(tab == 2){
		active = $( "#Onglets" ).tabs( "option", "active" );

		if (active > 1){//il ya une onglet en plus dans la partie création d'un élément
			active = active + 1;
		}

	}
	
	if(idprofil == 5){
		
		$.ajax({
	        url: "/PagesSante"+servletPath+"/element/isgestionnaire?idelement=" + idelement + "&action=modification", // le nom du fichier indiqué dans le formulaire
	        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
	        dataType: 'json',
	        success: function(json) { // je récupère la réponse du fichier PHP
	         	
				//si la réponse est pas OK
	            if(json.reponse == 'OK') {
					
	            	window.location = "/PagesSante"+servletPath+"/structure/modificationstructure?idstructure=" + idstructure + "&pageretour=" + pageretour + "&tab=" + active;
	                
	            } else {
	            	alertNice("Erreur",json.reponse); // j'affiche cette réponse
	            }
	        }
	    });
		
	}
	else{
		window.location = "/PagesSante"+servletPath+"/element/modificationelement?idelement=" + idelement + "&pageretour=" + pageretour + "&tab=" + active;
	}
	
}

function modifierSite(idsite,tab,pageretour,idprofil){
		
	var active = 0;
	
	if(tab == 2){
		active = $( "#Onglets" ).tabs( "option", "active" );
	}
	
	if(idprofil == 5){
		
		$.ajax({
	        url: "/PagesSante"+servletPath+"/site/isgestionnaire?idsite=" + idsite + "&action=modification", // le nom du fichier indiqué dans le formulaire
	        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
	        dataType: 'json',
	        success: function(json) { // je récupère la réponse du fichier PHP
	         	
				//si la réponse est pas OK
	            if(json.reponse == 'OK') {
					
	            	window.location = "/PagesSante"+servletPath+"/site/modificationsite?idsite=" + idsite + "&pageretour=" + pageretour + "&tab=" + active;
	                
	            } else {
	            	alertNice("Erreur",json.reponse); // j'affiche cette réponse
	            }
	        }
	    });
		
	}
	else{
		window.location = "/PagesSante"+servletPath+"/site/modificationsite?idsite=" + idsite + "&pageretour=" + pageretour + "&tab=" + active;
	}
	 
}

function modifierFonction(idfonction,tab,pageretour,idprofil){
		
	var active = 0;
	
	if(tab == 2){
		active = $( "#Onglets" ).tabs( "option", "active" );				
	}
	
	if(idprofil == 5){
		
		$.ajax({
	        url: "/PagesSante"+servletPath+"/fonction/isgestionnaire?idfonction=" + idfonction + "&action=modification", // le nom du fichier indiqué dans le formulaire
	        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
	        dataType: 'json',
	        success: function(json) { // je récupère la réponse du fichier PHP
	         	
				//si la réponse est pas OK
	            if(json.reponse == 'OK') {
					
	            	window.location = "/PagesSante"+servletPath+"/fonction/modificationfonction?idfonction=" + idfonction + "&pageretour=" + pageretour + "&tab=" + active;
	                
	            } else {
	            	alertNice("Erreur",json.reponse); // j'affiche cette réponse
	            }
	        }
	    });
		
	}
	else{
		window.location = "/PagesSante"+servletPath+"/fonction/modificationfonction?idfonction=" + idfonction + "&pageretour=" + pageretour + "&tab=" + active;
	}
	
}

function modifierPersonne(idpersonne,tab,pageretour,idfonction,idprofil){
				
	var active = 0;
	
	if (idfonction == ""){
		idfonction = 0;
	}
	
	if(tab == 2){
		active = $( "#Onglets" ).tabs( "option", "active" );
	}
	
	if(idprofil == 5){
		
		$.ajax({
	        url: "/PagesSante"+servletPath+"/personne/isgestionnaire?idpersonne=" + idpersonne, // le nom du fichier indiqué dans le formulaire
	        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
	        dataType: 'json',
	        success: function(json) { // je récupère la réponse du fichier PHP
	         	
				//si la réponse est pas OK
	            if(json.reponse == 'OK') {
					
	            	window.location = "/PagesSante"+servletPath+"/personne/modificationpersonne?idpersonne=" + idpersonne + "&pageretour=" + pageretour + "&tab=" + active + "&idfonction=" + idfonction;
	                
	            } else {
	            	alertNice("Erreur",json.reponse); // j'affiche cette réponse
	            }
	        }
	    });
		
	}
	else{
		window.location = "/PagesSante"+servletPath+"/personne/modificationpersonne?idpersonne=" + idpersonne + "&pageretour=" + pageretour + "&tab=" + active + "&idfonction=" + idfonction;
	}
	
}

/* FERMETURE DES ENTITES */

function fermerElement(id,idlibelement,pageencours,idprofil){

	if(idprofil == 5){
		
		$.ajax({
	        url: "/PagesSante"+servletPath+"/element/isgestionnaire?idelement=" + id + "&action=fermeture", // le nom du fichier indiqué dans le formulaire
	        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
	        dataType: 'json',
	        success: function(json) { // je récupère la réponse du fichier PHP
	         	
				//si la réponse est pas OK
	            if(json.reponse == 'OK') {
					
	            	if(confirm("Etes-vous sûr de vouloir fermer cette organisation?")){
	            		if(pageencours == "CreationStructure" || pageencours == "CreationSite" || pageencours == "CreationElement"){
	            			
	            			if(document.getElementById(idlibelement).innerHTML.split('Fermé').length <=1){
	            				document.getElementById(idlibelement).innerHTML = document.getElementById(idlibelement).innerHTML + " (Fermé)";
	            				$("#dialog").load("/PagesSante"+servletPath+"/element/fermerelement", {idelement:id,page:pageencours});
	            			}
	            		}
	            		else{
	            			document.getElementById("idelemsupr").value = id;
	            			document.formSuprElement.submit();
	            		}
	            	}
	                
	            } else {
	            	alertNice("Erreur",json.reponse); // j'affiche cette réponse
	            }
	        }
	    });
		
	}
	else{
		if(confirm("Etes-vous sûr de vouloir fermer cette organisation?")){
    		if(pageencours == "CreationStructure" || pageencours == "CreationSite" || pageencours == "CreationElement"){
    			
    			if(document.getElementById(idlibelement).innerHTML.split('Fermé').length <=1){
    				document.getElementById(idlibelement).innerHTML = document.getElementById(idlibelement).innerHTML + " (Fermé)";
    				$("#dialog").load("/PagesSante"+servletPath+"/element/fermerelement", {idelement:id,page:pageencours});
    			}
    		}
    		else{
    			document.getElementById("idelemsupr").value = id;
    			document.formSuprElement.submit();
    		}
    	}
	}
	
}

function fermerFonction(id,idlibfonction,pageencours,idprofil){

	if(idprofil == 5){
		
		$.ajax({
	        url: "/PagesSante"+servletPath+"/fonction/isgestionnaire?idfonction=" + id + "&action=fermeture", // le nom du fichier indiqué dans le formulaire
	        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
	        dataType: 'json',
	        success: function(json) { // je récupère la réponse du fichier PHP
	         	
				//si la réponse est pas OK
	            if(json.reponse == 'OK') {
					
	            	if(confirm("Etes-vous sûr de vouloir fermer cette fonction?")){
	            		
	            		if(pageencours == "CreationStructure" || pageencours == "CreationSite" || pageencours == "CreationElement"){
	            			if(document.getElementById(idlibfonction).innerHTML.split('Terminée').length <=1){
	            				document.getElementById(idlibfonction).innerHTML = document.getElementById(idlibfonction).innerHTML + " (Terminée)";
	            				$("#dialog").load("/PagesSante"+servletPath+"/fonction/fermerfonction", {idfonction:id,page:pageencours});
	            			}
	            		}
	            		else{
	            			document.getElementById("idfonctionsupr").value = id;
	            			document.formSuprFonction.submit();
	            		}
	            	
	            	}
	                
	            } else {
	            	alertNice("Erreur",json.reponse); // j'affiche cette réponse
	            }
	        }
	    });
		
	}
	else{
		if(confirm("Etes-vous sûr de vouloir fermer cette fonction?")){
    		
    		if(pageencours == "CreationStructure" || pageencours == "CreationSite" || pageencours == "CreationElement"){
    			if(document.getElementById(idlibfonction).innerHTML.split('Terminée').length <=1){
    				document.getElementById(idlibfonction).innerHTML = document.getElementById(idlibfonction).innerHTML + " (Terminée)";
    				$("#dialog").load("/PagesSante"+servletPath+"/fonction/fermerfonction", {idfonction:id,page:pageencours});
    			}
    		}
    		else{
    			document.getElementById("idfonctionsupr").value = id;
    			document.formSuprFonction.submit();
    		}
    	
    	}
	}
	
}

function fermerSite(id,idlibsite,page,idprofil){

	if(idprofil == 5){
		
		$.ajax({
	        url: "/PagesSante"+servletPath+"/site/isgestionnaire?idsite=" + id + "&action=fermeture", // le nom du fichier indiqué dans le formulaire
	        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
	        dataType: 'json',
	        success: function(json) { // je récupère la réponse du fichier PHP
	         	
				//si la réponse est pas OK
	            if(json.reponse == 'OK') {
					
	            	if(confirm("Etes-vous sûr de vouloir fermer ce site?")){
	            		if(page == "CreationStructure"){
	            			if(document.getElementById(idlibsite).innerHTML.split('Fermé').length <=1){
	            				document.getElementById(idlibsite).innerHTML = document.getElementById(idlibsite).innerHTML + " (Fermé)";
	            				$("#dialog").load("/PagesSante"+servletPath+"/site/supprimersite", {idsite:id,page:"CreationStructure"});
	            			}
	            		}
	            		else{
	            			document.getElementById("idsitesupr").value = id;
	            			document.formSuprSite.submit();
	            		}
	            	}
	                
	            } else {
	            	alertNice("Erreur",json.reponse); // j'affiche cette réponse
	            }
	        }
	    });
		
	}
	else{
		if(confirm("Etes-vous sûr de vouloir fermer ce site?")){
    		if(page == "CreationStructure"){
    			if(document.getElementById(idlibsite).innerHTML.split('Fermé').length <=1){
    				document.getElementById(idlibsite).innerHTML = document.getElementById(idlibsite).innerHTML + " (Fermé)";
    				$("#dialog").load("/PagesSante"+servletPath+"/site/supprimersite", {idsite:id,page:"CreationStructure"});
    			}
    		}
    		else{
    			document.getElementById("idsitesupr").value = id;
    			document.formSuprSite.submit();
    		}
    	}
	}
	
}

function supprimerStructure(idstructure){
	
	if(idprofil == 5){
		
		$.ajax({
	        url: "/PagesSante"+servletPath+"/structure/isgestionnaire?idstructure=" + idstructure + "&action=fermeture", // le nom du fichier indiqué dans le formulaire
	        type: "GET", // la méthode indiquée dans le formulaire (get ou post)
	        dataType: 'json',
	        success: function(json) { // je récupère la réponse du fichier PHP
	         	
				//si la réponse est pas OK
	            if(json.reponse == 'OK') {
					
	            	if(confirm("Etes-vous sûr de vouloir fermer cette structure?")){
	            		if (document.getElementById("page").value == "RechercheStructureJuridique"){
	            			document.getElementById("raisonsocialestructure").value = document.getElementById("raisonsociale").value;
	            		}
	            		
	            		document.getElementById("idstructuresupr").value=idstructure;
	            		
	            		document.formSuprStruc.submit();
	            	}
	                
	            } else {
	            	alertNice("Erreur",json.reponse); // j'affiche cette réponse
	            }
	        }
	    });
		
	}
	else{
		if(confirm("Etes-vous sûr de vouloir fermer cette structure?")){
    		if (document.getElementById("page").value == "RechercheStructureJuridique"){
    			document.getElementById("raisonsocialestructure").value = document.getElementById("raisonsociale").value;
    		}
    		
    		document.getElementById("idstructuresupr").value=idstructure;
    		
    		document.formSuprStruc.submit();
    	}
	}
	
}

function cookieModification(){
	document.cookie = 'modification=true;';
}

/**
 * fonction qui valide la recherche rapide type pages jaunes
 * @returns {Boolean}
 */
function validsearch() {
	
	var quiquoi = document.getElementById("recherchePJ_QuiQuoi").value;//on récupère le champ quiquoi
	var ou = document.getElementById("recherchePJ_Ou").value;//on récupère le champ ou
	var taille =  document.documentElement.clientHeight;
		
	var quiquoi_valid = "Qui ? / Quoi ?";
	var ou_valid = "Où ?";
	
	if ((quiquoi != quiquoi_valid) && (quiquoi.replace(/\s/g,"") != "")) {//si le champ quiquoi est remplit
		if ((ou != ou_valid) && (ou.replace(/\s/g,"") != "")) {//si le champ ou est remplit
			
								
			//on change la référence du lien du bouton en ajoutant les paramètres
			$("#go_recherche").attr("href","/PagesSante"+servletPath+"/recherchepagesjaunes?quiQuoi="+quiquoi+"&ou="+ou+"&taille=" + taille);
			
			//on change l'image du bouton recherche 
			$("#recherchePJ_BtnRecherche").hide();
			$("#spinchargement").show();
			$("#taillespinchargement").width("32");
			
			spinner("spinchargement", 10, 5, 8, 4, "#fff");
		
		} else {
			alert("Veuillez saisir une valeur Où ?.");
		}
	} else {
		alert("Veuillez saisir une valeur Qui ? / Quoi.");
	}
	
	return false;
}

function modifierGroupe(idgroupe,recuponglet){
	if(recuponglet == "false"){
		window.location = "/PagesSante"+servletPath+"/groupe/modificationgroupe?idgroupe=" + idgroupe;
	}
	else{		
		var tab = $( "#Onglets" ).tabs( "option", "active" );	
		
		//il n'y a pas l'onglet membre archivé en modification
		if(tab == 2){
			tab = 0;
		}
		else if(tab == 3){
			tab = 2;
		}

		window.location = "/PagesSante"+servletPath+"/groupe/modificationgroupe?idgroupe=" + idgroupe + "&tab=" + tab;
	}
}


function archiverMembreCreationGroupe(idgroupe,identite,type){
	
	if (confirm("Etes-vous sûr de vouloir supprimer ce membre du groupe ?")){
		$("#dialog").load("/PagesSante"+servletPath+"/groupe/archivergroupe", {idgroupe:idgroupe,identite:identite,typeentite:type});
		$("#tableauMembre").load("/PagesSante"+servletPath+"/groupe/changetableaumembre", {numpage:1});//on change le tableau
		$("#navigation").load("/PagesSante"+servletPath+"/groupe/changenavigationgroupe", {numpage:1});//on change les références des boutons suivant, précédent...
	}
	
}

function archiverAdhesionGroupeStructure(idchamparchive,idligne,idgroupe,identite,type){
	
	if (confirm("Etes-vous sûr de ne plus vouloir appartenir à ce groupe ?")){
				
		if(document.getElementById(idligne).innerHTML.split("Archivé").length > 1){
			alert("La structure n'appartient déjà plus à  ce groupe.");
		}
		else{
			$("#dialog").load("/PagesSante"+servletPath+"/groupe/archivergroupe", {idgroupe:idgroupe,identite:identite,typeentite:type});
			document.getElementById(idligne).innerHTML = document.getElementById(idligne).innerHTML + " (Archivé)";
			document.getElementById(idchamparchive).value="true";
		}
	}
	
}

function archiverAdhesionGroupeSite(idchamparchive,idligne,idgroupe,identite,type){
	
	if (confirm("Etes-vous sûr de ne plus vouloir appartenir à ce groupe ?")){
				
		if(document.getElementById(idligne).innerHTML.split("Archivé").length > 1){
			alert("Le site n'appartient déjà plus à  ce groupe.");
		}
		else{
			$("#dialog").load("/PagesSante"+servletPath+"/groupe/archivergroupe", {idgroupe:idgroupe,identite:identite,typeentite:type});
			document.getElementById(idligne).innerHTML = document.getElementById(idligne).innerHTML + " (Archivé)";
			document.getElementById(idchamparchive).value="true";
		}
	}
	
}

function archiverAdhesionGroupeElement(idchamparchive,idligne,idgroupe,identite,type){
	
	if (confirm("Etes-vous sûr de ne plus vouloir appartenir à ce groupe ?")){
				
		if(document.getElementById(idligne).innerHTML.split("Archivé").length > 1){
			alert("L'élément n'appartient déjà plus à  ce groupe.");
		}
		else{
			$("#dialog").load("/PagesSante"+servletPath+"/groupe/archivergroupe", {idgroupe:idgroupe,identite:identite,typeentite:type});
			document.getElementById(idligne).innerHTML = document.getElementById(idligne).innerHTML + " (Archivé)";
			document.getElementById(idchamparchive).value="true";
		}
	}
	
}

function archiverAdhesionGroupeFonction(idchamparchive,idligne,idgroupe,identite,type){
	
	if (confirm("Etes-vous sûr de ne plus vouloir appartenir à ce groupe ?")){
				
		if(document.getElementById(idligne).innerHTML.split("Archivé").length > 1){
			alert("La fonction n'appartient déjà plus à  ce groupe.");
		}
		else{
			$("#dialog").load("/PagesSante"+servletPath+"/groupe/archivergroupe", {idgroupe:idgroupe,identite:identite,typeentite:type});
			document.getElementById(idligne).innerHTML = document.getElementById(idligne).innerHTML + " (Archivé)";
			document.getElementById(idchamparchive).value="true";
		}
	}
	
}

function archiverAdhesionGroupePersonne(idchamparchive,idligne,idgroupe,identite,type){
	
	if (confirm("Etes-vous sûr de ne plus vouloir appartenir à ce groupe ?")){
				
		if(document.getElementById(idligne).innerHTML.split("Archivé").length > 1){
			alert("La personne n'appartient déjà plus à  ce groupe.");
		}
		else{
			$("#dialog").load("/PagesSante"+servletPath+"/groupe/archivergroupe", {idgroupe:idgroupe,identite:identite,typeentite:type});
			document.getElementById(idligne).innerHTML = document.getElementById(idligne).innerHTML + " (Archivé)";
			document.getElementById(idchamparchive).value="true";
		}
	}
	
}


function supprimerGroupeStatique(idgroupe){
	if (confirm("Etes-vous sûr de vouloir supprimer ce groupe ?")){
		window.location = "/PagesSante"+servletPath+"/groupe/supprimergroupe?idgroupe=" + idgroupe;
	}
}

function supprimerGroupeDynamique(idgroupe){
	if (confirm("Etes-vous sûr de vouloir supprimer groupe ?")){
		window.location = "/PagesSante"+servletPath+"/groupedynamique/supprimergroupe?idgroupe=" + idgroupe;
	}
}



function enregistrerGroupeDynamique(){
	document.formGrpDynamique.submit();
}

function retourGroupeDynamique(idgroupe){
	
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
	        	
	        	document.getElementById("retour").value = "true";
        		document.formGrpDynamique.submit();
	
	        	$( this ).dialog( "close" );
	        },
	        "Non": function() {
	        	        	
	        	window.location = "/PagesSante"+servletPath+"/groupedynamique?idgroupe=" + idgroupe;
	        	
	        	$( this ).dialog( "close" );
	        	
	        }
	      }
	    });
	
}

/*******************************/
/* EXPORT GROUPE */
/******************************/

function exportGroupeStatique(){
	
	// on appel le jsp et on l'affiche dans le dialog
	$.get("/PagesSante"+servletPath+"/groupe/criteresexport" , function(data) {
		
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

function telechargerExportGroupeStatique(lien){
	
	var reponse = "";
	
	reponse = 'L\'export s\'est bien déroulé, le fichier est disponible par le lien ci-dessous (utiliser "enregistrer-sous") <br /><br /> ';
	reponse = reponse + "<center><a href='" + lien + "' target='_new' >Télécharger l\'export</a></center> <br />";
	reponse = reponse + "<center><input type='submit' value='OK' class='btnexport' onclick='fermerDialog()' /></center>";
	
	$('#dialog').html(reponse);
	
	
	$( "#dialog" ).dialog({
			height:200,
			width:300,
			modal: true,
			title: "Téléchargement de l'export",
	    	closeText: "Fermer"
	});
	
}

function fermerDialog(){
	//on ferme le picker
	$( "#dialog" ).dialog( "close" );
	
	//on vide le dialog
	$( "#dialog" ).empty();
}

function exportGroupeDynamique(){
	
	// on appel le jsp et on l'affiche dans le dialog
	$.get("/PagesSante"+servletPath+"/groupedynamique/criteresexport" , function(data) {
		
		$('#dialog').html(data);
		
		
		$( "#dialog" ).dialog({
				width:310,
				modal: true,
				title: "Type d'export Excel",
		    	closeText: "Fermer"
		});
		
	});
	
}

function telechargerExportGroupeDynamique(lien){
	
	var reponse = "";
	
	reponse = 'L\'export s\'est bien déroulé, le fichier est disponible par le lien ci-dessous (utiliser "enregistrer-sous") <br /><br /> ';
	reponse = reponse + "<center><a href='" + lien + "' target='_new' >Télécharger l\'export</a></center> <br />";
	reponse = reponse + "<center><input type='submit' value='OK' class='btnexport' onclick='fermerDialog()' /></center>";
	
	$('#dialog').html(reponse);
	
	
	$( "#dialog" ).dialog({
			height:200,
			width:300,
			modal: true,
			title: "Téléchargement de l'export",
	    	closeText: "Fermer"
	});
	
}


/***************************/
/* GOOGLE MAP */
/**************************/

function adresseGoogleMap(idadresse){
		
	if (idadresse == 0){
		alert("L'entité n'a pas d'adresse.");
	}
	else{
	
		$.get('/PagesSante'+servletPath+'/googlemap/afficheadresse?idadresse=' + idadresse , function(data) {
			$('#dialog').html(data);
		});
		
		$( "#dialog" ).dialog({
		height:600,
		width:500,
		modal: true,
		title: "Visualisation de l'adresse sur Google Map",
    	closeText: "Fermer"
		});
	
	}
	
}

function geolocalisationGoogleMaps(depart, iddestination){
	
	$.get('/PagesSante'+servletPath+'/googlemap/afficheitineraire?depart=' + depart + '&iddestination=' + iddestination , function(data) {
		$('#dialog').html(data);
	});
	
	$( "#dialog" ).dialog({
	height:400,
	width:500,
	modal: true,
	title: "Visualisation de l'itinéraire sur Google Map",
	closeText: "Fermer"
	});
	
}

function afficheMesStructures(){
	$("#messtructures").show();
	$("#menustructure").attr("onClick","masqueMesStructures()");
}

function afficheMesSites(){
	$("#messites").show();
	$("#menusite").attr("onClick","masqueMesSites()");
}

function afficheMesElements(){
	$("#meselements").show();
	$("#menuelement").attr("onClick","masqueMesElements()");
}

function masqueMesStructures(){
	$("#messtructures").hide();
	$("#menustructure").attr("onClick","afficheMesStructures()");
}

function masqueMesSites(){
	$("#messites").hide();
	$("#menusite").attr("onClick","afficheMesSites()");
}

function masqueMesElements(){
	$("#meselements").hide();
	$("#menuelement").attr("onClick","afficheMesElements()");
}


function verifierCompte(){
	
	var idpersonne = document.getElementsByName("personne")[0].value;
	
	if(idpersonne != null && idpersonne != ""){
		window.location = "/PagesSante"+servletPath+"/gestionprofils/verifiercompte?idpersonne=" + idpersonne;
	}
	else{
		alert("Veuillez sélectionner une personne.");
	}
	
}

function retirerRole(){
	var idcompte = "" ;
	
	for(var i = 0; i < document.getElementsByName("idcompte").length; i++ ){
		if(document.getElementsByName("idcompte")[i].checked == true){
			
			idcompte = document.getElementsByName("idcompte")[i].value;
			
			document.getElementById("ouinon").innerHTML = "<p style='text-align:center'>Etes-vous sûr de vouloir enlever l'utilisateur de ce rôle ?</p><p class='intitulechampObligatoire' style='text-align:center'>Le compte ne sera pas supprimé de l'annuaire LDAP.</p>";
			
			$( "#ouinon" ).dialog({
			      modal: true,
			      dialogClass: "no-close",
			      title:"Retirer un rôle",
			      position:"center",
			      height:180,
			      width:300,
			      buttons: {
			        "Oui": function() {
			        	                	
			        	$( this ).dialog( "close" );
			        	
			        	window.location = "/PagesSante"+servletPath+"/gestionprofils/retirerrole?idcompte=" + idcompte;
						
			        },
			        "Non": function() {
			        		        		        	
			        	$( this ).dialog( "close" );
			        				        	
			        }
			      }
			    });		
		}
	} 
}

function retirerRoleListe(){

	var idcompte = "" ;
	
	for(var i = 0; i < document.getElementsByName("compte").length; i++ ){
		if(document.getElementsByName("compte")[i].checked == true){
			
			idcompte = document.getElementsByName("compte")[i].value;
			
			document.getElementById("ouinon").innerHTML = "<p style='text-align:center'>Etes-vous sûr de vouloir enlever l'utilisateur de ce rôle ?</p><p class='intitulechampObligatoire' style='text-align:center'>Le compte ne sera pas supprimé de l'annuaire LDAP.</p>";
			
			$( "#ouinon" ).dialog({
			      modal: true,
			      dialogClass: "no-close",
			      title:"Retirer un rôle",
			      position:"center",
			      height:180,
			      width:300,
			      buttons: {
			        "Oui": function() {
			        	                	
			        	$( this ).dialog( "close" );
			        	
			        	$("#listeprofils").load("/PagesSante"+servletPath+"/gestionprofils/retirerroleliste", {idcompte:idcompte});
						
			        },
			        "Non": function() {
			        		        		        	
			        	$( this ).dialog( "close" );
			        				        	
			        }
			      }
			    });		
		}
	} 
	
}

function ajouterRole(){
	
	$( "#ajoutrole" ).dialog({
		height:300,
		width:520,
		modal: true,
		title: "Ajouter un rôle"
		});
	
}

function enregistrerRole(){
	
	var idrole = document.getElementById("role").value;
	var idstructure = document.getElementById("idstructure").value;
	var idsite = document.getElementById("idsite").value;
	var idelement = document.getElementById("idelement").value;
	var identite = "";
	var typeentite = "";
	var visibilite = document.getElementById("nivvisibilite").value;
	var idpersonne = document.getElementsByName("personne")[0].value;
	var idprofils = document.getElementsByName("idprofil");
	var supprimer = false;
	var autre = false;
	
	for(var i = 0; i < idprofils.length; i++){
		if(idprofils[i].value != idrole){
			supprimer = confirm("Il existe un profil différent pour cette personne. Pour continuer vous devez supprimer l'ancien profil. \n Voulez-vous continuer?");
			autre = true;
			i = idprofils.length;
		}
	}
	
	if(idelement != ""){
		identite = idelement;
		typeentite = "element";
	}
	else if (idsite != ""){
		identite = idsite;
		typeentite = "site";
	}
	else if (idstructure != ""){
		identite = idstructure;
		typeentite = "structure";
	}
	else{
		identite = 0;		
	}
	
	if(autre != true || supprimer == true){
		window.location = "/PagesSante" + servletPath + "/gestionprofils/enregistrerrole?idpersonne=" + idpersonne + "&role=" + idrole + "&identite=" + identite + "&typeentite=" + typeentite + "&visibilite=" + visibilite + "&supprimer=" + supprimer;
	}
	
}

function changerlisteelementprofil(){
	var id = document.getElementById("site").value;
	document.getElementById("idsite").value = id;
	$("#elements").load("/PagesSante"+servletPath+"/gestionprofils/listeelements", {idstructure:0,idsite:id});
}

function selectionelementprofil(){
	var id = document.getElementById("element").value;
	document.getElementById("idelement").value = id;
}

function afficherSitesElements(){
	$("#listesites").show();
	$("#listeelements").show();
	$("#masquersiteselements").show();
}

function masquerSitesElements(){
	$("#listesites").hide();
	$("#listeelements").hide();
	$("#masquersiteselements").hide();
	
	document.getElementById("site").value = 0;
	document.getElementById("element").value = 0;
	document.getElementById("idsite").value = 0;
	document.getElementById("idelement").value = 0;
	
}

function masquerElements(){
	$("#listeelements").hide();
	$("#masquerelements").hide();
	
	document.getElementById("element").value = 0;
	document.getElementById("idelement").value = 0;
}

function profilsByRole(){
	var role = document.getElementById("roles").value;
	$("#listeprofils").load("/PagesSante" + servletPath + "/gestionprofils/profilsbyrole", {idrole:role});
}

function chargementDerniereMAJ(){
	
	$("#chargementresultat").empty();
	$("#chargementresultat").show();

	spinner("chargementresultat", 70, 120, 12, 25, "#000");
	
}

function afficherIconeChargement(){
	
	$("#chargementresultat").empty();
	$("#chargementresultat").show();

	spinner("chargementresultat", 70, 120, 12, 25, "#000");
	
}

function setGraphique(id,legende,valeurs){
	
	var r = Raphael(id),
    pie = r.piechart(320, 120, 100, valeurs, { legend:legende,legendothers:"Autres",minPercent:0});

pie.hover(function () {
    this.sector.stop();
    this.sector.scale(1.1, 1.1, this.cx, this.cy);

    if (this.label) {
        this.label[0].stop();
        this.label[0].attr({ r: 7.5 });
        this.label[1].attr({ "font-weight": 800 });
    }
}, function () {
    this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");

    if (this.label) {
        this.label[0].animate({ r: 5 }, 500, "bounce");
        this.label[1].attr({ "font-weight": 400 });
    }
});
	
}

function spinner(holderid, R1, R2, count, stroke_width, colour) {
		
    var sectorsCount = count || 12,
        color = colour || "#fff",
        width = stroke_width || 15,
        r1 = Math.min(R1, R2) || 35,
        r2 = Math.max(R1, R2) || 60,
        cx = r2 + width,
        cy = r2 + width,
        r = Raphael(holderid, r2 * 2 + width * 2, r2 * 2 + width * 2),
        
        sectors = [],
        opacity = [],
        beta = 2 * Math.PI / sectorsCount,

        pathParams = {stroke: color, "stroke-width": width, "stroke-linecap": "round"};
        Raphael.getColor.reset();
    for (var i = 0; i < sectorsCount; i++) {
        var alpha = beta * i - Math.PI / 2,
            cos = Math.cos(alpha),
            sin = Math.sin(alpha);
        opacity[i] = 1 / sectorsCount * i;
        sectors[i] = r.path([["M", cx + r1 * cos, cy + r1 * sin], ["L", cx + r2 * cos, cy + r2 * sin]]).attr(pathParams);
        if (color == "rainbow") {
            sectors[i].attr("stroke", Raphael.getColor());
        }
    }
    var tick = null;;
    (function ticker() {
        opacity.unshift(opacity.pop());
        for (var i = 0; i < sectorsCount; i++) {
            sectors[i].attr("opacity", opacity[i]);
        }
        r.safari();
        tick = setTimeout(ticker, 1000 / sectorsCount);
    })();
    return function () {
        clearTimeout(tick);
        r.remove();
    };
}

function addCalanderEvent(id, start, end, title, colour)
{
	var edit = true;
	
	if(colour == "#046380"){
		edit = false;
	}

    var eventObject = {
	    title: title,
	    start: start,
	    end: end,
	    id: id,
	    color: colour,
	    allDay: false,
	    editable:edit
    };

    var daySource = new Object();
    daySource.title = ''; // this should be string
    daySource.start = start; // this should be date object
    daySource.end = end;
    daySource.color = colour;
    daySource.allDay = false;
    daySource.editable = edit;
    daySource.id = id;
    
    var day = new Array();
    day[0] = daySource;
    
    //$("#calendar").fullCalendar('removeEvents' , id );    
    //$("#calendar").fullCalendar('renderEvent', eventObject, true);   
    //$("#calendar").fullCalendar( 'addEventSource', day );

}


function addCalanderEventAffichage(id, start, end, title, colour)
{
	
    var eventObject = {
    title: title,
    start: start,
    end: end,
    id: id,
    color: colour,
    allDay: false
    };

    $('#calendar').fullCalendar('renderEvent', eventObject, true);
    
}

function masquerBandeauGris(){
	$(".BandeauGaucheGris").hide();
}

function afficherBandeauGris(){
	$(".BandeauGaucheGris").show();
}

function modifierOffre(idoffre){
	window.location = "/PagesSante"+servletPath+"/offresoins/modificationoffresoins?idoffre=" + idoffre;
}

function afficheTablesRef(){
	$("#tablesref").show();
	$("#gestiontableref").attr("onClick","masqueTablesRef()");
}

function masqueTablesRef(){
	$("#tablesref").hide();
	$("#gestiontableref").attr("onClick","afficheTablesRef()");
}