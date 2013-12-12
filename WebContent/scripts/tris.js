/*********************************/
/* LES TRIS */
/*********************************/

function triFonctionsStructure(inv,col,creation,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	if (creation == "false"){
		$("#tableauFonction").load("/PagesSante"+servletPath+"/structure/tritableaufonction", {inverse:inv,colonne:col,page:'TableauFonctionsStructure'});//on change le tableau
		$("#navigationFonction").load("/PagesSante"+servletPath+"/structure/changenavigationfonction", {numpage:1,page:'NavigationFonctionsStructure'});//on change les références des boutons suivant, précédent...
	}
	else{
		$("#tableauFonction").load("/PagesSante"+servletPath+"/structure/tritableaufonction", {inverse:inv,colonne:col,page:'TableauFonctionsCreationStructure'});//on change le tableau
		$("#navigationFonction").load("/PagesSante"+servletPath+"/structure/changenavigationfonction", {numpage:1,page:'NavigationFonctionsCreationStructure'});//on change les références des boutons suivant, précédent...
	}	
	
}

function triFonctionsPersonne(inv,col,creation,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	if (creation == "false"){
		$("#tableaufct").load("/PagesSante"+servletPath+"/personne/tritableaufonction", {inverse:inv,colonne:col,page:'TableauFonctionsPersonne'});//on change le tableau
	}
	else{
		$("#tableaufct").load("/PagesSante"+servletPath+"/personne/tritableaufonction", {inverse:inv,colonne:col,page:'TableauFonctionsCreationStructurePersonne'});//on change le tableau
		
	}	
	
}

function triTitrePersonne(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la personne et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerPersonne(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableautitre").load("/PagesSante"+servletPath+"/personne/tritableautitre", {inverse:inv,colonne:col,page:'TableauTitrePersonne'});//on change le tableau
		}
		else{
			$("#tableautitre").load("/PagesSante"+servletPath+"/personne/tritableautitre", {inverse:inv,colonne:col,page:'TableauTitreCreationStructurePersonne'});//on change le tableau
			
		}	
	}
}

function triLanguePersonne(inv,col,creation,idtab,idmodif){
	
var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la personne et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerPersonne(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableaulangue").load("/PagesSante"+servletPath+"/personne/tritableaulangue", {inverse:inv,colonne:col,page:'TableauLanguePersonne'});//on change le tableau
		}
		else{
			$("#tableaulangue").load("/PagesSante"+servletPath+"/personne/tritableaulangue", {inverse:inv,colonne:col,page:'TableauLangueCreationStructurePersonne'});//on change le tableau
			
		}	
	}
	
}

function triFonctionsSite(inv,col,creation,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	if (creation == "false"){
		$("#tableauFonction").load("/PagesSante"+servletPath+"/site/tritableaufonction", {inverse:inv,colonne:col,page:'TableauFonctionsSite'});//on change le tableau
		$("#navigationFonction").load("/PagesSante"+servletPath+"/site/changenavigationfonction", {numpage:1,page:'NavigationFonctionsSite'});//on change les références des boutons suivant, précédent...
	}
	else{
		$("#tableauFonction").load("/PagesSante"+servletPath+"/site/tritableaufonction", {inverse:inv,colonne:col,page:'TableauFonctionsCreationSite'});//on change le tableau
		$("#navigationFonction").load("/PagesSante"+servletPath+"/site/changenavigationfonction", {numpage:1,page:'NavigationFonctionsCreationSite'});//on change les références des boutons suivant, précédent...
	}	
}

function triFonctionsElement(inv,col,creation,idtab,idmodif){
	
	btntri(idtab,idmodif);;
	
	if (creation == "false"){
		$("#tableauFonction").load("/PagesSante"+servletPath+"/element/tritableaufonction", {inverse:inv,colonne:col,page:'TableauFonctionsElement'});//on change le tableau
		$("#navigationFonction").load("/PagesSante"+servletPath+"/element/changenavigationfonction", {numpage:1,page:'NavigationFonctionsElement'});//on change les références des boutons suivant, précédent...
	}
	else{
		$("#tableauFonction").load("/PagesSante"+servletPath+"/element/tritableaufonction", {inverse:inv,colonne:col,page:'TableauFonctionsCreationElement'});//on change le tableau
		$("#navigationFonction").load("/PagesSante"+servletPath+"/element/changenavigationfonction", {numpage:1,page:'NavigationFonctionsCreationElement'});//on change les références des boutons suivant, précédent...
	}	
}

