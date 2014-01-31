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
            Spécialité élément
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

            <table id="table-disciplineref" style="width: 100%;" class="TableauLignesAutomatique">
                <thead>
                    <tr>
                        <td><p>Description</p></td>
                        <td></td>
                        <td><img onclick="addDisipline();" src="<c:url value="/images/icone_action_ajouter_creer.png" />"</td>
                    </tr>
                </thead>

                <c:forEach items="${disciplineRef}" var="disciplinesRef" varStatus="status">
                    <tr id="${disciplinesRef.iddisciplineref}" > 
                        <td><p title="${disciplinesRef.descriptionNorm}">${disciplinesRef.description}</p></td>
                        <td style="width: 15px;"><img  style="display: block; margin-left: auto;  margin-right: auto;" src="<c:url value="/images/croix.png"/>" onclick="disciplineRefDelete('${disciplinesRef.iddisciplineref}', this.parentNode);"  /></td>
                        <td style="width: 15px;"><img style="display: block; margin-left: auto;  margin-right: auto;" src="<c:url value="/images/icone_action_modifier.png" />"  onclick="updateDisciplineRef(this.parentNode);"/></td>
                    </tr>
                </c:forEach>
            </table> 
        </div>
        <div id="dialog-confirm" title="Un élément va être supprimer" style=" display: none;">
            <p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>
                Êtes vous sûr de voulour le supprimer ?</p>
        </div>
        <div id="dialog-ajouter" title="Ajouter une discipline" style=" display: none; ">
            <table style="font-size: 10px;">
                <tr><td>Description </td><td><input id="description" type="text"  ></input></td></tr>
                <tr><td>Spécialitées </td><td><input id="spécialite" type="button" onclick="getDialogForAdd();"value="Faite votre séléction"></input><td><div id="specialtiteNB" style="position: absolute;"></div></td></td></tr>
            </table>
        </div>           
        <div id="dialog-modifier" title="Modifier une discipline" style=" display: none; ">
            <table style="font-size: 10px;">
                <tr><td>Description </td><td><input id="descriptionMODIFIER" type="text"  ></input></td></tr>
                <tr><td>Spécialitées </td><td><input id="spécialite" type="button" onclick="getDialogForUpdateDiscipline();"value="Faite votre séléction"></input><td><div id="specialtiteNBMODIFIER" style="position: absolute;"></div></td></td></tr>
            </table>
        </div>  
        <div id="inner"></div>
        <jsp:include page="scriptToInclude.jsp" />
        <script type="text/javascript" src="<c:url value="/scripts/damienC-disiplineRef.js"/>"></script>
    </body>
</html>