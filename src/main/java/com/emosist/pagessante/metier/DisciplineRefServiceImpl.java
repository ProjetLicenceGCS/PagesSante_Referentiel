/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emosist.pagessante.metier;

import com.emosist.pagessante.beans.DisciplineRef;
import com.emosist.pagessante.exception.DataConflictException;
import com.emosist.pagessante.physique.persistence.PersistanceFactory;
import com.emosist.pagessante.physique.persistence.DisciplineRefMapper;
import java.util.List;

/**
 *
 * @author Morin Alexandre
 */
public class DisciplineRefServiceImpl implements DisciplineRefService {

    private DisciplineRefMapper disciplineRefSrv = PersistanceFactory.getDisciplineRefMapper();

    @Override
    public int countAll() throws Exception {
        return this.disciplineRefSrv.countAll();
    }

    @Override
    public int deleteByPrimaryKey(Integer iddisciplineref) throws Exception {
        if (iddisciplineref != null) {
            this.disciplineRefSrv.delete(this.disciplineRefSrv.selectByPrimaryKey(iddisciplineref));
        } else {
            throw new NullPointerException("L'objet Integer est null");
        }
        return 1;
    }

    @Override
    public int insert(DisciplineRef record) throws DataConflictException, Exception {
        int ret;
        if (record != null) {
            this.verifyIfWeCanAdd(record);
            ret = this.disciplineRefSrv.insert(record);
        } else {
            throw new NullPointerException("L'objet DisciplineRef est null");
        }
        return ret;
    }

    @Override
    public int insertSelective(DisciplineRef record) throws DataConflictException, Exception {
        int ret;
        if (record != null) {
            ret = this.disciplineRefSrv.insert(record);
        } else {
            throw new NullPointerException("L'objet DisciplineRef est null");
        }
        return ret;
    }

    @Override
    public List<DisciplineRef> selectAll() throws Exception {
        return this.disciplineRefSrv.selectAll();
    }

    @Override
    public DisciplineRef selectByPrimaryKey(Integer iddisciplineref) throws Exception {
        DisciplineRef ret = null;
        if (iddisciplineref != null) {
            ret = this.disciplineRefSrv.selectByPrimaryKey(iddisciplineref);
        } else {
            throw new NullPointerException("L'objet Integer est null");
        }
        return ret;
    }

    @Override
    public int updateByPrimaryKeySelective(DisciplineRef record) throws Exception {
        int ret;
        if (record != null) {
            ret = this.disciplineRefSrv.updateByPrimaryKeySelective(record);
        } else {
            throw new NullPointerException("L'objet DisciplineRef est null");
        }
        return ret;
    }

    @Override
    public int updateByPrimaryKey(DisciplineRef record) throws Exception {
        int ret;
        if (record != null) {
            ret = this.disciplineRefSrv.updateByPrimaryKey(record);
        } else {
            throw new NullPointerException("L'objet DisciplineRef est null");
        }
        return ret;
    }

    @Override
    public void delete(DisciplineRef record) throws Exception {
        if (record != null) {
            this.disciplineRefSrv.delete(record);
        } else {
            throw new NullPointerException("L'objet DisciplineRef est null");
        }
    }

    @Override
    public DisciplineRef add(DisciplineRef record) throws Exception {
        DisciplineRef ret = null;
        if (record != null) {
            this.verifyIfWeCanAdd(record);
            ret = this.disciplineRefSrv.add(record);
        } else {
            throw new NullPointerException("L'objet DisciplineRef est null");
        }
        return ret;
    }

    private void verifyIfWeCanAdd(DisciplineRef disciplineRef) throws DataConflictException, Exception {
        if (this.getCountByDescription(disciplineRef.getDescription()) != 0) {
            throw new DataConflictException("La description entré est déjà présente dans la base de données.");
        }
    }

    @Override
    public int getCountByDescription(String description) throws Exception {
        int ret;
        if (description != null) {
            ret = this.disciplineRefSrv.getCountByDescription(description);
        } else {
            throw new NullPointerException("L'objet description est null");
        }
        return ret;
    }

    @Override
    public int getCountByDescriptionNormalise(String descriptionNormalise) throws Exception {
        int ret;
        if (descriptionNormalise != null) {
            ret = this.disciplineRefSrv.getCountByDescriptionNormalise(descriptionNormalise);
        } else {
            throw new NullPointerException("L'objet descriptionNormalise est null");
        }
        return ret;
    }

    @Override
    public DisciplineRef add(String description, String descriptionNormalise) throws Exception, DataConflictException {
        DisciplineRef disciplineRef = new DisciplineRef();
        if (description != null) {
            disciplineRef.setDescription(description);
        }
        if (descriptionNormalise != null) {
            disciplineRef.setDescriptionNorm(descriptionNormalise);
        }
        return this.add(disciplineRef);
    }

    @Override
    public void insert(String description, String descriptionNormalise) throws DataConflictException, Exception {
        DisciplineRef disciplineRef = new DisciplineRef();
        if (description != null) {
            disciplineRef.setDescription(description);
        }
        if (descriptionNormalise != null) {
            disciplineRef.setDescriptionNorm(descriptionNormalise);
        }
        this.insert(disciplineRef);
    }

}