function triElementsStructure(inv,col,creation,idtab,idmodif){
	
	var elements = "";
	var len = 0;
	
	if (creation == "true"){
		elements = document.getElementsByName("idelement");
		len = elements.length;
	}

	if (len > 1 && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la structure et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerStructure(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableauOrganisation").load("/PagesSante"+servletPath+"/structure/tritableauorganisation", {inverse:inv,colonne:col,page:'TableauOrganisationsStructure'});//on change le tableau
			$("#navigationOrganisation").load("/PagesSante"+servletPath+"/structure/changenavigationorganisation", {numpage:1,page:'NavigationOrganisationsStructure'});//on change les références des boutons suivant, précédent...
		}
		else{
			$("#tableauOrganisation").load("/PagesSante"+servletPath+"/structure/tritableauorganisation", {inverse:inv,colonne:col,page:'TableauOrganisationsCreationStructure'});//on change le tableau
			$("#navigationOrganisation").load("/PagesSante"+servletPath+"/structure/changenavigationorganisation", {numpage:1,page:'NavigationOrganisationsCreationStructure'});//on change les références des boutons suivant, précédent...
		}
	}
}

function triElementsSite(inv,col,creation,idtab,idmodif){
	
	var elements = "";
	var len = 0;
	
	if (creation == "true"){
		elements = document.getElementsByName("idelement");
		len = elements.length;
	}
	
	if (len > 1 && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié le site et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerSite(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableauOrganisation").load("/PagesSante"+servletPath+"/site/tritableauorganisation", {inverse:inv,colonne:col,page:'TableauOrganisationsSite'});//on change le tableau
			$("#navigationOrganisation").load("/PagesSante"+servletPath+"/site/changenavigationorganisation", {numpage:1,page:'NavigationOrganisationsSite'});//on change les références des boutons suivant, précédent...
		}
		else{
			$("#tableauOrganisation").load("/PagesSante"+servletPath+"/site/tritableauorganisation", {inverse:inv,colonne:col,page:'TableauOrganisationsCreationSite'});//on change le tableau
			$("#navigationOrganisation").load("/PagesSante"+servletPath+"/site/changenavigationorganisation", {numpage:1,page:'NavigationOrganisationsCreationSite'});//on change les références des boutons suivant, précédent...
		}
	}
}

function triElementsOrganisation(inv,col,creation,idtab,idmodif){
	
	var elements = "";
	var len = 0;
	
	if (creation == "true"){
		elements = document.getElementsByName("idelement");
		len = elements.length;
	}
	
	if (len > 1 && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié l'élément et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerElement(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{

		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableauOrganisation").load("/PagesSante"+servletPath+"/element/tritableauorganisation", {inverse:inv,colonne:col,page:'TableauOrganisationsElement'});//on change le tableau
			$("#navigationOrganisation").load("/PagesSante"+servletPath+"/element/changenavigationorganisation", {numpage:1,page:'NavigationOrganisationsElement'});//on change les références des boutons suivant, précédent...
		}
		else{
			$("#tableauOrganisation").load("/PagesSante"+servletPath+"/element/tritableauorganisation", {inverse:inv,colonne:col,page:'TableauOrganisationsCreationElement'});//on change le tableau
			$("#navigationOrganisation").load("/PagesSante"+servletPath+"/element/changenavigationorganisation", {numpage:1,page:'NavigationOrganisationsCreationElement'});//on change les références des boutons suivant, précédent...
		}
	
	}
}

function triIdentifiantsStructure(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la structure et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerStructure(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableIdentifiant").load("/PagesSante"+servletPath+"/structure/tritableauidentifiant", {inverse:inv,colonne:col,page:'TableauIdentifiantStructure'});//on change le tableau		
		}
		else{
			$("#tableIdentifiant").load("/PagesSante"+servletPath+"/structure/tritableauidentifiant", {inverse:inv,colonne:col,page:'TableauIdentifiantCreationStructure'});//on change le tableau
		}
	}
}

