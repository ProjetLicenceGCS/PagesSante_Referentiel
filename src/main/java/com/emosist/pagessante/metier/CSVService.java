package com.emosist.pagessante.metier;

import java.net.URL;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public interface CSVService {
    /**
     * Supprimer le fichier temporaire du serveur
     * @param fichierCSV
     * @throws Exception 
     */
    public void delete(URL fichierCSV) throws Exception;
    /**
     * Génerer un fichire CSV global des 3 entités et retourner l'adresse où se trouve le fichier temporaire.
     * @return URL du fichier CSV
     * @throws Exception 
     */
    public URL generateCSV() throws Exception;
}
