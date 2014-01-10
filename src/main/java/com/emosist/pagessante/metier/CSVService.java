package com.emosist.pagessante.metier;

import java.net.URL;
import java.util.List;

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
     * Génerer un fichier CSV global des 3 entités et retourner l'adresse où se trouve le fichier temporaire.
     * @return URL du fichier CSV
     * @throws Exception 
     */
    public URL generateCSV() throws Exception;
    
    /**
     * Retourne les differents formats possible du fichier CSV
     * @return Encodage 
     * @throws Exception 
     */
    public List<String> recupererEncodage() throws Exception;
    
}