function triIdentifiantsSite(inv,col,creation,idtab,idmodif){
	
var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié le site et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerSite(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableIdentifiant").load("/PagesSante"+servletPath+"/site/tritableauidentifiant", {inverse:inv,colonne:col,page:'TableauIdentifiantSite'});//on change le tableau
		}
		else{
			$("#tableIdentifiant").load("/PagesSante"+servletPath+"/site/tritableauidentifiant", {inverse:inv,colonne:col,page:'TableauIdentifiantCreationSite'});//on change le tableau
		}
	}
}

function triIdentifiantsElement(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié l'élément et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerElement(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableIdentifiant").load("/PagesSante"+servletPath+"/element/tritableauidentifiant", {inverse:inv,colonne:col,page:'TableauIdentifiantElement'});//on change le tableau
		}
		else{
			$("#tableIdentifiant").load("/PagesSante"+servletPath+"/element/tritableauidentifiant", {inverse:inv,colonne:col,page:'TableauIdentifiantCreationElement'});//on change le tableau
		}
	}
	
}

function triIdentifiantsPersonne(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la personne et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerPersonne(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableIdentifiant").load("/PagesSante"+servletPath+"/personne/tritableauidentifiant", {inverse:inv,colonne:col,page:'TableauIdentifiantPersonne'});//on change le tableau
		}
		else{
			$("#tableIdentifiant").load("/PagesSante"+servletPath+"/personne/tritableauidentifiant", {inverse:inv,colonne:col,page:'TableauIdentifiantCreationPersonne'});//on change le tableau
		}
	}
	
}

function triRechercheGroupe(inv,col,idtab,idmodif){
		
	btntri(idtab,idmodif);
	
	$("#tableauGroupe").load("/PagesSante"+servletPath+"/recherchegroupe/tritableaugroupe", {inverse:inv,colonne:col});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/recherchegroupe/changenavigation", {numpage:1});//on change les références des boutons suivant, précédent...
	
}

function triRechercheGroupeDynamique(inv,col,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	$("#tableauGroupeDynamique").load("/PagesSante"+servletPath+"/recherchegroupe/tritableaugroupedynamique", {inverse:inv,colonne:col});//on change le tableau
	$("#navigationdynamique").load("/PagesSante"+servletPath+"/recherchegroupe/changenavigationgroupedynamique", {numpage:1});//on change les références des boutons suivant, précédent...
	
}

function triMembreGroupe(inv,col,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	$("#tableauMembre").load("/PagesSante"+servletPath+"/groupe/tritableaumembre", {inverse:inv,colonne:col});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/groupe/changenavigationgroupe", {numpage:1});//on change les références des boutons suivant, précédent...
	
}

function triMembreGroupeDynamique(inv,col,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	$("#tableauMembre").load("/PagesSante"+servletPath+"/groupedynamique/tritableaumembre", {inverse:inv,colonne:col});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/groupedynamique/changenavigationgroupe", {numpage:1});//on change les références des boutons suivant, précédent...
	
}

function triMembreGroupeArchive(inv,col,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	$("#tableauMembreArchive").load("/PagesSante"+servletPath+"/groupe/tritableaumembrearchive", {inverse:inv,colonne:col});//on change le tableau
	$("#navigationarchive").load("/PagesSante"+servletPath+"/groupe/changenavigationgroupearchive", {numpage:1});//on change les références des boutons suivant, précédent...
	
}


function triRecherchePJ(inv,col,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	$("#tableauPJ").load("/PagesSante"+servletPath+"/recherchepagesjaunes/tritableaurecherchepj", {inverse:inv,colonne:col});//on change le tableau
	$("#navigation").load("/PagesSante"+servletPath+"/recherchepagesjaunes/changenavigation", {numpage:1});//on change les références des boutons suivant, précédent...

}

function triRecherchePro(inv,col,type,idtab,idmodif){

	btntri(idtab,idmodif);
	
	if(type == "avancee"){
		$("#tableauProf").load("/PagesSante"+servletPath+"/rechercheprofessionnel/tritableaurecherchepro", {inverse:inv,colonne:col});//on change le tableau
		$("#navigation").load("/PagesSante"+servletPath+"/rechercheprofessionnel/changenavigationavancee", {numpage:1});//on change les références des boutons suivant, précédent...
	}
	else{
		$("#tableauProf").load("/PagesSante"+servletPath+"/rechercheprofessionnel/tritableaurecherchepro", {inverse:inv,colonne:col});//on change le tableau
		$("#navigation").load("/PagesSante"+servletPath+"/rechercheprofessionnel/changenavigation", {numpage:1});//on change les références des boutons suivant, précédent...

	}
	
}

