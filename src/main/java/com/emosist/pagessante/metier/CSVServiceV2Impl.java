package com.emosist.pagessante.metier;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import com.emosist.pagessante.beans.DisciplineRef;
import com.emosist.pagessante.beans.SpecialiteElementRef;
import com.emosist.pagessante.physique.io.CSVServiceIO;
import com.emosist.pagessante.physique.io.PhysiqueIOFactory;
import com.emosist.pagessante.physique.persistence.PersistanceFactory;
import com.emosist.pagessante.physique.persistence.SpecialiteElementRefMapper;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class CSVServiceV2Impl implements CSVService {

    private SpecialiteElementRefMapper speialiteElementRefSrv = PersistanceFactory.getSpecialiteElementRefMapper();
    private CSVServiceIO csvSrv = PhysiqueIOFactory.getCSVService();
    private Map<Class, List> data;

    public CSVServiceV2Impl(Map<Class, List> map) {
        this.data = map;
    }

    @Override
    public void delete(URL fichierCSV) throws Exception {
        throw new UnsupportedOperationException("Not supported yet. TO DO");
    }

    /**
     * Permet de génerer un fichier CSV en fonction de la méthode
     * getClassToGenerateCSV().
     *
     * @return URL du fichier crée
     * @throws Exception
     */
    @Override
    public URL generateCSV() throws Exception {
        URI createdFile = this.csvSrv.createFile("generatedFile.csv");
        Map<Class, List> classes = this.data;
        Set<Class> keySet = classes.keySet();
        Iterator<Map.Entry<Class, List>> iterator = classes.entrySet().iterator();
        List<String> attributs = new ArrayList<String>();
        attributs.add("discipline_id");
        attributs.add("discipline_description");
        attributs.add("specialite_id");
        attributs.add("specialite_description");
        attributs.add("offressoins_id");
        attributs.add("offressoins_intitule");
        attributs.add("offressoins_description");
        attributs.add("offressoins_motscles");
        this.csvSrv.writeLine(this.format(attributs));
        while (iterator.hasNext()) {
            Map.Entry<Class, List> next = iterator.next();
            Class key = next.getKey();
            Field[] declaredFields = key.getDeclaredFields();
            for (int j = 1; j < declaredFields.length; j++) {
                if (!declaredFields[j].getName().equals("serialVersionUID")) {
                    attributs.add(declaredFields[j].getName());
                }
            }
            if (key.getName().equals(DisciplineRef.class.getName())) {
                System.out.println("DISCIPLINE");
                List<DisciplineRef> value = next.getValue();
                for (int i = 0; i < value.size(); i++) {
                    DisciplineRef discipline = value.get(i);
                    if (value.get(i).getSpecialiteelementrefList() != null) {
                        List<SpecialiteElementRef> specialiteelementrefList = value.get(i).getSpecialiteelementrefList();
                        for (int j = 0; j < specialiteelementrefList.size(); j++) {
                            SpecialiteElementRef specialite = specialiteelementrefList.get(j);
                            if (specialite.getDictionnaireoffressoinsList() == null) {
                                this.addLineInCSV(discipline.getIddisciplineref(), discipline.getDescription(), specialite.getIdspecialiteelementref(), specialite.getDescription(), null, "", "", "");
                            } else {

                                List<DictionnaireOffresSoins> dictionnaireOffresSoinses = specialite.getDictionnaireoffressoinsList();
                                for (int x = 0; x < dictionnaireOffresSoinses.size(); x++) {
                                    DictionnaireOffresSoins dictionnaireOffresSoin = dictionnaireOffresSoinses.get(x);
                                    System.out.println("I = " + i + " J = " + j + " X = " + x);
                                    this.addLineInCSV(discipline.getIddisciplineref(), discipline.getDescription(), specialite.getIdspecialiteelementref(), specialite.getDescription(), dictionnaireOffresSoin.getIddictoffressoins(), dictionnaireOffresSoin.getIntitule(), dictionnaireOffresSoin.getDescription(), dictionnaireOffresSoin.getMotscles());
                                }
                            }
                        }
                    } else {
                        this.addLineInCSV(discipline.getIddisciplineref(), discipline.getDescription(), null, "", null, "", "", "");
                    }
                }
            } else if (key.getName().equals(DictionnaireOffresSoins.class.getName())) {
                System.out.println("DICTIONNAIRE OFFRE SOIN");
                List<DictionnaireOffresSoins> value = next.getValue();
                for (int i = 0; i < value.size(); i++) {
                    DictionnaireOffresSoins dictionnaireOffresSoins = value.get(i);
                    this.addLineInCSV(null, "", null, null, dictionnaireOffresSoins.getIddictoffressoins(), dictionnaireOffresSoins.getIntitule(), dictionnaireOffresSoins.getDescription(), dictionnaireOffresSoins.getMotscles());

                }
            } else if (key.getName().equals(SpecialiteElementRef.class.getName())) {
                System.out.println("Specialite ELEMENT REF");
                List<SpecialiteElementRef> specialiteElementRefs = next.getValue();
                for (int i = 0; i < specialiteElementRefs.size(); i++) {
                    SpecialiteElementRef specialiteElementRef = specialiteElementRefs.get(i);
                    if (specialiteElementRef.getDictionnaireoffressoinsList() != null) {
                        List<DictionnaireOffresSoins> dictionnaireoffressoinsList = specialiteElementRef.getDictionnaireoffressoinsList();
                        for (int j = 0; j < dictionnaireoffressoinsList.size(); j++) {
                            DictionnaireOffresSoins dictionnaireOffresSoins = dictionnaireoffressoinsList.get(j);
                            this.addLineInCSV(null, "", specialiteElementRef.getIdspecialiteelementref(), specialiteElementRef.getDescription(), dictionnaireOffresSoins.getIddictoffressoins(), dictionnaireOffresSoins.getIntitule(), dictionnaireOffresSoins.getDescription(), dictionnaireOffresSoins.getMotscles());
                        }
                    } else {
                        this.addLineInCSV(null, "", specialiteElementRef.getIdspecialiteelementref(), specialiteElementRef.getDescription(), null, "", "", "");
                    }
                }
            }
        }

        return createdFile.toURL();
    }

    /**
     *
     * @param disciplineId
     * @param disciplineDescription
     * @param specialiteId
     * @param specialiteDescription
     * @param offreDeSoinId
     * @param offreDeSoinIntitule
     * @param offreDeSoinDescription
     * @param offreDeSoinMotCle
     */
    private void addLineInCSV(Integer disciplineId, String disciplineDescription, Integer specialiteId, String specialiteDescription, Integer offreDeSoinId, String offreDeSoinIntitule, String offreDeSoinDescription, String offreDeSoinMotCle) throws Exception {
        List<String> ligne = new ArrayList<String>();
        if (disciplineId == null) {
            ligne.add(" ");
        } else {
            ligne.add(String.valueOf(disciplineId));
        }

        if (disciplineDescription == null) {
            ligne.add(" ");
        } else {
            ligne.add(this.commaOut(disciplineDescription));
        }
        if (specialiteId == null) {
            ligne.add(" ");
        } else {
            ligne.add(String.valueOf(specialiteId));
        }
        if (specialiteDescription == null) {
            ligne.add(" ");
        } else {
            ligne.add(this.commaOut(specialiteDescription));
        }
        if (offreDeSoinId == null) {
            ligne.add(" ");
        } else {
            ligne.add(String.valueOf(offreDeSoinId));
        }
        ligne.add(offreDeSoinIntitule);
        if (offreDeSoinDescription == null) {
            ligne.add(" ");
        } else {
            ligne.add(this.commaOut(offreDeSoinDescription));
        }
        if (offreDeSoinMotCle != null) {
            ligne.add(this.commaOut(offreDeSoinMotCle));
        } else {
            ligne.add(" ");
        }

        String format = this.format(ligne);
        this.csvSrv.writeLine(format);
    }

    private String commaOut(String value) {
        return this.replaceBy(value, ',', "*<+");
    }

    /**
     *
     * @param valueToReplace
     * @param by
     * @return
     */
    private String replaceBy(String valueToReplace, char wantToReplace, String by) {
        int indexOf;
        while ((indexOf = valueToReplace.lastIndexOf(String.valueOf(wantToReplace))) != -1) {
            if (indexOf != -1) {
                char oldChar = valueToReplace.charAt(indexOf);
                String newStr = by;
                valueToReplace = valueToReplace.replace(Character.toString(oldChar), newStr);
            }
        }

        return valueToReplace;
    }

    /**
     * Permet de retourner au format CSV une liste d'items. Chaque élément est
     * séparé par un - A appliquer pour une cellule.
     *
     * @param items
     * @return String de la liste au format CSV pour une cellule
     */
    private String formatInnerCell(List<String> items) {
        String line = "";
        if (items.size() != 1) {
            for (int b = 0; b < items.size(); b++) {
                if (b != 0 && b != items.size() - 1) {
                    line += "-";
                    line += items.get(b);
                } else if (b == items.size() - 1) {
                    line += "-";
                    line += items.get(b);
                } else {
                    line += items.get(b);
                }
            }
        } else {
            line = items.get(0);
        }
        return line;
    }

    /**
     * Cette fonction permet de mettre une ligne au format CSV Chaque élément de
     * cette liste est donc une cellule.
     *
     * @param cellule
     * @return String d'une ligne au format CSV
     */
    private String format(List<String> cellule) {
        String line = "";
        for (int b = 0; b < cellule.size(); b++) {
            if (b != 0 && b != cellule.size() - 1) {
                line += " ; ";
                line += cellule.get(b);
            } else if (b == cellule.size() - 1) {
                line += " ; ";
                line += cellule.get(b);
                line += "\n";
            } else {
                line += cellule.get(b);
            }
        }
        return line;
    }

    @Override
    public List<String> recupererEncodage() throws Exception {
        throw new UnsupportedOperationException("Not supported yet. TO DO");
    }

    @Override
    public void loadCSV(String url) throws Exception {
        String complet = "discipline_id , discipline_description , specialite_id , specialite_description , offressoins_id , offressoins_intitule , offressoins_description , offressoins_motscles";
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
