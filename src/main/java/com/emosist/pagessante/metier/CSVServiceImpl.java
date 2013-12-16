package com.emosist.pagessante.metier;

import com.emosist.pagessante.beans.SpecialiteElementRef;
import com.emosist.pagessante.physique.io.CSVServiceIO;
import com.emosist.pagessante.physique.io.PhysiqueIOFactory;
import com.emosist.pagessante.physique.persistence.PersistanceFactory;
import com.emosist.pagessante.physique.persistence.SpecialiteElementRefMapper;
import java.lang.reflect.Field;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class CSVServiceImpl implements CSVService {

    private SpecialiteElementRefMapper speialiteElementRefSrv = PersistanceFactory.getSpecialiteElementRefMapper();
    private CSVServiceIO cvsSrv = PhysiqueIOFactory.getCSVService();

    @Override
    public void delete(URL fichierCSV) throws Exception {
        throw new UnsupportedOperationException("Not supported yet. TO DO");
    }

    @Override
    public URL generateCSV() throws Exception {
        List<Class> classToGenerateCSV = this.getClassToGenerateCSV();
        for (int i = 0; i < classToGenerateCSV.size(); i++) {
            Class classe = classToGenerateCSV.get(i);
            Field[] declaredFields = classe.getDeclaredFields();
            List<String> attributs = new ArrayList<String>();
            for (int j = 1; j < declaredFields.length; j++) {
                if (!declaredFields[j].getName().equals("serialVersionUID")) {
                    attributs.add(declaredFields[j].getName());
                }
            }
            System.out.println(attributs.toString());
        }
        return null;
    }

    private List<Class> getClassToGenerateCSV() {
        List<Class> classes = new ArrayList<Class>();
        classes.add(SpecialiteElementRef.class);
        return classes;
    }

}
