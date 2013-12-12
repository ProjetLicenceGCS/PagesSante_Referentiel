/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.emosist.pagessante.physique.persistence;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class DictionnaireOffresSoinsMapperImpl implements DictionnaireOffresSoinsMapper{
    private EntityManager em;
    
    @Override
    public int countAll() throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("DictionnaireOffresSoins.count");
        Long value = (Long) query.getSingleResult();
        Connexion.disconect(this.em);
        return Long.valueOf(value).intValue();  
    }

    @Override
    public int deleteByPrimaryKey(Integer iddictoffressoins) throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("DictionnaireOffresSoins.deleteByPrimaryKey");
        query.setParameter("id", iddictoffressoins);
        Connexion.disconect(this.em);
        return 1;
    }

    @Override
    public int insert(DictionnaireOffresSoins record) throws Exception {
        this.em = Connexion.getPersistance();
        this.em.persist(record);
        Connexion.disconect(this.em);
        return 1;
    }

    @Override
    public int insertSelective(DictionnaireOffresSoins record) throws Exception {
        return this.insert(record); // JPA fais le travail.
    }

    @Override
    public List<DictionnaireOffresSoins> selectAll() throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("DictionnaireOffresSoins.findAll");
        List<DictionnaireOffresSoins>  dictionnaireOffresSoinses = query.getResultList();
        Connexion.disconect(this.em);
        return dictionnaireOffresSoinses;
    }

    @Override
    public DictionnaireOffresSoins selectByPrimaryKey(Integer iddictoffressoins) throws Exception {
        this.em = Connexion.getPersistance();
        DictionnaireOffresSoins dictionnaireOffresSoins = this.em.find(DictionnaireOffresSoins.class, iddictoffressoins);
        Connexion.disconect(this.em);
        return dictionnaireOffresSoins;
    }

    @Override
    public int updateByPrimaryKeySelective(DictionnaireOffresSoins record) throws Exception {
        return this.updateByPrimaryKey(record);
    }

    @Override
    public int updateByPrimaryKey(DictionnaireOffresSoins record) throws Exception {
        this.em = Connexion.getPersistance();
        this.em.merge(record);
        Connexion.disconect(this.em);
        return 1;
    }

    @Override 
    public List<DictionnaireOffresSoins> selectByIdSpecialite(Integer idspecialite) throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("DictionnaireOffresSoins.getByIdSpecialiteElementRef");
        query.setParameter("id", idspecialite);
        List<DictionnaireOffresSoins> dictionnaireOffresSoinses = query.getResultList();
        Connexion.disconect(this.em);
        return dictionnaireOffresSoinses;
    }

    @Override
    public DictionnaireOffresSoins add(DictionnaireOffresSoins dictionnaireOffresSoins) throws Exception {
        this.em = Connexion.getPersistance();
        this.em.persist(dictionnaireOffresSoins);
        this.em.flush();
        DictionnaireOffresSoins ret = this.em.merge(dictionnaireOffresSoins);
        Connexion.disconect(em);
        return ret;
    }

}
