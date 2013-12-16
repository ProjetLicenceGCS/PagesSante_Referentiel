package com.emosist.pagessante.physique.io;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class PhysiqueIOFactory {

    private PhysiqueIOFactory() {
    }
    private static CSVServiceIO cSVServiceIO = null;

    public static CSVServiceIO getCSVService() {
        if (cSVServiceIO == null) {
            cSVServiceIO = new CSVServiceIOImpl();
        }
        return cSVServiceIO;
    }

}
