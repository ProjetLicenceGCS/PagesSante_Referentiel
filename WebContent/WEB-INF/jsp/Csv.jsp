<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr"
      xmlns:h="http://xmlns.jcp.org/jsf/html"
      xmlns:f="http://xmlns.jcp.org/jsf/core">
    <jsp:include page="head.jsp" />
    <body>
        <div id="calque">
                
            <jsp:include page="Bandeau.jsp" />
          
            <div class="chemin" id="chemin">
                Gestion des données / Gestion des tables référentielles / CSV
            </div>
            <jsp:include page="MenuGauche.jsp" />
            <div class="contenu">
                <div id="alert" style="display: none;
                     border: 1px;
                     background-color: red;
                     height: 30px;">
                    <div style="font-size: 25px; color: white;">Une erreur est survenu. Veuillez réessayer plus tard.<a style="float: right; font-size: 25px;"onclick='$("#alert").hide();'>X&nbsp;</a>
                    </div>
                </div>
                <table id="csvExport" style="width: 100%;" class="TableauLignesAutomatique">
                    <thead>
                        <tr style="height: 20px;">
                            <td>Exportez votre fichier CSV</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tr>
                        <td>Quelle entitée voulez-vous exporter ? </td>
                        <td><input type="hidden"/></td>
                    </tr>
                    <tr>
                        <td>Discipline</td>
                        <td><input type="checkbox" id="DisciplineRef" onclick="onClickInCheckBox(this);" value="DisciplineRef"></input></td>
                    </tr>
                    <tr>
                        <td>Specialitée</td>
                        <td><input type="checkbox" id="SpecialiteElementRef" onclick="onClickInCheckBox(this);" value="SpecialiteElementRef"></input></td>
                    </tr>
                    <tr>
                        <td>Offres de soins</td>
                        <td><input type="checkbox" id="DictionnaireOffresSoins" onclick="onClickInCheckBox(this);" value="DictionnaireOffresSoins"></input></td>
                    </tr>
                    <tr>
                        <td>Exporter la base de donnée sous le format CSV</td>
                        <td><button onclick="telechargerCSV();">Télécharger</button></td>
                    </tr>
                </table>
                <table id="csvImport" style="width: 100%;" class="TableauLignesAutomatique">
                    <thead>
                        <tr style="height: 20px;">
                            <td>Importer votre fichier CSV</td>
                            <td></td>
                        </tr>
                    </thead>
                    <form id="formChargerCSV" action="./csv/charger" method="POST" enctype="multipart/form-data">
                        <tr>
                            <td>Importer un fichier CSV</td>
                            <td><input type="file" id="fichier" name="fichier" /><input type="button"  onclick="importCSVFile();" value="Importer" /></td>
                        </tr>
                    </form>
                </table> 
                <jsp:include page="scriptToInclude.jsp" />
                <script src="<c:url value="/scripts/damienC-csv.js"/>" type="text/javascript" ></script>
                <script src="<c:url value="/scripts/alexandreM-csvChargement.js"/>" type="text/javascript" ></script>
                <script src="<c:url value="/scripts/jquery.form.js"/>" type="text/javascript" ></script>
                
            </div>
                </div>
                <div id="chargement" style="
                     display: none;  
                     width : 0%; 
                     margin : auto; ">

                    <img src="<c:url value="/images/chargement.gif"/>"/>
                </div>

    </body>
</html>