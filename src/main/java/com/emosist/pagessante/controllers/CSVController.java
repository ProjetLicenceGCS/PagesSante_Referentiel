package com.emosist.pagessante.controllers;

import com.emosist.pagessante.metier.CSVService;
import com.emosist.pagessante.metier.MetierFactory;
import java.net.URL;
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
@Controller
@RequestMapping( value = { "/csv" } ) 
public class CSVController extends MainController {
    private CSVService csvSrv = MetierFactory.getCSVService();

    @RequestMapping( method = RequestMethod.GET )
    public ModelAndView showCsvPage( ModelMap model, HttpServletRequest request ) {
        // ajoute les variables de sessions
        this.addSessionToModel( model, request );
        List<String> ret = new ArrayList<String>();
        try{
            ret= this.csvSrv.recupererEncodage();
        }catch (Exception ex) {
            Logger.getLogger(CSVController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("Csv","ret",ret);
    }

    @RequestMapping( method = RequestMethod.POST,value = "/telecharger" )
    public ModelAndView download( ModelMap model, HttpServletRequest request ) {
        // ajoute les variables de sessions
        this.addSessionToModel( model, request );
        URL generateCSV =null;
        try {
             generateCSV= this.csvSrv.generateCSV();
        } catch (Exception ex) {
            Logger.getLogger(CSVController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxSimpleResult", "ret", generateCSV);
    }
}