function triRechercheEtab(inv,col,type,idtab,idmodif){

	btntri(idtab,idmodif);
	
	if(type == "avancee"){
		$("#tableauEtab").load("/PagesSante"+servletPath+"/rechercheetablissement/tritableaurechercheetab", {inverse:inv,colonne:col});//on change le tableau
		$("#navigation").load("/PagesSante"+servletPath+"/rechercheetablissement/changenavigationavancee", {numpage:1});//on change les références des boutons suivant, précédent...
	}
	else{
		$("#tableauEtab").load("/PagesSante"+servletPath+"/rechercheetablissement/tritableaurechercheetab", {inverse:inv,colonne:col});//on change le tableau
		$("#navigation").load("/PagesSante"+servletPath+"/rechercheetablissement/changenavigation", {numpage:1});//on change les références des boutons suivant, précédent...

	}
	
}


function triGestionnaireGroupe(inv,col,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	$("#tableaugestionnaire").load("/PagesSante"+servletPath+"/groupe/tritableaugestionnaire", {inverse:inv,colonne:col});//on change le tableau
	
}

function triGestionnaireGroupeDynamique(inv,col,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	$("#tableaugestionnaire").load("/PagesSante"+servletPath+"/groupe/tritableaugestionnaire", {inverse:inv,colonne:col});//on change le tableau
	
}

function triGroupeStructure(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la structure et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerStructure(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
	
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tablegroupe").load("/PagesSante"+servletPath+"/structure/tritableaugroupe", {inverse:inv,colonne:col,page:'TableauGroupeStructure'});//on change le tableau
		}
		else{
			$("#tablegroupe").load("/PagesSante"+servletPath+"/structure/tritableaugroupe", {inverse:inv,colonne:col,page:'TableauGroupeCreationStructure'});//on change le tableau
		}
			
	}
}

function triGroupeSite(inv,col,creation,idtab,idmodif){
	
	
	var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié le site et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerSite(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tablegroupe").load("/PagesSante"+servletPath+"/site/tritableaugroupe", {inverse:inv,colonne:col,page:'TableauGroupeSite'});//on change le tableau
		}
		else{
			$("#tablegroupe").load("/PagesSante"+servletPath+"/site/tritableaugroupe", {inverse:inv,colonne:col,page:'TableauGroupeCreationSite'});//on change le tableau
		}
	}
}

function triGroupeElement(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié l'élément et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerElement(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tablegroupe").load("/PagesSante"+servletPath+"/element/tritableaugroupe", {inverse:inv,colonne:col,page:'TableauGroupeElement'});//on change le tableau
		}
		else{
			$("#tablegroupe").load("/PagesSante"+servletPath+"/element/tritableaugroupe", {inverse:inv,colonne:col,page:'TableauGroupeCreationElement'});//on change le tableau
		}
	}
}

function triGroupeFonction(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la fonction et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerFonction(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tablegroupe").load("/PagesSante"+servletPath+"/fonction/tritableaugroupe", {inverse:inv,colonne:col,page:'TableauGroupeFonction'});//on change le tableau
		}
		else{
			$("#tablegroupe").load("/PagesSante"+servletPath+"/fonction/tritableaugroupe", {inverse:inv,colonne:col,page:'TableauGroupeCreationFonction'});//on change le tableau
		}
	}
}

function triGroupePersonne(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la personne et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerPersonne(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		
		btntri(idtab,idmodif);
		
		if (creation == "false"){
								
			$("#tablegroupe").load("/PagesSante"+servletPath+"/personne/tritableaugroupe", {inverse:inv,colonne:col,page:'TableauGroupePersonne'});//on change le tableau
		}
		else{
			$("#tablegroupe").load("/PagesSante"+servletPath+"/personne/tritableaugroupe", {inverse:inv,colonne:col,page:'TableauGroupeCreationPersonne'});//on change le tableau
		}
	}
}


function triSitesStructure(inv,col,creation,idtab,idmodif){
	
	btntri(idtab,idmodif);
	
	if (creation == "false"){
		$("#tableausite").load("/PagesSante"+servletPath+"/structure/tritableausite", {inverse:inv,colonne:col,page:'TableauSitesStructure'});//on change le tableau
	}
	else{
		$("#tableausite").load("/PagesSante"+servletPath+"/structure/tritableausite", {inverse:inv,colonne:col,page:'TableauSitesCreationStructure'});//on change le tableau
	}	
}


