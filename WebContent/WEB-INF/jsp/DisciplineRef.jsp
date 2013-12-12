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

          <table id="disciplineref" style="width: 100%;line-height: 1px;" class="TableauLignesAutomatique">
                <thead>
                    <tr>
                        <td><p style="text-align: center;">Description</p></td>
                        <td></td>
                        <td><img  src="<c:url value="/images/icone_action_ajouter_creer.png" />"</td>
                    </tr>
                </thead>

                <c:forEach items="${disciplineRef}" var="disciplinesRef" varStatus="status">
                    <tr id="${disciplinesRef.iddisciplineref}" > 
                        <td><p title="${disciplinesRef.descriptionNorm}">${disciplinesRef.description}</p></td>
                        <td style="width: 15px;"><img  style="display: block; margin-left: auto;  margin-right: auto;" src="<c:url value="/images/croix.png"/>"  /></td>
                        <td style="width: 15px;"><img style="display: block; margin-left: auto;  margin-right: auto;" src="<c:url value="/images/icone_action_modifier.png" />" /></td>
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
                <tr><td>Description normalisé </td><td><input id="descriptionNormalise" type="text"  ></input></td></tr>
            </table>
        </div>           
        <div id="dialog-modifier" title="Modifier une discipline" style=" display: none; ">
            <table style="font-size: 10px;">
                <tr><td>Description </td><td><input id="updescription" type="text"  ></input></td></tr>
                <tr><td>Description normalisé </td><td><input id="updescriptionNormalise" type="text"  ></input></td></tr>
            </table>
        </div>
        <div id="inner"></div>
        <jsp:include page="scriptToInclude.jsp" />
    </body>
</html>