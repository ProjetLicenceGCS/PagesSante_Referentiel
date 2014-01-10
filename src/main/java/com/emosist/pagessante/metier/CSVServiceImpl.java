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
    private Map<Class,List> data;
    public CSVServiceImpl(Map<Class,List> map){
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
        }else{
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
                line += " , ";
                line += cellule.get(b);
            } else if (b == cellule.size() - 1) {
                line += " , ";
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
        for(int i=0; i < values.length ;i++){
            ret.add(String.valueOf(values[i]));
        }
        return ret;
    }

}
