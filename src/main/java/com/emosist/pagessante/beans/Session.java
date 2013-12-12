package com.emosist.pagessante.beans;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.joda.time.DateTime;
import org.springframework.stereotype.Component;

/**
 * Classe regroupant les attibuts de session. Cela permet de stocker des
 * informations utiles durant toute la connexion de l'utilisateur.
 * 
 * @author GERVAIS Gwenaël
 * @author BOISSON Clement
 * 
 * @since 1.0.0
 * @version 1.0.0
 * 
 */
@Component
public class Session {

    private static final Logger logger = Logger.getLogger( Session.class );

    /*
     * Attributs
     */

    /**
     * Login de l'utilisateur.
     */
    private String              login;

    /**
     * Identifiant compte dans LDAP.
     */
    private String              regIdSecuriteCompte;

    /**
     * Identifiant du compte.
     */
    private int                 idcompte;

    /**
     * Identifiant du profil/rôle.
     * (public, référent, arh/ars, emosist, ...)
     */
    private int                 idprofil;

    /**
     * Identifiant de la personen associée au compte.
     */
    private int                 idpersonne;

    /**
     * Nom de la personne associée au compte.
     */
    private String              nom;

    /**
     * Prénom de la personne associée au compte.
     */
    private String              prenom;

    /**
     * Niveau de visibilité par défaut.
     * (1=public, 2=confidentiel, 3=très confidentiel)
     */
    private int                 niveauVisibilite;

    /**
     * Date et heure de la dernière connexion.
     */
    private DateTime            derniereConnexion;

    /**
     * Liste des identifiants des structures gérées.
     */
    private ArrayList<Integer>  structuresGerees;

    /**
     * Liste des raisons sociales des structures gérées.
     */
    private ArrayList<String>   libstructuresGerees;

    /**
     * Liste des identifiants des sites gérées.
     */
    private ArrayList<Integer>  sitesGeres;

    /**
     * Liste des raisons sociales des sites gérées.
     */
    private ArrayList<String>   libsitesGeres;

    /**
     * Liste des identifiants des éléments gérées.
     */
    private ArrayList<Integer>  elementsGeres;

    /**
     * Liste des libelles des éléments gérées.
     */
    private ArrayList<String>   libelementsGeres;

    /**
     * Liste des identifiants des groupes gérées.
     */
    private ArrayList<Integer>  groupesGeres;

    /**
     * Liste des identifiants des groupes ARS gérées.
     */
    private ArrayList<Integer>  groupesArsGeres;

    /*
     * Constructor
     */
    /**
     * Constructeur par défaut. Appel l'initalisation de la session.
     */
    public Session() {
        this.initTest();
    }

    /*
     * Getters et Setters
     */

    /**
     * Retourne le login de l'utiliseur.
     * 
     * @return login de l'utiliseur
     */
    public String getLogin() {
        return this.login;
    }

    /**
     * Modifie le login de l'utilisateur.
     * 
     * @param login
     *            nouveau login de l'utiliseur
     */
    public void setLogin( String login ) {
        this.login = login;
    }

    /**
     * Retourne l'identifiant LDAP du compte de l'utilisateur.
     * 
     * @return identifiant LDAP du compte de l'utilisateur
     */
    public String getRegIdSecuriteCompte() {
        return this.regIdSecuriteCompte;
    }

    /**
     * Modifie l'identifiant LDAP du compte de l'utilisateur.
     * 
     * @param regIdSecuriteCompte
     *            nouvel identifiant LDAP du compte de l'utilisateur
     */
    public void setRegIdSecuriteCompte( String regIdSecuriteCompte ) {
        this.regIdSecuriteCompte = regIdSecuriteCompte;
    }

    /**
     * Retourne l'identifiant du compte.
     * 
     * @return identifiant du compte
     */
    public int getIdcompte() {
        return this.idcompte;
    }

    /**
     * Modifie l'identifiant du compte.
     * 
     * @param idcompte
     *            nouvel identifiant du compte
     */
    public void setIdcompte( int idcompte ) {
        this.idcompte = idcompte;
    }

    /**
     * Retourne l'identifiant du profil.
     * 
     * @return identifiant du profil
     */
    public int getIdprofil() {
        return this.idprofil;
    }

