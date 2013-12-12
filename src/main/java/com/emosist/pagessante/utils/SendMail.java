package com.emosist.pagessante.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Properties;
import java.util.StringTokenizer;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.NoSuchProviderException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.apache.log4j.Logger;

public class SendMail {

    private static final Logger logger = Logger.getLogger(SendMail.class);

    private String senderemail;
    private String host;
    private String port;
    private String login;
    private String password;
    private Session session;
    private Transport transport;

    /**
     * Constructeur par ficheir de properties
     *
     * @param propertiesFilePath Chemin du fichier de properties
     * @throws SendMailException
     */
    public SendMail(String propertiesFilePath) throws SendMailException {
        // on récupère les infos de mail
        Properties propPgst = new Properties();
        try {
            // récupération du paramètrage
            propPgst.load(new FileInputStream(propertiesFilePath));
            this.senderemail = propPgst.getProperty("mail.from");
            this.host = propPgst.getProperty("mail.smtp.host");
            this.port = propPgst.getProperty("mail.smtp.port");
            this.login = propPgst.getProperty("mail.smtp.login");
            this.password = propPgst.getProperty("mail.smtp.password");

            // vérification du paramètrage
            if (this.senderemail == null || this.senderemail.isEmpty()) {
                logger.error("Erreur de paramètrage : aucune adresse e-mail d'expéditeur renseignée");
                throw new SendMailException("Erreur de paramètrage : aucune adresse e-mail d'expéditeur renseignée");
            }
            if (this.host == null || this.host.isEmpty()) {
                logger.error("Erreur de paramètrage : aucun host de serveur SMTP renseigné");
                throw new SendMailException("Erreur de paramètrage : aucun host de serveur SMTP renseigné");
            }
            if (this.port == null || this.port.isEmpty()) {
                this.port = "25";
            }

            // instanciation des propriétés du SMTP
            Properties propSMTP = new Properties();
            // propSMTP.put( "mail.debug", "true" ); // active le debugage
            propSMTP.put("mail.smtp.host", this.host);
            propSMTP.put("mail.smtp.port", this.port);
            propSMTP.put("mail.transport.protocol", "smtp");
            propSMTP.put("mail.from", this.senderemail);
            // si authentification
            if (this.login != null && !this.login.isEmpty() && this.password != null) {
                propSMTP.put("mail.smtp.auth", "true");
                propSMTP.put("mail.user", this.login);
                propSMTP.put("mail.password", this.password);
            }

            // Note: Aucune authentification n'est définie
            this.session = Session.getInstance(propSMTP, null);

            this.transport = this.session.getTransport();
        } catch (FileNotFoundException e) {
            logger.error("Une erreur s'est produite lors de la lecture des properties : " + e);
            throw new SendMailException("Une erreur s'est produite lors de la lecture des properties : "
                    + e.getMessage(), e);
        } catch (IOException e) {
            logger.error("Une erreur s'est produite lors de la lecture des properties : " + e);
            throw new SendMailException("Une erreur s'est produite lors de la lecture des properties : "
                    + e.getMessage(), e);
        } catch (NoSuchProviderException e) {
            logger.error("Une erreur s'est produite lors de la configuration du SMTP : " + e);
            throw new SendMailException("Une erreur s'est produite lors de la configuration du SMTP : "
                    + e.getMessage(), e);
        }

    }

