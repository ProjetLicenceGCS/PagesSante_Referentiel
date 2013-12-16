package com.emosist.pagessante.physique.io;

import com.emosist.pagessante.exception.SystemNotSupportedException;
import org.omg.CORBA.SystemException;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class PathFactory {

    private PathFactory() {
    }
    private static String OS = System.getProperty("os.name").toLowerCase();

    public static String getPathForWebServer() throws SystemNotSupportedException {
        String ret =null;
        if (isWindows()) {
            ret ="C://wamp/www/";
        } else if (isMac()) {
            throw new SystemNotSupportedException("Le système sous lequel le serveur toune n'est pas supporté");
        } else if (isUnix()) {
            ret ="/var/www/";
        } else {
            throw new SystemNotSupportedException("Le système sous lequel le serveur toune n'est pas supporté");
        }
        return ret;
    }

    private static boolean isWindows() {
        return (OS.indexOf("win") >= 0);
    }

    private static boolean isMac() {
        return (OS.indexOf("mac") >= 0);
    }

    private static boolean isUnix() {
        return (OS.indexOf("nix") >= 0 || OS.indexOf("nux") >= 0 || OS.indexOf("aix") > 0);
    }
}