    /**
     * Modifie l'identifiant du profil.
     * 
     * @param idprofil
     *            nouvel identifiant du profil
     */
    public void setIdprofil( int idprofil ) {
        this.idprofil = idprofil;
    }

    /**
     * Retourne l'identifiant de la personne.
     * 
     * @return identifiant de la personne
     */
    public int getIdpersonne() {
        return this.idpersonne;
    }

    /**
     * Modifie l'identifiant de la personne.
     * 
     * @param idpersonne
     *            nouvel identifiant de la personne
     */
    public void setIdpersonne( int idpersonne ) {
        this.idpersonne = idpersonne;
    }

    /**
     * Retourne le nom de l'utilisateur.
     * 
     * @return nom de l'utilisateur
     */
    public String getNom() {
        return this.nom;
    }

    /**
     * Modifie le nom de l'utilisateur.
     * 
     * @param nom
     *            nouveau nom de l'utilisateur
     */
    public void setNom( String nom ) {
        this.nom = nom;
    }

    /**
     * Retourne le prénom de l'utilisateur.
     * 
     * @return prénom de l'utilisateur
     */
    public String getPrenom() {
        return this.prenom;
    }

    /**
     * Modifie le prénom de l'utilisateur.
     * 
     * @param prenom
     *            nouveau prénom de l'utilisateur
     */
    public void setPrenom( String prenom ) {
        this.prenom = prenom;
    }

    /**
     * Retourne le niveau de visibilité de l'utilisateur.
     * 
     * @return niveau de visibilité de l'utilisateur
     */
    public int getNiveauVisibilite() {
        return this.niveauVisibilite;
    }

    /**
     * Modifie le niveau de visibilité de l'utilisateur.
     * 
     * @param niveauVisibilite
     *            nouveau niveau de visibilité de l'utilisateur
     */
    public void setNiveauVisibilite( int niveauVisibilite ) {
        this.niveauVisibilite = niveauVisibilite;
    }

    /**
     * Retourne la date et heure de dernière connexion.
     * 
     * @return date et heure de dernière connexion
     */
    public DateTime getDerniereConnexion() {
        return this.derniereConnexion;
    }

    /**
     * Modifie la date et heure de dernière connexion.
     * 
     * @param derniereConnexion
     *            nouvelle date et heure de dernière connexion
     */
    public void setDerniereConnexion( DateTime derniereConnexion ) {
        this.derniereConnexion = derniereConnexion;
    }

    /**
     * Retourne la liste des identifiants de Structures gérées par
     * l'utilisateur.
     * 
     * @return liste des identifiants de Structures gérées par l'utilisateur
     */
    public ArrayList<Integer> getStructuresGerees() {
        return this.structuresGerees;
    }

    /**
     * Retourne l'identifiant de Structure situé à la position <i>index</i> dans
     * la liste des Structures gérées par l'utilisateur.
     * 
     * @param index
     *            position de l'identifiant de Structure désiré
     * @return identifiant de Structure situé à la position <i>index</i> dans la
     *         liste des Structures gérées par l'utilisateur
     */
    public int getStructureGeree( int index ) {
        return this.structuresGerees.get( index );
    }

    /**
     * Modifie la liste des identifiants de Structures gérés par l'utilisateur.
     * 
     * @param structuresGerees
     *            nouvelle liste des identifiants de Structures gérés par
     *            l'utilisateur
     */
    public void setStructuresGerees( ArrayList<Integer> structuresGerees ) {
        this.structuresGerees = structuresGerees;
    }

    /**
     * Retourne la liste des raisons sociales des Structures gérées par
     * l'utilisateur.
     * 
     * @return liste des raisons sociales des Structures gérées par
     *         l'utilisateur
     */
    public ArrayList<String> getLibstructuresGerees() {
        return this.libstructuresGerees;
    }

    /**
     * Modifie la liste des raisons sociales des Structures gérées par
     * l'utilisateur.
     * 
     * @param libstructuresGerees
     *            nouvelle liste des raisons sociales des Structures gérées par
     *            l'utilisateur
     */
    public void setLibstructuresGerees( ArrayList<String> libstructuresGerees ) {
        this.libstructuresGerees = libstructuresGerees;
    }

    /**
     * Ajoute un identifiant de Structure à la liste des Structures gérées par
     * l'utilisateur.
     * 
     * @param idstructure
     *            identfiant de Structure à ajouter
     */
    public void addStructureGeree( Integer idstructure ) {
        this.structuresGerees.add( idstructure );
    }

