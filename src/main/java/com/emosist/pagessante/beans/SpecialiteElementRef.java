/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.emosist.pagessante.beans;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * 
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
@Entity
@Table(name = "specialiteelementref")
@NamedQueries({
    @NamedQuery(name = "SpecialiteElementRef.findAll", query = "SELECT s FROM SpecialiteElementRef s ORDER BY s.description ASC"),
    @NamedQuery(name = "SpecialiteElementRef.findByIdspecialiteelementref", query = "SELECT s FROM SpecialiteElementRef s WHERE s.idspecialiteelementref = :idspecialiteelementref"),
    @NamedQuery(name = "SpecialiteElementRef.findByDescription", query = "SELECT s FROM SpecialiteElementRef s WHERE s.description = :description"),
    @NamedQuery(name = "SpecialiteElementRef.findByDescriptionNorm", query = "SELECT s FROM SpecialiteElementRef s WHERE s.descriptionNorm = :descriptionNorm"),
    @NamedQuery(name = "SpecialiteElementRef.count", query = "SELECT COUNT(s) FROM SpecialiteElementRef s"),
    @NamedQuery(name = "SpecialiteElementRef.countByDescription", query = "SELECT COUNT(s) FROM SpecialiteElementRef s WHERE s.description = :description"),
    @NamedQuery(name = "SpecialiteElementRef.countByDescriptionNormalise", query = "SELECT COUNT(s) FROM SpecialiteElementRef s WHERE s.descriptionNorm = :description"),
    @NamedQuery(name = "SpecialiteElementRef.findById", query = "SELECT s FROM SpecialiteElementRef s WHERE s.idspecialiteelementref = :id"),
    @NamedQuery(name = "SpecialiteElementRef.deleteByPrimaryKey", query = "DELETE FROM SpecialiteElementRef s WHERE s.iddisciplineref = :id")
})
public class SpecialiteElementRef implements Serializable {
    private static final long serialVersionUID = 1L;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idspecialiteelementref")
    private Integer idspecialiteelementref;
    @Basic(optional = false)
    @Column(name = "description")
    private String description;
    @Column(name = "description_norm")
    private String descriptionNorm;
    @OneToMany(mappedBy = "idspecialiteelementref",orphanRemoval = true,cascade = CascadeType.ALL)
    private List<DictionnaireOffresSoins> dictionnaireoffressoinsList;
    @JoinColumn(name = "iddisciplineref", referencedColumnName = "iddisciplineref")
    @ManyToOne
    private DisciplineRef iddisciplineref;

    public SpecialiteElementRef() {
    }

    public SpecialiteElementRef(Integer idspecialiteelementref) {
        this.idspecialiteelementref = idspecialiteelementref;
    }

    public SpecialiteElementRef(Integer idspecialiteelementref, String description) {
        this.idspecialiteelementref = idspecialiteelementref;
        this.description = description;
    }

    public Integer getIdspecialiteelementref() {
        return idspecialiteelementref;
    }

    public void setIdspecialiteelementref(Integer idspecialiteelementref) {
        this.idspecialiteelementref = idspecialiteelementref;
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

    public List<DictionnaireOffresSoins> getDictionnaireoffressoinsList() {
        return dictionnaireoffressoinsList;
    }

    public void setDictionnaireoffressoinsList(List<DictionnaireOffresSoins> dictionnaireoffressoinsList) {
        this.dictionnaireoffressoinsList = dictionnaireoffressoinsList;
    }

    public DisciplineRef getIddisciplineref() {
        return iddisciplineref;
    }

    public void setIddisciplineref(DisciplineRef iddisciplineref) {
        this.iddisciplineref = iddisciplineref;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idspecialiteelementref != null ? idspecialiteelementref.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof SpecialiteElementRef)) {
            return false;
        }
        SpecialiteElementRef other = (SpecialiteElementRef) object;
        if ((this.idspecialiteelementref == null && other.idspecialiteelementref != null) || (this.idspecialiteelementref != null && !this.idspecialiteelementref.equals(other.idspecialiteelementref))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return String.valueOf(idspecialiteelementref);
    }
    
}