    /**
     * Constructeur complet
     *
     * @param senderemail Adresse e-mail de l'expéditeur
     * @param host URL/IP du serveur SMTP
     * @param port Port du SMTP
     * @param login Login du SMTP
     * @param password Mot de passe du SMTP
     * @throws SendMailException
     */
    public SendMail(String senderemail, String host, String port, String login, String password)
            throws SendMailException {
        try {
            // récupération du paramètrage
            this.senderemail = senderemail;
            this.host = host;
            this.port = port;
            this.login = login;
            this.password = password;

            // vérification du paramètrage
            if (this.senderemail == null || this.senderemail.isEmpty()) {
                logger.error("Erreur de paramètrage : aucune adresse e-mail d'expéditeur renseignée");
                throw new SendMailException("Erreur de paramètrage : aucune adresse e-mail d'expéditeur renseignée");
            }
            if (this.host == null || this.host.isEmpty()) {
                logger.error("Erreur de paramètrage : aucun host de serveur SMTP renseigné");
                throw new SendMailException("Erreur de paramètrage : aucun host de serveur SMTP renseigné");
            }
            if (this.port == null || this.port.isEmpty()) {
                this.port = "25";
            }

            // instanciation des propriétés du SMTP
            Properties propSMTP = new Properties();
            // propSMTP.put( "mail.debug", "true" ); // active le debugage
            propSMTP.put("mail.smtp.host", this.host);
            propSMTP.put("mail.smtp.port", this.port);
            propSMTP.put("mail.transport.protocol", "smtp");
            propSMTP.put("mail.from", this.senderemail);
            // si authentification
            if (this.login != null && !this.login.isEmpty() && this.password != null) {
                propSMTP.put("mail.smtp.auth", "true");
                propSMTP.put("mail.user", this.login);
                propSMTP.put("mail.password", this.password);
            }

            // Note: Aucune authentification n'est définie
            this.session = Session.getInstance(propSMTP, null);

            this.transport = this.session.getTransport();
        } catch (NoSuchProviderException e) {
            logger.error("Une erreur s'est produite lors de la configuration du SMTP : " + e);
            throw new SendMailException("Une erreur s'est produite lors de la configuration du SMTP : "
                    + e.getMessage(), e);
        }

    }