    /**
     * Ajoute une raison sociale de Structure à la liste des raisons sociales
     * des Structures gérées par l'utilisateur
     * 
     * @param raisonsociale
     *            raison sociale de Structure à ajouter
     */
    public void addLibStructureGeree( String raisonsociale ) {
        this.libstructuresGerees.add( raisonsociale );
    }

    /**
     * Supprime l'identifiant Structure situé à la position <i>index</i> de la
     * liste des Structures gérées par l'utilisateur.
     * 
     * @param index
     *            position de l'identifiant de Structure à supprimer
     */
    public void removeStructureGeree( int index ) {
        this.structuresGerees.remove( index );
    }

    /**
     * Supprime la raison sociale de la liste des raison sociales des Structures
     * gérées par l'utilisateur.
     * 
     * @param raisonsociale
     *            position de la raison sociale de Structure à supprimer
     */
    public void removeLibStructureGeree( String raisonsociale ) {
        this.libstructuresGerees.remove( raisonsociale );
    }

    /**
     * Retourne la liste des identifiants de Site gérées par l'utilisateur.
     * 
     * @return liste des identifiants de Site gérées par l'utilisateur
     */
    public ArrayList<Integer> getSitesGeres() {
        return this.sitesGeres;
    }

    /**
     * Retourne l'identifiant de Site situé à la position <i>index</i> dans la
     * liste des Sites gérées par l'utilisateur.
     * 
     * @param index
     *            position de l'identifiant de Site désiré
     * @return identifiant de Site situé à la position <i>index</i> dans la
     *         liste des Sites gérées par l'utilisateur
     */
    public int getSiteGere( int index ) {
        return this.sitesGeres.get( index );
    }

    /**
     * Modifie la liste des identifiants de Sites gérés par l'utilisateur.
     * 
     * @param sitesGeres
     *            nouvelle liste des identifiants de Sites gérés par
     *            l'utilisateur
     */
    public void setSitesGeres( ArrayList<Integer> sitesGeres ) {
        this.sitesGeres = sitesGeres;
    }

    /**
     * Retourne la liste des raisons sociales des Sites gérées par
     * l'utilisateur.
     * 
     * @return liste des raisons sociales des Sites gérées par l'utilisateur
     */
    public ArrayList<String> getLibsitesGeres() {
        return this.libsitesGeres;
    }

    /**
     * Modifie la liste des raisons sociales des Sites gérées par l'utilisateur.
     * 
     * @param libsitesGeres
     *            nouvelle liste des raisons sociales des Sites gérées par
     *            l'utilisateur
     */
    public void setLibsitesGeres( ArrayList<String> libsitesGeres ) {
        this.libsitesGeres = libsitesGeres;
    }

    /**
     * Ajoute un identifiant de Site à la liste des Sites gérées par
     * l'utilisateur.
     * 
     * @param idsite
     *            identfiant de Site à ajouter
     */
    public void addSiteGere( int idsite ) {
        this.sitesGeres.add( idsite );
    }

    /**
     * Ajoute une raison sociale de Site à la liste des raisons sociales des
     * Sites gérées par l'utilisateur
     * 
     * @param raisonsociale
     *            raison sociale de Site à ajouter
     */
    public void addLibSiteGere( String raisonsociale ) {
        this.libsitesGeres.add( raisonsociale );
    }

    /**
     * Supprime l'identifiant Site situé à la position <i>index</i> de la liste
     * des Sites gérées par l'utilisateur.
     * 
     * @param index
     *            position de l'identifiant de Site à supprimer
     */
    public void removeSiteGere( int index ) {
        this.sitesGeres.remove( index );
    }

    /**
     * Supprime la raison sociale de la liste des raison sociales des Sites
     * gérées par l'utilisateur.
     * 
     * @param raisonsociale
     *            position de la raison sociale de Site à supprimer
     */
    public void removeLibSiteGere( String raisonsociale ) {
        this.libsitesGeres.remove( raisonsociale );
    }

    /**
     * Retourne la liste des identifiants de Elements gérées par l'utilisateur.
     * 
     * @return liste des identifiants de Elements gérées par l'utilisateur
     */
    public ArrayList<Integer> getElementsGeres() {
        return this.elementsGeres;
    }

