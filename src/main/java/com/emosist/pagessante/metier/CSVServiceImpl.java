package com.emosist.pagessante.metier;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import com.emosist.pagessante.beans.DisciplineRef;
import com.emosist.pagessante.beans.SpecialiteElementRef;
import com.emosist.pagessante.physique.io.CSVServiceIO;
import com.emosist.pagessante.physique.io.PhysiqueIOFactory;
import com.emosist.pagessante.physique.persistence.DictionnaireOffresSoinsMapper;
import com.emosist.pagessante.physique.persistence.DisciplineRefMapper;
import com.emosist.pagessante.physique.persistence.PersistanceFactory;
import com.emosist.pagessante.physique.persistence.SpecialiteElementRefMapper;
import java.io.File;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class CSVServiceImpl implements CSVService {

    private SpecialiteElementRefMapper speialiteElementRefSrv = PersistanceFactory.getSpecialiteElementRefMapper();
    private CSVServiceIO csvSrv = PhysiqueIOFactory.getCSVService();
    private DisciplineRefMapper disciplineRefMapperSrv = PersistanceFactory.getDisciplineRefMapper();
    private DictionnaireOffresSoinsMapper dictionnaireOffresSoinsMapperSrv = PersistanceFactory.getDictionnaireOffresSoinsMapper();
    private Map<Class, List> data;

    public CSVServiceImpl(Map<Class, List> map) {
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
        while (iterator.hasNext()) {
            Map.Entry<Class, List> next = iterator.next();
            Class key = next.getKey();
            Field[] declaredFields = key.getDeclaredFields();
            List<String> attributs = new ArrayList<String>();
            for (int j = 1; j < declaredFields.length; j++) {
                if (!declaredFields[j].getName().equals("serialVersionUID")) {
                    attributs.add(declaredFields[j].getName());
                }
            }
            this.csvSrv.writeLine(this.format(attributs));
            List<Object> sd = next.getValue();
            for (int i = 0; i < sd.size(); i++) {
                List<String> values = new ArrayList<String>();
                Object get = sd.get(i);
                this.csvSrv.writeLine(this.getContentLine(get, attributs));
            }
        }
        return createdFile.toURL();
    }

    /**
     * Permet de retourner la ligne au format CSV en fonction d'un bean et de
     * ses attributs.
     *
     * @param get Soit le bean
     * @param attributs de la classe
     * @return La ligne normalisé au format CSV, les virgules présent dans un
     * attribut sont remplacé par *<+
     * @throws NoSuchMethodException
     * @throws IllegalAccessException
     * @throws IllegalArgumentException
     * @throws InvocationTargetException
     */
    private String getContentLine(Object get, List<String> attributs) throws NoSuchMethodException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
        List<String> values = new ArrayList<String>();
        for (int j = 0; j < attributs.size(); j++) {
            String get1 = attributs.get(j);
            char charAt = get1.charAt(0);
            char toUpperCase = Character.toUpperCase(charAt);
            String p = get1.substring(1);
            String getter = "get" + toUpperCase + p;
            Method declaredField = get.getClass().getDeclaredMethod(getter);
            declaredField.setAccessible(true);
            Object invoke = declaredField.invoke(get);
            String value = null;
            if (invoke != null) {
                if (invoke instanceof String) {
                    String s = (String) invoke;
                    if (s.isEmpty()) {
                        value = "VIDE";
                    } else {
                        value = s.toString();
                    }
                } else if (invoke instanceof Integer) {
                    value = invoke.toString();
                } else if (invoke instanceof SpecialiteElementRef) {
                    SpecialiteElementRef o = (SpecialiteElementRef) invoke;
                    value = o.getIdspecialiteelementref().toString();
                } else if (invoke instanceof List) {
                    try {
                        List<SpecialiteElementRef> specialiteElementRefs = (List<SpecialiteElementRef>) invoke;
                        List<String> strings = new ArrayList<String>();
                        for (SpecialiteElementRef specialiteElementRef : specialiteElementRefs) {
                            strings.add(specialiteElementRef.getIdspecialiteelementref().toString());
                        }
                        if (strings.size() != 0) {
                            value = this.formatInnerCell(strings);
                        } else {
                            value = "VIDE";
                        }
                    } catch (ClassCastException e) {
                        List<DictionnaireOffresSoins> dictionnaireOffresSoinses = (List<DictionnaireOffresSoins>) invoke;
                        List<String> strings = new ArrayList<String>();
                        for (DictionnaireOffresSoins dictionnaireOffresSoins : dictionnaireOffresSoinses) {
                            strings.add(dictionnaireOffresSoins.getIddictoffressoins().toString());
                        }
                        if (strings.size() != 0) {
                            value = this.formatInnerCell(strings);
                        } else {
                            value = "VIDE";
                        }
                    }
                } else if (invoke instanceof DisciplineRef) {
                    DisciplineRef o = (DisciplineRef) invoke;
                    value = o.getIddisciplineref().toString();
                } else {
                    value = "OBJECT";
                }
            } else {
                value = "VIDE";
            }
            int indexOf;
            while ((indexOf = value.lastIndexOf(",")) != -1) {
                if (indexOf != -1) {
                    char oldChar = value.charAt(indexOf);
                    String newStr = "*<+";
                    value = value.replace(Character.toString(oldChar), newStr);
                }
            }
            values.add(value);
        }
        return this.format(values);
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
        List<String> ret = new ArrayList<String>();
        Encodage[] values = Encodage.values();
        for (int i = 0; i < values.length; i++) {
            ret.add(String.valueOf(values[i]));
        }
        return ret;
    }

    @Override
    public void loadCSV(String url) throws Exception {
        if (this.getFileExtension(url).equals("csv")) {
            List<String> listFichier = new ArrayList<String>();
            listFichier = this.csvSrv.recuperationFichier(url);
            Set<Class> keySet = data.keySet();
            Iterator<Class> iterator = keySet.iterator();
            Class next = iterator.next();
            String DisciplineRefName = DisciplineRef.class.getName();
            String SpecialiteElementRefName = SpecialiteElementRef.class.getName();
            String DictionnaireOffresSoinsName = DictionnaireOffresSoins.class.getName();
            if (next.getName().equals(DisciplineRefName)) {
                this.loadCSVDisciplineRef(listFichier);
            } else if (next.getName().equals(SpecialiteElementRefName)) {
                this.loadCSVSpecialiteElementRef(listFichier);
            } else if (next.getName().equals(DictionnaireOffresSoinsName)) {
                this.loadCSVDictionnaireOffreDeSoins(listFichier);
            }
        } else {
            System.err.println("Erreur de format CSV");
            //Faire remonter l'erreur : Indiquer que le format n'est pas le bon
        }

    }

    public String getFileExtension(String NomFichier) {
        File tmpFichier = new File(NomFichier);
        tmpFichier.getName();
        int posPoint = tmpFichier.getName().lastIndexOf('.');
        if (0 < posPoint && posPoint <= tmpFichier.getName().length() - 2) {
            return tmpFichier.getName().substring(posPoint + 1);
        }
        return "";
    }

    public void loadCSVDisciplineRef(List<String> listFichier) {
        System.out.println("loadCSVDisciplineRef");
        List<DisciplineRef> listDisciplineBdd = this.data.get(DisciplineRef.class);
        List<DisciplineRef> listDisciplineFichier = new ArrayList<DisciplineRef>();
        for (int i = 1; i < listFichier.size(); i++) {
            DisciplineRef disciplineRef = new DisciplineRef();
            String[] split = listFichier.get(i).split(";");
            String[] splitElementRef = split[3].split("-");
            List<SpecialiteElementRef> elementRefs = new ArrayList<SpecialiteElementRef>();
            for (int j = 0; j < splitElementRef.length; j++) {
                SpecialiteElementRef elementRef = new SpecialiteElementRef();
                elementRef.setIdspecialiteelementref(Integer.parseInt(splitElementRef[j].trim()));
                elementRefs.add(elementRef);
            }
            disciplineRef.setIddisciplineref(Integer.parseInt(split[0].trim()));
            disciplineRef.setDescription(split[1].trim());
            disciplineRef.setDescriptionNorm(split[2].trim());
            disciplineRef.setSpecialiteelementrefList(elementRefs);
            listDisciplineFichier.add(disciplineRef);
        }
        for (int i = 0; i < listDisciplineFichier.size(); i++) {
            int mod = 0;
            for (int j = 0; j < listDisciplineBdd.size(); j++) {
                if ((listDisciplineFichier.get(i).getIddisciplineref().equals(listDisciplineBdd.get(j).getIddisciplineref()))) {
                    if (listDisciplineFichier.get(i).getDescription().equals(listDisciplineBdd.get(j).getDescription())) {
                        if (listDisciplineFichier.get(i).getDescriptionNorm().equals(listDisciplineBdd.get(j).getDescriptionNorm())) {
                            if ((listDisciplineFichier.get(i).getSpecialiteelementrefList().equals(listDisciplineBdd.get(j).getSpecialiteelementrefList()))) {
                                mod = 1; // Existe à l'identique dans la Bdd donc RIEN A FAIRE
                                break;
                            } else {
                                mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                                break;
                            }
                        } else {
                            mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                            break;
                        }
                    } else {
                        mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                        break;
                    }

                } else {
                    mod = 3; // N'existe pas du tout dans la Bdd donc faire INSERT
                }
            }
            switch (mod) {
                case 1:
                    System.out.println("Existe à l'identique dans la Bdd donc RIEN A FAIRE");
                    break;
                case 2:
                    System.out.println("Existe mais pas à l'identique donc faire UPDATE");
                    //Faire delete de la ligne dans bdd et insert de cette meme ligne du fichier.
                    break;
                case 3:
                    System.out.println("N'existe pas du tout dans la Bdd donc faire INSERT");
                    //Faire insert du fichier dans la bdd
                    break;
            }
        }
        for (int i = 0; i < listDisciplineBdd.size(); i++) {
            int mod = 0;
            for (int j = 0; j < listDisciplineFichier.size(); j++) {
                if ((listDisciplineBdd.get(i).getIddisciplineref().equals(listDisciplineFichier.get(i).getIddisciplineref()))) {
                    mod = 1;
                    break;
                }
            }
            if (mod != 1) {
                //delete fichier de la BDD
                System.out.println("Existe dans la BDD mais pas dans le fichier donc faire DELETE");
            }
        }
    }

    public void loadCSVDictionnaireOffreDeSoins(List<String> listFichier) {

        System.out.println("loadCSVDictionnaireOffreDeSoins");
        List<DictionnaireOffresSoins> listDiscionnaireOffreDeSoinsBDD = this.data.get(DictionnaireOffresSoins.class);
        List<DictionnaireOffresSoins> listDiscionnaireOffreDeSoinsFichier = new ArrayList<DictionnaireOffresSoins>();
        for (int i = 1; i < listFichier.size(); i++) {
            DictionnaireOffresSoins dictionnaireOffresSoins = new DictionnaireOffresSoins();
            String[] split = listFichier.get(i).split(";");
            SpecialiteElementRef elementRef = new SpecialiteElementRef();
            dictionnaireOffresSoins.setIddictoffressoins(Integer.parseInt(split[0].trim()));
            dictionnaireOffresSoins.setIntitule(split[1].trim());
            dictionnaireOffresSoins.setDescription(split[2].trim());
            dictionnaireOffresSoins.setMotscles(split[3].trim());
            dictionnaireOffresSoins.setIntituleNorm(split[4].trim());
            elementRef.setIdspecialiteelementref(Integer.parseInt(split[5].trim()));
            dictionnaireOffresSoins.setIdspecialiteelementref(elementRef);
            listDiscionnaireOffreDeSoinsFichier.add(dictionnaireOffresSoins);
        }
        for (int i = 0; i < listDiscionnaireOffreDeSoinsFichier.size(); i++) {
            int mod = 0;
            for (int j = 0; j < listDiscionnaireOffreDeSoinsBDD.size(); j++) {
                if ((listDiscionnaireOffreDeSoinsFichier.get(i).getIddictoffressoins().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getIddictoffressoins()))) {
                    if (listDiscionnaireOffreDeSoinsFichier.get(i).getIntitule().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getIntitule())) {
                        if (listDiscionnaireOffreDeSoinsFichier.get(i).getDescription().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getDescription())) {
                            if ((listDiscionnaireOffreDeSoinsFichier.get(i).getMotscles().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles()))) {
                                if ((listDiscionnaireOffreDeSoinsFichier.get(i).getMotscles().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles()))) {
                                    if ((listDiscionnaireOffreDeSoinsFichier.get(i).getMotscles().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles()))) {
                                        mod = 1; // Existe à l'identique dans la Bdd donc RIEN A FAIRE
                                        break;
                                    } else {
                                        mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                                        break;
                                    }
                                } else {
                                    mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                                    break;
                                }

                            } else {
                                mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                                break;
                            }
                        } else {
                            mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                            break;
                        }
                    } else {
                        mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                        break;
                    }

                } else {
                    mod = 3; // N'existe pas du tout dans la Bdd donc faire INSERT
                }
            }
            switch (mod) {
                case 1:
                    System.out.println("Existe à l'identique dans la Bdd donc RIEN A FAIRE");
                    break;
                case 2:
                    System.out.println("Existe mais pas à l'identique donc faire UPDATE");
                    //Faire delete de la ligne dans bdd et insert de cette meme ligne du fichier.
                    break;
                case 3:
                    System.out.println("N'existe pas du tout dans la Bdd donc faire INSERT");
                    //Faire insert du fichier dans la bdd
                    break;
            }
        }
        for (int i = 0; i < listDiscionnaireOffreDeSoinsBDD.size(); i++) {
            int mod = 0;
            for (int j = 0; j < listDiscionnaireOffreDeSoinsFichier.size(); j++) {
                if ((listDiscionnaireOffreDeSoinsBDD.get(i).getIddictoffressoins().equals(listDiscionnaireOffreDeSoinsFichier.get(i).getIddictoffressoins()))) {
                    mod = 1;
                    break;
                }
            }
            if (mod != 1) {
                //delete fichier de la BDD
                System.out.println("Existe dans la BDD mais pas dans le fichier donc faire DELETE");
            }
        }
    }

    public void loadCSVSpecialiteElementRef(List<String> listFichier) {

        System.out.println("loadCSVSpecialiteElementRef");
        List<SpecialiteElementRef> listSpecialiteElementRefBdd = this.data.get(SpecialiteElementRef.class);
        List<SpecialiteElementRef> listSpecialiteElementRefFichier = new ArrayList<SpecialiteElementRef>();
        for (int i = 1; i < listFichier.size(); i++) {
            SpecialiteElementRef elementRef = new SpecialiteElementRef();
            String[] split = listFichier.get(i).split(";");
            String[] splitElementRef = split[3].split("-");
            List<DictionnaireOffresSoins> dictionnaireOffresSoinses = new ArrayList<DictionnaireOffresSoins>();
            for (int j = 0; j < splitElementRef.length; j++) {
                DictionnaireOffresSoins dictionnaireOffresSoins = new DictionnaireOffresSoins();
                dictionnaireOffresSoins.setIddictoffressoins(Integer.parseInt(splitElementRef[j].trim()));
                dictionnaireOffresSoinses.add(dictionnaireOffresSoins);
            }
            elementRef.setIdspecialiteelementref(Integer.parseInt(split[0].trim()));
            elementRef.setDescription(split[1].trim());
            elementRef.setDescriptionNorm(split[2].trim());
            elementRef.setDictionnaireoffressoinsList(dictionnaireOffresSoinses);
            DisciplineRef disciplineRef = new DisciplineRef();
            disciplineRef.setIddisciplineref(Integer.parseInt(split[4].trim()));
            elementRef.setIddisciplineref(disciplineRef);
            listSpecialiteElementRefFichier.add(elementRef);
        }
        for (int i = 0; i < listSpecialiteElementRefFichier.size(); i++) {
            int mod = 0;
            for (int j = 0; j < listSpecialiteElementRefBdd.size(); j++) {
                if ((listSpecialiteElementRefFichier.get(i).getIdspecialiteelementref().equals(listSpecialiteElementRefBdd.get(j).getIdspecialiteelementref()))) {
                    if (listSpecialiteElementRefFichier.get(i).getDescription().equals(listSpecialiteElementRefBdd.get(j).getDescription())) {
                        if (listSpecialiteElementRefFichier.get(i).getDescriptionNorm().equals(listSpecialiteElementRefBdd.get(j).getDescriptionNorm())) {
                            if ((listSpecialiteElementRefFichier.get(i).getDictionnaireoffressoinsList().equals(listSpecialiteElementRefBdd.get(j).getDictionnaireoffressoinsList()))) {
                                if ((listSpecialiteElementRefFichier.get(i).getIddisciplineref().equals(listSpecialiteElementRefBdd.get(j).getIddisciplineref()))) {
                                    mod = 1; // Existe à l'identique dans la Bdd donc RIEN A FAIRE
                                    break;
                                } else {
                                    mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                                    break;
                                }
                            } else {
                                mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                                break;
                            }
                        } else {
                            mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                            break;
                        }
                    } else {
                        mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                        break;
                    }

                } else {
                    mod = 3; // N'existe pas du tout dans la Bdd donc faire INSERT
                }
            }
            switch (mod) {
                case 1:
                    System.out.println("Existe à l'identique dans la Bdd donc RIEN A FAIRE");
                    break;
                case 2:
                    System.out.println("Existe mais pas à l'identique donc faire UPDATE");
                    //Faire delete de la ligne dans bdd et insert de cette meme ligne du fichier.
                    break;
                case 3:
                    System.out.println("N'existe pas du tout dans la Bdd donc faire INSERT");
                    //Faire insert du fichier dans la bdd
                    break;
            }
        }
        for (int i = 0; i < listSpecialiteElementRefBdd.size(); i++) {
            int mod = 0;
            for (int j = 0; j < listSpecialiteElementRefFichier.size(); j++) {
                if ((listSpecialiteElementRefBdd.get(i).getIdspecialiteelementref().equals(listSpecialiteElementRefFichier.get(i).getIdspecialiteelementref()))) {
                    mod = 1;
                    break;
                }
            }
            if (mod != 1) {
                //delete fichier de la BDD
                
                System.out.println("Existe dans la BDD mais pas dans le fichier donc faire DELETE");
            }
        }
    }

}
