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
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.jboss.weld.util.collections.ArraySet;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class CSVServiceV2Impl implements CSVService {

    private SpecialiteElementRefMapper speialiteElementRefSrv = PersistanceFactory.getSpecialiteElementRefMapper();
    private CSVServiceIO csvSrv = PhysiqueIOFactory.getCSVService();
    private DisciplineRefMapper disciplineRefMapperSrv = PersistanceFactory.getDisciplineRefMapper();
    private DictionnaireOffresSoinsMapper dictionnaireOffresSoinsMapperSrv = PersistanceFactory.getDictionnaireOffresSoinsMapper();
    private Map<Class, List> data;
    private Set<String> erreurs = new ArraySet<String>();
    
    public CSVServiceV2Impl(Map<Class, List> map) {
        this.data = map;
    }

    @Override
    public void delete(URL fichierCSV) throws Exception {
        throw new UnsupportedOperationException("Not supported yet. TO DO");
    }

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
        int sizeOfkeys = keySet.size();
        if (sizeOfkeys == 3) {
            List<DisciplineRef> value = MetierFactory.getDisciplineRefService().selectAll();
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
                                this.addLineInCSV(discipline.getIddisciplineref(), discipline.getDescription(), specialite.getIdspecialiteelementref(), specialite.getDescription(), dictionnaireOffresSoin.getIddictoffressoins(), dictionnaireOffresSoin.getIntitule(), dictionnaireOffresSoin.getDescription(), dictionnaireOffresSoin.getMotscles());
                            }
                        }
                    }
                } else {
                    this.addLineInCSV(discipline.getIddisciplineref(), discipline.getDescription(), null, "", null, "", "", "");
                }
            }
        } else {
            Map.Entry<Class, List> next = iterator.next();
            Class key = next.getKey();
            Map.Entry<Class, List> next2 = iterator.next();
            Class key2 = next2.getKey();
            if ((key.equals(DisciplineRef.class) && key2.equals(DictionnaireOffresSoins.class)) || (key2.equals(DisciplineRef.class) && key.equals(DictionnaireOffresSoins.class))) {
                List<DisciplineRef> value = MetierFactory.getDisciplineRefService().selectAll();
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
                                    this.addLineInCSV(discipline.getIddisciplineref(), discipline.getDescription(), specialite.getIdspecialiteelementref(), specialite.getDescription(), dictionnaireOffresSoin.getIddictoffressoins(), dictionnaireOffresSoin.getIntitule(), dictionnaireOffresSoin.getDescription(), dictionnaireOffresSoin.getMotscles());
                                }
                            }
                        }
                    } else {
                        this.addLineInCSV(discipline.getIddisciplineref(), discipline.getDescription(), null, "", null, "", "", "");
                    }
                }
            } else if ((key.equals(SpecialiteElementRef.class) && key2.equals(DictionnaireOffresSoins.class)) || (key2.equals(SpecialiteElementRef.class) && key.equals(DictionnaireOffresSoins.class))) {
                List<SpecialiteElementRef> specialiteElementRefs = PersistanceFactory.getSpecialiteElementRefMapper().selectAll();
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
            } else if ((key.equals(SpecialiteElementRef.class) && key2.equals(DisciplineRef.class)) || (key2.equals(SpecialiteElementRef.class) && key.equals(DisciplineRef.class))) {
                List<DisciplineRef> value = MetierFactory.getDisciplineRefService().selectAll();
                for (int i = 0; i < value.size(); i++) {
                    DisciplineRef discipline = value.get(i);
                    if (value.get(i).getSpecialiteelementrefList() != null) {
                        List<SpecialiteElementRef> specialiteelementrefList = value.get(i).getSpecialiteelementrefList();
                        for (int j = 0; j < specialiteelementrefList.size(); j++) {
                            SpecialiteElementRef specialite = specialiteelementrefList.get(j);
                            this.addLineInCSV(discipline.getIddisciplineref(), discipline.getDescription(), specialite.getIdspecialiteelementref(), specialite.getDescription(), null, "", "", "");
                        }
                    } else {
                        this.addLineInCSV(discipline.getIddisciplineref(), discipline.getDescription(), null, "", null, "", "", "");
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
    public Set<String>loadCSV(String fichier) throws Exception {
        List<String> listFichier = new ArrayList<String>();
        listFichier = this.recuperationFichier(fichier);
        int idDiscipline = 0;
        int idSpecialite = 0;
        for (int i = 1; i < listFichier.size(); i++) {
            String[] split = listFichier.get(i).split(";");
            if (idDiscipline != Integer.parseInt(split[0].trim())) {
                idDiscipline = Integer.parseInt(split[0].trim());
                this.loadCSVDisciplineRef(idDiscipline, split[1].trim());
            }
            if (idSpecialite != Integer.parseInt(split[2].trim())) {
                idSpecialite = Integer.parseInt(split[2].trim());
                //this.loadCSVSpecialiteElementRef(Integer.parseInt(split[2].trim()),Integer.parseInt(split[0].trim()),split[3].trim());
            }
            //this.loadCSVDictionnaireOffreDeSoins(Integer.parseInt(split[4].trim()), Integer.parseInt(split[2].trim()), split[5].trim(), split[6].trim(), split[7].trim());
        }
        return erreurs;
    }

    public void loadCSVDisciplineRef(int id, String nomDiscipline) throws Exception {
        System.out.println("loadCSVDisciplineRef");
        List<DisciplineRef> listDisciplineBdd = this.data.get(DisciplineRef.class);
        List<DisciplineRef> listDisciplineFichier = new ArrayList<DisciplineRef>();
        DisciplineRef disciplineRef = new DisciplineRef();
        disciplineRef.setIddisciplineref(id);
        disciplineRef.setDescription(nomDiscipline);
        disciplineRef.setDescriptionNorm(nomDiscipline.toUpperCase());
        disciplineRef.setSpecialiteelementrefList(null);
        listDisciplineFichier.add(disciplineRef);
        for (int i = 0; i < listDisciplineFichier.size(); i++) {
            int mod = 0;
            for (int j = 0; j < listDisciplineBdd.size(); j++) {
                if ((listDisciplineFichier.get(i).getIddisciplineref().equals(listDisciplineBdd.get(j).getIddisciplineref()))) {
                    if (listDisciplineFichier.get(i).getDescription().equals(listDisciplineBdd.get(j).getDescription())) {
                        if (listDisciplineFichier.get(i).getDescriptionNorm().equals(listDisciplineBdd.get(j).getDescriptionNorm())) {
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
                    mod = 3; // N'existe pas du tout dans la Bdd donc faire INSERT
                }
            }
            switch (mod) {
                case 1:
                    System.out.println("Existe à l'identique dans la Bdd donc RIEN A FAIRE");
                    break;
                case 2:
                    System.out.println("Existe mais pas à l'identique donc faire UPDATE" + listDisciplineFichier.get(i));
                    this.disciplineRefMapperSrv.updateByPrimaryKey(listDisciplineFichier.get(i));
                    //Faire delete de la ligne dans bdd et insert de cette meme ligne du fichier.
                    break;
                case 3:
                    System.out.println("N'existe pas du tout dans la Bdd donc faire INSERT" + listDisciplineFichier.get(i));
                    this.disciplineRefMapperSrv.insert(listDisciplineFichier.get(i));
                    //Faire insert du fichier dans la bdd
                    break;
            }
        }
//        int mod = 0;
//        for (int i = 0; i < listDisciplineBdd.size(); i++) {
//                if ((listDisciplineBdd.get(i).getIddisciplineref().equals(listDisciplineFichier.get(0).getIddisciplineref()))) {
//                    mod = 1;
//                    break;
//                }
//            if (mod != 1) {
//                //delete fichier de la BDD
//                this.disciplineRefMapperSrv.deleteByPrimaryKey(listDisciplineBdd.get(i).getIddisciplineref());
//                System.out.println("Existe dans la BDD mais pas dans le fichier donc faire DELETE" + listDisciplineBdd.get(0).getIddisciplineref());
//            }
//        }
    }

    public void loadCSVDictionnaireOffreDeSoins(int idOffresSoins, int idSpecialite, String intitule, String description, String motClef) throws Exception {

//        System.out.println("loadCSVDictionnaireOffreDeSoins");
//        List<DictionnaireOffresSoins> listDiscionnaireOffreDeSoinsBDD = this.data.get(DictionnaireOffresSoins.class);
//        List<DictionnaireOffresSoins> listDiscionnaireOffreDeSoinsFichier = new ArrayList<DictionnaireOffresSoins>();
//            DictionnaireOffresSoins dictionnaireOffresSoins = new DictionnaireOffresSoins();
//            String[] split = valeur.split(";");
//            SpecialiteElementRef elementRef = new SpecialiteElementRef();
//            dictionnaireOffresSoins.setIddictoffressoins(Integer.parseInt(split[2].trim()));
//            dictionnaireOffresSoins.setIntitule(split[1].trim());
//            dictionnaireOffresSoins.setDescription(split[2].trim());
//            dictionnaireOffresSoins.setMotscles(split[3].trim());
//            dictionnaireOffresSoins.setIntituleNorm(split[4].trim());
//            elementRef.setIdspecialiteelementref(Integer.parseInt(split[5].trim()));
//            dictionnaireOffresSoins.setIdspecialiteelementref(elementRef);
//            listDiscionnaireOffreDeSoinsFichier.add(dictionnaireOffresSoins);
//        for (int i = 0; i < listDiscionnaireOffreDeSoinsFichier.size(); i++) {
//            int mod = 0;
//            for (int j = 0; j < listDiscionnaireOffreDeSoinsBDD.size(); j++) {
//                if ((listDiscionnaireOffreDeSoinsFichier.get(i).getIddictoffressoins().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getIddictoffressoins()))) {
//                    if (listDiscionnaireOffreDeSoinsFichier.get(i).getIntitule().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getIntitule())) {
//                        if (listDiscionnaireOffreDeSoinsFichier.get(i).getDescription().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getDescription())) {
//                            if ((listDiscionnaireOffreDeSoinsFichier.get(i).getMotscles().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles()))) {
//                                if ((listDiscionnaireOffreDeSoinsFichier.get(i).getMotscles().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles()))) {
//                                    if ((listDiscionnaireOffreDeSoinsFichier.get(i).getMotscles().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles()))) {
//                                        mod = 1; // Existe à l'identique dans la Bdd donc RIEN A FAIRE
//                                        break;
//                                    } else {
//                                        mod = 2; // Existe mais pas à l'identique donc faire UPDATE
//                                        break;
//                                    }
//                                } else {
//                                    mod = 2; // Existe mais pas à l'identique donc faire UPDATE
//                                    break;
//                                }
//
//                            } else {
//                                mod = 2; // Existe mais pas à l'identique donc faire UPDATE
//                                break;
//                            }
//                        } else {
//                            mod = 2; // Existe mais pas à l'identique donc faire UPDATE
//                            break;
//                        }
//                    } else {
//                        mod = 2; // Existe mais pas à l'identique donc faire UPDATE
//                        break;
//                    }
//
//                } else {
//                    mod = 3; // N'existe pas du tout dans la Bdd donc faire INSERT
//                }
//            }
//            switch (mod) {
//                case 1:
//                    System.out.println("Existe à l'identique dans la Bdd donc RIEN A FAIRE");
//                    break;
//                case 2:
//                    System.out.println("Existe mais pas à l'identique donc faire UPDATE");
//                    this.dictionnaireOffresSoinsMapperSrv.updateByPrimaryKey(listDiscionnaireOffreDeSoinsFichier.get(i));
//                    //Faire delete de la ligne dans bdd et insert de cette meme ligne du fichier.
//                    break;
//                case 3:
//                    System.out.println("N'existe pas du tout dans la Bdd donc faire INSERT");
//                    this.dictionnaireOffresSoinsMapperSrv.insert(listDiscionnaireOffreDeSoinsFichier.get(i));
//                    //Faire insert du fichier dans la bdd
//                    break;
//            }
//        }
//        for (int i = 0; i < listDiscionnaireOffreDeSoinsBDD.size(); i++) {
//            int mod = 0;
//            for (int j = 0; j < listDiscionnaireOffreDeSoinsFichier.size(); j++) {
//                if ((listDiscionnaireOffreDeSoinsBDD.get(i).getIddictoffressoins().equals(listDiscionnaireOffreDeSoinsFichier.get(i).getIddictoffressoins()))) {
//                    mod = 1;
//                    break;
//                }
//            }
//            if (mod != 1) {
//                //delete fichier de la BDD
//                this.dictionnaireOffresSoinsMapperSrv.deleteByPrimaryKey(listDiscionnaireOffreDeSoinsBDD.get(i).getIddictoffressoins());
//                System.out.println("Existe dans la BDD mais pas dans le fichier donc faire DELETE");
//            }
//        }
    }

    public void loadCSVSpecialiteElementRef(int idspecialite, int iddiscipline, String descrition) throws Exception {

//        System.out.println("loadCSVSpecialiteElementRef");
//        List<SpecialiteElementRef> listSpecialiteElementRefBdd = this.data.get(SpecialiteElementRef.class);
//        List<SpecialiteElementRef> listSpecialiteElementRefFichier = new ArrayList<SpecialiteElementRef>();
//        for (int i = 1; i < listFichier.size(); i++) {
//            SpecialiteElementRef elementRef = new SpecialiteElementRef();
//            String[] split = listFichier.get(i).split(";");
//            String[] splitElementRef = split[3].split("-");
//            List<DictionnaireOffresSoins> dictionnaireOffresSoinses = new ArrayList<DictionnaireOffresSoins>();
//            for (int j = 0; j < splitElementRef.length; j++) {
//                DictionnaireOffresSoins dictionnaireOffresSoins = new DictionnaireOffresSoins();
//                dictionnaireOffresSoins.setIddictoffressoins(Integer.parseInt(splitElementRef[j].trim()));
//                dictionnaireOffresSoinses.add(dictionnaireOffresSoins);
//            }
//            elementRef.setIdspecialiteelementref(Integer.parseInt(split[0].trim()));
//            elementRef.setDescription(split[1].trim());
//            elementRef.setDescriptionNorm(split[2].trim());
//            elementRef.setDictionnaireoffressoinsList(dictionnaireOffresSoinses);
//            DisciplineRef disciplineRef = new DisciplineRef();
//            disciplineRef.setIddisciplineref(Integer.parseInt(split[4].trim()));
//            elementRef.setIddisciplineref(disciplineRef);
//            listSpecialiteElementRefFichier.add(elementRef);
//        }
//        for (int i = 0; i < listSpecialiteElementRefFichier.size(); i++) {
//            int mod = 0;
//            for (int j = 0; j < listSpecialiteElementRefBdd.size(); j++) {
//                if ((listSpecialiteElementRefFichier.get(i).getIdspecialiteelementref().equals(listSpecialiteElementRefBdd.get(j).getIdspecialiteelementref()))) {
//                    if (listSpecialiteElementRefFichier.get(i).getDescription().equals(listSpecialiteElementRefBdd.get(j).getDescription())) {
//                        if (listSpecialiteElementRefFichier.get(i).getDescriptionNorm().equals(listSpecialiteElementRefBdd.get(j).getDescriptionNorm())) {
//                            if ((listSpecialiteElementRefFichier.get(i).getDictionnaireoffressoinsList().equals(listSpecialiteElementRefBdd.get(j).getDictionnaireoffressoinsList()))) {
//                                if ((listSpecialiteElementRefFichier.get(i).getIddisciplineref().equals(listSpecialiteElementRefBdd.get(j).getIddisciplineref()))) {
//                                    mod = 1; // Existe à l'identique dans la Bdd donc RIEN A FAIRE
//                                    break;
//                                } else {
//                                    mod = 2; // Existe mais pas à l'identique donc faire UPDATE
//                                    break;
//                                }
//                            } else {
//                                mod = 2; // Existe mais pas à l'identique donc faire UPDATE
//                                break;
//                            }
//                        } else {
//                            mod = 2; // Existe mais pas à l'identique donc faire UPDATE
//                            break;
//                        }
//                    } else {
//                        mod = 2; // Existe mais pas à l'identique donc faire UPDATE
//                        break;
//                    }
//
//                } else {
//                    mod = 3; // N'existe pas du tout dans la Bdd donc faire INSERT
//                }
//            }
//            switch (mod) {
//                case 1:
//                    System.out.println("Existe à l'identique dans la Bdd donc RIEN A FAIRE");
//                    break;
//                case 2:
//                    System.out.println("Existe mais pas à l'identique donc faire UPDATE");
//                    this.speialiteElementRefSrv.updateByPrimaryKey(listSpecialiteElementRefFichier.get(i));
//                    //Faire delete de la ligne dans bdd et insert de cette meme ligne du fichier.
//                    break;
//                case 3:
//                    System.out.println("N'existe pas du tout dans la Bdd donc faire INSERT");
//                    this.speialiteElementRefSrv.insert(listSpecialiteElementRefFichier.get(i));
//                    //Faire insert du fichier dans la bdd
//                    break;
//            }
//        }
//        for (int i = 0; i < listSpecialiteElementRefBdd.size(); i++) {
//            int mod = 0;
//            for (int j = 0; j < listSpecialiteElementRefFichier.size(); j++) {
//                if ((listSpecialiteElementRefBdd.get(i).getIdspecialiteelementref().equals(listSpecialiteElementRefFichier.get(i).getIdspecialiteelementref()))) {
//                    mod = 1;
//                    break;
//                }
//            }
//            if (mod != 1) {
//                //delete fichier de la BDD
//                this.speialiteElementRefSrv.deleteByPrimaryKey(listSpecialiteElementRefBdd.get(i).getIdspecialiteelementref());
//                System.out.println("Existe dans la BDD mais pas dans le fichier donc faire DELETE");
//            }
//        }
    }

    public List<String> recuperationFichier(String fichier) throws Exception {
        String[] lines = fichier.split("\n");
        List<String> list = new ArrayList<String>();
        for (int i = 0; i < lines.length; i++) {
            list.add(lines[i]);
        }
        return list;
    }

}
