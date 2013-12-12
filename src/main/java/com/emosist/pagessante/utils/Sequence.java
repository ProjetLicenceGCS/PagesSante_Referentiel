package com.emosist.pagessante.utils;

public enum Sequence {

    ACCESSIBILITE( "accessibilite_idaccessibilite_seq", "SELECT MAX(idaccessiblite) FROM accessibilite" ),
    ACCUEILMEDICAL( "accueilmedical_idaccueilmedical_seq", "SELECT MAX(idaccueilmedical) FROM accueilmedical" ),
    ACTIVITEREF( "activiteref_idactivite_seq", "SELECT MAX(idactivite) FROM activiteref" ),
    ADRESSE( "adresse_idadresse_seq", "SELECT MAX(idadresse) FROM adresse" ),
    ANOMALIES( "anomalies_idanomalie_seq", "SELECT MAX(idanomalie) FROM anomalies" ),
    ATTRIBCOMP( "attribcomp_idattribcomp_seq", "SELECT MAX(idattribcomp) FROM attribcomp" ),
    CALENDRIER( "calendrier_idcal_seq", "SELECT MAX(idcal) FROM calendrier" ),
    CALENDRIERINDISPO( "calendrierindispo_idindispo_seq", "SELECT MAX(idindispo) FROM calendrierindispo" ),
    CLIENTELEREF( "clienteleref_idclientele_seq", "SELECT MAX(idclientele) FROM clienteleref" ),
    COMPTEPROFILS( "compteprofils_idcompte_seq", "SELECT MAX(idcompte) FROM compteprofils" ),
    DICTIONNAIREOFFRESSOINS( "dictionnaireoffressoins_iddictoffressoins_seq",
            "SELECT MAX(iddictoffressoins) FROM dictionnaireoffressoins" ),
    DISCIPLINEREF( "disciplineref_iddisciplineref_seq", "SELECT MAX(iddisciplineref) FROM disciplineref" ),
    DISCIPLINES( "disciplines_iddisciplines_seq", "SELECT MAX(iddisciplines) FROM disciplines" ),
    DISCIPLINESITE( "disciplinesite_iddisciplinesite_seq", "SELECT MAX(iddisciplinesite) FROM disciplinesite" ),
    DISCIPLINESITEREF( "disciplinesiteref_iddisciplinesiteref_seq",
            "SELECT MAX(iddisciplinesiteref) FROM disciplinesiteref" ),
    ELEMENT( "element_idelement_seq", "SELECT MAX(idelement) FROM element" ),
    ENSEIGNEMENT( "enseignement_idenseignement_seq", "SELECT MAX(idenseignement) FROM enseignement" ),
    EQUIPEMENT( "equipement_idequipement_seq", "SELECT MAX(idequipement) FROM equipement" ),
    EQUIPEMENTREF( "equipementref_idequipementref_seq", "SELECT MAX(idequipementref) FROM equipementref" ),
    FONCTION( "fonction_idfonction_seq", "SELECT MAX(idfonction) FROM fonction" ),
    FONCTIONNEMENTREF( "fonctionnementref_idfonctionnement_seq", "SELECT MAX(idfonctionnement) FROM fonctionnementref" ),
    FORMEREF( "formeref_idforme_seq", "SELECT MAX(idforme) FROM formeref" ),
    GROUPEDYNAMIQUE( "groupedynamique_idgroupe_seq", "SELECT MAX(idgroupe) FROM groupedynamique" ),
    GROUPESTATIQUE( "groupestatique_idgroupe_seq", "SELECT MAX(idgroupe) FROM groupestatique" ),
    HABILITATION( "habilitation_idhabilitation_seq", "SELECT MAX(idhabilitation) FROM habilitation" ),
    JOURNAL( "journal_idjournal_seq", "SELECT MAX(idjournal) FROM journal" ),
    LANGUEPARLEE( "langueparlee_idlangueparlee_seq", "SELECT MAX(idlangueparlee) FROM langueparlee" ),
    LOGCONNEXION( "logconnexion_idconnexion_seq", "SELECT MAX(idconnexion) FROM logconnexion" ),
    MAIL( "mail_idmail_seq", "SELECT MAX(idmail) FROM mail" ),
    MODALITEREF( "modaliteref_idmodalite_seq", "SELECT MAX(idmodalite) FROM modaliteref" ),
    OFFRESSOINS( "offressoins_idoffressoins_seq", "SELECT MAX(idoffressoins) FROM offressoins" ),
    ORIENTPART( "orientpart_idorientpart_seq", "SELECT MAX(idorientpart) FROM orientpart" ),
    PATIENTELEREF( "patienteleref_idpatientele_seq", "SELECT MAX(idpatientele) FROM patienteleref" ),
    PERSONNE( "personne_idpersonne_seq", "SELECT MAX(idpersonne) FROM personne" ),
    PROFESSIONREF( "professionref_idprofessionref_seq", "SELECT MAX(idprofessioneref) FROM professionref" ),
    PSPHREF( "psphref_idpsph_seq", "SELECT MAX(idpsph) FROM psphref" ),
    SECTEURACTIVITE( "secteuractivite_idsecteuract_seq", "SELECT MAX(idsecteuract) FROM secteuractivite" ),
    SITE( "site_idsite_seq", "SELECT MAX(idsite) FROM site" ),
    SPECIALISATION( "specialisation_idspecialisation_seq", "SELECT MAX(idspecialisation) FROM specialisation" ),
    SPECIALITE( "specialite_idspecialite_seq", "SELECT MAX(idspecialite) FROM specialite" ),
    SPECIALITEELEMENTREF( "specialiteelementref_idspecialiteelementref_seq",
            "SELECT MAX(idspecialiteelementref) FROM specialiteelementref" ),
    STATUTHOSPITALIER( "statuthospitalier_idstatuthospitalier_seq",
            "SELECT MAX(idstatuthospitalier) FROM statuthospitalier" ),
    STRUCTURE( "structure_idstructure_seq", "SELECT MAX(idstructure) FROM structure" ),
    SYSTEM( "system_idsystem_seq", "SELECT MAX(idsystem) FROM system" ),
    TABLEAUGARDE( "tableaugarde_idtableaugarde_seq", "SELECT MAX(idtableaugarde) FROM tableaugarde" ),
    TABLPHARM( "tablpharm_idtablpharm_seq", "SELECT MAX(idtablpharm) FROM tablpharm" ),
    TARIFREF( "tarifref_idtarif_seq", "SELECT MAX(idtarif) FROM tarifref" ),
    TECHNIQUE( "technique_idtechnique_seq", "SELECT MAX(idtechnique) FROM technique" ),
    TECHNIQUEREF( "techniqueref_idtechniqueref_seq", "SELECT MAX(idtechniqueref) FROM techniqueref" ),
    TELEPHONE( "telephone_idtelephone_seq", "SELECT MAX(idtelephone) FROM telephone" ),
    TERRITOIRESANTE( "territoiresante_idterritoiresante_seq", "SELECT MAX(idterritoiresante) FROM territoiresante" ),
    TITRE( "titre_idtitre_seq", "SELECT MAX(idtitre) FROM titre" ),
    TYPEADRESSEREF( "typeadresseref_idtypeadresseref_seq", "SELECT MAX(idtypeadresseref) FROM typeadresseref" ),
    TYPEELEMENTREF( "typeelementref_idtypeelementref_seq", "SELECT MAX(idtypeelementref) FROM typeelementref" ),
    TYPEEMAILREF( "typeemailref_idtypeemailref_seq", "SELECT MAX(idtypeemailref) FROM typeemailref" ),
    TYPEENTITEREF( "typeentiteref_idtypeentiteref_seq", "SELECT MAX(idtypeentiteref) FROM typeentiteref" ),
    TYPEGESTIONNAIREREF( "typegestionnaireref_idtypegestionnaireref_seq",
            "SELECT MAX(idtypegestionnaireref) FROM typegestionnaireref" ),
    TYPEGROUPEREF( "typegrouperef_idtypegrouperef_seq", "SELECT MAX(idtypegrouperef) FROM typegrouperef" ),
    TYPEMEDICALREF( "typemedicalref_idtypemedicalref_seq", "SELECT MAX(idtypemedicalref) FROM typemedicalref" ),
    TYPERECHERCHEREF( "typerechercheref_idtyperechercheref_seq", "SELECT MAX(idtyperechercheref) FROM typerechercheref" ),
    TYPETELEPHONEREF( "typetelephoneref_idtypetelephone_seq", "SELECT MAX(idtypetelephone) FROM typetelephone" ),
    VALIDATIONELEMENT( "validationelement_idvalidationelement_seq",
            "SELECT MAX(idvalidationelement) FROM validationelement" ),
    VALIDATIONENGAGEMENT( "validationengagement_idvalidationengagement_seq",
            "SELECT MAX(idvalidationengagement) FROM validationengagement" );

    private String nom       = "";
    private String reqsetval = "";

    Sequence( String nom, String reqsetval ) {
        this.nom = nom;
        this.reqsetval = reqsetval;
    }

    public String getNom() {
        return this.nom;
    }

    public String getReqsetval() {
        return this.reqsetval;
    }

}
