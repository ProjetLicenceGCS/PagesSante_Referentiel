package com.emosist.pagessante.controllers;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import com.emosist.pagessante.exception.DataConflictException;
import com.emosist.pagessante.metier.DictionnaireOffresSoinsService;
import com.emosist.pagessante.metier.MetierFactory;
import com.emosist.pagessante.metier.SpecialiteElementRefService;
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
@RequestMapping(value = "/dictionnaireoffressoins")
public class DictionnaireOffreSoinController extends MainController {
    private SpecialiteElementRefService specialiteElementRefSrv = MetierFactory.getSpecialiteElementRefService();
    private DictionnaireOffresSoinsService dictionnaireOffreSoinsSrv = MetierFactory.getDictionnaireOffresSoinsService();

    @RequestMapping(method = RequestMethod.GET)
    public ModelAndView start(ModelMap model, HttpServletRequest request) {

        List<DictionnaireOffresSoins> dictionnaireOffresSoins = null;
        this.addSessionToModel(model, request);
        try {
            dictionnaireOffresSoins = this.dictionnaireOffreSoinsSrv.selectAll();
        } catch (Exception ex) {
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("DictionnaireOffreSoin", "dictonnaireOffreSoin", dictionnaireOffresSoins);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getAjaxFile")
    public ModelAndView getAll(ModelMap model, HttpServletRequest request) {
        List<DictionnaireOffresSoins> dictionnaireOffresSoins = null;
        try {
            dictionnaireOffresSoins = this.dictionnaireOffreSoinsSrv.selectAll();
        } catch (Exception ex) {
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxDictionnaireOffreDeSoins", "dictonnaireOffreSoin", dictionnaireOffresSoins);
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/getSpecialiteElementByOffre")
    public ModelAndView getSpecialiteElementByOffre(ModelMap model, HttpServletRequest request) {
        DictionnaireOffresSoins dictionnaireOffresSoins = null;
        String id = request.getParameter("id");
        String ret = null;
        try {
            dictionnaireOffresSoins = this.dictionnaireOffreSoinsSrv.selectByPrimaryKey(Integer.valueOf(id));
        } catch (Exception ex) {
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        if(dictionnaireOffresSoins.getIdspecialiteelementref()==null){
            ret = "AUCUN";
        }else{
            ret = String.valueOf(dictionnaireOffresSoins.getIdspecialiteelementref().getIdspecialiteelementref());
        }
        return new ModelAndView("ajax/AjaxSimpleResult", "ret", ret);
    }
    @RequestMapping(method = RequestMethod.POST, value = "/delete")
    public ModelAndView delete(ModelMap model, HttpServletRequest request) {
        String ret ="OK";
        String id = request.getParameter("id");
        try {
            this.dictionnaireOffreSoinsSrv.deleteByPrimaryKey(Integer.valueOf(id));
        } catch (Exception ex) {
            ret="PB";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxDeleteOffreDeSoin", "ret", ret);
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/update")
    public ModelAndView update(ModelMap model, HttpServletRequest request) {
        String idStr = request.getParameter("id");
        String intitule = request.getParameter("intitule");
        String description = request.getParameter("description");
        String motCles = request.getParameter("motscles");
        String idSpecialiteStr = request.getParameter("specialite");
        String ret ="OK";
        DictionnaireOffresSoins dictionnaireOffresSoins = new DictionnaireOffresSoins();
        dictionnaireOffresSoins.setDescription(description);
        dictionnaireOffresSoins.setIddictoffressoins(Integer.valueOf(idStr));
        try {
            dictionnaireOffresSoins.setIdspecialiteelementref(this.specialiteElementRefSrv.selectByPrimaryKey(Integer.valueOf(idSpecialiteStr)));
        } catch (Exception ex) {
            ret="PB";
            Logger.getLogger(DictionnaireOffreSoinController.class.getName()).log(Level.SEVERE, null, ex);
        }
        dictionnaireOffresSoins.setIntitule(intitule);
        dictionnaireOffresSoins.setIntituleNorm(intitule.toUpperCase());
        dictionnaireOffresSoins.setMotscles(motCles);
        try {
            this.dictionnaireOffreSoinsSrv.updateByPrimaryKey(dictionnaireOffresSoins);
        } catch (Exception ex) {
            ret="PB";
            Logger.getLogger(SpecialiteElementRefController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxDeleteOffreDeSoin", "ret", ret);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public ModelAndView add(ModelMap model, HttpServletRequest request) {
        String ret = "OK";
        String intitule = request.getParameter("intitule");
        String description = request.getParameter("description");
        String motCles = request.getParameter("motscles");
        String idSpecialiteStr = request.getParameter("specialite");
        Integer idSpecialite = null;
        if(!"AUCUNE".equals(idSpecialiteStr)){
            idSpecialite = Integer.valueOf(idSpecialiteStr);
        }
        DictionnaireOffresSoins add =null;
        try {
             add = this.dictionnaireOffreSoinsSrv.add(intitule, description, motCles,idSpecialite) ;
        } catch (DataConflictException ex) {
            ret="DC";
            Logger.getLogger(DictionnaireOffreSoinController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            ret="PB";
            Logger.getLogger(DictionnaireOffreSoinController.class.getName()).log(Level.SEVERE, null, ex);
        }
        if(add != null){
            return new ModelAndView("ajax/AjaxAddDictionnaireOffreSoin", "ret", add.getIddictoffressoins()); 
        }
        return new ModelAndView("ajax/AjaxAddDictionnaireOffreSoin", "ret", ret);
    }
}
