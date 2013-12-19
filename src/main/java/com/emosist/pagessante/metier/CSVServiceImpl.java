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

    @Override
    public void delete(URL fichierCSV) throws Exception {
        throw new UnsupportedOperationException("Not supported yet. TO DO");
    }

    @Override
    public URL generateCSV() throws Exception {
        URI createdFile = this.csvSrv.createFile("generatedFile.csv");
        Map<Class, List> classes = this.getClassToGenerateCSV();
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
                this.csvSrv.writeLine(this.getContentLine2(get, attributs));
            }
        }
        return createdFile.toURL();
    }

    private Map<Class, List> getClassToGenerateCSV() throws Exception {
        Map<Class, List> classes = new HashMap<Class, List>();
        classes.put(SpecialiteElementRef.class, PersistanceFactory.getSpecialiteElementRefMapper().selectAll());
        classes.put(DisciplineRef.class, PersistanceFactory.getDisciplineRefMapper().selectAll());
        classes.put(DictionnaireOffresSoins.class, PersistanceFactory.getDictionnaireOffresSoinsMapper().selectAll());
        return classes;
    }

    private String getContentLine2(Object get, List<String> attributs) throws NoSuchMethodException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
        List<String> values = new ArrayList<String>();
        for (int j = 1; j < attributs.size(); j++) {
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
                    value = invoke.toString();
                } else if (invoke instanceof Integer) {
                    value = invoke.toString();
                } else {
                    // On est en présence d'une cascade d'objets il va dont falloir traiter les listes et autres Objets. Pour l'instant on reste au niveau 0 et traitons les simples String
                    value = "OBJECT";
                }
            } else {
                value = "VIDE";
            }
            values.add(value);
        }
        return this.format(values);
    }

    private String format(List<String> attributs) {
        String line = "";
        for (int b = 0; b < attributs.size(); b++) {
            if (b != 0 && b != attributs.size() - 1) {
                line += " , ";
                line += attributs.get(b);
            } else if (b == attributs.size() - 1) {
                line += " , ";
                line += attributs.get(b);
                line += "\n";
            } else {
                line += attributs.get(b);
            }
        }
        return line;
    }

}
