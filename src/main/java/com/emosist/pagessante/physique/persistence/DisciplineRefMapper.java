package com.emosist.pagessante.physique.persistence;

import java.util.List;

import com.emosist.pagessante.beans.DisciplineRef;

/**
 * Interface de mappage des requêtes sur la table DisciplineRef.
 * 
 * @author GERVAIS Gwenaël
 * @author BOISSON Clement
 * 
 * @since 1.0.0
 * @version 1.0.0
 * 
 */
public interface DisciplineRefMapper {

    /**
     * Compte le nombre d'enregistrement de la table DisciplineRef.
     * 
     * @return nombre total de disciplines
     */
    int countAll();

    /**
     * Supprime une discipline par son identifiant.
     * 
     * @param iddisciplineref
     *            identifiant de la discipline à supprimer
     * @return le nombre de suppressions réalisées
     */
    int deleteByPrimaryKey( Integer iddisciplineref );

    /**
     * Insertion totale d'une discipline : tous les champs sont instanciés
     * aux valeurs de l'objet, même si celles-ci sont nulles.
     * 
     * @param record
     *            discipline à insérer
     * @return le nombre d'insertions réalisées
     */
    int insert( DisciplineRef record );

    /**
     * Insertion partielle d'une discipline : seuls les champs renseignés
     * sont instanciés aux valeurs de l'objet.
     * 
     * @param record
     *            discipline à insérer
     * @return le nombre d'insertions réalisées
     */
    int insertSelective( DisciplineRef record );

    /**
     * Retourne l'ensemble des enregistrements de la table DisciplineRef.
     * 
     * @return la liste des disciplines
     */
    List<DisciplineRef> selectAll();

    /**
     * Retourne une discipline par son identifiant.
     * 
     * @param iddisciplineref
     *            identifiant de la discipline
     * @return discipline
     */
    DisciplineRef selectByPrimaryKey( Integer iddisciplineref );

    /**
     * Modification partielle d'une discipline par son identifiant : seuls
     * les champs renseignés sont instanciés aux valeurs de l'objet.
     * 
     * @param record
     *            discipline modifiée
     * @return le nombre de modifications réalisées
     */
    int updateByPrimaryKeySelective( DisciplineRef record );

    /**
     * Modification totale d'une discipline par son identifiant : tous les
     * champs sont instanciés aux valeurs de l'objet, même si celles-ci sont
     * nulles.
     * 
     * @param record
     *            discipline modifiée
     * @return le nombre de modifications réalisées
     */
    int updateByPrimaryKey( DisciplineRef record );
}