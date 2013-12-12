
package com.emosist.pagessante.metier;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import com.emosist.pagessante.beans.DisciplineRef;
import com.emosist.pagessante.beans.SpecialiteElementRef;
import com.emosist.pagessante.exception.DataConflictException;
import java.util.List;

/**
 * Interface metier sur l'entité SpecialiteElementRef.
 * 
 * @author Damien Chesneau <contact@damienchesneau.fr>
 * 
 */
public interface SpecialiteElementRefService {
 
    /**
     * 
     * Cette methode permet de recuperer le nombre d'element ayant la description passé en parametre.
     * @param description
     * @return int, nombre d'enregistrement
     * @throws java.lang.Exception
     * 
     */
    public int getCountByDescription(String description) throws Exception;
    
    /**
     * Cette methode permet de recuperer le nombre d'element ayant la description normalisé passé en parametre.
     * @param descriptionNormalise
     * @return int, nombre d'enregistrement
     * @throws java.lang.Exception
     * 
     */
    public int getCountByDescriptionNormalise(String descriptionNormalise) throws Exception;
    
    /**
     * 
     * @param description
     * @param descriptionNormalise
     * @param dictionnaireOffresSoinses
     * @param discipline
     * @return
     * @throws Exception
     * @throws DataConflictException 
     */ 
    public SpecialiteElementRef add(String description, String descriptionNormalise, List<DictionnaireOffresSoins> dictionnaireOffresSoinses, DisciplineRef discipline) throws Exception,DataConflictException;
    /**
     * Cette methode permet de retourner l'objet qui a été crée avec l'id qui a été choisi par la base de données
     * @param specialiteElementRef
     * @return SpecialiteElementRef
     * @throws Exception 
     * 
     */
    public SpecialiteElementRef add(SpecialiteElementRef specialiteElementRef) throws DataConflictException, Exception;
    /**
     * Permet de déléguer la création de l'objet.
     * @param description
     * @param descriptionNormalise
     * @param dictionnaireOffresSoinses
     * @param discipline
     * @throws Exception 
     */
    public void insert(String description,String descriptionNormalise, List<DictionnaireOffresSoins> dictionnaireOffresSoinses,DisciplineRef discipline) throws DataConflictException, Exception;
    /**
     * Compte l'ensemble des enregistrements de la table SpecialiteElementRef.
     * 
     * @return nombre total de spécialites
     * @throws java.lang.Exception
     */
    int countAll() throws Exception;

    /**
     * Supprime une spécialité par son id.
     * 
     * @param idspecialiteelementref
     *            identifiant de la spécialité à supprimer
     * @return le nombre de suppressions réalisées
     * @throws java.lang.Exception
     */
    int deleteByPrimaryKey( Integer idspecialiteelementref ) throws Exception;
    /**
     * Supprime une entitée.
     * 
     * @param ref entitée
     * @throws java.lang.Exception
     */
    public void delete(SpecialiteElementRef ref) throws Exception;
    /**
     * Insertion totale d'une spécialité : tous les champs sont instanciés
     * aux valeurs de l'objet, même si celles-ci sont nulles.
     * 
     * @param record
     *            spécialité à insérer
     * @return le nombre d'insertions réalisées
     * @throws java.lang.Exception
     */
    int insert( SpecialiteElementRef record )throws DataConflictException, Exception;

    /**
     * Insertion partielle d'une spécialité : seuls les champs renseignés
     * sont instanciés aux valeurs de l'objet.
     * 
     * @param record
     *            spécialité à insérer
     * @return le nombre d'insertions réalisées
     * @throws java.lang.Exception
     */
    int insertSelective( SpecialiteElementRef record )throws DataConflictException, Exception;

    /**
     * Retourne l'ensemble des enregistrements de la table SpecialiteElementRef.
     * 
     * @return la liste des spécialités
     * @throws java.lang.Exception
     */
    List<SpecialiteElementRef> selectAll()throws Exception;

    /**
     * Retourne une spécialité par son identifiant.
     * 
     * @param idspecialiteelementref
     *            identifiant de la spécialité
     * @return spécialité
     * @throws java.lang.Exception
     */
    SpecialiteElementRef selectByPrimaryKey( Integer idspecialiteelementref )throws Exception;

    /**
     * Modification partielle d'une spécialité par son identifiant : seuls
     * les champs renseignés sont instanciés aux valeurs de l'objet.
     * 
     * @param record
     *            spécialité modifiée
     * @return le nombre de modifications réalisées
     * @throws java.lang.Exception
     */
    int updateByPrimaryKeySelective( SpecialiteElementRef record )throws Exception;

    /**
     * Modification totale d'une spécialité par son identifiant : tous les
     * champs sont instanciés aux valeurs de l'objet, même si celles-ci sont
     * nulles.
     * 
     * @param record
     *            spécialité modifiée
     * @return le nombre de modifications réalisées
     * @throws java.lang.Exception
     */
    int updateByPrimaryKey( SpecialiteElementRef record )throws Exception;
}
