package com.emosist.pagessante.controllers;

import com.emosist.pagessante.metier.CSVService;
import com.emosist.pagessante.metier.MetierFactory;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
@Controller
@RequestMapping( value = { "/csv" } )
public class CSVController extends MainController {
    private CSVService csvSrv = MetierFactory.getCSVService();

    @RequestMapping( method = RequestMethod.GET )
    public String showCsvPage( ModelMap model, HttpServletRequest request ) {
        // ajoute les variables de sessions
        this.addSessionToModel( model, request );
        try {
            this.csvSrv.generateCSV();
        } catch (Exception ex) {
            Logger.getLogger(CSVController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "Csv";
    }
}
