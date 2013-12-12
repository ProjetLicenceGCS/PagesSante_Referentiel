package com.emosist.pagessante.utils;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.log4j.Logger;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.w3c.dom.Document;
import org.xhtmlrenderer.pdf.ITextRenderer;
import org.xml.sax.SAXException;

import com.lowagie.text.DocumentException;
import com.lowagie.text.pdf.PdfAction;
import com.lowagie.text.pdf.PdfReader;
import com.lowagie.text.pdf.PdfStamper;
import com.lowagie.text.pdf.PdfWriter;

public abstract class Traitements {

    private static final Logger logger = Logger.getLogger( Traitements.class );

    /**
     * Lance le download d'un CSV
     * 
     * @param request
     * @param response
     * @param contenu
     *            Contenu du CSV
     * @param filename
     *            Nom du fichier CSV
     * @throws javax.servlet.ServletException
     * @throws java.io.IOException
     */
    public static void startDownloadCSV( HttpServletRequest request, HttpServletResponse response, String contenu,
            String filename )
            throws javax.servlet.ServletException, java.io.IOException {

        StringBuffer sb = new StringBuffer( contenu );
        InputStream in = new ByteArrayInputStream( sb.toString().getBytes( "iso-8859-1" ) );
        ServletOutputStream out = response.getOutputStream();

        response.setContentType( "application/vnd.ms-excel" );
        response.setHeader( "Content-disposition", "attachment; filename=" + filename );

        byte[] outputByte = new byte[4096];
        int bytesRead = 0;
        // copy binary contect to output stream
        while ( ( bytesRead = in.read( outputByte, 0, outputByte.length ) ) != -1 )
        {
            out.write( outputByte, 0, bytesRead );
        }
        in.close();
        out.flush();
        out.close();
    }

    /**
     * Lance la création et le download d'un Pdf
     * 
     * @param xhtml
     *            XHTML définissant le contenu du Pdf
     * @param response
     * @throws IOException
     * @throws DocumentException
     */
    public static void startDownloadPdf( StringBuffer xhtml, HttpServletResponse response ) throws IOException,
            DocumentException {

        try {

            DocumentBuilder builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();

            InputStream in = new ByteArrayInputStream( xhtml.toString().getBytes( "UTF-8" ) );

            Document document = builder.parse( in );

            DateTime dt = new DateTime();
            DateTimeFormatter fmt = DateTimeFormat.forPattern( "yyyyMMddHHmmss" );
            String dateheure = fmt.print( dt );

            String filename = "listegroupe-" + dateheure + ".pdf";

            response.setContentType( "application/pdf" );
            response.setHeader( "Content-disposition", "attachment; filename=" + filename );

            OutputStream os = response.getOutputStream();

            ITextRenderer renderer = new ITextRenderer();

            renderer.setDocument( document, null );
            renderer.layout();
            renderer.createPDF( os );

            os.close();

        } catch ( SAXException e ) {
            logger.error( "Une erreur s'est produite lors de la création d'aperçu d'impression Pdf : "
                    + e.getLocalizedMessage() );
        } catch ( ParserConfigurationException e ) {
            logger.error( "Une erreur s'est produite lors de la création d'aperçu d'impression Pdf : "
                    + e.getLocalizedMessage() );
        } catch ( UnsupportedEncodingException e ) {
            logger.error( "Une erreur s'est produite lors de la création d'aperçu d'impression Pdf : "
                    + e.getLocalizedMessage() );
        }

    }

    /**
     * Prépare l'aperçu pour impression d'un Pdf
     * 
     * @param xhtml
     *            XHTML définissant le contenu du Pdf
     * @param response
     * @throws IOException
     * @throws DocumentException
     */
    public static void apercuImpression( StringBuffer xhtml, HttpServletResponse response ) throws IOException,
            DocumentException {

        try {

            DocumentBuilder builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();

            InputStream in = new ByteArrayInputStream( xhtml.toString().getBytes( "UTF-8" ) );

            Document document = builder.parse( in );

            OutputStream os = new ByteArrayOutputStream();

            ITextRenderer renderer = new ITextRenderer();

            renderer.setDocument( document, null );
            renderer.layout();
            renderer.createPDF( os );

            os.close();

            PdfReader reader = new PdfReader( ( (ByteArrayOutputStream) os ).toByteArray() );
            OutputStream out = new ByteArrayOutputStream();
            PdfStamper stamper = new PdfStamper( reader, out );
            stamper.setPageAction( PdfWriter.PAGE_OPEN, new PdfAction( PdfAction.PRINTDIALOG ), 1 );
            stamper.close();

            response.getOutputStream().write( ( (ByteArrayOutputStream) out ).toByteArray() );

        } catch ( SAXException e ) {
            logger.error( "Une erreur s'est produite lors de la création du download Pdf : "
                    + e.getLocalizedMessage() );
        } catch ( ParserConfigurationException e ) {
            logger.error( "Une erreur s'est produite lors de la création du download Pdf : "
                    + e.getLocalizedMessage() );
        } catch ( UnsupportedEncodingException e ) {
            logger.error( "Une erreur s'est produite lors de la création du download Pdf : "
                    + e.getLocalizedMessage() );
        }

    }

}
