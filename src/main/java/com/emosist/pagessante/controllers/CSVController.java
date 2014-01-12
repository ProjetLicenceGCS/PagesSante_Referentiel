package com.emosist.pagessante.controllers;

import com.emosist.pagessante.metier.CSVClassRegistrer;
import com.emosist.pagessante.metier.CSVService;
import com.emosist.pagessante.metier.MetierFactory;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
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
@RequestMapping(value = {"/csv"})
public class CSVController extends MainController {

    private CSVService csvSrv = MetierFactory.getCSVService();

    @RequestMapping(method = RequestMethod.GET)
    public ModelAndView showCsvPage(ModelMap model, HttpServletRequest request) {
        // ajoute les variables de sessions
        this.addSessionToModel(model, request);
        List<String> ret = new ArrayList<String>();
        Retour retour = new Retour();
        try {
            ret = this.csvSrv.recupererEncodage();
            retour.setEncodage(ret);
        } catch (Exception ex) {
            Logger.getLogger(CSVController.class.getName()).log(Level.SEVERE, null, ex);
        }
        retour.setClasses(CSVClassRegistrer.getClassToGenerateCSV());
        return new ModelAndView("Csv", "ret", retour);
    }

    public class Retour {

        private List<String> encodage;
        private List<String> classes;
        private int i = 0;

        public List<String> getEncodage() {
            return encodage;
        }

        public void setEncodage(List<String> encodage) {
            this.encodage = encodage;
        }

        public List<String> getClasses() {
            return classes;
        }

        public void setClasses(List<String> classes) {
            this.classes = classes;
        }

        public int getI() {
            return i;
        }

        public void setI(int i) {
            this.i = i;
        }
    }

    @RequestMapping(method = RequestMethod.POST, value = "/telecharger")
    public ModelAndView download(ModelMap model, HttpServletRequest request) {
        this.addSessionToModel(model, request);
        List<String> classToGenerateCSV = null;
        classToGenerateCSV = CSVClassRegistrer.getClassToGenerateCSV();
        Map<Class, List> classToGenerateCSV1 = null;
        try {
            classToGenerateCSV1 = CSVClassRegistrer.getClassToGenerateCSV(false);
        } catch (Exception ex) {
            Logger.getLogger(CSVController.class.getName()).log(Level.SEVERE, null, ex);
        }
        Map<Class, Boolean> choix = new HashMap<Class, Boolean>();
        for (int i = 0; i < classToGenerateCSV.size(); i++) {
            String className = classToGenerateCSV.get(i);
            String retourStr = request.getParameter(className);
            boolean retour = Boolean.parseBoolean(retourStr);
            Set<Class> keySet = classToGenerateCSV1.keySet();
            Iterator<Class> iterator = keySet.iterator();
            for (Iterator<Class> it = keySet.iterator(); it.hasNext();) {
                Class class1 = it.next();
                if (class1.getSimpleName().equals(className)) {
                    choix.put(class1, retour);
                    break;
                }
            }
            System.out.println(choix);
        }
        URL generateCSV = null;
        try {
            generateCSV = MetierFactory.getCSVService(this.getClassHasTrue(choix)).generateCSV();
        } catch (Exception ex) {
            Logger.getLogger(CSVController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("ajax/AjaxSimpleResult", "ret", generateCSV);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/charger")
    public ModelAndView load(ModelMap model, HttpServletRequest request) {
        this.addSessionToModel(model, request);
        List<Class> classToLoadCSV = CSVClassRegistrer.getClassToLoadCSV("C:\\wamp\\www\\disciplineRef.csv");
        CSVService csvService = MetierFactory.getCSVService(classToLoadCSV);
        try {
            csvService.loadCSV("C:\\wamp\\www\\disciplineRef.csv");
        } catch (Exception ex) {
            Logger.getLogger(CSVController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("Csv");
    }

    private List<Class> getClassHasTrue(Map<Class, Boolean> choix) {
        List<Class> classes = new ArrayList<Class>();
        Set<Class> keySet = choix.keySet();
        for (Iterator<Class> it = keySet.iterator(); it.hasNext();) {
            Class class1 = it.next();
            if (choix.get(class1).booleanValue() == true) {
                classes.add(class1);
            }
        }
        return classes;
    }
}
