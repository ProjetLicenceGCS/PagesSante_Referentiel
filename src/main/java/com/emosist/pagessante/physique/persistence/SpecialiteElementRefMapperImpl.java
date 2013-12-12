package com.emosist.pagessante.physique.persistence;

import com.emosist.pagessante.beans.SpecialiteElementRef;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class SpecialiteElementRefMapperImpl implements SpecialiteElementRefMapper {

    private EntityManager em;

    @Override
    public int countAll() throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("SpecialiteElementRef.count");
        Long value = (Long) query.getSingleResult();
        Connexion.disconect(this.em);
        return Long.valueOf(value).intValue();
    }

    @Override
    public int deleteByPrimaryKey(Integer idspecialiteelementref) throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("SpecialiteElementRef.deleteByPrimaryKey");
        query.setParameter("id", idspecialiteelementref);
        Connexion.disconect(this.em);
        return 1;
    }

    @Override
    public int insert(SpecialiteElementRef record) throws Exception {
        this.em = Connexion.getPersistance();
        this.em.persist(record);
        Connexion.disconect(em);
        return 1;
    }

    @Override
    public SpecialiteElementRef add(SpecialiteElementRef specialiteElementRef) throws Exception {
        this.em = Connexion.getPersistance();
        this.em.persist(specialiteElementRef);
        this.em.flush();
        SpecialiteElementRef o = this.em.merge(specialiteElementRef);
        Connexion.disconect(em);
        return o;
    }

    @Override
    public int insertSelective(SpecialiteElementRef record) throws Exception {
        return this.insert(record); // JPA Fait lui même le travail.
    }

    @Override
    public List<SpecialiteElementRef> selectAll() throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("SpecialiteElementRef.findAll");
        List<SpecialiteElementRef> specialiteElementRefs = query.getResultList();
        Connexion.disconect(this.em);
        return specialiteElementRefs;
    }

    @Override
    public SpecialiteElementRef selectByPrimaryKey(Integer idspecialiteelementref) throws Exception {
        this.em = Connexion.getPersistance();
        SpecialiteElementRef find = this.em.find(SpecialiteElementRef.class, idspecialiteelementref);
        Connexion.disconect(this.em);
        return find;
    }

    @Override
    public int updateByPrimaryKeySelective(SpecialiteElementRef record) throws Exception {
        return this.updateByPrimaryKey(record);
    }

    @Override
    public int updateByPrimaryKey(SpecialiteElementRef record) throws Exception {
        this.em = Connexion.getPersistance();
        this.em.merge(record);
        Connexion.disconect(em);
        return 1;
    }

    @Override
    public void delete(SpecialiteElementRef ref) throws Exception {
        this.em = Connexion.getPersistance();
        this.em.remove(this.em.merge(ref));
        Connexion.disconect(em);
    }

    @Override
    public int getCountByDescription(String description) throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("SpecialiteElementRef.countByDescription");
        query.setParameter("description", description);
        Long value = (Long) query.getSingleResult();
        Connexion.disconect(this.em);
        return Long.valueOf(value).intValue();
    }

    @Override
    public int getCountByDescriptionNormalise(String descriptionNormalise) throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("SpecialiteElementRef.countByDescriptionNormalise");
        query.setParameter("description", descriptionNormalise);
        Long value = (Long) query.getSingleResult();
        Connexion.disconect(this.em);
        return Long.valueOf(value).intValue();
    }
}
