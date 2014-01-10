package com.emosist.pagessante.physique.io;

import java.io.File;
import java.io.FileOutputStream;
import java.net.URI;
import org.springframework.beans.factory.annotation.Value;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class CSVServiceIOImpl implements CSVServiceIO {

    private String fileName;

    @Override
    public void writeLine(String line) throws Exception {
        String pathForWebServer = PathFactory.getPathForWebServer();
        File file = new File(pathForWebServer + fileName);
        FileOutputStream fos = new FileOutputStream(file,true);
        fos.write(line.getBytes());
        fos.flush();
        fos.close();
    }

    @Override
    public URI createFile(String name) throws Exception {
        this.fileName = name;
        String pathForWebServer = PathFactory.getPathForWebServer();
        File file = new File(pathForWebServer + fileName);
        if(file.exists()){
            file.delete();
        }
        file.createNewFile();
        return new URI("http://localhost/"+this.fileName);
    }

}
