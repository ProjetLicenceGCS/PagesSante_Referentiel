
package com.emosist.pagessante.metier;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import com.emosist.pagessante.beans.SpecialiteElementRef;
import com.emosist.pagessante.exception.DataConflictException;
import java.util.List;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public interface DictionnaireOffresSoinsService {
    /**
     * Permet de déléguer la création de l'objet ! 
     * @param intitule
     * @param intituleNormalise
     * @param description
     * @param motsCles
     * @param specialiteElementRef
     * @return
     * @throws DataConflictException
     * @throws Exception 
     */
    public DictionnaireOffresSoins add(String intitule, String intituleNormalise, String description, String motsCles, Integer specialiteElementRef) throws DataConflictException, Exception;
/**
     * Permet de déléguer la création de l'objet ! 
     * @param intitule
     * @param intituleNormalise
     * @param description
     * @param motsCles
     * @param specialiteElementRef
     * @return
     * @throws DataConflictException
     * @throws Exception 
     */
    public DictionnaireOffresSoins add(String intitule, String intituleNormalise, String description, String motsCles, SpecialiteElementRef specialiteElementRef) throws DataConflictException, Exception;

    /**
     * Compte le nombre d'enregistrements de la table DictionnaireOffresSoins.
     *
     * @return nombre total d'offres de soins
     * @throws java.lang.Exception
     */
    public int countAll() throws Exception;

    /**
     * Supprime une offre de soins par son identifiant.
     *
     * @param iddictoffressoins identifiant de l'offre de soins à supprimer
     * @return le nombre de suppressions réalisées
     * @throws java.lang.Exception
     */
    public int deleteByPrimaryKey(Integer iddictoffressoins) throws Exception;

    /**
     * Insertion totale d'une offre de soins : tous les champs sont instanciés
     * aux valeurs de l'objet, même si celles-ci sont nulles.
     *
     * @param record offre de soins à insérer
     * @return le nombre d'insertions réalisées
     * @throws java.lang.Exception
     */
    public int insert(DictionnaireOffresSoins record) throws Exception;

    /**
     * Insertion partielle d'une offre de soins : seuls les champs renseignés
     * sont instanciés aux valeurs de l'objet.
     *
     * @param record offre de soins à insérer
     * @return le nombre d'insertions réalisées
     * @throws java.lang.Exception
     */
    public int insertSelective(DictionnaireOffresSoins record) throws Exception;

    /**
     * Retourne l'ensemble des enregistrements de la table
     * DictionnaireOffresSoins.
     *
     * @return la liste des offres de soins
     * @throws java.lang.Exception
     */
    public List<DictionnaireOffresSoins> selectAll() throws Exception;

    /**
     * Retourne une offre de soins par son identifiant.
     *
     * @param iddictoffressoins identifiant de l'offre de soins
     * @return offre de soins
     * @throws java.lang.Exception
     */
    public DictionnaireOffresSoins selectByPrimaryKey(Integer iddictoffressoins) throws Exception;

    /**
     * Modification partielle d'une offre de soins par son identifiant : seuls
     * les champs renseignés sont instanciés aux valeurs de l'objet.
     *
     * @param record offre de soins modifiée
     * @return le nombre de modifications réalisées
     * @throws java.lang.Exception
     */
    public int updateByPrimaryKeySelective(DictionnaireOffresSoins record) throws Exception;

    /**
     * Modification totale d'une offre de soins par son identifiant : tous les
     * champs sont instanciés aux valeurs de l'objet, même si celles-ci sont
     * nulles.
     *
     * @param record offre de soins modifiée
     * @return le nombre de modifications réalisées
     * @throws java.lang.Exception
     */
    public int updateByPrimaryKey(DictionnaireOffresSoins record) throws Exception;

    /**
     * Retourne l'ensemble des offres de soins rattachées à une spécialité.
     *
     * @param idspecialite identifiant de la spécialité
     * @return liste d'offres de soins
     * @throws java.lang.Exception
     */
    public List<DictionnaireOffresSoins> selectByIdSpecialite(Integer idspecialite) throws Exception;

}
