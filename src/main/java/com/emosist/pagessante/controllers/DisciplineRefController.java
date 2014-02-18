package com.emosist.pagessante.controllers;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.emosist.pagessante.beans.DisciplineRef;
import com.emosist.pagessante.beans.SpecialiteElementRef;
import com.emosist.pagessante.exception.DataConflictException;
import com.emosist.pagessante.metier.MetierFactory;
import com.emosist.pagessante.metier.DisciplineRefService;
import com.emosist.pagessante.metier.SpecialiteElementRefService;
import java.util.ArrayList;
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
 * @author Damien Chesneau <contact@damienchesneau.fr>
 * @since 1.0.0
 * @version 1.0.0
 *
 */
@Controller
@RequestMapping(value = "/discipline")
public class DisciplineRefController extends MainController {

    private DisciplineRefService disciplineRefSrv = MetierFactory.getDisciplineRefService();

    /**
     * Répond à une requête de type GET sur le lien
     * "http://<i>monsite</i>/discipline". Des traitements peuvent être réalisés
     * avant le retour de la page (Smodifications, passage de variables, etc.).
     *
     * @param model modèle issu de Spring servant à afficher la page
     * @param request requête http transmise par le client
     * @return la page discipline d'affichage
     */
    @RequestMapping(method = RequestMethod.GET)
    public ModelAndView afficherDiscipline(ModelMap model, HttpServletRequest request) {
        List<DisciplineRef> disciplineRefs = null;
        // ajoute les variables de sessions pour définir le profil de
        // l'utilisateur
        this.addSessionToModel(model, request);
        try {
            disciplineRefs = this.disciplineRefSrv.selectAll();
        } catch (Exception ex) {
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("DisciplineRef", "disciplineRef", disciplineRefs);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/delete")
    public ModelAndView delete(ModelMap model, HttpServletRequest request) {
        String idVersionStr = request.getParameter("id");
        try {
            this.disciplineRefSrv.deleteByPrimaryKey(Integer.valueOf(idVersionStr));
        } catch (Exception ex) {
            idVersionStr = "Impossible de supprimer la discipline";
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxDisciplineRef", "id", idVersionStr);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/countSpecialitebyID")
    public ModelAndView getCountOfSpecialite(ModelMap model, HttpServletRequest request) {
        String idVersionStr = request.getParameter("id");
        DisciplineRef selectByPrimaryKey = null;
        try {
            selectByPrimaryKey = this.disciplineRefSrv.selectByPrimaryKey(Integer.valueOf(idVersionStr));
        } catch (Exception ex) {
            idVersionStr = "Impossible de supprimer la discipline";
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        int size = 0;
        if (selectByPrimaryKey.getSpecialiteelementrefList() != null) {
            size = selectByPrimaryKey.getSpecialiteelementrefList().size();
        }
        return new ModelAndView("ajax/AjaxSimpleResult", "ret", size);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public ModelAndView add(ModelAndView model, HttpServletRequest request) {
        String ret = "OK";
        System.out.println("COUCOu");
        String description = request.getParameter("description");
        String specialite = request.getParameter("specialite");
        List<SpecialiteElementRef> parseTram = null;
        try {
            parseTram = this.parseTram(specialite);
        } catch (Exception ex) {
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        DisciplineRef disciplineRef = new DisciplineRef();
        disciplineRef.setDescription(description);
        disciplineRef.setDescriptionNorm(description.toUpperCase());
        disciplineRef.setSpecialiteelementrefList(parseTram);
        try {
            disciplineRef = this.disciplineRefSrv.add(disciplineRef);
        } catch (DataConflictException ex) {
            ret = "DC";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (disciplineRef == null) {
            return new ModelAndView("ajax/AjaxSimpleResult", "ret", ret);
        }
        return new ModelAndView("ajax/AjaxSimpleResult", "ret", disciplineRef.getIddisciplineref());
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getSepecialites")
    public ModelAndView getSpecialites(ModelAndView model, HttpServletRequest request) {
        SpecialiteElementRefService specialiteElementRefSrv = MetierFactory.getSpecialiteElementRefService();
        String ret = "OK";
        List<SpecialiteElementRef> selectAll = null;
        try {
            selectAll = specialiteElementRefSrv.selectAll();
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxSelectManySpecialites", "specialiteElementRef", selectAll);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/update")
    public ModelAndView update(ModelAndView model, HttpServletRequest request) {
        String ret = "OK";
        String idStr = request.getParameter("id");
        String description = request.getParameter("description");
        String descriptionNormalise = request.getParameter("specialites");
        DisciplineRef disciplineRef = null;
        try {
            disciplineRef = this.disciplineRefSrv.selectByPrimaryKey(Integer.valueOf(idStr));
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        disciplineRef.setDescription(description);
        disciplineRef.setDescriptionNorm(description.toUpperCase());
        try {
            this.disciplineRefSrv.updateByPrimaryKey(disciplineRef);
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(DisciplineRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxSimpleResult", "ret", ret);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getSpecialitesByID")
    public ModelAndView getSpecialitesByID(ModelMap model, HttpServletRequest request) {
        String ret = "OK";
        String idInString = request.getParameter("id");
        DisciplineRef specialiteElementRefSelected = null;
        try {
            specialiteElementRefSelected = this.disciplineRefSrv.selectByPrimaryKey(Integer.valueOf(idInString));
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (specialiteElementRefSelected.getSpecialiteelementrefList()== null) {
            ret = "aucuneOffre";
        } else {
            List<SpecialiteElementRef> specialiteElementRefs = specialiteElementRefSelected.getSpecialiteelementrefList();
            if (specialiteElementRefs.size() == 0) {
                ret = "aucuneOffre";
            } else {
                String toAdd = new String();
                for (int i = 0; i < specialiteElementRefs.size(); i++) {
                    toAdd += specialiteElementRefs.get(i).getIdspecialiteelementref().toString();
                    if (specialiteElementRefs.size() != i + 1) {
                        toAdd += ",";
                    }
                }
                ret = "<script> var myDico = new Array(['" + toAdd + "']) </script>";
                ret = toAdd;
            }
        }
        return new ModelAndView("ajax/AjaxSimpleResult", "ret", ret);
    }

    /**
     * *
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
     **
     */
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
    private List<String> transform(String trame) {
        List<String> ids = new ArrayList<String>();
        boolean start = true;
        while (start) {
            String id = null;
            if (!trame.contains(",")) {
                id = trame.substring(0, trame.length());
                start = false;
            } else {
                id = trame.substring(0, trame.indexOf(","));
                trame = trame.substring(trame.indexOf(",") + 1, trame.length());
            }
            ids.add(id);
        }
        return ids;
    }

    private List<SpecialiteElementRef> parseTram(String trame) throws Exception {
        SpecialiteElementRefService elementRefSrv = MetierFactory.getSpecialiteElementRefService();
        List<SpecialiteElementRef> dictionnaireOffresSoinses = new ArrayList<SpecialiteElementRef>();
        List<String> ids = this.transform(trame);
        for (int i = 0; i < ids.size(); i++) {
            if (!"".equals(ids.get(i))) {
                SpecialiteElementRef offreSoin = elementRefSrv.selectByPrimaryKey(Integer.valueOf(ids.get(i)));
                dictionnaireOffresSoinses.add(offreSoin);
            }
        }
        return dictionnaireOffresSoinses;
    }
}
