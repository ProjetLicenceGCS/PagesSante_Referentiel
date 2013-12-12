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
            Gestion des données / Gestion des tables référentielles / Dictionnaire des offres de soin
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
            <table id="dictionnaireOffreDeSoin" class="TableauLignesAutomatique">
                <thead>
                    <tr>
                        <td><p>Intitulé</p></td>
                        <td>Description</td>
                        <td>Mots clés</td>
                        <td></td>
                        <td><img onclick="addOffreDeSoin();" src="<c:url value="/images/icone_action_ajouter_creer.png" />"</td>
                    </tr>
                </thead>
                <c:forEach  items="${dictonnaireOffreSoin}" var="dictonnaireOffreSoin" varStatus="status">
                    <tr id="${dictonnaireOffreSoin.iddictoffressoins}" >
                        <td><p title="${dictonnaireOffreSoin.intituleNorm}">${dictonnaireOffreSoin.intitule}</p></td>
                        <td><p>${dictonnaireOffreSoin.description}</p></td>
                        <td><p>${dictonnaireOffreSoin.motscles}</p></td>
                        <td style="width: 15px;"><img title="Supprimer"  style="display: block; margin-left: auto;  margin-right: auto;" src="<c:url value="/images/croix.png"/>" onclick="dictionnaireOffreDeSoinDelete('${dictonnaireOffreSoin.iddictoffressoins}', this.parentNode);" /></td>
                        <td style="width: 15px;"><img title="Modifier" style="display: block; margin-left: auto;  margin-right: auto;" src="<c:url value="/images/icone_action_modifier.png" />" onclick="updateDictionnaireOffreDeSoinRef(this.parentNode);"/></td>
                    </tr>
                </c:forEach>
            </table>
            <div id="dialog-ajouter" title="Ajouter une offre de soin" style=" display: none; ">
                <p id="alertADD"></p>
                <table style="font-size: 10px;">
                    <tr><td>Intitulé </td><td><input id="addIntitule" type="text"  ></input></td></tr>
                    <tr><td>Intitulé normalisé </td><td><input id="addIntituleNormalise" type="text"  ></input></td></tr>
                    <tr><td>Description </td><td><textarea id="addDescription" type="text"> </textarea></td></tr>
                    <tr><td>Mots clés </td><td><input id="addMotsCles" title="Veuillez séparer chaque mot par une virgule." type="text"  ></input></td></tr>
                    <tr><td>Spécialite </td><td><input id="addSpecialite" type="button" onclick="showSelectOneSpecialite();" value="Faite votre séléction" /></td><td><div id="addSpecialitePrinter" style="position: relative;"></div></td></tr>
                </table>
            </div> 
            <div id="dialog-modifier" title="Mocdifier une offre de soin" style=" display: none; ">
                <p id="alertUP"></p>
                <table style="font-size: 10px;">
                    <tr><td>Intitulé </td><td><input id="upIntitule" type="text"  ></input></td></tr>
                    <tr><td>Intitulé normalisé </td><td><input id="upIntituleNormalise" type="text"  ></input></td></tr>
                    <tr><td>Description </td><td><textarea id="upDescription" type="text"> </textarea></td></tr>
                    <tr><td>Mots clés </td><td><input id="upMotsCles" title="Veuillez séparer chaque mot par une virgule." type="text"  ></input></td></tr>
                    <tr><td>Spécialite </td><td><input id="upSpecialite" type="button" onclick="showSelectOneSpecialite();" value="Faite votre séléction" /></td><td><div id="upSpecialitePrinter" style="position: relative;"></div></td></tr>
                </table>
            </div> 
        </div>
        <div id="dialog-confirm" title="Un élément va être supprimer" style=" display: none;">
            <p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>
                Êtes vous sûr de voulour le supprimer ?</p>
        </div>
        <div id="inner"></div>
        <jsp:include page="scriptToInclude.jsp" />
        <script type="text/javascript" src="<c:url value="/scripts/damienC-DictionnaireOffreSoin.js"/>"></script>
    </body>
</html>
