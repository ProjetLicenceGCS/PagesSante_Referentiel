
package com.emosist.pagessante.physique.io;

import java.net.URI;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public interface CSVServiceIO {
    public void writeLine(String line) throws Exception;
    public URI createFile(String name) throws Exception;
}
