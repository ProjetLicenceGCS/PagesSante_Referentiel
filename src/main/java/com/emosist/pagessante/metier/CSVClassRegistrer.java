package com.emosist.pagessante.metier;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import com.emosist.pagessante.beans.DisciplineRef;
import com.emosist.pagessante.beans.SpecialiteElementRef;
import com.emosist.pagessante.physique.io.CSVServiceIO;
import com.emosist.pagessante.physique.io.PhysiqueIOFactory;
import com.emosist.pagessante.physique.persistence.PersistanceFactory;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class CSVClassRegistrer {

    private CSVServiceIO csvSrv = PhysiqueIOFactory.getCSVService();

    /**
     * Cette methode permet tout simplement d'inscire certaines classes a la
     * création du fichier CSV Pour ajouter une classe il suffit de l'ajouter au
     * dictionnaire. La clé est le bean. la valeur est une List de ce bean avec
     * les valeurs inscrite à l'interieur. Attention pour que cela fontionne il
     * faut que les getters soit crée et qu'il correspondent aux standards. ex:
     * attribut: monAttribut getter: getMonAttribut
     *
     * @return
     * @throws Exception
     */
    public static Map<Class, List> getClassToGenerateCSV(boolean data) throws Exception {
        Map<Class, List> classes = new HashMap<Class, List>();
        if (data) {
            classes.put(SpecialiteElementRef.class, PersistanceFactory.getSpecialiteElementRefMapper().selectAll());
            classes.put(DisciplineRef.class, PersistanceFactory.getDisciplineRefMapper().selectAll());
            classes.put(DictionnaireOffresSoins.class, PersistanceFactory.getDictionnaireOffresSoinsMapper().selectAll());
        } else {
            classes.put(SpecialiteElementRef.class, null);
            classes.put(DisciplineRef.class, null);
            classes.put(DictionnaireOffresSoins.class, null);
        }
        return classes;
    }

    public static Map<Class, List> getClassToGenerateCSV(List<Class> classes) throws Exception {

        Map<Class, List> classToGenerateCSV = getClassToGenerateCSV(true);
        Map<Class, List> ret = new HashMap<Class, List>();
        for (int i = 0; i < classes.size(); i++) {
            if (classToGenerateCSV.containsKey(classes.get(i))) {
                List get = classToGenerateCSV.get(classes.get(i));
                ret.put(classes.get(i), get);
            }
        }
        return ret;
    }

    public static List<String> getClassToGenerateCSV() {
        List<String> classes = new ArrayList<String>();
        Map<Class, List> classToGenerateCSV = null;
        try {
            classToGenerateCSV = CSVClassRegistrer.getClassToGenerateCSV(false);
        } catch (Exception ex) {// on ne devrais jamais avoir ce soucis.
            Logger.getLogger(CSVClassRegistrer.class.getName()).log(Level.SEVERE, null, ex);
        }
        Set<Class> keySet = classToGenerateCSV.keySet();
        Iterator<Class> iterator = keySet.iterator();
        for (Iterator<Class> it = keySet.iterator(); it.hasNext();) {
            Class class1 = it.next();
            classes.add(class1.getSimpleName());
        }
        return classes;
    }

    public static List<Class> getClassToLoadCSV(String entete) {
        String complet = "discipline_id ; discipline_description ; specialite_id ; specialite_description ; offressoins_id ; offressoins_intitule ; offressoins_description ; offressoins_motscles";
        List<Class> classes = new ArrayList<Class>();
        try {
            if (entete.equals(complet)) {
                classes.add(DisciplineRef.class);
                classes.add(DictionnaireOffresSoins.class);
                classes.add(SpecialiteElementRef.class);
            } else {
                // 1
                String disciplineRef = "iddisciplineref ; description ; descriptionNorm ; specialiteelementrefList\r";
                String[] disciplineRefSplit = disciplineRef.split("\r");
                String dictionnaireOffresSoins = "iddictoffressoins ; intitule ; description ; motscles ; intituleNorm ; idspecialiteelementref\r";
                String[] dictionnaireOffresSoinsSplit = dictionnaireOffresSoins.split("\r");
                String specialiteElementRef = "idspecialiteelementref ; description ; descriptionNorm ; dictionnaireoffressoinsList ; iddisciplineref\r";
                String[] specialiteElementRefSplit = specialiteElementRef.split("\r");
                if (entete.equals(disciplineRef) || entete.equals(disciplineRefSplit[0])) {
                    classes.add(DisciplineRef.class);
                } else if (entete.equals(dictionnaireOffresSoins) || entete.equals(dictionnaireOffresSoinsSplit[0])) {
                    classes.add(DictionnaireOffresSoins.class);
                } else if (entete.equals(specialiteElementRef)|| entete.equals(specialiteElementRefSplit[0])) {
                    classes.add(SpecialiteElementRef.class);
                }
            }
        } catch (Exception ex) {
            Logger.getLogger(CSVClassRegistrer.class.getName()).log(Level.SEVERE, null, ex);
        }
        return classes;

    }
}