    /**
     * Retourne l'identifiant de Element situé à la position <i>index</i> dans
     * la liste des Elements gérées par l'utilisateur.
     * 
     * @param index
     *            position de l'identifiant de Element désiré
     * @return identifiant de Element situé à la position <i>index</i> dans la
     *         liste des Elements gérées par l'utilisateur
     */
    public int getElementGere( int index ) {
        return this.elementsGeres.get( index );
    }

    /**
     * Modifie la liste des identifiants de Elements gérés par l'utilisateur.
     * 
     * @param elementsGeres
     *            nouvelle liste des identifiants de Elements gérés par
     *            l'utilisateur
     */
    public void setElementsGeres( ArrayList<Integer> elementsGeres ) {
        this.elementsGeres = elementsGeres;
    }

    /**
     * Retourne la liste des raisons sociales des Elements gérées par
     * l'utilisateur.
     * 
     * @return liste des raisons sociales des Elements gérées par l'utilisateur
     */
    public ArrayList<String> getLibelementsGeres() {
        return this.libelementsGeres;
    }

    /**
     * Modifie la liste des raisons sociales des Elements gérées par
     * l'utilisateur.
     * 
     * @param libelementsGeres
     *            nouvelle liste des raisons sociales des Elements gérées par
     *            l'utilisateur
     */
    public void setLibelementsGeres( ArrayList<String> libelementsGeres ) {
        this.libelementsGeres = libelementsGeres;
    }

    /**
     * Ajoute un identifiant de Element à la liste des Elements gérées par
     * l'utilisateur.
     * 
     * @param idelement
     *            identfiant de Element à ajouter
     */
    public void addElementGere( int idelement ) {
        this.elementsGeres.add( idelement );
    }

    /**
     * Ajoute une raison sociale de Element à la liste des raisons sociales des
     * Elements gérées par l'utilisateur
     * 
     * @param raisonsociale
     *            raison sociale de Element à ajouter
     */
    public void addLibElementGere( String raisonsociale ) {
        this.libelementsGeres.add( raisonsociale );
    }

    /**
     * Supprime l'identifiant Element situé à la position <i>index</i> de la
     * liste des Elements gérées par l'utilisateur.
     * 
     * @param index
     *            position de l'identifiant de Element à supprimer
     */
    public void removeElementGere( int index ) {
        this.elementsGeres.remove( index );
    }

    /**
     * Supprime la raison sociale de la liste des raison sociales des Elements
     * gérées par l'utilisateur.
     * 
     * @param raisonsociale
     *            position de la raison sociale de Element à supprimer
     */
    public void removeLibElementGere( String raisonsociale ) {
        this.libelementsGeres.remove( raisonsociale );
    }

    /**
     * Retourne la liste des identifiants de Groupes gérées par l'utilisateur.
     * 
     * @return liste des identifiants de Groupes gérées par l'utilisateur
     */
    public ArrayList<Integer> getGroupesGeres() {
        return this.groupesGeres;
    }

    /**
     * Retourne l'identifiant de Groupe situé à la position <i>index</i> dans la
     * liste des Groupes gérées par l'utilisateur.
     * 
     * @param index
     *            position de l'identifiant de Groupe désiré
     * @return identifiant de Groupe situé à la position <i>index</i> dans la
     *         liste des Groupes gérées par l'utilisateur
     */
    public int getGroupeGere( int index ) {
        return this.groupesGeres.get( index );
    }

    /**
     * Modifie la liste des identifiants de Groupes gérés par l'utilisateur.
     * 
     * @param groupesGeres
     *            nouvelle liste des identifiants de Groupes gérés par
     *            l'utilisateur
     */
    public void setGroupesGeres( ArrayList<Integer> groupesGeres ) {
        this.groupesGeres = groupesGeres;
    }

    /**
     * Ajoute un identifiant de Groupe à la liste des Groupes gérées par
     * l'utilisateur.
     * 
     * @param idgroupe
     *            identfiant de Groupe à ajouter
     */
    public void addGroupeGere( int idgroupe ) {
        this.groupesGeres.add( idgroupe );
    }

    /**
     * Supprime l'identifiant Groupe situé à la position <i>index</i> de la
     * liste des Groupes gérées par l'utilisateur.
     * 
     * @param index
     *            position de l'identifiant de Groupe à supprimer
     */
    public void removeGroupeGere( int index ) {
        this.groupesGeres.remove( index );
    }

