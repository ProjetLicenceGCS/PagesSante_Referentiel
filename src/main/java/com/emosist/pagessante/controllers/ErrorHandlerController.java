package com.emosist.pagessante.controllers;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.emosist.pagessante.utils.SendMail;
import com.emosist.pagessante.utils.SendMailException;

/**
 * Controleur de gestion des erreurs.
 * 
 * @author GERVAIS Gwenaël
 * @author BOISSON Clement
 * 
 * @since 1.0.0
 * @version 1.0.0
 * 
 */
@Controller
@RequestMapping( "/error" )
public class ErrorHandlerController {

    private static final Logger logger = Logger.getLogger( ErrorHandlerController.class );

    /**
     * Handler de traitement des erreur reçues par l'utilisateur. Renvoi une
     * page d'erreur en fonction du type d'erreur (404, 405, 500, ...).
     * 
     * @param request
     *            requête http transmise par le client
     * @param response
     *            réponse http transmise au client
     * @return la page d'erreur à afficher
     */
    @RequestMapping( method = RequestMethod.GET )
    public String handleGet( HttpServletRequest request, HttpServletResponse response ) {
        // The Servlet spec guarantees this attribute will be available
        Throwable exception = (Throwable) request.getAttribute( "javax.servlet.error.exception" );
        Integer statusCode = (Integer) request.getAttribute( "javax.servlet.error.status_code" );
        String servletName = (String) request.getAttribute( "javax.servlet.error.servlet_name" );
        if ( servletName == null ) {
            servletName = "Unknown";
        }
        String requestUri = (String) request.getAttribute( "javax.servlet.error.request_uri" );
        if ( requestUri == null ) {
            requestUri = "Unknown";
        }

        if ( exception == null && statusCode == null ) {
            return "Error-xxx";
        } else if ( statusCode != null ) {
            // si on connais le code, on redirige vers une page connue
            if ( statusCode == 404 ) {
                return "Error-404";
            } else if ( statusCode == 405 ) {
                return "Error-404";
            } else {
                this.sendErrorMail( request );

                return "Error-xxx";
            }
        } else {
            // sinon on traite une erreur importante et on envoi un mail
            this.sendErrorMail( request );

            // on redirige vers la page 500 qui affichera les infos
            return "Error-500";
        }
    }

    /**
     * Fonction envoyant un mail avec les informations sur l'erreur reçue par
     * l'utilisateur
     * 
     * @param request
     *            requête http transmise par le client
     */
    private void sendErrorMail( HttpServletRequest request ) {

        String email = "technique@pagessante.fr";
        String emailtechnique = "";
        String host = "127.0.0.1";
        String port = "25";
        String login = "";
        String password = "";
        String url = "http://pagessante/";

        // The Servlet spec guarantees this attribute will be available
        Throwable exception = (Throwable) request.getAttribute( "javax.servlet.error.exception" );
        Integer statusCode = (Integer) request.getAttribute( "javax.servlet.error.status_code" );
        String servletName = (String) request.getAttribute( "javax.servlet.error.servlet_name" );
        if ( servletName == null ) {
            servletName = "Unknown";
        }
        String requestUri = (String) request.getAttribute( "javax.servlet.error.request_uri" );
        if ( requestUri == null ) {
            requestUri = "Unknown";
        }

        // on récupère les infos de mail
        String webinfPath = request.getServletContext().getRealPath( "/WEB-INF" );
        Properties propPgst = new Properties();
        try {
            propPgst.load( new FileInputStream( webinfPath + "/pagessante.properties" ) );
            email = propPgst.getProperty( "mail.from" );
            emailtechnique = propPgst.getProperty( "contacttechnique.mail" );
            host = propPgst.getProperty( "mail.smtp.host" );
            port = propPgst.getProperty( "mail.smtp.port" );
            login = propPgst.getProperty( "mail.smtp.login" );
            password = propPgst.getProperty( "mail.smtp.password" );
            url = propPgst.getProperty( "pagessante.url" );
        } catch ( FileNotFoundException e ) {
            ErrorHandlerController.logger.error( "Une erreur s'est produite lors de la lecture des properties : "
                    + e.getMessage() );
        } catch ( IOException e ) {
            ErrorHandlerController.logger.error( "Une erreur s'est produite lors de la lecture des properties : "
                    + e.getMessage() );
        }

        // on rédige le message
        String msg = "<html><body>";
        msg += "Une erreur s'est produite sur " + url + "</br></br>";
        msg += "<h2>Informations sur l'erreur :</h2>";
        msg += "Servlet Name: " + servletName + "</br></br>";
        msg += "Exception Type: " + exception.getClass().getName() + "</br></br>";
        msg += "The request URI: " + requestUri + "</br></br>";
        msg += "The Status Code: " + statusCode + "</br></br>";
        msg += "The exception message: " + exception.toString();
        msg += "</body></html>";

        // on envoi le mail
        SendMail sendMail;
        try {
            sendMail = new SendMail( email, host, port, login, password );
            sendMail.envoyerHtml( "Erreur serveur", msg, emailtechnique );
        } catch ( SendMailException e ) {
            ErrorHandlerController.logger.error( "Erreur d'envoi du mail, cause: " + e );
        }

        ErrorHandlerController.logger.info( "Message erreur relevé et envoyé." );
    }

}
