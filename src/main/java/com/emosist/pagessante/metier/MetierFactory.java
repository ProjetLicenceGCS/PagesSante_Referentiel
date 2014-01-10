/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emosist.pagessante.metier;

import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 * @author Morin Alexandre
 */
public class MetierFactory {

    private MetierFactory() {
    }

    private static DictionnaireOffresSoinsService dictionnaireOffresSoinsSrv = null;
    private static SpecialiteElementRefService specialiteElementRefSrv = null;
    private static CSVService csvSrv = null;
    private static DisciplineRefService disciplineRefSrv = null;

    public static CSVService getCSVService() {
        if (csvSrv == null) {
            csvSrv = new CSVServiceImpl(null);
        }
        return csvSrv;
    }

    public static CSVService getCSVService(List<Class> classes) {
        Map<Class, List> classToGenerateCSV = null;
            try {
                 classToGenerateCSV = CSVClassRegistrer.getClassToGenerateCSV(classes);
            } catch (Exception ex) {
                Logger.getLogger(MetierFactory.class.getName()).log(Level.SEVERE, null, ex);
            }
        if (classes.size() > 1) {
            csvSrv = new CSVServiceV2Impl(classToGenerateCSV);
        } else {
            csvSrv = new CSVServiceImpl(classToGenerateCSV);
        }
        return csvSrv;
    }

    public enum FormatCSV {
        BeansParBean, BeansAvecRelations
    }

    public static DictionnaireOffresSoinsService getDictionnaireOffresSoinsService() {
        if (dictionnaireOffresSoinsSrv == null) {
            dictionnaireOffresSoinsSrv = new DictionnaireOffresSoinsServiceImpl();
        }
        return dictionnaireOffresSoinsSrv;
    }

    public static SpecialiteElementRefService getSpecialiteElementRefService() {
        if (specialiteElementRefSrv == null) {
            specialiteElementRefSrv = new SpecialiteElementRefServiceImpl();
        }
        return specialiteElementRefSrv;
    }

    public static DisciplineRefService getDisciplineRefService() {
        if (disciplineRefSrv == null) {
            disciplineRefSrv = new DisciplineRefServiceImpl();
        }
        return disciplineRefSrv;
    }
}