function triHabilitationSite(inv,col,creation,idtab,idmodif){
	
var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié le site et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerSite(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableauhabilitation").load("/PagesSante"+servletPath+"/site/tritableauhabilitation", {inverse:inv,colonne:col,page:'TableauHabilitation'});//on change le tableau
		}
		else{
			$("#tableauhabilitation").load("/PagesSante"+servletPath+"/site/tritableauhabilitation", {inverse:inv,colonne:col,page:'TableauHabilitationCreationSite'});//on change le tableau
		}	
	}
}

function triPatienteleElement(inv,col,creation,idtab,idmodif){
	
var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié l'élément et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerElement(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableaupatientele").load("/PagesSante"+servletPath+"/element/tritableaupatientele", {inverse:inv,colonne:col,page:'TableauPatientele'});//on change le tableau
		}
		else{
			$("#tableaupatientele").load("/PagesSante"+servletPath+"/element/tritableaupatientele", {inverse:inv,colonne:col,page:'TableauPatienteleCreationElement'});//on change le tableau
		}
	}
}

function triSpecialiteElement(inv,col,creation,idtab,idmodif){
	
var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié l'élément et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerElement(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableauspecialite").load("/PagesSante"+servletPath+"/element/tritableauspecialite", {inverse:inv,colonne:col,page:'TableauSpecialiteElement'});//on change le tableau
		}
		else{
			$("#tableauspecialite").load("/PagesSante"+servletPath+"/element/tritableauspecialite", {inverse:inv,colonne:col,page:'TableauSpecialiteCreationElement'});//on change le tableau
		}	
	}
}

function triOffreElement(inv,col,creation,idtab,idmodif){
	
var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la structure et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerStructure(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableauoffre").load("/PagesSante"+servletPath+"/element/tritableauoffre", {inverse:inv,colonne:col,page:'TableauOffresSoinElement'});//on change le tableau
		}
		else{
			$("#tableauoffre").load("/PagesSante"+servletPath+"/element/tritableauoffre", {inverse:inv,colonne:col,page:'TableauOffresSoinCreationElement'});//on change le tableau
		}	
	}
}


function triDisciplineSite(inv,col,creation,idtab,idmodif){
	
var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié le site et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerSite(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableaudiscipline").load("/PagesSante"+servletPath+"/site/tritableaudiscipline", {inverse:inv,colonne:col,page:'TableauDiscipline'});//on change le tableau
		}
		else{
			$("#tableaudiscipline").load("/PagesSante"+servletPath+"/site/tritableaudiscipline", {inverse:inv,colonne:col,page:'TableauDisciplineCreationSite'});//on change le tableau
		}	
	}
}

function triEnseignementSite(inv,col,creation,idtab,idmodif){
	
var cookie = getCookie("modification");
	
	if (cookie == "true" && creation == "true"){
		
		document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié le site et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
				
		$( "#ouinon" ).dialog({
		      modal: true,
		      dialogClass: "no-close",
		      title:"Quitter la saisie",
		      position:"center",
		      height:180,
		      width:400,
		      buttons: {
		        "Oui": function() {
		        	
		        	var page = "";
		        	
		        	if (creation == "false"){
		        		page = document.getElementById("page").value;
		        	}
		        	else{
		        		page = "Accueil";
		        	}
		        	
		        	enregistrerSite(page);
		        	
		        	$( this ).dialog( "close" );
		        },
		        "Non": function() {
		        			        		       	        	
		        	$( this ).dialog( "close" );
		        	
		        }
		      }
		    });
	}
	else{
		btntri(idtab,idmodif);
		
		if (creation == "false"){
			$("#tableauenseignement").load("/PagesSante"+servletPath+"/site/tritableauenseignement", {inverse:inv,colonne:col,page:'TableauEnseignement'});//on change le tableau
		}
		else{
			$("#tableauenseignement").load("/PagesSante"+servletPath+"/site/tritableauenseignement", {inverse:inv,colonne:col,page:'TableauEnseignementCreationSite'});//on change le tableau
		}	
	}
}


