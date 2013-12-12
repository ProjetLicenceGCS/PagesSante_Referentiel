package com.emosist.pagessante.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Classe gérant les requêtes en rapport avec la gestion de la table
 * DisciplineRef.
 * 
 * @author GERVAIS Gwenaël
 * @author BOISSON Clement
 * 
 * @since 1.0.0
 * @version 1.0.0
 * 
 */
@Controller
@RequestMapping( value = "/discipline" )
public class DisciplineController extends MainController {

    /**
     * Répond à une requête de type GET sur le lien
     * "http://<i>monsite</i>/discipline". Des traitements peuvent être réalisés
     * avant le retour de la page (modifications, passage de variables, etc.).
     * 
     * @param model
     *            modèle issu de Spring servant à afficher la page
     * @param request
     *            requête http transmise par le client
     * @return la page discipline d'affichage
     */
    @RequestMapping( method = RequestMethod.GET )
    public String afficherDiscipline( ModelMap model, HttpServletRequest request ) {

        // ajoute les variables de sessions pour définir le profil de
        // l'utilisateur
        this.addSessionToModel( model, request );

        return "Discipline";

    }

    /***
     * Exemple de fonction:
     * 
     * On définie un requestmapping pour chaque fonction:
     * 
     * - Il contient l'attribut "value" qui contient le nom du lien pour appeler
     * cette fonction depuis un lien ou un formulaire.
     * 
     * - Il contient aussi l'attribut "method", qui définie si la fonction est
     * appelée par une méthode POST ou une méthode GET.
     * 
     * 
     * Le type de retour des fonctions sera toujours un String car on mettra
     * toujours le nom de la page à afficher.
     * 
     * On donne un nom significatif à la fonction puis on met en paramètres les
     * éventuels attributs du formulaire.
     * 
     ***/
    /*
     * @RequestMapping( value="modifierdiscipline", method=RequestMethod.POST)
     * public String modifierDiscipline( ModelMap model, HttpServletRequest
     * request, @ModelAttribute( value = "iddiscipline" ) int iddiscipline ) {
     * 
     * ...
     * 
     * return "Discipline";
     * 
     * }
     */
}