    /**
     * Envoi d'un message HTML à un ou plusieurs destinataires principaux,
     * séparés par des virgules.
     *
     * @param sujet Sujet du message
     * @param message Message au format HTML
     * @param destinataires Destinataires séparés par des virgules
     * @throws SendMailException
     */
    public void envoyerHtml(String sujet, String message, String destinataires)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, null, null, null);
    }

    /**
     * Envoi d'un message HTML et de fichiers attachés à un ou plusieurs
     * destinataires principaux, séparés par des virgules.
     *
     * @param sujet Sujet du message
     * @param message Message au format HTML
     * @param destinataires Destinataires séparés par des virgules
     * @param fichiers Liste des chemins des fichiers à attacher séparés par des
     * virgules
     * @throws SendMailException
     */
    public void envoyerHtmlAvecFichiers(String sujet, String message, String destinataires, String fichiers)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, null, null, fichiers);
    }

    /**
     * Envoi d'un message à un ou plusieurs destinataires principaux, séparés
     * par des virgules.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param destinataires Destinataires séparés par des virgules
     * @throws SendMailException
     */
    public void envoyer(String sujet, String message, String destinataires)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, false, destinataires, null, null, null);
    }

    /**
     * Envoi d'un message et de fichiers attachés à un ou plusieurs
     * destinataires principaux, séparés par des virgules.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param destinataires Destinataires séparés par des virgules
     * @param fichiers Liste des chemins des fichiers à attacher séparés par des
     * virgules
     * @throws SendMailException
     */
    public void envoyerAvecFichiers(String sujet, String message, String destinataires, String fichiers)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, false, destinataires, null, null, fichiers);
    }

    /**
     * Envoi d'un message HTML à un ou plusieurs destinataires principaux et de
     * copie, séparés par des virgules.
     *
     * @param sujet Sujet du message
     * @param message Message au format HTML
     * @param destinataires Destinataires séparés par des virgules
     * @param destinataires_copie Destinataires de copie séparés par des
     * virgules
     * @throws SendMailException
     */
    public void envoyerHtml(String sujet, String message, String destinataires, String destinataires_copie)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, destinataires_copie, null, null);
    }

    /**
     * Envoi d'un message et de fichiers attachés HTML à un ou plusieurs
     * destinataires principaux et de copie, séparés par des virgules.
     *
     * @param sujet Sujet du message
     * @param message Message au format HTML
     * @param destinataires Destinataires séparés par des virgules
     * @param destinataires_copie Destinataires de copie séparés par des
     * virgules
     * @param fichiers Liste des chemins des fichiers à attacher séparés par des
     * virgules
     * @throws SendMailException
     */
    public void envoyerHtmlAvecFichiers(String sujet, String message, String destinataires,
            String destinataires_copie, String fichiers) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, destinataires_copie, null, fichiers);
    }

    /**
     * Envoi d'un message à un ou plusieurs destinataires principaux et de
     * copie, séparés par des virgules.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param destinataires Destinataires séparés par des virgules
     * @param destinataires_copie Destinataires de copie séparés par des
     * virgules
     * @throws SendMailException
     */
    public void envoyer(String sujet, String message, String destinataires, String destinataires_copie)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, false, destinataires, destinataires_copie, null, null);
    }

    /**
     * Envoi d'un message et de fichiers attachés à un ou plusieurs
     * destinataires principaux et de copie, séparés par des virgules.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param destinataires Destinataires séparés par des virgules
     * @param destinataires_copie Destinataires de copie séparés par des
     * virgules
     * @param fichiers Liste des chemins des fichiers à attacher séparés par des
     * virgules
     * @throws SendMailException
     */
    public void envoyerAvecFichiers(String sujet, String message, String destinataires, String destinataires_copie,
            String fichiers) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, false, destinataires, destinataires_copie, null, fichiers);
    }

    /**
     * Envoi d'un message HTML à un ou plusieurs destinataires principaux, de
     * copie, et de copie cachée, séparés par des virgules.
     *
     * @param sujet Sujet du message
     * @param message HTML Message au format HTML
     * @param destinataires Destinataires séparés par des virgules
     * @param destinataires_copie Destinataires de copie séparés par des
     * virgules
     * @param destinataires_copiecache Destinataires de copie cachée séparés par
     * des virgules
     * @throws SendMailException
     */
    public void envoyerHtml(String sujet, String message, String destinataires,
            String destinataires_copie, String destinataires_copiecache) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, destinataires_copie, destinataires_copiecache,
                null);
    }

    /**
     * Envoi d'un message HTML et de fichiers attachés à un ou plusieurs
     * destinataires principaux, de copie, et de copie cachée, séparés par des
     * virgules.
     *
     * @param sujet Sujet du message
     * @param message HTML Message au format HTML
     * @param destinataires Destinataires séparés par des virgules
     * @param destinataires_copie Destinataires de copie séparés par des
     * virgules
     * @param destinataires_copiecache Destinataires de copie cachée séparés par
     * des virgules
     * @param fichiers Liste des chemins des fichiers à attacher séparés par des
     * virgules
     * @throws SendMailException
     */
    public void envoyerHtmlAvecFichiers(String sujet, String message, String destinataires,
            String destinataires_copie, String destinataires_copiecache, String fichiers) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, destinataires_copie, destinataires_copiecache,
                fichiers);
    }

    /**
     * Envoi d'un message et de fichiers attachés à un ou plusieurs
     * destinataires principaux, de copie, et de copie cachée, séparés par des
     * virgules.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param destinataires Destinataires séparés par des virgules
     * @param destinataires_copie Destinataires de copie séparés par des
     * virgules
     * @param destinataires_copiecache Destinataires de copie cachée séparés par
     * des virgules
     * @throws SendMailException
     */
    public void envoyer(String sujet, String message, String destinataires, String destinataires_copie,
            String destinataires_copiecache) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, destinataires_copie, destinataires_copiecache,
                null);
    }

    /**
     * Envoi d'un message et de fichiers attachés à un ou plusieurs
     * destinataires principaux, de copie, et de copie cachée, séparés par des
     * virgules.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param html booléen indiquant si le message est de type html
     * @param destinataires Destinataires séparés par des virgules
     * @param destinataires_copie Destinataires de copie séparés par des
     * virgules
     * @param destinataires_copiecache Destinataires de copie cachée séparés par
     * des virgules
     * @param fichiers Liste des chemins des fichiers à attacher séparés par des
     * virgules
     * @throws SendMailException
     */
    public void envoyerAvecFichiers(String sujet, String message, boolean html, String destinataires,
            String destinataires_copie, String destinataires_copiecache, String fichiers) throws SendMailException {

        // découpe des destinataires
        ArrayList<String> recipientsArray = new ArrayList<String>();
        StringTokenizer str = new StringTokenizer(destinataires, ",");
        while (str.hasMoreTokens()) {
            recipientsArray.add(str.nextToken());
        }

        // découpe des destinataires_copie si non nulls
        ArrayList<String> copiesArray = new ArrayList<String>();
        if (destinataires_copie != null && !destinataires_copie.isEmpty()) {
            StringTokenizer stc = new StringTokenizer(destinataires_copie, ",");
            while (stc.hasMoreTokens()) {
                copiesArray.add(stc.nextToken());
            }
        }

        // découpe des destinataires_copiecache si non nulls
        ArrayList<String> blindsArray = new ArrayList<String>();
        if (destinataires_copiecache != null && !destinataires_copiecache.isEmpty()) {
            StringTokenizer stb = new StringTokenizer(destinataires_copiecache, ",");
            while (stb.hasMoreTokens()) {
                blindsArray.add(stb.nextToken());
            }
        }

        // découpe les fichiers attaches si non nulls
        ArrayList<String> filesArray = new ArrayList<String>();
        if (fichiers != null && !fichiers.isEmpty()) {
            StringTokenizer stf = new StringTokenizer(fichiers, ",");
            while (stf.hasMoreTokens()) {
                filesArray.add(stf.nextToken());
            }
        }

        this.envoyerAvecFichiers(sujet, message, html, recipientsArray, copiesArray, blindsArray, filesArray);
    }

    /**
     * Envoi d'un message HTML à une liste de destinataires principaux.
     *
     * @param sujet Sujet du message
     * @param message Message au format HTML
     * @param destinataires Liste de destinataires
     * @throws SendMailException
     */
    public void envoyerHtml(String sujet, String message, ArrayList<String> destinataires)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, null, null, null);
    }

    /**
     * Envoi d'un message et de fichiers attachés HTML à une liste de
     * destinataires principaux.
     *
     * @param sujet Sujet du message
     * @param message Message au format HTML
     * @param destinataires Liste de destinataires
     * @param fichiers Liste des chemins des fichiers à attacher
     * @throws SendMailException
     */
    public void envoyerHtmlAvecFichiers(String sujet, String message, ArrayList<String> destinataires,
            ArrayList<String> fichiers) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, null, null, fichiers);
    }

    /**
     * Envoi d'un message à une liste de destinataires principaux.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param destinataires Liste de destinataires
     * @throws SendMailException
     */
    public void envoyer(String sujet, String message, ArrayList<String> destinataires)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, false, destinataires, null, null, null);
    }

    /**
     * Envoi d'un message et de fichiers attachés à une liste de destinataires
     * principaux.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param destinataires Liste de destinataires
     * @param fichiers Liste des chemins des fichiers à attacher
     * @throws SendMailException
     */
    public void envoyerAvecFichiers(String sujet, String message, ArrayList<String> destinataires,
            ArrayList<String> fichiers) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, false, destinataires, null, null, fichiers);
    }

    /**
     * Envoi d'un message HTML à une liste de destinataires principaux et de
     * copie.
     *
     * @param sujet Sujet du message
     * @param message Message au format HTML
     * @param destinataires Liste de destinataires
     * @param destinataires_copie Liste de destinataires de copie
     * @throws SendMailException
     */
    public void envoyerHtml(String sujet, String message, ArrayList<String> destinataires,
            ArrayList<String> destinataires_copie) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, destinataires_copie, null, null);
    }

    /**
     * Envoi d'un message HTML et de fichiers attachés à une liste de
     * destinataires principaux et de copie.
     *
     * @param sujet Sujet du message
     * @param message Message au format HTML
     * @param destinataires Liste de destinataires
     * @param destinataires_copie Liste de destinataires de copie
     * @param fichiers Liste des chemins des fichiers à attacher
     * @throws SendMailException
     */
    public void envoyerHtmlAvecFichiers(String sujet, String message, ArrayList<String> destinataires,
            ArrayList<String> destinataires_copie, ArrayList<String> fichiers) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, destinataires_copie, null, fichiers);
    }

    /**
     * Envoi d'un message à une liste de destinataires principaux et de copie.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param destinataires Liste de destinataires
     * @param destinataires_copie Liste de destinataires de copie
     * @throws SendMailException
     */
    public void envoyer(String sujet, String message, ArrayList<String> destinataires,
            ArrayList<String> destinataires_copie) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, false, destinataires, destinataires_copie, null, null);
    }

    /**
     * Envoi d'un message et de fichiers attachés à une liste de destinataires
     * principaux et de copie.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param destinataires Liste de destinataires
     * @param destinataires_copie Liste de destinataires de copie
     * @param fichiers Liste des chemins des fichiers à attacher
     * @throws SendMailException
     */
    public void envoyerAvecFichiers(String sujet, String message, ArrayList<String> destinataires,
            ArrayList<String> destinataires_copie, ArrayList<String> fichiers) throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, false, destinataires, destinataires_copie, null, fichiers);
    }

    /**
     * Envoi d'un message HTML à une liste de destinataires principaux, de
     * copie, et de copie cachée.
     *
     * @param sujet Sujet du message
     * @param message Message au format HTML
     * @param destinataires Liste de destinataires
     * @param destinataires_copie Liste de destinataires de copie
     * @param destinataires_copiecache Liste de destinataires de copie cachée
     * @throws SendMailException
     */
    public void envoyerHtml(String sujet, String message, ArrayList<String> destinataires,
            ArrayList<String> destinataires_copie, ArrayList<String> destinataires_copiecache)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, destinataires_copie, destinataires_copiecache,
                null);
    }

    /**
     * Envoi d'un message HTML et de fichiers attachés à une liste de
     * destinataires principaux, de copie, et de copie cachée.
     *
     * @param sujet Sujet du message
     * @param message Message au format HTML
     * @param destinataires Liste de destinataires
     * @param destinataires_copie Liste de destinataires de copie
     * @param destinataires_copiecache Liste de destinataires de copie cachée
     * @param fichiers Liste des chemins des fichiers à attacher
     * @throws SendMailException
     */
    public void envoyerHtmlAvecFichiers(String sujet, String message,
            ArrayList<String> destinataires, ArrayList<String> destinataires_copie,
            ArrayList<String> destinataires_copiecache, ArrayList<String> fichiers)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, destinataires_copie,
                destinataires_copiecache, fichiers);
    }

    /**
     * Envoi d'un message à une liste de destinataires principaux, de copie, et
     * de copie cachée.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param html booléen indiquant si le message est de type html
     * @param destinataires Liste de destinataires
     * @param destinataires_copie Liste de destinataires de copie
     * @param destinataires_copiecache Liste de destinataires de copie cachée
     * @throws SendMailException
     */
    public void envoyer(String sujet, String message, boolean html, ArrayList<String> destinataires,
            ArrayList<String> destinataires_copie, ArrayList<String> destinataires_copiecache)
            throws SendMailException {
        this.envoyerAvecFichiers(sujet, message, true, destinataires, destinataires_copie,
                destinataires_copiecache, null);
    }

    /**
     * Envoi d'un message et de fichiers attachés à une liste de destinataires
     * principaux, de copie, et de copie cachée.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param html booléen indiquant si le message est de type html
     * @param destinataires Liste de destinataires
     * @param destinataires_copie Liste de destinataires de copie
     * @param destinataires_copiecache Liste de destinataires de copie cachée
     * @param fichiers Liste des chemins des fichiers attachés
     * @throws SendMailException
     */
    public void envoyerAvecFichiers(String sujet, String message, boolean html, ArrayList<String> destinataires,
            ArrayList<String> destinataires_copie, ArrayList<String> destinataires_copiecache,
            ArrayList<String> fichiers)
            throws SendMailException {

        // découpe des destinataires
        int sizeTo = destinataires.size();
        InternetAddress[] addressTo = new InternetAddress[sizeTo];
        for (int i = 0; i < sizeTo; i++) {
            try {
                addressTo[i] = new InternetAddress(destinataires.get(i).toString());
            } catch (AddressException e) {
                logger.error("Une erreur s'est produite lors de la lecture des destinataires : " + e.getMessage());
                throw new SendMailException("Une erreur s'est produite lors de la lecture des destinataires : "
                        + e.getMessage(), e);
            }
        }

        // découpe des destinataires_copie
        InternetAddress[] addressCC = null;
        if (destinataires_copie != null && !destinataires_copie.isEmpty()) {
            int sizeCC = destinataires_copie.size();
            addressCC = new InternetAddress[sizeCC];
            for (int i = 0; i < sizeCC; i++) {
                try {
                    addressCC[i] = new InternetAddress(destinataires_copie.get(i).toString());
                } catch (AddressException e) {
                    logger.error("Une erreur s'est produite lors de la lecture des destinataires de copie : "
                            + e.getMessage());
                    throw new SendMailException(
                            "Une erreur s'est produite lors de la lecture des destinataires de copie : "
                            + e.getMessage(), e);
                }
            }
        }

        // découpe des destinataires_copiecache
        InternetAddress[] addressBCC = null;
        if (destinataires_copiecache != null && !destinataires_copiecache.isEmpty()) {
            int sizeBCC = destinataires_copiecache.size();
            addressBCC = new InternetAddress[sizeBCC];
            for (int i = 0; i < sizeBCC; i++) {
                try {
                    addressBCC[i] = new InternetAddress(destinataires_copiecache.get(i).toString());
                } catch (AddressException e) {
                    logger.error("Une erreur s'est produite lors de la lecture des destinataires de copie cachée : "
                            + e.getMessage());
                    throw new SendMailException(
                            "Une erreur s'est produite lors de la lecture des destinataires de copie cachée : "
                            + e.getMessage(), e);
                }
            }
        }

        // découpe des destinataires_copiecache
        ArrayList<File> attachementsArray = new ArrayList<File>();
        if (fichiers != null) {
            for (int i = 0; i < fichiers.size(); i++) {
                if (fichiers.get(i) != null && !fichiers.get(i).isEmpty()) {
                    attachementsArray.add(new File(fichiers.get(i)));
                }
            }
        }

        this.envoyerFinal(sujet, message, html, addressTo, addressCC, addressBCC, null);
    }

    /**
     * Envoi d'un message et de fichiers attachés à une liste de destinataires
     * principaux, de copie, et de copie cachée.
     *
     * @param sujet Sujet du message
     * @param message Message au format texte
     * @param html booléen indiquant si le message est de type html
     * @param destinataires Liste de destinataires
     * @param destinataires_copie Liste de destinataires de copie
     * @param destinataires_copiecache Liste de destinataires de copie cachée
     * @param fichiers Liste des fichiers à attacher
     * @throws SendMailException
     */
    private void envoyerFinal(String sujet, String message, boolean html, InternetAddress[] destinataires,
            InternetAddress[] destinataires_copie, InternetAddress[] destinataires_copiecache,
            ArrayList<File> fichiers) throws SendMailException {

        MimeMessage msg = new MimeMessage(this.session);

        try {
            // From
            msg.setFrom();
            // Sujet
            msg.setSubject(sujet, "utf-8");
            // Date d'envoi
            msg.setSentDate(new java.util.Date());
            // destinataires
            msg.setRecipients(Message.RecipientType.TO, destinataires);
            // destinataires copie si non null
            if (destinataires_copie != null) {
                msg.addRecipients(Message.RecipientType.CC, destinataires_copie);
            }
            // destinataires copie cachée si non null
            if (destinataires_copiecache != null) {
                msg.addRecipients(Message.RecipientType.BCC, destinataires_copiecache);
            }
        } catch (MessagingException e) {
            logger.error("Une erreur s'est produite lors de la création de l'entête du message : " + e.getMessage());
            throw new SendMailException("Une erreur s'est produite lors de la création de l'entête du message : "
                    + e.getMessage(), e);
        }

        // ajout du message et des fichiers
        try {
            if (fichiers == null || fichiers.isEmpty()) {
                // contenu
                if (html) {
                    // is on a du html
                    msg.setContent(message, "text/html; charset=utf-8");
                } else {
                    msg.setContent(message, "text/plain; charset=utf-8");
                }
            } else {

                // Create the message part
                BodyPart messageBodyPart = new MimeBodyPart();

                // Fill the message
                if (html) {
                    // is on a du html
                    messageBodyPart.setContent(message, "text/html; charset=utf-8");
                } else {
                    messageBodyPart.setContent(message, "text/plain; charset=utf-8");
                }

                // Create a multipar message
                Multipart multipart = new MimeMultipart();

                // Set text message part
                multipart.addBodyPart(messageBodyPart);

                // Part two is attachment
                for (int i = 0; i < fichiers.size(); i++) {
                    File attachement = fichiers.get(i);
                    if (attachement != null && attachement.exists()) {
                        messageBodyPart = new MimeBodyPart();
                        FileDataSource fileDataSource = new FileDataSource(attachement);
                        messageBodyPart.setDataHandler(new DataHandler(fileDataSource));
                        messageBodyPart.setFileName(attachement.getName());
                        multipart.addBodyPart(messageBodyPart);
                    }
                }

                // Send the complete message parts
                msg.setContent(multipart);
            }
        } catch (MessagingException e) {
            logger.error("Une erreur s'est produite lors de l'ajout du message et des fichiers : " + e.getMessage());
            throw new SendMailException("Une erreur s'est produite lors de l'ajout du message et des fichiers : "
                    + e.getMessage(), e);
        }

        // Connection au SMTP
        try {
            if (this.login != null && !this.login.isEmpty() && this.password != null) {
                this.transport.connect(this.login, this.password);
            } else {
                this.transport.connect();
            }
        } catch (MessagingException e) {
            logger.error("Une erreur s'est produite lors de la connexion au STMP : " + e.getMessage());
            throw new SendMailException("Une erreur s'est produite lors de la connexion au STMP : "
                    + e.getMessage(), e);
        }

        try {
            this.transport.sendMessage(msg, msg.getAllRecipients());
        } catch (MessagingException e) {
            logger.error("Une erreur s'est produite lors de l'envoi du mail : " + e.getMessage());
            throw new SendMailException("Une erreur s'est produite lors de l'envoi du mail : "
                    + e.getMessage(), e);
        } finally {
            try {
                this.transport.close();
            } catch (MessagingException e) {
                logger.error("Une erreur s'est produite lors de la déconnexion au STMP : " + e.getMessage());
                throw new SendMailException("Une erreur s'est produite lors de la déconnexion au STMP : "
                        + e.getMessage(), e);
            }
        }

        logger.info("E-mail envoyé.");

    }
}
