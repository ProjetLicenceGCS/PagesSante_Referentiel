
package com.emosist.pagessante.physique.persistence;

import com.emosist.pagessante.beans.DisciplineRef;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

/**
 *
 * @author Morin Alexandre
 */
public class DisciplineRefMapperImpl implements DisciplineRefMapper {
    
    private EntityManager em;

    
    @Override
    public int countAll() throws Exception{
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("DisciplineRef.count");
        Long value = (Long) query.getSingleResult();
        Connexion.disconect(this.em);
        return Long.valueOf(value).intValue();
    }

    @Override
    public int deleteByPrimaryKey(Integer iddisciplineref) throws Exception{
        this.em = Connexion.getPersistance();
        Query query =  this.em.createNamedQuery("DisciplineRef.deleteByPrimaryKey");
        query.setParameter("id", iddisciplineref);
        Connexion.disconect(this.em);
        return 1;
    }

    @Override
    public int insert(DisciplineRef record) throws Exception{
        this.em = Connexion.getPersistance();
        this.em.persist(record);
        Connexion.disconect(em);
        return 1;
    }

    @Override
    public int insertSelective(DisciplineRef record)  throws Exception{
        return this.insert(record);
    }

    @Override
    public List<DisciplineRef> selectAll() throws Exception{
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("DisciplineRef.findAll");
        List<DisciplineRef> disciplineRefs = query.getResultList();
        Connexion.disconect(this.em);
        return disciplineRefs;
    }

    @Override
    public DisciplineRef selectByPrimaryKey(Integer iddisciplineref) throws Exception{
        this.em = Connexion.getPersistance();
        DisciplineRef find = this.em.find(DisciplineRef.class, iddisciplineref);
        Connexion.disconect(this.em);
        return find;
    }

    @Override
    public int updateByPrimaryKeySelective(DisciplineRef record) throws Exception{
        return this.updateByPrimaryKey(record);
    }

    @Override
    public int updateByPrimaryKey(DisciplineRef record) throws Exception{
        this.em = Connexion.getPersistance();
        this.em.merge(record);
        Connexion.disconect(em);
        return 1;
    }
    
    public void delete(DisciplineRef record) throws Exception{
        this.em= Connexion.getPersistance();
        this.em.remove(this.em.merge(record));
        Connexion.disconect(em);
    }

    @Override
    public DisciplineRef add(DisciplineRef record) throws Exception {
        this.em=Connexion.getPersistance();
        this.em.persist(record);
        this.em.flush();
        DisciplineRef o = this.em.merge(record);
        Connexion.disconect(em);
        return o;
    }

    @Override
    public int getCountByDescription(String description) throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("DisciplineRef.countByDescription");
        query.setParameter("descrption", description);
        Long value = (Long) query.getSingleResult();
        Connexion.disconect(this.em);
        return Long.valueOf(value).intValue();
    }

    @Override
    public int getCountByDescriptionNormalise(String descriptionNormalise) throws Exception {
        this.em = Connexion.getPersistance();
        Query query = this.em.createNamedQuery("DisciplineRef.countByDescriptionNormalise");
        query.setParameter("descrption", descriptionNormalise);
        Long value = (Long) query.getSingleResult();
        Connexion.disconect(this.em);
        return Long.valueOf(value).intValue();
    }
    
}
