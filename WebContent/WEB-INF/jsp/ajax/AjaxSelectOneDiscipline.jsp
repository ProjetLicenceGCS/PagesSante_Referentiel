<%-- 
    Document   : AjaxSelectOneDiscipline
    Created on : 13 déc. 2013, 10:29:29
    Author     : Damien Chesneau <contact@damienchesneau.fr>
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="dialog-disciplineRef" title="Dictionnaire des offres de soins" style=" display: none;  ">
    <table id="d" style="width: 100%;" class="TableauLignesAutomatique">
        <thead>
            <tr style="font-size: 10px;">
                <td>Intitule</td>
                <td></td>
            </tr>
        </thead>  
        <c:forEach  items="${disciplineRef}" var="disciplineRef" varStatus="status">
            <tr id="${disciplineRef.iddisciplineref}" >
                <td><p title="${disciplineRef.descriptionNorm}">${disciplineRef.description}</p></td>
                <td><input id="discipline${disciplineRef.iddisciplineref}" name="group" type="radio" value="${disciplineRef.iddisciplineref}" onclick="setDisciplineSelected(this.value)" /></td>
            </tr>
        </c:forEach>
    </table>
</div>
