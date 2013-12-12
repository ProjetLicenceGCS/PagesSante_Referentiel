/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emosist.pagessante.metier;

import com.emosist.pagessante.beans.DictionnaireOffresSoins;
import com.emosist.pagessante.beans.DisciplineRef;
import com.emosist.pagessante.beans.SpecialiteElementRef;
import com.emosist.pagessante.exception.DataConflictException;
import com.emosist.pagessante.physique.persistence.PersistanceFactory;
import com.emosist.pagessante.physique.persistence.SpecialiteElementRefMapper;
import java.util.List;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
public class SpecialiteElementRefServiceImpl implements SpecialiteElementRefService {

    private SpecialiteElementRefMapper specialiteElementRefSrv = PersistanceFactory.getSpecialiteElementRefMapper();

    @Override
    public int countAll() throws Exception {
        return this.specialiteElementRefSrv.countAll();
    }

    @Override
    public int deleteByPrimaryKey(Integer idspecialiteelementref) throws Exception {
        int ret;
        if (idspecialiteelementref != null) {
            this.specialiteElementRefSrv.delete(this.specialiteElementRefSrv.selectByPrimaryKey(idspecialiteelementref));
        } else {
            throw new NullPointerException("L'objet Integer est null");
        }
        return 1;
    }

    @Override
    public int insert(SpecialiteElementRef record) throws DataConflictException, Exception {
        int ret;
        if (record != null) {
            this.verifyIfWeCanAdd(record);
            ret = this.specialiteElementRefSrv.insert(record);
        } else {
            throw new NullPointerException("L'objet SpecialiteElementRef est null");
        }
        return ret;
    }

    @Override
    public int insertSelective(SpecialiteElementRef record) throws DataConflictException, Exception {
        int ret;
        if (record != null) {
            ret = this.insert(record);
        } else {
            throw new NullPointerException("L'objet SpecialiteElementRef est null");
        }
        return ret;
    }

    @Override
    public List<SpecialiteElementRef> selectAll() throws Exception {
        return this.specialiteElementRefSrv.selectAll();
    }

    @Override
    public SpecialiteElementRef selectByPrimaryKey(Integer idspecialiteelementref) throws Exception {
        SpecialiteElementRef ret = null;
        if (idspecialiteelementref != null) {
            ret = this.specialiteElementRefSrv.selectByPrimaryKey(idspecialiteelementref);
        } else {
            throw new NullPointerException("L'objet Integer est null");
        }
        return ret;
    }

    @Override
    public int updateByPrimaryKeySelective(SpecialiteElementRef record) throws Exception {
        int ret;
        if (record != null) {
            ret = this.specialiteElementRefSrv.updateByPrimaryKeySelective(record);
        } else {
            throw new NullPointerException("L'objet SpecialiteElementRef est null");
        }
        return ret;
    }

    @Override
    public int updateByPrimaryKey(SpecialiteElementRef record) throws Exception {
        int ret;
        if (record != null) {
            ret = this.specialiteElementRefSrv.updateByPrimaryKey(record);
        } else {
            throw new NullPointerException("L'objet SpecialiteElementRef est null");
        }
        return ret;
    }

    @Override
    public void delete(SpecialiteElementRef ref) throws Exception {
        if (ref != null) {
            this.specialiteElementRefSrv.delete(ref);
        } else {
            throw new NullPointerException("L'objet SpecialiteElementRef est null");
        }
    }

    @Override
    public void insert(String description, String descriptionNormalise, List<DictionnaireOffresSoins> dictionnaireOffresSoinses, DisciplineRef discipline) throws DataConflictException, Exception {
        SpecialiteElementRef specialiteElementRef = new SpecialiteElementRef();
        if (description != null) {
            specialiteElementRef.setDescription(description);
        }
        if (descriptionNormalise != null) {
            specialiteElementRef.setDescriptionNorm(descriptionNormalise);
        }
        if (dictionnaireOffresSoinses != null) {
            specialiteElementRef.setDictionnaireoffressoinsList(dictionnaireOffresSoinses);
        }
        if (discipline != null) {
            specialiteElementRef.setIddisciplineref(discipline);
        }
        this.insert(specialiteElementRef);
    }

    @Override
    public SpecialiteElementRef add(String description, String descriptionNormalise, List<DictionnaireOffresSoins> dictionnaireOffresSoinses, DisciplineRef discipline) throws DataConflictException, Exception {
        SpecialiteElementRef specialiteElementRef = new SpecialiteElementRef();
        if (description != null) {
            specialiteElementRef.setDescription(description);
        }
        if (descriptionNormalise != null) {
            specialiteElementRef.setDescriptionNorm(descriptionNormalise);
        }
        if (dictionnaireOffresSoinses != null) {
            specialiteElementRef.setDictionnaireoffressoinsList(dictionnaireOffresSoinses);
        }
        if (discipline != null) {
            specialiteElementRef.setIddisciplineref(discipline);
        }
        return this.add(specialiteElementRef);
    }

    @Override
    public SpecialiteElementRef add(SpecialiteElementRef specialiteElementRef) throws DataConflictException, Exception {
        SpecialiteElementRef elementRef = null;
        if (specialiteElementRef != null) {
            this.verifyIfWeCanAdd(specialiteElementRef);
            elementRef = this.specialiteElementRefSrv.add(specialiteElementRef);
        } else {
            throw new NullPointerException("L'objet SpecialiteElementRef est null");
        }
        return elementRef;
    }

    private void verifyIfWeCanAdd(SpecialiteElementRef elementRef) throws DataConflictException, Exception {
        if (this.getCountByDescription(elementRef.getDescription()) != 0) {
            throw new DataConflictException("La description entré est déjà présente dans la base de données.");
        }
        if (this.getCountByDescriptionNormalise(elementRef.getDescriptionNorm()) != 0) {
            throw new DataConflictException("La description entré est déjà présente dans la base de données.");
        }
    }

    @Override
    public int getCountByDescription(String description) throws Exception {
        int ret;
        if (description != null) {
            ret = this.specialiteElementRefSrv.getCountByDescription(description);
        } else {
            throw new NullPointerException("L'objet description est null");
        }
        return ret;
    }

    @Override
    public int getCountByDescriptionNormalise(String descriptionNormalise) throws Exception {
        int ret;
        if (descriptionNormalise != null) {
            ret = this.specialiteElementRefSrv.getCountByDescriptionNormalise(descriptionNormalise);
        } else {
            throw new NullPointerException("L'objet descriptionNormalise est null");
        }
        return ret;
    }
}
