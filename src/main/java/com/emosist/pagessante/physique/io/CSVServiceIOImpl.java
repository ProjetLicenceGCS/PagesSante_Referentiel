package com.emosist.pagessante.physique.io;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

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

    @Override
    public List<String> recuperationFichier(String url) throws Exception {
        String[] lines = url.split("\n");
        List<String> list= new ArrayList<String>();
        for(int i =0; i < lines.length ; i++){
        list.add(lines[i]);
    }
        return list;
    }

}