function triCompetencesFonction(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
		
		if (cookie == "true" && creation == "true"){
			
			document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la fonction et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
					
			$( "#ouinon" ).dialog({
			      modal: true,
			      dialogClass: "no-close",
			      title:"Quitter la saisie",
			      position:"center",
			      height:180,
			      width:400,
			      buttons: {
			        "Oui": function() {
			        	
			        	var page = "";
			        	
			        	if (creation == "false"){
			        		page = document.getElementById("page").value;
			        	}
			        	else{
			        		page = "Accueil";
			        	}
			        	
			        	enregistrerFonction(page);
			        	
			        	$( this ).dialog( "close" );
			        },
			        "Non": function() {
			        			        		       	        	
			        	$( this ).dialog( "close" );
			        	
			        }
			      }
			    });
		}
		else{
			btntri(idtab,idmodif);
			
			if (creation == "false"){
				$("#tableaucompetences").load("/PagesSante"+servletPath+"/fonction/tritableaucompetence", {inverse:inv,colonne:col,page:'TableauCompetencesFonction'});//on change le tableau
			}
			else{
				$("#tableaucompetences").load("/PagesSante"+servletPath+"/fonction/tritableaucompetence", {inverse:inv,colonne:col,page:'TableauCompetencesCreationFonction'});//on change le tableau
			}	
		}
}

function triAttributionFonction(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
		
		if (cookie == "true" && creation == "true"){
			
			document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la fonction et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
					
			$( "#ouinon" ).dialog({
			      modal: true,
			      dialogClass: "no-close",
			      title:"Quitter la saisie",
			      position:"center",
			      height:180,
			      width:400,
			      buttons: {
			        "Oui": function() {
			        	
			        	var page = "";
			        	
			        	if (creation == "false"){
			        		page = document.getElementById("page").value;
			        	}
			        	else{
			        		page = "Accueil";
			        	}
			        	
			        	enregistrerFonction(page);
			        	
			        	$( this ).dialog( "close" );
			        },
			        "Non": function() {
			        			        		       	        	
			        	$( this ).dialog( "close" );
			        	
			        }
			      }
			    });
		}
		else{
			btntri(idtab,idmodif);
			
			if (creation == "false"){
				$("#tableauattrib").load("/PagesSante"+servletPath+"/fonction/tritableauattribution", {inverse:inv,colonne:col,page:'TableauAttributionsFonction'});//on change le tableau
			}
			else{
				$("#tableauattrib").load("/PagesSante"+servletPath+"/fonction/tritableauattribution", {inverse:inv,colonne:col,page:'TableauAttributionsCreationFonction'});//on change le tableau
			}	
		}
}

function triOrientationFonction(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
		
		if (cookie == "true" && creation == "true"){
			
			document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la fonction et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
					
			$( "#ouinon" ).dialog({
			      modal: true,
			      dialogClass: "no-close",
			      title:"Quitter la saisie",
			      position:"center",
			      height:180,
			      width:400,
			      buttons: {
			        "Oui": function() {
			        	
			        	var page = "";
			        	
			        	if (creation == "false"){
			        		page = document.getElementById("page").value;
			        	}
			        	else{
			        		page = "Accueil";
			        	}
			        	
			        	enregistrerFonction(page);
			        	
			        	$( this ).dialog( "close" );
			        },
			        "Non": function() {
			        			        		       	        	
			        	$( this ).dialog( "close" );
			        	
			        }
			      }
			    });
		}
		else{
			btntri(idtab,idmodif);
			
			if (creation == "false"){
				$("#tableauorient").load("/PagesSante"+servletPath+"/fonction/tritableauorientation", {inverse:inv,colonne:col,page:'TableauOrientationsFonction'});//on change le tableau
			}
			else{
				$("#tableauorient").load("/PagesSante"+servletPath+"/fonction/tritableauorientation", {inverse:inv,colonne:col,page:'TableauOrientationsCreationFonction'});//on change le tableau
			}	
		}
}

