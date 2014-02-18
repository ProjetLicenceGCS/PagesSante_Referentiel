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
 * @author Morin Alexandre
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
        return this.replaceBy(value, ',', ",");
    }

    /**
     *
     * @param valueToReplace
     * @param by
     * @return
     */
    private String replaceBy(String valueToReplace, char wantToReplace, String by) {
//        int indexOf;
//        while ((indexOf = valueToReplace.lastIndexOf(String.valueOf(wantToReplace))) != -1) {
//            if (indexOf != -1) {
//                char oldChar = valueToReplace.charAt(indexOf);
//                String newStr = by;
//                valueToReplace = valueToReplace.replace(Character.toString(oldChar), newStr);
//            }
//        }

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
    public Set<String> loadCSV(String fichier) throws Exception {
        List<String> listFichier = new ArrayList<String>();
        List<DisciplineRef> listDisciplines = new ArrayList<DisciplineRef>();
        List<SpecialiteElementRef> listSpecialites = new ArrayList<SpecialiteElementRef>();
        List<DictionnaireOffresSoins> listOffres = new ArrayList<DictionnaireOffresSoins>();
        listFichier = this.recuperationFichier(fichier);
        int idDiscipline = 0;
        int idSpecialite = 0;
        DisciplineRef dr = null;
        for (int i = 1; i < listFichier.size(); i++) {
            SpecialiteElementRef sr = new SpecialiteElementRef();
            String[] split = listFichier.get(i).split(";");
            if (idDiscipline != Integer.parseInt(split[0].trim())) {
                dr = new DisciplineRef();
                idDiscipline = Integer.parseInt(split[0].trim());
                dr.setIddisciplineref(Integer.parseInt(split[0].trim()));
                dr.setDescription(split[1].trim());
                dr.setDescriptionNorm(split[1].trim().toUpperCase());
                List<SpecialiteElementRef> listSpecialiteRef = new ArrayList<SpecialiteElementRef>();
                listSpecialiteRef.add(PersistanceFactory.getSpecialiteElementRefMapper().selectByPrimaryKey(Integer.parseInt(split[2].trim())));
                dr.setSpecialiteelementrefList(listSpecialiteRef);
                this.loadCSVDisciplineRef(dr);
                listDisciplines.add(dr);
            }
            if (idSpecialite != Integer.parseInt(split[2].trim())) {
                idSpecialite = Integer.parseInt(split[2].trim());
                sr.setIdspecialiteelementref(Integer.parseInt(split[2].trim()));
                sr.setDescription(split[3].trim());
                sr.setDescriptionNorm(split[3].trim().toUpperCase());
                sr.setIddisciplineref(dr);
                List<DictionnaireOffresSoins> list = new ArrayList<DictionnaireOffresSoins>();
                list.add(PersistanceFactory.getDictionnaireOffresSoinsMapper().selectByPrimaryKey(Integer.parseInt(split[4].trim())));
                sr.setDictionnaireoffressoinsList(list);
                this.loadCSVSpecialiteElementRef(sr);
                listSpecialites.add(sr);
            }
            DictionnaireOffresSoins dos = new DictionnaireOffresSoins();
            dos.setIddictoffressoins(Integer.parseInt(split[4].trim()));
            dos.setIntitule(split[5].trim());
            dos.setIntituleNorm(split[5].trim().toUpperCase());
            dos.setDescription(split[6].trim());
            if (!split[4].trim().equals("")) {
                dos.setMotscles(split[7].trim());
            } else {
                dos.setMotscles(null);
            }
            dos.setIdspecialiteelementref(sr);
            this.loadCSVDictionnaireOffreDeSoins(dos);
            listOffres.add(dos);
        }
        this.deleteLigne(listDisciplines, listSpecialites, listOffres);

        return erreurs;
    }

    public void loadCSVDisciplineRef(DisciplineRef dr) throws Exception {
        List<DisciplineRef> listDisciplineBdd = this.data.get(DisciplineRef.class);
        int mod = 3;
        for (int j = 0; j < listDisciplineBdd.size(); j++) {
            if ((dr.getIddisciplineref().equals(listDisciplineBdd.get(j).getIddisciplineref()))) {
                if (dr.getDescription().equals(listDisciplineBdd.get(j).getDescription())) {
                    mod = 1; // Existe à l'identique dans la Bdd donc RIEN A FAIRE
                    break;
                } else {
                    mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                    System.err.println(listDisciplineBdd.get(j).getIddisciplineref() + " " + listDisciplineBdd.get(j).getDescription() + " " + listDisciplineBdd.get(j).getDescriptionNorm() + " " + dr.getSpecialiteelementrefList());
                    System.out.println(dr.getIddisciplineref() + " " + dr.getDescription() + " " + dr.getDescriptionNorm() + " " + dr.getSpecialiteelementrefList());
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
                this.disciplineRefMapperSrv.updateByPrimaryKey(dr);
                //Faire delete de la ligne dans bdd et insert de cette meme ligne du fichier.
                break;
            case 3:
                System.out.println("N'existe pas du tout dans la Bdd donc faire INSERT");
                this.disciplineRefMapperSrv.insert(dr);
                System.out.println(dr.getIddisciplineref() + " " + dr.getDescription() + " " + dr.getDescriptionNorm() + " " + dr.getSpecialiteelementrefList());
                //Faire insert du fichier dans la bdd
                break;
        }
    }

    public void loadCSVDictionnaireOffreDeSoins(DictionnaireOffresSoins dos) throws Exception {
        List<DictionnaireOffresSoins> listDiscionnaireOffreDeSoinsBDD = this.data.get(DictionnaireOffresSoins.class);
        int mod = 3;
        for (int j = 0; j < listDiscionnaireOffreDeSoinsBDD.size(); j++) {
            if ((dos.getIddictoffressoins().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getIddictoffressoins()))) {
                if (dos.getIntitule().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getIntitule())) {
                    if (dos.getDescription().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getDescription())) {
                        if (dos.getMotscles() != null && !"".equals(dos.getMotscles())) {
                            if ((dos.getMotscles().equals(listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles()))) {
                                mod = 1; // Existe à l'identique dans la Bdd donc RIEN A FAIRE
                                break;
                            } else {
                                mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                                System.err.println(listDiscionnaireOffreDeSoinsBDD.get(j).getIddictoffressoins() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getIntitule() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getDescription() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles());
                                System.out.println(dos.getIddictoffressoins() + " " + dos.getIntitule() + " " + dos.getDescription() + " " + dos.getMotscles());
                                break;
                            }
                        } else {
                            if (listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles() == null) {
                                mod = 1; // Existe à l'identique dans la Bdd donc RIEN A FAIRE
                                break;
                            } else {
                                mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                                System.err.println(listDiscionnaireOffreDeSoinsBDD.get(j).getIddictoffressoins() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getIntitule() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getDescription() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles());
                                System.out.println(dos.getIddictoffressoins() + " " + dos.getIntitule() + " " + dos.getDescription() + " " + dos.getMotscles());
                                break;
                            }
                        }
                    } else {
                        mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                        System.err.println(listDiscionnaireOffreDeSoinsBDD.get(j).getIddictoffressoins() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getIntitule() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getDescription() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles());
                        System.out.println(dos.getIddictoffressoins() + " " + dos.getIntitule() + " " + dos.getDescription() + " " + dos.getMotscles());
                        break;
                    }

                } else {
                    mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                    System.err.println(listDiscionnaireOffreDeSoinsBDD.get(j).getIddictoffressoins() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getIntitule() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getDescription() + " " + listDiscionnaireOffreDeSoinsBDD.get(j).getMotscles());
                    System.out.println(dos.getIddictoffressoins() + " " + dos.getIntitule() + " " + dos.getDescription() + " " + dos.getMotscles());
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
                this.dictionnaireOffresSoinsMapperSrv.updateByPrimaryKey(dos);
                //Faire delete de la ligne dans bdd et insert de cette meme ligne du fichier.
                break;
            case 3:
                System.out.println("N'existe pas du tout dans la Bdd donc faire INSERT");
                System.out.println(dos.getIddictoffressoins() + " " + dos.getIntitule() + " " + dos.getDescription() + " " + dos.getMotscles() + " " + dos.getIdspecialiteelementref());
                this.dictionnaireOffresSoinsMapperSrv.insert(dos);
                //Faire insert du fichier dans la bdd
                break;
        }
    }

    public void loadCSVSpecialiteElementRef(SpecialiteElementRef sr) throws Exception {
        List<SpecialiteElementRef> listSpecialiteElementRefBdd = this.data.get(SpecialiteElementRef.class);
        int mod = 3;
        for (int j = 0; j < listSpecialiteElementRefBdd.size(); j++) {
            if ((sr.getIdspecialiteelementref().equals(listSpecialiteElementRefBdd.get(j).getIdspecialiteelementref()))) {
                if (sr.getDescription().equals(listSpecialiteElementRefBdd.get(j).getDescription())) {
                    if ((sr.getIddisciplineref().equals(listSpecialiteElementRefBdd.get(j).getIddisciplineref()))) {
                        mod = 1; // Existe à l'identique dans la Bdd donc RIEN A FAIRE
                        break;
                    } else {
                        mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                        System.err.println(listSpecialiteElementRefBdd.get(j).getIdspecialiteelementref() + " " + listSpecialiteElementRefBdd.get(j).getDescription() + " " + listSpecialiteElementRefBdd.get(j).getIddisciplineref());
                        System.out.println(sr.getIdspecialiteelementref() + " " + sr.getDescription() + " " + sr.getIddisciplineref());
                        break;
                    }
                } else {
                    mod = 2; // Existe mais pas à l'identique donc faire UPDATE
                    System.err.println(listSpecialiteElementRefBdd.get(j).getIdspecialiteelementref() + " " + listSpecialiteElementRefBdd.get(j).getDescription() + " " + listSpecialiteElementRefBdd.get(j).getIddisciplineref());
                    System.out.println(sr.getIdspecialiteelementref() + " " + sr.getDescription() + " " + sr.getIddisciplineref());
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
                this.speialiteElementRefSrv.updateByPrimaryKey(sr);
                //Faire delete de la ligne dans bdd et insert de cette meme ligne du fichier.
                break;
            case 3:
                System.out.println("N'existe pas du tout dans la Bdd donc faire INSERT");
                System.out.println(sr.getIdspecialiteelementref() + " " + sr.getDescription() + " " + sr.getIddisciplineref());
                this.speialiteElementRefSrv.insert(sr);
                //Faire insert du fichier dans la bdd
                break;
        }
    }

    public List<String> recuperationFichier(String fichier) throws Exception {
        String[] lines = fichier.split("\n");
        List<String> list = new ArrayList<String>();
        for (int i = 0; i < lines.length; i++) {
            list.add(lines[i]);
        }
        return list;
    }

    public void deleteLigne(List<DisciplineRef> listD, List<SpecialiteElementRef> listS, List<DictionnaireOffresSoins> listO) throws Exception {
        List<DisciplineRef> listDisciplineBdd = this.data.get(DisciplineRef.class);
        List<SpecialiteElementRef> listSpecialiteElementRefBdd = this.data.get(SpecialiteElementRef.class);
        List<DictionnaireOffresSoins> listDictionnaireOffresSoinsBdd = this.data.get(DictionnaireOffresSoins.class);
        for (int i = 0; i < listDisciplineBdd.size(); i++) {
            int modD = 0;
            for (int j = 0; j < listD.size(); j++) {
                if ((listDisciplineBdd.get(i).getIddisciplineref().equals(listD.get(j).getIddisciplineref()))) {
                    modD = 1;
                    break;
                }
            }
            if (modD == 0) {
                //delete fichier de la BDD
                this.disciplineRefMapperSrv.delete(listDisciplineBdd.get(i));
                System.out.println("Existe dans la BDD mais pas dans le fichier donc faire DELETE Discipline");
            }
        }
        for (int i = 0; i < listSpecialiteElementRefBdd.size(); i++) {
            int modS = 0;
            for (int j = 0; j < listS.size(); j++) {
                if ((listSpecialiteElementRefBdd.get(i).getIdspecialiteelementref().equals(listS.get(j).getIdspecialiteelementref()))) {
                    modS = 1;
                    break;
                }
            }
            if (modS == 0) {
                //delete fichier de la BDD
                this.speialiteElementRefSrv.delete(listSpecialiteElementRefBdd.get(i));
                System.out.println("Existe dans la BDD mais pas dans le fichier donc faire DELETE Specialite");
            }
        }
        for (int i = 0; i < listSpecialiteElementRefBdd.size(); i++) {
            int modO = 0;
            for (int j = 0; j < listS.size(); j++) {
                if ((listDictionnaireOffresSoinsBdd.get(i).getIddictoffressoins().equals(listO.get(j).getIddictoffressoins()))) {
                    modO = 1;
                    break;
                }
            }
            if (modO == 0) {
                //delete fichier de la BDD
//               this.dictionnaireOffresSoinsMapperSrv.delete(listDictionnaireOffresSoinsBdd.get(i));
                System.out.println("Existe dans la BDD mais pas dans le fichier donc faire DELETE offre" + listDictionnaireOffresSoinsBdd.get(i));
            }
        }
    }
}
