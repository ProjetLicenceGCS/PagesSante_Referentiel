package com.emosist.pagessante.utils;

import java.io.UnsupportedEncodingException;
import java.text.Normalizer;
import java.util.Random;

/**
 * Classe complementaire du J2SDK sur la manipulation de chaines de caract?res
 * Permet nottament de supprimer les accents d'une chaine de caract?res
 **/
public abstract class StringOperation
{

    /**
     * Transforme une chaine pouvant contenir des accents dans une version sans
     * accent, puis en majuscule et sans espace avant et après
     * 
     * @param chaine
     *            Chaine a convertir sans accent, a mettre en majuscule
     * @return Chaine dont les accents ont été supprimé et qui est en majuscule
     **/
    public static String normalize( String chaine )
    {
        String result = chaine;

        if ( result != null && !result.equals( "" ) ) {
            // enlève les accents
            result = StringOperation.sansAccent( chaine );

            // met en majuscule
            result = result.toUpperCase();

            // enlève les espaces de début et de fin
            result = result.trim();
        }

        return result;
    }

    /**
     * Transforme une chaine pouvant contenir des accents dans une version sans
     * accent
     * 
     * @param chaine
     *            Chaine a convertir sans accent
     * @return Chaine dont les accents ont ?t? supprim?
     **/
    public static String sansAccent( String chaine )
    {
        String out = chaine;

        // encodage du paramètre
        // out = formatISOtoUTF8( out );

        // on enlève les accents
        out = Normalizer.normalize( out, Normalizer.Form.NFD ).replaceAll( "[\u0300-\u036F]", "" );
        return out;
    }

    public static String[] formatISOtoUTF8( String[] list ) {

        byte[] in;
        String out = null;

        try {

            for ( int i = 0; i < list.length; i++ ) {
                in = list[i].getBytes( "iso-8859-1" );
                out = new String( in, "UTF-8" );
                list[i] = out;
            }

        } catch ( UnsupportedEncodingException e ) {
            e.printStackTrace();
        }

        return list;
    }

    public static String formatISOtoUTF8( String param ) {

        byte[] in;
        String out = null;

        try {

            in = param.getBytes( "iso-8859-1" );
            out = new String( in, "UTF-8" );
            param = out;

        } catch ( UnsupportedEncodingException e ) {
            e.printStackTrace();
        }

        return param;
    }

    public static String formatUTF8toISO( String param ) {

        byte[] in;
        String out = null;

        try {

            in = param.getBytes( "UTF-8" );
            out = new String( in, "iso-8859-1" );
            param = out;

        } catch ( UnsupportedEncodingException e ) {
            e.printStackTrace();
        }

        return param;
    }

    /**
     * Comparaison de deux String en tenant compte des String null ou vides
     * 
     * @param one
     *            String 1
     * @param two
     *            String 2
     * @return Entier indiquant le tri (-1|0|1)
     */
    public static int nullSafeStringComparator( final String one, final String two ) {

        if ( ( one == null || one.isEmpty() ) && ( two == null || two.isEmpty() ) ) {
            return 0;
        }

        if ( ( one == null || one.isEmpty() ) ^ ( two == null || two.isEmpty() ) ) {
            return ( one == null || one.isEmpty() ) ? 1 : -1;
        }

        return one.compareToIgnoreCase( two );
    }

    /**
     * retourne un nombre aléatoire sur 5 chifres
     * 
     * @return un nombre aléatoire
     */
    public static String Alea() {

        // nombre aléatoire sur 5 chiffres
        String alea = "";

        for ( int i = 0; i < 5; i++ ) {

            Random r = new Random();
            int valeur = r.nextInt( 9 );

            alea = alea + valeur;

        }

        return alea;

    }

}
