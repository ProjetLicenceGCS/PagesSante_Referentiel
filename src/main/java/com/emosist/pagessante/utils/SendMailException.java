package com.emosist.pagessante.utils;

/**
 * Class gérant les exception de la Class SendMail
 * 
 * @author GERVAIS Gwenael
 * 
 */
public class SendMailException extends Exception {

    private static final long serialVersionUID = 1L;

    /**
     * Crée une nouvelle instance de SendMailException
     */
    public SendMailException() {
    }

    /**
     * Crée une nouvelle instance de SendMailException
     * 
     * @param message
     *            Le message détaillant exception
     */
    public SendMailException( String message ) {
        super( message );
    }

    /**
     * Crée une nouvelle instance de SendMailException
     * 
     * @param cause
     *            L'exception à l'origine de cette exception
     */
    public SendMailException( Throwable cause ) {
        super( cause );
    }

    /**
     * Crée une nouvelle instance de SendMailException
     * 
     * @param message
     *            Le message détaillant exception
     * @param cause
     *            L'exception à l'origine de cette exception
     */
    public SendMailException( String message, Throwable cause ) {
        super( message, cause );
    }
}
