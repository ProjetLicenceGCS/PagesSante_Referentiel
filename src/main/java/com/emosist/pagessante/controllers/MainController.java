package com.emosist.pagessante.controllers;

import java.security.Principal;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;

import com.emosist.pagessante.beans.Session;

/**
 * Controleur les connexion au SSO et les variables de Session.
 *
 * @author GERVAIS Gwenaël
 * @author BOISSON Clement
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
@Controller
public class MainController {

    protected static final Logger logger = Logger.getLogger(MainController.class);

    /**
     * Stratégie de récupération des identifiants.
     */
    @Value("${ideodirectory.war.ssoclient.Strategy}")
    String strategy;
    /**
     * Nom de la variable contenant le login.
     */
    @Value("${ideodirectory.war.ssoclient.LoginID}")
    String loginName;
    /**
     * Nom de la variable contenant le mot de passe.
     */
    @Value("${ideodirectory.war.ssoclient.PasswordID}")
    String passwordName;

    /**
     * Booléen indiquant si l'on est sur un type de stratégie JAAS.
     */
    boolean isJAAS = false;

    /**
     * Variable de Session.
     */
    @Autowired
    Session session = null;

    /**
     * Initialisation de l'objet.
     */
    @PostConstruct
    public void init() {
        if ("JAAS".equals(this.strategy)) {
            this.isJAAS = true;
        }
        if (this.loginName == null || this.loginName.trim().length() == 0) {
            this.loginName = "user";
        }
        if (this.passwordName == null || this.passwordName.trim().length() == 0) {
            this.passwordName = "password";
        }
    }

    /**
     * Affichage par défaut.
     *
     * @param model modèle issu de Spring servant à afficher la page
     * @param request requête http transmise par le client
     * @return la page à afficher
     */
    // @RequestMapping( method = RequestMethod.GET )
    public String showForm(ModelMap model, HttpServletRequest request) {

        this.addSessionToModel(model, request);

        return "404";
    }

    /**
     * Ajoute la variable Session au modèle afin de la transmettre à la page
     * JSP.
     *
     * @param model modèle issu de Spring servant à afficher la page
     * @param request requête http transmise par le client
     * @return modèle modifié
     */
    public ModelMap addSessionToModel(ModelMap model, HttpServletRequest request) {

        HttpSession httpsession = request.getSession(true);
        this.session.init(httpsession);
        String regIdSecuriteCompte = this.getUserName(request);
        // Si pas d'identifiant de compte, ou si le login est différent de celui
        // stocké, alors on implémente le login et on initialise les autres
        // données de session
        if (regIdSecuriteCompte != null
                && (this.session.getRegIdSecuriteCompte() == null
                || !this.session.getRegIdSecuriteCompte().equals(regIdSecuriteCompte)
                || this.session.getIdcompte() == 0)) {
            this.session.setRegIdSecuriteCompte(regIdSecuriteCompte);
            Session newSession = this.session.initSSOSession();
            httpsession.setAttribute("session", newSession);

        } else if (request.getServletPath().substring(request.getServletPath().lastIndexOf("/") + 1)
                .equals("public")) {
            this.session.setLogin("anonymous");
            httpsession.setAttribute("session", this.session);
        }

        model.addAttribute("session", this.session);

        return model;
    }

    /**
     * Retourne le nom d'utilisateur fourni par l'entête HTTP, l'attribut de
     * session ou les APIs JAAS. Appel l'implémentation par défaut si rien n'est
     * trouvé.
     *
     * @param request requête http transmise par le client
     * @return nom d'utilisateur
     */
    public String getUserName(HttpServletRequest request) {
        String login = null;

        // récupération du login via les APIs standard ou via une transmission
        // d'information
        if (this.isJAAS) {
            login = this.getJAASUserName(request);
        } else {
            login = this.getHeaderByName(request, this.loginName);
        }
        // si le login n'a pas été transmis on se replie sur le comportement par
        // défaut
        if (login != null) {
            // on flag en variable de Request que l'on a surchargé le login afin
            // de surcharger le password
            request.setAttribute("com.pagessante.emosist.customauth", "true");

        } else {
            String str = request.getParameter("user");
            if (str != null) {
                // commenté suite au filtre UTF8 mais non testé
                // str = StringOperation.formatISOtoUTF8( str );
                login = str;
            }
        }

        MainController.logger.debug("Recupération du UserName = " + login);
        return login;
    }

    /**
     * Retourne le nom d'utilisateur fourni par l'entête HTTP, l'attribut de
     * session ou les APIs JAAS. Appel l'implémentation par défaut si rien n'est
     * trouvé.
     *
     * @param request requête http transmise par le client
     * @return nom d'utilisateur
     */
    private String getHeaderByName(HttpServletRequest request, String hdr) {
        // récupération du login via l'API entete HTTP et via l'environnement de
        // session
        String value = request.getHeader(hdr);
        if (value == null || value.length() == 0) {
            value = (String) request.getSession().getAttribute(hdr);
        }
        if (value != null && value.length() == 0) {
            value = null;
        }
        return value;
    }

    /**
     * Retourne le nom d'utilisateur fourni par le servlet ou les APIs JAAS.
     *
     * @param request requête http transmise par le client
     * @return nom d'utilisateur, null si non trouvé
     */
    private String getJAASUserName(HttpServletRequest request) {
        String login = request.getRemoteUser();
        if (login == null) {
            Principal up = request.getUserPrincipal();
            if (up != null) {
                login = up.getName();
            }
        }
        return login;
    }

    /**
     * Retourne le mot de passe fourni par l'entête HTTP, l'attribut de session
     * ou les APIs JAAS. Appel l'implémentation par défaut si rien n'est trouvé.
     *
     * @param request requête http transmise par le client
     * @return nom d'utilisateur
     */
    public String getUserPassword(HttpServletRequest request) {
        // si le login n'a pas été surchargé on réalise le traitement par défaut
        // pour le mot de passe
        if (request.getAttribute("com.pagessante.emosist.customauth") == null) {
            String str = request.getParameter("password");
            // commenté suite au filtre UTF8 mais non testé
            // if ( str != null ) {
            // str = StringOperation.formatISOtoUTF8( str );
            // }
            return str;
        }
        // si mode JAAS, alors pas de mot de passe fourni
        if (this.isJAAS) {
            return "";
        }
        // sinon, on récupère le mot de passe si il est fourni
        String password = this.getHeaderByName(request, this.passwordName);
        if (password != null) {
            return password;
        } else {
            return "";
        }
    }

    /**
     * Fonction de redirection vers la page de déconnexion si jamais le login
     * est vide (= déconnecté).
     *
     * @param jspPage Page de redirection si login Ok
     * @param request requête http transmise par le client
     * @return Page de redirection finale
     */
    public String redirectIfLogged(HttpServletRequest request, String jspPage) {

        // Si login null ou vide, on redirige en déconnexion
        // if ( this.session.getLogin() == null ||
        // this.session.getLogin().isEmpty() ) {
        // MainController.logger.debug(
        // "Redirection vers déconnexion car Login vide." );
        // jspPage = "forward:" + request.getServletPath() + "/deconnexion";
        // }
        return jspPage;
    }

    /**
     * Règle le niveau de visibilité et les droits présent dans la variable
     * Session en fonction de l'utilisateur et l'entité demandée.
     *
     * @param typeentite type de l'entité demandée
     * @param identite identifiant de l'entité demandée
     * @param request requête http transmise par le client
     */
    public void droitsSurEntite(String typeentite, Integer identite, HttpServletRequest request) {

        int niveauVisibilite = this.session.getNiveauVisibilite();

        String gere = "";

        if (typeentite != null && identite != null) {
            if (typeentite.equals("structure")) {

                if (this.session.getStructuresGerees() != null) {
                    for (int i = 0; i < this.session.getStructuresGerees().size(); i++) {
                        if (identite.equals(this.session.getStructuresGerees().get(i))) {
                            gere = "true";
                        }
                    }
                }

                if (this.session.getGroupesArsGeres() != null) {
                    for (int i = 0; i < this.session.getGroupesArsGeres().size(); i++) {

                    }
                }

                if (gere.equals("true")) {
                    if (this.session.getIdprofil() == 1) {
                        niveauVisibilite = 3;
                    } else if (this.session.getIdprofil() == 3 || this.session.getIdprofil() == 2) {
                        niveauVisibilite = 2;
                    }
                }

                this.setVariableSession(request, "gerelastructure", gere);

            } else if (typeentite.equals("site")) {

                if (this.session.getSitesGeres() != null) {
                    for (int i = 0; i < this.session.getSitesGeres().size(); i++) {
                        if (identite.equals(this.session.getSitesGeres().get(i))) {
                            gere = "true";
                        }
                    }
                }

                if (this.session.getGroupesArsGeres() != null) {
                    for (int i = 0; i < this.session.getGroupesArsGeres().size(); i++) {

                    }
                }

                if (gere.equals("true")) {
                    if (this.session.getIdprofil() == 1) {
                        niveauVisibilite = 3;
                    } else if (this.session.getIdprofil() == 3 || this.session.getIdprofil() == 2) {
                        niveauVisibilite = 2;
                    }
                }

                this.setVariableSession(request, "gerelesite", gere);

            } else if (typeentite.equals("element")) {

                if (this.session.getElementsGeres() != null) {
                    for (int i = 0; i < this.session.getElementsGeres().size(); i++) {
                        if (identite.equals(this.session.getElementsGeres().get(i))) {
                            gere = "true";
                        }
                    }
                }

                if (this.session.getGroupesArsGeres() != null) {
                    for (int i = 0; i < this.session.getGroupesArsGeres().size(); i++) {

                    }
                }

                if (gere.equals("true")) {
                    if (this.session.getIdprofil() == 1) {
                        niveauVisibilite = 3;
                    } else if (this.session.getIdprofil() == 3 || this.session.getIdprofil() == 2) {
                        niveauVisibilite = 2;
                    }
                }

                this.setVariableSession(request, "gereelement", gere);

            } else if (typeentite.equals("fonction")) {

                if (gere.equals("true")) {
                    if (this.session.getIdprofil() == 1) {
                        niveauVisibilite = 3;
                    } else if (this.session.getIdprofil() == 3 || this.session.getIdprofil() == 2) {
                        niveauVisibilite = 2;
                    }
                }

                this.setVariableSession(request, "gerefonction", gere);

            } else if (typeentite.equals("personne")) {

            }

            if (gere.equals("true")) {
                if (this.session.getIdprofil() == 1) {
                    niveauVisibilite = 3;
                } else if (this.session.getIdprofil() == 3 || this.session.getIdprofil() == 2) {
                    niveauVisibilite = 2;
                }
            }

            this.setVariableSession(request, "gerepersonne", gere);

        }

        this.setVariableSession(request, "niveauVisibilite", niveauVisibilite);

    }

    /**
     * Règle le niveau de visibilité dans la variable Session en fonction de si
     * l'utilisateur est gestionnaire ou non de l'entité.
     *
     * @param typeentite type de l'entité
     * @param identite identifiant de l'entité
     * @param request requête http transmise par le client
     */
    public void isGestionnaire(Integer typeentite, Integer identite, HttpServletRequest request) {

        int niveauVisibilite = this.session.getNiveauVisibilite();

        this.setVariableSession(request, "niveauVisibilite", niveauVisibilite);

    }

    /**
     * Retourne la valeur d'une variable de session HTTP.
     *
     * @param request requête http transmise par le client
     * @param variableName nom de la variable
     * @return valeur de la variable
     */
    public Object getVariableSession(HttpServletRequest request, String variableName) {
        HttpSession session = request.getSession(true);
        return session.getAttribute(variableName);
    }

    /**
     * Crée ou modifie la valeur d'une variable de session HTTP.
     *
     * @param request requête http transmise par le client
     * @param variableName nom de la variable
     * @param variable nouvelle valeur de la variable
     */
    public void setVariableSession(HttpServletRequest request, String variableName, Object variable) {
        HttpSession session = request.getSession(true);
        session.setAttribute(variableName, variable);
    }

    /**
     * Supprime une varialbe de session HTTP
     *
     * @param request requête http transmise par le client
     * @param variableName nom de la variable
     */
    public void removeVariableSession(HttpServletRequest request, String variableName) {
        HttpSession session = request.getSession(true);
        session.removeAttribute(variableName);
    }

}
