package com.emosist.pagessante.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Classe gérant les requêtes en rapport avec la page d'accueil.
 * 
 * @author GERVAIS Gwenaël
 * @author BOISSON Clement
 * 
 * @since 1.0.0
 * @version 1.0.0
 * 
 */
@Controller
@RequestMapping( value = { "/", "/accueil" } )
public class AccueilController extends MainController {

    /**
     * Affiche la page d'accueil.
     * 
     * @param model
     *            modèle issu de Spring servant à afficher la page
     * @param request
     *            requête http transmise par le client
     * @return la page d'accueil à afficher
     */
    @Override
    @RequestMapping( method = RequestMethod.GET )
    public String showForm( ModelMap model, HttpServletRequest request ) {

        // ajoute les variables de sessions
        this.addSessionToModel( model, request );

        // retourne la page d'accueil
        return this.redirectIfLogged( request, "Accueil" );
    }
}