    /**
     * Retourne la liste des identifiants de Groupes ARS gérées par
     * l'utilisateur.
     * 
     * @return liste des identifiants de Groupes ARS gérées par l'utilisateur
     */
    public ArrayList<Integer> getGroupesArsGeres() {
        return this.groupesArsGeres;
    }

    /**
     * Retourne l'identifiant de Groupe ARS situé à la position <i>index</i>
     * dans la liste des Groupes ARS gérées par l'utilisateur.
     * 
     * @param index
     *            position de l'identifiant de Groupe ARS désiré
     * @return identifiant de Groupe ARS situé à la position <i>index</i> dans
     *         la liste des Groupes ARS gérées par l'utilisateur
     */
    public int getGroupeArsGere( int index ) {
        return this.groupesArsGeres.get( index );
    }

    /**
     * Modifie la liste des identifiants de Groupes ARS gérés par l'utilisateur.
     * 
     * @param groupesArsGeres
     *            nouvelle liste des identifiants de Groupes ARS gérés par
     *            l'utilisateur
     */
    public void setGroupesArsGeres( ArrayList<Integer> groupesArsGeres ) {
        this.groupesArsGeres = groupesArsGeres;
    }

    /**
     * Ajoute un identifiant de Groupe ARS à la liste des Groupes ARS gérées par
     * l'utilisateur.
     * 
     * @param idgroupeArs
     *            identfiant de Groupe ARS à ajouter
     */
    public void addGroupeArsGere( int idgroupeArs ) {
        this.groupesArsGeres.add( idgroupeArs );
    }

    /**
     * Supprime l'identifiant Groupe ARS situé à la position <i>index</i> de la
     * liste des Groupes ARS gérées par l'utilisateur.
     * 
     * @param index
     *            position de l'identifiant de Groupe ARS à supprimer
     */
    public void removeGroupeArsGere( int index ) {
        this.groupesArsGeres.remove( index );
    }

    /*
     * Fonctions
     */

    /**
     * Initialise la session par défaut.
     */
    public void init() {
        this.login = null;
        this.regIdSecuriteCompte = null;
        this.idcompte = 0;
        this.idprofil = 0;
        this.idpersonne = 0;
        this.nom = null;
        this.prenom = null;
        if ( this.idprofil == 6 ) { // Si il a le profil EMOSIST
            this.niveauVisibilite = 3;
        } else if ( this.idprofil == 5 ) { // Si il a le profil Tutelle
            this.niveauVisibilite = 2;
        } else {
            this.niveauVisibilite = 1;
        }
        this.derniereConnexion = new DateTime();
        this.structuresGerees = new ArrayList<Integer>();
        this.sitesGeres = new ArrayList<Integer>();
        this.elementsGeres = new ArrayList<Integer>();
        this.groupesGeres = new ArrayList<Integer>();
        this.groupesArsGeres = new ArrayList<Integer>();
    }

    /**
     * Initialise la session à partir d'une autre session.
     * 
     * @param session
     *            Session à recopier
     */
    public void init( Session session ) {
        this.login = session.login;
        this.regIdSecuriteCompte = session.regIdSecuriteCompte;
        this.idcompte = session.idcompte;
        this.idprofil = session.idprofil;
        this.idpersonne = session.idpersonne;
        this.nom = session.nom;
        this.prenom = session.prenom;
        if ( this.idprofil == 6 ) { // Si il a le profil EMOSIST
            this.niveauVisibilite = 3;
        } else if ( this.idprofil == 5 ) { // Si il a le profil Tutelle
            this.niveauVisibilite = 2;
        } else {
            this.niveauVisibilite = 1;
        }
        this.derniereConnexion = session.derniereConnexion;
        this.structuresGerees = session.structuresGerees;
        this.sitesGeres = session.sitesGeres;
        this.elementsGeres = session.elementsGeres;
        this.groupesGeres = session.groupesGeres;
        this.groupesArsGeres = session.groupesArsGeres;
    }

    /**
     * Initialise la session à partir d'une session Http.
     * 
     * @param httpsession
     *            Session Http à recopier
     */
    public void init( HttpSession httpsession ) {

        Session session = (Session) httpsession.getAttribute( "session" );

        if ( session == null ) {
            this.initTest();
        } else {
            this.init( session );
        }
    }

