package com.emosist.pagessante.physique.persistence;

import java.util.List;

import com.emosist.pagessante.beans.SpecialiteElementRef;

/**
 * Interface de mappage des requêtes sur la table SpecialiteElementRef.
 * 
 * @author GERVAIS Gwenaël
 * @author BOISSON Clement
 * @author Damien Chesneau <contact@damienchesneau.fr>
 * @since 1.0.0
 * @version 1.0.0
 * 
 */
public interface SpecialiteElementRefMapper {
    /**
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
     * Cette methode permet de retourner l'objet qui a été crée avec l'id qui a été choisi par la base de données
     * @param specialiteElementRef
     * @return SpecialiteElementRef
     * @throws Exception 
     * 
     */
    public SpecialiteElementRef add(SpecialiteElementRef specialiteElementRef) throws Exception;
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
    public int deleteByPrimaryKey( Integer idspecialiteelementref ) throws Exception;
    
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
    public int insert( SpecialiteElementRef record )throws Exception;

    /**
     * Insertion partielle d'une spécialité : seuls les champs renseignés
     * sont instanciés aux valeurs de l'objet.
     * 
     * @param record
     *            spécialité à insérer
     * @return le nombre d'insertions réalisées
     * @throws java.lang.Exception
     */
    public int insertSelective( SpecialiteElementRef record )throws Exception;

    /**
     * Retourne l'ensemble des enregistrements de la table SpecialiteElementRef.
     * 
     * @return la liste des spécialités
     * @throws java.lang.Exception
     */
    public List<SpecialiteElementRef> selectAll()throws Exception;

    /**
     * Retourne une spécialité par son identifiant.
     * 
     * @param idspecialiteelementref
     *            identifiant de la spécialité
     * @return spécialité
     * @throws java.lang.Exception
     */
    public SpecialiteElementRef selectByPrimaryKey( Integer idspecialiteelementref )throws Exception;

    /**
     * Modification partielle d'une spécialité par son identifiant : seuls
     * les champs renseignés sont instanciés aux valeurs de l'objet.
     * 
     * @param record
     *            spécialité modifiée
     * @return le nombre de modifications réalisées
     * @throws java.lang.Exception
     */
    public int updateByPrimaryKeySelective( SpecialiteElementRef record )throws Exception;

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
    public int updateByPrimaryKey( SpecialiteElementRef record )throws Exception;
}