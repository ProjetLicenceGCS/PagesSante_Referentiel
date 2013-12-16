package com.emosist.pagessante.physique.io;

import java.io.File;
import java.net.URL;
import java.util.List;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class CSVServiceIOImpl implements CSVServiceIO {

    @Override
    public void writeLine(String line) throws Exception {
        throw new UnsupportedOperationException("Not supported yet. TO DO");
    }

    @Override
    public void writeList(List<String> lines) throws Exception {
        throw new UnsupportedOperationException("Not supported yet. TO DO");
    }

    @Override
    public URL createFile(String name) throws Exception {
        String pathForWebServer = PathFactory.getPathForWebServer();
        File file = new File(pathForWebServer+"fichierCSV.csv");
        file.createNewFile();
        return file.toURI().toURL();
    }

}