    /**
     * Initialisation à la connexion.
     * 
     * @return la session initialisée
     */
    public Session initSSOSession() {

        // on initie tout à partir du regIdSecurite
        this.initTest();

        Session.logger.debug( this.toString() );

        return this;
    }

    /**
     * Initialisation de test.
     */
    public void initTest() {
        if ( this.login == null ) {
            this.login = "admin";
        }
        if ( this.idcompte == 0 ) {
            this.idcompte = 382;
        }
        if ( this.idprofil == 0 ) {
            this.idprofil = 4;
        }
        if ( this.idpersonne == 0 ) {
            this.idpersonne = 107995;
        }
        if ( this.nom == null ) {
            this.nom = "ADMINISTRATEUR";
        }
        if ( this.prenom == null ) {
            this.prenom = "Admin";
        }
        if ( this.idprofil == 6 ) { // Si il a le profil EMOSIST
            this.niveauVisibilite = 3;
        } else if ( this.idprofil == 5 ) { // Si il a le profil Tutelle
            this.niveauVisibilite = 2;
        } else {
            this.niveauVisibilite = 1;
        }
        if ( this.derniereConnexion == null ) {
            this.derniereConnexion = new DateTime( "2013-04-29T10:50:39Z" );
        }
        if ( this.structuresGerees == null || this.structuresGerees.isEmpty() ) {
            this.structuresGerees = new ArrayList<Integer>();
            this.structuresGerees.add( 126509 );
        }
        if ( this.sitesGeres == null || this.sitesGeres.isEmpty() ) {
            this.sitesGeres = new ArrayList<Integer>();
        }
        if ( this.elementsGeres == null || this.elementsGeres.isEmpty() ) {
            this.elementsGeres = new ArrayList<Integer>();
        }
        if ( this.groupesGeres == null || this.groupesGeres.isEmpty() ) {
            this.groupesGeres = new ArrayList<Integer>();
        }
        if ( this.groupesArsGeres == null || this.groupesArsGeres.isEmpty() ) {
            this.groupesArsGeres = new ArrayList<Integer>();
            // this.groupesArsGeres.add( 51 );
        }
    }

    /**
     * Retourne un version formatée textuellement de la Session.
     * 
     * @return version formatée textuellement de la Session
     */
    @Override
    public String toString() {
        String print = "[";

        print += "login: " + this.login;
        print += ", ";
        print += "regIdSecuriteCompte: " + this.regIdSecuriteCompte;
        print += ", ";
        print += "idcompte: " + this.idcompte;
        print += ", ";
        print += "idprofil: " + this.idprofil;
        print += ", ";
        print += "idpersonne: " + this.idpersonne;
        print += ", ";
        print += "nom: " + this.nom;
        print += ", ";
        print += "prenom: " + this.prenom;
        print += ", ";
        print += "idprofil: " + this.idprofil;
        print += ", ";
        print += "derniereConnexion: " + this.derniereConnexion;
        print += ", ";
        print += "structuresGerees: [";
        for ( int i = 0; i < this.structuresGerees.size(); i++ ) {
            print += this.structuresGerees.get( i );
            if ( i < this.structuresGerees.size() - 1 ) {
                print += ",";
            }
        }
        print += "], ";
        print += "sitesGeres: [";
        for ( int i = 0; i < this.sitesGeres.size(); i++ ) {
            print += this.sitesGeres.get( i );
            if ( i < this.sitesGeres.size() - 1 ) {
                print += ",";
            }
        }
        print += "], ";
        print += "elementsGeres: [";
        for ( int i = 0; i < this.elementsGeres.size(); i++ ) {
            print += this.elementsGeres.get( i );
            if ( i < this.elementsGeres.size() - 1 ) {
                print += ",";
            }
        }
        print += "], ";
        print += "groupesGeres: [";
        for ( int i = 0; i < this.groupesGeres.size(); i++ ) {
            print += this.groupesGeres.get( i );
            if ( i < this.groupesGeres.size() - 1 ) {
                print += ",";
            }
        }
        print += "], ";
        print += "groupesArsGeres: [";
        for ( int i = 0; i < this.groupesArsGeres.size(); i++ ) {
            print += this.groupesArsGeres.get( i );
            if ( i < this.groupesArsGeres.size() - 1 ) {
                print += ",";
            }
        }
        print += "]";

        print += "]";
        return print;
    }

}