function triDescriptionFonction(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
		
		if (cookie == "true" && creation == "true"){
			
			document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la fonction et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
					
			$( "#ouinon" ).dialog({
			      modal: true,
			      dialogClass: "no-close",
			      title:"Quitter la saisie",
			      position:"center",
			      height:180,
			      width:400,
			      buttons: {
			        "Oui": function() {
			        	
			        	var page = "";
			        	
			        	if (creation == "false"){
			        		page = document.getElementById("page").value;
			        	}
			        	else{
			        		page = "Accueil";
			        	}
			        	
			        	enregistrerFonction(page);
			        	
			        	$( this ).dialog( "close" );
			        },
			        "Non": function() {
			        			        		       	        	
			        	$( this ).dialog( "close" );
			        	
			        }
			      }
			    });
		}
		else{
			btntri(idtab,idmodif);
			
			if (creation == "false"){
				$("#tableaudescriptionfct").load("/PagesSante"+servletPath+"/fonction/tritableaudescription", {inverse:inv,colonne:col,page:'TableauDescriptionFonction'});//on change le tableau
			}
			else{
				$("#tableaudescriptionfct").load("/PagesSante"+servletPath+"/fonction/tritableaudescription", {inverse:inv,colonne:col,page:'TableauDescriptionCreationFonction'});//on change le tableau
			}	
		}
}

function triSpecialisationFonction(inv,col,creation,idtab,idmodif){
	
	var cookie = getCookie("modification");
		
		if (cookie == "true" && creation == "true"){
			
			document.getElementById("ouinon").innerHTML = "<p>Vous avez modifié la fonction et risquez de perdre ces modifications en effectuant ce tri.</p><br /><p>Voulez-vous enregistrer pour pouvoir effectuer le tri?</p>";
					
			$( "#ouinon" ).dialog({
			      modal: true,
			      dialogClass: "no-close",
			      title:"Quitter la saisie",
			      position:"center",
			      height:180,
			      width:400,
			      buttons: {
			        "Oui": function() {
			        	
			        	var page = "";
			        	
			        	if (creation == "false"){
			        		page = document.getElementById("page").value;
			        	}
			        	else{
			        		page = "Accueil";
			        	}
			        	
			        	enregistrerFonction(page);
			        	
			        	$( this ).dialog( "close" );
			        },
			        "Non": function() {
			        			        		       	        	
			        	$( this ).dialog( "close" );
			        	
			        }
			      }
			    });
		}
		else{
			btntri(idtab,idmodif);
			
			if (creation == "false"){
				$("#tableauspecialisation").load("/PagesSante"+servletPath+"/fonction/tritableauspecialisation", {inverse:inv,colonne:col,page:'TableauSpecialisationFonction'});//on change le tableau
			}
			else{
				$("#tableauspecialisation").load("/PagesSante"+servletPath+"/fonction/tritableauspecialisation", {inverse:inv,colonne:col,page:'TableauSpecialisationCreationFonction'});//on change le tableau
			}	
		}
}


function triVolumetrie(inv,col,idtab,idmodif,tableau){
	
	btntri(idtab,idmodif);
	
if (tableau == "structure"){
	$("#tableauej").load("/PagesSante"+servletPath+"/volumetrie/tritableauvolumetrie", {inverse:inv,colonne:col,page:'TableauVolumetrieEJ',tableau:tableau});//on change le tableau
}
if (tableau == "site"){
	$("#tableaueg").load("/PagesSante"+servletPath+"/volumetrie/tritableauvolumetrie", {inverse:inv,colonne:col,page:'TableauVolumetrieEG',tableau:tableau});//on change le tableau
}
if (tableau == "element"){
	$("#tableauelem").load("/PagesSante"+servletPath+"/volumetrie/tritableauvolumetrie", {inverse:inv,colonne:col,page:'TableauVolumetrieElement',tableau:tableau});//on change le tableau
}
else{//fonction
	$("#tableaufct").load("/PagesSante"+servletPath+"/volumetrie/tritableauvolumetrie", {inverse:inv,colonne:col,page:'TableauVolumetrieFonction',tableau:tableau});//on change le tableau
}


}

function btntri(idtab,idmodif){
	

	if($("#" + idtab + " .iconetribasrouge").length > 0){
		$("#" + idtab + " .iconetribasrouge").attr('class', 'iconetribasblanc');
	}

	if($("#" + idtab + " .iconetrihautrouge").length > 0){
		$("#" + idtab + " .iconetrihautrouge").attr('class', 'iconetrihautblanc');
	}
	
	if($("#" + idmodif).attr('class') == "iconetribasblanc"){
		$("#" + idmodif).attr('class', 'iconetribasrouge');
	}
	else{
		$("#" + idmodif).attr('class', 'iconetrihautrouge');
	}
		
}