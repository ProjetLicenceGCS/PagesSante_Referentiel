/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emosist.pagessante.physique.persistence;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 * @author Morin Alexandre
 */
public class PersistanceFactory {

    private PersistanceFactory() {
    }
    private static SpecialiteElementRefMapper specialiteElementRefSrv = null;
    private static DictionnaireOffresSoinsMapper dictionnaireOffresSoinsSrv = null;
    private static DisciplineRefMapper disciplineRefSrv = null;
    
    public static DictionnaireOffresSoinsMapper getDictionnaireOffresSoinsMapper() {
        if (dictionnaireOffresSoinsSrv == null) {
            dictionnaireOffresSoinsSrv = new DictionnaireOffresSoinsMapperImpl();
        }
        return dictionnaireOffresSoinsSrv;
    }
    
    public static SpecialiteElementRefMapper getSpecialiteElementRefMapper() {
        if (specialiteElementRefSrv == null) {
            specialiteElementRefSrv = new SpecialiteElementRefMapperImpl();
        }
        return specialiteElementRefSrv;
    }
    public static DisciplineRefMapper getDisciplineRefMapper(){
        if(disciplineRefSrv == null) {
            disciplineRefSrv = new DisciplineRefMapperImpl();        
        }
        return disciplineRefSrv;
    }
}
