
package com.emosist.pagessante.physique.io;

import java.util.List;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public interface CSVServiceIO {
    public void writeLine(String line) throws Exception;
    public void writeList(List<String> lines) throws Exception;
    public void createFile(String name) throws Exception;
}
