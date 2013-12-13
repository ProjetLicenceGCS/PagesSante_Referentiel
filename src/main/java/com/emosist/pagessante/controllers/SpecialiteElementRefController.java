package com.emosist.pagessante.controllers;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import com.emosist.pagessante.beans.DisciplineRef;
import com.emosist.pagessante.beans.SpecialiteElementRef;
import com.emosist.pagessante.exception.DataConflictException;
import com.emosist.pagessante.metier.DictionnaireOffresSoinsService;
import com.emosist.pagessante.metier.DisciplineRefService;
import com.emosist.pagessante.metier.MetierFactory;
import com.emosist.pagessante.metier.SpecialiteElementRefService;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
@Controller()
@RequestMapping(value = "/specialiteelement")
public class SpecialiteElementRefController extends MainController {

    private SpecialiteElementRefService specialiteElementRefSrv = MetierFactory.getSpecialiteElementRefService();
    private DictionnaireOffresSoinsService dictionnaireOffresSoinsSrv = MetierFactory.getDictionnaireOffresSoinsService();

    /**
     * Répond à une requête de type GET sur le lien
     * "http://<i>monsite</i>/discipline". Des traitements peuvent être réalisés
     * avant le retour de la page (modifications, passage de variables, etc.).
     *
     * @param model modèle issu de Spring servant à afficher la page
     * @param request requête http transmise par le client
     * @return la page discipline d'affichage
     */
    @RequestMapping(method = RequestMethod.GET)
    public ModelAndView afficherDiscipline(ModelMap model, HttpServletRequest request) {
        List<SpecialiteElementRef> specialiteElementRefs = null;
        // ajoute les variables de sessions pour définir le profil de
        // l'utilisateur
        this.addSessionToModel(model, request);
        try {
            specialiteElementRefs = this.specialiteElementRefSrv.selectAll();
        } catch (Exception ex) {
            // afficher un beau message.
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return new ModelAndView("SpecialiteElementRef", "specialiteElementRef", specialiteElementRefs);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/selectOneSpecialite")
    public ModelAndView selectOneSpecialite(ModelMap model, HttpServletRequest request) {
        List<SpecialiteElementRef> specialiteElementRefs = null;
        this.addSessionToModel(model, request);
        try {
            specialiteElementRefs = this.specialiteElementRefSrv.selectAll();
        } catch (Exception ex) {
            // afficher un beau message.
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return new ModelAndView("ajax/AjaxSelectOneSpecialiteElementRef", "specialiteElementRef", specialiteElementRefs);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/delete")
    public ModelAndView delete(ModelMap model, HttpServletRequest request) {
        String idVersionStr = request.getParameter("id");
        try {
            this.specialiteElementRefSrv.deleteByPrimaryKey(Integer.valueOf(idVersionStr));
        } catch (Exception ex) {
            idVersionStr = "Impossible de supprimer.";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/SpecialiteElementRef", "id", idVersionStr);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public ModelAndView add(ModelMap model, HttpServletRequest request) {
        DisciplineRefService disciplineRefSrv = MetierFactory.getDisciplineRefService();
        String ret = "OK";
        String description = request.getParameter("description");
        String descriptionNormalise = request.getParameter("descriptionNormalise");
        String trameOffreSoin = request.getParameter("offres");
        String disciplineStrID= request.getParameter("discipline");
        DisciplineRef disciplineRef =null;
        if(!"".equals(disciplineStrID)){
            try {
                disciplineRef = disciplineRefSrv.selectByPrimaryKey(Integer.valueOf(disciplineStrID));
            } catch (Exception ex) {
                Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        List<DictionnaireOffresSoins> dictionnaireOffresSoinses = null;
        try {
            dictionnaireOffresSoinses = this.parseTram(trameOffreSoin);
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        SpecialiteElementRef add = null;
        try {
            add = this.specialiteElementRefSrv.add(description, descriptionNormalise, dictionnaireOffresSoinses, disciplineRef);
        } catch (DataConflictException ex) {
            ret = "DC";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (add == null) {
            return new ModelAndView("ajax/AjaxAddSpecialiteElement", "ret", ret);
        }
        return new ModelAndView("ajax/AjaxAddSpecialiteElement", "ret", add.getIdspecialiteelementref());
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getDisciplineForAjaxFile")
    public ModelAndView getDiscipline(ModelMap model, HttpServletRequest request) {
        String ret = "OK";
        DisciplineRefService disciplineRefSrv = MetierFactory.getDisciplineRefService();
        List<DisciplineRef> selectAll = null;
        try {
            selectAll = disciplineRefSrv.selectAll();
        } catch (Exception ex) {
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
            return new ModelAndView("ajax/AjaxSelectOneDiscipline", "disciplineRef", "erreur");
        }
        return new ModelAndView("ajax/AjaxSelectOneDiscipline", "disciplineRef", selectAll);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/update")
    public ModelAndView update(ModelMap model, HttpServletRequest request) {
        String ret = "OK";
        String idStr = request.getParameter("id");
        String description = request.getParameter("description");
        String descriptionNormalise = request.getParameter("descriptionNormalise");
        String trameOffreSoin = request.getParameter("offres");
        List<DictionnaireOffresSoins> dictionnaireOffresSoinses = null;
        try {
            dictionnaireOffresSoinses = this.parseTram(trameOffreSoin);
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        SpecialiteElementRef add = null;
        SpecialiteElementRef selectByPrimaryKey = null;
        try {
            selectByPrimaryKey = this.specialiteElementRefSrv.selectByPrimaryKey(Integer.valueOf(idStr));
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        selectByPrimaryKey.setDescription(description);
        selectByPrimaryKey.setDescriptionNorm(descriptionNormalise);
        selectByPrimaryKey.setDictionnaireoffressoinsList(dictionnaireOffresSoinses);
        try {
            this.specialiteElementRefSrv.updateByPrimaryKeySelective(selectByPrimaryKey);
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxUpateSpecialite", "ret", ret);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getDictionnaireOffreSoinBySpecialiteElement")
    public ModelAndView getDictionnaireOffreSoinBySpecialiteElement(ModelMap model, HttpServletRequest request) {
        String ret = "OK";
        String idInString = request.getParameter("id");
        SpecialiteElementRef specialiteElementRefSelected = null;
        try {
            specialiteElementRefSelected = this.specialiteElementRefSrv.selectByPrimaryKey(Integer.valueOf(idInString));
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (specialiteElementRefSelected.getDictionnaireoffressoinsList() == null) {
            ret = "aucuneOffre";
        } else {
            List<DictionnaireOffresSoins> dictionnaireoffressoins = specialiteElementRefSelected.getDictionnaireoffressoinsList();
            if (dictionnaireoffressoins.size() == 0) {
                ret = "aucuneOffre";
            } else {
                String toAdd = new String();
                for (int i = 0; i < dictionnaireoffressoins.size(); i++) {
                    toAdd += dictionnaireoffressoins.get(i).getIddictoffressoins().toString();
                    if (dictionnaireoffressoins.size() != i + 1) {
                        toAdd += ",";
                    }
                }
                ret = "<script> var myDico = new Array(['" + toAdd + "']) </script>";
                ret = toAdd;
            }

        }
        return new ModelAndView("ajax/AjaxGetDicoOffreSoinForSpecialiteSelected", "ret", ret);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getCountDictionnaireOffreSoinBySpecialiteElement")
    public ModelAndView getCountOfDictionaireOffreSoinBySpecialiteElement(ModelMap model, HttpServletRequest request) {
        String ret = "OK";
        String idInString = request.getParameter("id");
        SpecialiteElementRef specialiteElementRefSelected = null;
        try {
            specialiteElementRefSelected = this.specialiteElementRefSrv.selectByPrimaryKey(Integer.valueOf(idInString));
        } catch (Exception ex) {
            ret = "PB";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (specialiteElementRefSelected.getDictionnaireoffressoinsList() == null) {
            ret = "aucuneOffre";
        } else {
            List<DictionnaireOffresSoins> dictionnaireoffressoins = specialiteElementRefSelected.getDictionnaireoffressoinsList();
            ret = String.valueOf(dictionnaireoffressoins.size());
        }
        return new ModelAndView("ajax/AjaxGetCountDicoOffreSoinForSpecialiteSelected", "ret", ret);
    }

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

    private List<DictionnaireOffresSoins> parseTram(String trame) throws Exception {
        List<DictionnaireOffresSoins> dictionnaireOffresSoinses = new ArrayList<DictionnaireOffresSoins>();
        List<String> ids = this.transform(trame);
        for (int i = 0; i < ids.size(); i++) {
            if (!"".equals(ids.get(i))) {
                DictionnaireOffresSoins offreSoin = this.dictionnaireOffresSoinsSrv.selectByPrimaryKey(Integer.valueOf(ids.get(i)));
                dictionnaireOffresSoinses.add(offreSoin);
            }
        }
        return dictionnaireOffresSoinses;
    }

}
