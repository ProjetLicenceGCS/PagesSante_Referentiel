/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emosist.pagessante.metier;

import com.emosist.pagessante.beans.DisciplineRef;
import com.emosist.pagessante.exception.DataConflictException;
import java.util.List;

/**
 *
 * @author Morin Alexandre
 */
public interface DisciplineRefService {

    /**
     *
     * Cette methode permet de recuperer le nombre de discipline ayant la
     * description passé en parametre.
     *
     * @param description
     * @return int, nombre d'enregistrement
     * @throws java.lang.Exception
     *
     */
    public int getCountByDescription(String description) throws Exception;

    /**
     * Cette methode permet de recuperer le nombre de discipline ayant la
     * description normalisé passé en parametre.
     *
     * @param descriptionNormalise
     * @return int, nombre d'enregistrement
     * @throws java.lang.Exception
     *
     */
    public int getCountByDescriptionNormalise(String descriptionNormalise) throws Exception;

    /**
     * Cette methode permet de retourner l'objet qui a été crée avec l'id qui a
     * été choisi par la base de données
     *
     * @param record
     * @return SpecialiteElementRef
     * @throws Exception
     *
     */
    public DisciplineRef add(DisciplineRef record) throws Exception;

    /**
     *
     * @param description
     * @param descriptionNormalise
     * @return
     * @throws Exception
     * @throws DataConflictException
     */
    public DisciplineRef add(String description, String descriptionNormalise) throws Exception, DataConflictException;

    /**
     * Permet de déléguer la création de l'objet.
     *
     * @param description
     * @param descriptionNormalise
     * @throws Exception
     */
    public void insert(String description, String descriptionNormalise) throws DataConflictException, Exception;

    /**
     * /**
     * Compte le nombre d'enregistrement de la table DisciplineRef.
     *
     * @return nombre total de disciplines
     */
    int countAll() throws Exception;

    /**
     * Supprime une discipline par son identifiant.
     *
     * @param iddisciplineref identifiant de la discipline à supprimer
     * @return le nombre de suppressions réalisées
     */
    int deleteByPrimaryKey(Integer iddisciplineref) throws Exception;

    /**
     * Supprimer une entitée
     *
     * @param record entitée
     * @throws java.lang.Exception
     */
    public void delete(DisciplineRef record) throws Exception;

    /**
     * Insertion totale d'une discipline : tous les champs sont instanciés aux
     * valeurs de l'objet, même si celles-ci sont nulles.
     *
     * @param record discipline à insérer
     * @return le nombre d'insertions réalisées
     */
    int insert(DisciplineRef record) throws Exception;

    /**
     * Insertion partielle d'une discipline : seuls les champs renseignés sont
     * instanciés aux valeurs de l'objet.
     *
     * @param record discipline à insérer
     * @return le nombre d'insertions réalisées
     */
    int insertSelective(DisciplineRef record) throws Exception;

    /**
     * Retourne l'ensemble des enregistrements de la table DisciplineRef.
     *
     * @return la liste des disciplines
     */
    List<DisciplineRef> selectAll() throws Exception;

    /**
     * Retourne une discipline par son identifiant.
     *
     * @param iddisciplineref identifiant de la discipline
     * @return discipline
     */
    DisciplineRef selectByPrimaryKey(Integer iddisciplineref) throws Exception;

    /**
     * Modification partielle d'une discipline par son identifiant : seuls les
     * champs renseignés sont instanciés aux valeurs de l'objet.
     *
     * @param record discipline modifiée
     * @return le nombre de modifications réalisées
     */
    int updateByPrimaryKeySelective(DisciplineRef record) throws Exception;

    /**
     * Modification totale d'une discipline par son identifiant : tous les
     * champs sont instanciés aux valeurs de l'objet, même si celles-ci sont
     * nulles.
     *
     * @param record discipline modifiée
     * @return le nombre de modifications réalisées
     */
    int updateByPrimaryKey(DisciplineRef record) throws Exception;
}
