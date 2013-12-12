package com.emosist.pagessante.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Regex {

    public static String TELEPHONE  = "^(\\d{10}|\\d{4}|\\+33\\d{9})$";
    public static String MAIL       = "^[\\w\\-]+(\\.[\\w\\-]+)*@[\\w\\-]+(\\.[\\w\\-]+)*\\.[\\w\\-]{2,}$";
    public static String CODEPOSTAL = "^(\\d{5})$";
    public static String NOM        = "^[a-zA-ZÀ-ÿ]+(['-\\s]{1}[a-zA-ZÀ-ÿ]+)*[\\.]?$";
    public static String HEURE      = "^([01][0-9]|2[0-3]):[0-5][0-9]$";
    public static String DATE       = "^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]((?:19|20)\\d\\d)$";

    /**
     * Determines whether the expression respect the regular expression or not.
     * 
     * @param chaine
     *            Chaine de cractère à tester
     * @param regexp
     *            Expression régulière
     * @return true ou false, suivant si le test est OK ou non
     */
    public static boolean TEST( String chaine, String regexp ) {
        boolean res = false;
        if ( chaine != null ) {
            // compilation de la regex
            Pattern p = Pattern.compile( regexp );
            // cr�ation d�un moteur de recherche
            Matcher m = p.matcher( chaine );
            // lancement de la recherche de toutes les occurrences
            res = m.matches();
        }
        return res;
    }
}