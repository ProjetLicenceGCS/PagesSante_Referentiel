package com.emosist.pagessante.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.emosist.pagessante.beans.DisciplineRef;
import com.emosist.pagessante.metier.MetierFactory;
import com.emosist.pagessante.metier.DisciplineRefService;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.web.servlet.ModelAndView;

/**
 * Classe gérant les requêtes en rapport avec la gestion de la table
 * DisciplineRef.
 * 
 * @author GERVAIS Gwenaël
 * @author BOISSON Clement
 * @author MORIN Alexandre
 * 
 * @since 1.0.0
 * @version 1.0.0
 * 
 */
@Controller
@RequestMapping( value = "/discipline" )
public class DisciplineRefController extends MainController {
    
    private DisciplineRefService disciplineRefSrv = MetierFactory.getDisciplineRefService();

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
    public ModelAndView afficherDiscipline( ModelMap model, HttpServletRequest request ) {
        List<DisciplineRef> disciplineRefs = null;
        // ajoute les variables de sessions pour définir le profil de
        // l'utilisateur
        this.addSessionToModel( model, request );
        try {        
            disciplineRefs = this.disciplineRefSrv.selectAll();
        } catch (Exception ex) {
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("DisciplineRef","disciplineRef",disciplineRefs);
    }

    @RequestMapping(method = RequestMethod.POST,value="/delete")
    public ModelAndView delete(ModelMap model,HttpServletRequest request){
        String idVersionStr = request.getParameter("id");
        try {
            this.disciplineRefSrv.deleteByPrimaryKey(Integer.valueOf(idVersionStr));
        } catch (Exception ex) {
            idVersionStr = "Impossible de supprimer la discipline";
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxDisciplineRef","id",idVersionStr);
    }
    
    @RequestMapping(method = RequestMethod.POST,value = "/add")
    public ModelAndView add(ModelAndView model,HttpServletRequest request){
        String ret = "OK";
        String description = request.getParameter("description");
        String descriptionNormalise = request.getParameter("descriptionNormalise");
        DisciplineRef disciplineRef = null;
        try {
            disciplineRef = this.disciplineRefSrv.add(description, descriptionNormalise);
        } catch (Exception ex) {
            ret="PB";
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        if(disciplineRef == null){
            return new ModelAndView("ajax/AjaxAddDiscipline","ret",ret);
        }
        return new ModelAndView("ajax/AjaxAddDiscipline","ret",disciplineRef.getIddisciplineref());
    }
    
    @RequestMapping(method = RequestMethod.POST,value = "/update")
    public ModelAndView update(ModelAndView model,HttpServletRequest request){
        String ret = "OK";
        String idStr = request.getParameter("id");
        String description = request.getParameter("description");
        String descriptionNormalise = request.getParameter("descriptionNormalise");
        DisciplineRef disciplineRef = null;
        DisciplineRef sbpk = null;
        try {
            sbpk = this.disciplineRefSrv.selectByPrimaryKey(Integer.valueOf(idStr));
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        sbpk.setDescription(description);
        sbpk.setDescriptionNorm(descriptionNormalise);
        try {
            this.disciplineRefSrv.updateByPrimaryKeySelective(sbpk);
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxUpdateDiscipline","ret",ret);
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
