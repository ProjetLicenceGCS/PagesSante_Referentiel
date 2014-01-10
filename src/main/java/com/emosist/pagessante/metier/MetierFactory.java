/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emosist.pagessante.metier;

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
            csvSrv = new CSVServiceImpl();
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
