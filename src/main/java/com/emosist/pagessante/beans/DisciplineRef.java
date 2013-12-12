/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.emosist.pagessante.beans;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author damien
 */
@Entity
@Table(name = "disciplineref")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Disciplineref.findAll", query = "SELECT d FROM DisciplineRef d"),
    @NamedQuery(name = "Disciplineref.findByIddisciplineref", query = "SELECT d FROM DisciplineRef d WHERE d.iddisciplineref = :iddisciplineref"),
    @NamedQuery(name = "Disciplineref.findByDescription", query = "SELECT d FROM DisciplineRef d WHERE d.description = :description"),
    @NamedQuery(name = "Disciplineref.findByDescriptionNorm", query = "SELECT d FROM DisciplineRef d WHERE d.descriptionNorm = :descriptionNorm")})
public class DisciplineRef implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "iddisciplineref")
    private Integer iddisciplineref;
    @Column(name = "description")
    private String description;
    @Column(name = "description_norm")
    private String descriptionNorm;
    @OneToMany(mappedBy = "iddisciplineref")
    private List<SpecialiteElementRef> specialiteelementrefList;

    public DisciplineRef() {
    }

    public DisciplineRef(Integer iddisciplineref) {
        this.iddisciplineref = iddisciplineref;
    }

    public Integer getIddisciplineref() {
        return iddisciplineref;
    }

    public void setIddisciplineref(Integer iddisciplineref) {
        this.iddisciplineref = iddisciplineref;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescriptionNorm() {
        return descriptionNorm;
    }

    public void setDescriptionNorm(String descriptionNorm) {
        this.descriptionNorm = descriptionNorm;
    }

    @XmlTransient
    public List<SpecialiteElementRef> getSpecialiteelementrefList() {
        return specialiteelementrefList;
    }

    public void setSpecialiteelementrefList(List<SpecialiteElementRef> specialiteelementrefList) {
        this.specialiteelementrefList = specialiteelementrefList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (iddisciplineref != null ? iddisciplineref.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof DisciplineRef)) {
            return false;
        }
        DisciplineRef other = (DisciplineRef) object;
        if ((this.iddisciplineref == null && other.iddisciplineref != null) || (this.iddisciplineref != null && !this.iddisciplineref.equals(other.iddisciplineref))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.emosist.pagessante.beans.Disciplineref[ iddisciplineref=" + iddisciplineref + " ]";
    }
    
}