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
                    <td>Quelle entité voulez-vous exporter ? </td>
                    <td><input type="hidden"/></td>
                </tr>
                <c:forEach items="${ret.classes}" var="reet"  >
                    <tr>
                    <td>${reet}</td>
                    <td><input type="checkbox" id="${reet}" value="${reet}"></input></td>
                </tr>
                </c:forEach>
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
                <tr>
                    <td>Choissisez votre format de fichier</td>
                    <td>
                        <select>
                            <c:forEach items="${ret.encodage}" var="reet" >
                                <option>${reet}</option>
                            </c:forEach>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Importer un fichier CSV</td>
                    <td><button onclick="chargerCSV();">Ouvrir une boite de sélection</button></td>
                </tr>
            </table> 
            <jsp:include page="scriptToInclude.jsp" />
            <script src="<c:url value="/scripts/damienC-csv.js"/>" type="text/javascript" ></script>
            <script src="<c:url value="/scripts/alexandreM-csvChargement.js"/>" type="text/javascript" ></script>
    </body>
</html>
