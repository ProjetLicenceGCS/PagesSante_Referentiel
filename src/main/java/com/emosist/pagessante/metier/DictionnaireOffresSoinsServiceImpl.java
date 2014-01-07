package com.emosist.pagessante.metier;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import com.emosist.pagessante.beans.SpecialiteElementRef;
import com.emosist.pagessante.exception.DataConflictException;
import com.emosist.pagessante.physique.persistence.DictionnaireOffresSoinsMapper;
import com.emosist.pagessante.physique.persistence.PersistanceFactory;
import com.emosist.pagessante.physique.persistence.SpecialiteElementRefMapper;
import java.util.List;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class DictionnaireOffresSoinsServiceImpl implements DictionnaireOffresSoinsService {

    private DictionnaireOffresSoinsMapper dictionnaireOffresSoinsSrv = PersistanceFactory.getDictionnaireOffresSoinsMapper();
    private SpecialiteElementRefMapper SpecialiteElementRefSrv = PersistanceFactory.getSpecialiteElementRefMapper();

    @Override
    public int countAll() throws Exception {
        return this.dictionnaireOffresSoinsSrv.countAll();
    }

    @Override
    public int deleteByPrimaryKey(Integer iddictoffressoins) throws Exception {
        int ret;
        if (iddictoffressoins != null) {
            ret = this.dictionnaireOffresSoinsSrv.deleteByPrimaryKey(iddictoffressoins);
        } else {
            throw new NullPointerException("L'objet passé en paramétre est égale a null");
        }
        return ret;
    }

    @Override
    public int insert(DictionnaireOffresSoins record) throws Exception {
        int ret;
        if (record != null) {
            ret = this.dictionnaireOffresSoinsSrv.insert(record);
        } else {
            throw new NullPointerException("L'objet passé en paramétre est égale a null");
        }
        return ret;
    }

    @Override
    public int insertSelective(DictionnaireOffresSoins record) throws Exception {
        int ret;
        if (record != null) {
            ret = this.dictionnaireOffresSoinsSrv.insertSelective(record);
        } else {
            throw new NullPointerException("L'objet passé en paramétre est égale a null");
        }
        return ret;
    }

    @Override
    public List<DictionnaireOffresSoins> selectAll() throws Exception {
        return this.dictionnaireOffresSoinsSrv.selectAll();
    }

    @Override
    public DictionnaireOffresSoins selectByPrimaryKey(Integer iddictoffressoins) throws Exception {
        DictionnaireOffresSoins ret = null;
        if (iddictoffressoins != null) {
            ret = this.dictionnaireOffresSoinsSrv.selectByPrimaryKey(iddictoffressoins);
        } else {
            throw new NullPointerException("L'objet passé en paramétre est égale a null");
        }
        return ret;
    }

    @Override
    public int updateByPrimaryKeySelective(DictionnaireOffresSoins record) throws Exception {
        int ret;
        if (record != null) {
            ret = this.dictionnaireOffresSoinsSrv.updateByPrimaryKeySelective(record);
        } else {
            throw new NullPointerException("L'objet passé en paramétre est égale a null");
        }
        return ret;
    }

    @Override
    public int updateByPrimaryKey(DictionnaireOffresSoins record) throws Exception {
        int ret;
        if (record != null) {
            ret = this.dictionnaireOffresSoinsSrv.updateByPrimaryKey(record);
        } else {
            throw new NullPointerException("L'objet passé en paramétre est égale a null");
        }
        return ret;
    }

    @Override
    public List<DictionnaireOffresSoins> selectByIdSpecialite(Integer idspecialite) throws Exception {
        List<DictionnaireOffresSoins> ret = null;
        if (idspecialite != null) {
            ret = this.dictionnaireOffresSoinsSrv.selectByIdSpecialite(idspecialite);
        } else {
            throw new NullPointerException("L'objet passé en paramétre est égale a null");
        }
        return ret;
    }

    @Override
    public DictionnaireOffresSoins add(String intitule, String description, String motsCles, Integer specialiteElementRef) throws DataConflictException, Exception {
        SpecialiteElementRef selectByPrimaryKey = null;
        if (specialiteElementRef != null) {
            selectByPrimaryKey = this.SpecialiteElementRefSrv.selectByPrimaryKey(specialiteElementRef);
        }
        return this.add(intitule, description, motsCles, selectByPrimaryKey);
    }

    @Override
    public DictionnaireOffresSoins add(String intitule, String description, String motsCles, SpecialiteElementRef specialiteElementRef) throws DataConflictException, Exception {
        DictionnaireOffresSoins dictionnaireOffresSoins = null;
        if (intitule != null) {
                if (description != null) {
                    if (motsCles != null) {
                        if (specialiteElementRef != null) {// ne devrait jamais arriver mais on ne sais jamais.
                            DictionnaireOffresSoins dictionnaireOffresSoin = new DictionnaireOffresSoins();
                            dictionnaireOffresSoin.setDescription(description);
                            dictionnaireOffresSoin.setIdspecialiteelementref(specialiteElementRef);
                            dictionnaireOffresSoin.setIntitule(intitule);
                            dictionnaireOffresSoin.setIntituleNorm(intitule.toUpperCase());
                            dictionnaireOffresSoin.setMotscles(motsCles);
                            dictionnaireOffresSoins = this.dictionnaireOffresSoinsSrv.add(dictionnaireOffresSoin);
                        } else {
                            throw new NullPointerException("L'objet string nommé = motsCles passé en paramétre est égale a null");
                        }
                    } else {
                        throw new NullPointerException("L'objet string nommé = motsCles passé en paramétre est égale a null");
                    }
                } else {
                    throw new NullPointerException("L'objet string nommé = description passé en paramétre est égale a null");
                }
           
        } else {
            throw new NullPointerException("L'objet string nommé = intitule passé en paramétre est égale a null");
        }
        return dictionnaireOffresSoins;
    }

}
