package com.emosist.pagessante.beans;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 *
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
@Entity
@Table(name = "dictionnaireoffressoins")
@NamedQueries({
    @NamedQuery(name = "DictionnaireOffresSoins.findAll", query = "SELECT d FROM DictionnaireOffresSoins d ORDER BY d.intitule ASC"),
    @NamedQuery(name = "DictionnaireOffresSoins.findByIddictoffressoins", query = "SELECT d FROM DictionnaireOffresSoins d WHERE d.iddictoffressoins = :iddictoffressoins"),
    @NamedQuery(name = "DictionnaireOffresSoins.findByIntitule", query = "SELECT d FROM DictionnaireOffresSoins d WHERE d.intitule = :intitule"),
    @NamedQuery(name = "DictionnaireOffresSoins.findByDescription", query = "SELECT d FROM DictionnaireOffresSoins d WHERE d.description = :description"),
    @NamedQuery(name = "DictionnaireOffresSoins.findByMotscles", query = "SELECT d FROM DictionnaireOffresSoins d WHERE d.motscles = :motscles"),
    @NamedQuery(name = "DictionnaireOffresSoins.count", query = "SELECT COUNT(d) FROM DictionnaireOffresSoins d"),
    @NamedQuery(name = "DictionnaireOffresSoins.deleteByPrimaryKey", query = "DELETE FROM DictionnaireOffresSoins d WHERE d.iddictoffressoins = :id"),
    @NamedQuery(name = "DictionnaireOffresSoins.getByIdSpecialiteElementRef", query = "SELECT d FROM DictionnaireOffresSoins d  WHERE d.idspecialiteelementref = :id"),
    @NamedQuery(name = "DictionnaireOffresSoins.findByIntituleNorm", query = "SELECT d FROM DictionnaireOffresSoins d WHERE d.intituleNorm = :intituleNorm")
})
public class DictionnaireOffresSoins implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "iddictoffressoins")
    private Integer iddictoffressoins;
    @Column(name = "intitule")
    private String intitule;
    @Column(name = "description")
    private String description;
    @Column(name = "motscles")
    private String motscles;
    @Column(name = "intitule_norm")
    private String intituleNorm;
    @JoinColumn(name = "idspecialiteelementref", referencedColumnName = "idspecialiteelementref")
    @ManyToOne
    private SpecialiteElementRef idspecialiteelementref;

    public DictionnaireOffresSoins() {
    }

    public DictionnaireOffresSoins(Integer iddictoffressoins) {
        this.iddictoffressoins = iddictoffressoins;
    }

    public Integer getIddictoffressoins() {
        return iddictoffressoins;
    }

    public void setIddictoffressoins(Integer iddictoffressoins) {
        this.iddictoffressoins = iddictoffressoins;
    }

    public String getIntitule() {
        return intitule;
    }

    public void setIntitule(String intitule) {
        this.intitule = intitule;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMotscles() {
        return motscles;
    }

    public void setMotscles(String motscles) {
        this.motscles = motscles;
    }

    public String getIntituleNorm() {
        return intituleNorm;
    }

    public void setIntituleNorm(String intituleNorm) {
        this.intituleNorm = intituleNorm;
    }

    public SpecialiteElementRef getIdspecialiteelementref() {
        return idspecialiteelementref;
    }

    public void setIdspecialiteelementref(SpecialiteElementRef idspecialiteelementref) {
        this.idspecialiteelementref = idspecialiteelementref;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (iddictoffressoins != null ? iddictoffressoins.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof DictionnaireOffresSoins)) {
            return false;
        }
        DictionnaireOffresSoins other = (DictionnaireOffresSoins) object;
        if ((this.iddictoffressoins == null && other.iddictoffressoins != null) || (this.iddictoffressoins != null && !this.iddictoffressoins.equals(other.iddictoffressoins))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.emosist.pagessante.beans.Dictionnaireoffressoins[ iddictoffressoins=" + iddictoffressoins + " ]";
    }

}
