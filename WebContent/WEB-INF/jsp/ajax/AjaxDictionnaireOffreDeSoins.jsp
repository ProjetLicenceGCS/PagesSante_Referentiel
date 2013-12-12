<%-- 
    Document   : AjaxDictionnaireOffreDeSoins
    Created on : 5 déc. 2013, 17:36:44
    Author     : damien
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="dialog-dictionnaireoffressoins" title="Dictionnaire des offres de soins" style=" display: none;  ">
    <table id="Dialog" style="width: 100%;" class="TableauLignesAutomatique">
        <thead >
            <tr>
                <td>Intitule</td>
                <td></td>
            </tr>
        </thead>        
        <c:forEach  items="${dictonnaireOffreSoin}" var="dictonnaireOffreSoin" varStatus="status">
            <tr id="" >
                <td><p title="${dictonnaireOffreSoin.intituleNorm}">${dictonnaireOffreSoin.intitule}</p></td>
                <td><input id="dico${dictonnaireOffreSoin.iddictoffressoins}" oncanplay=""  type="checkbox" value="${dictonnaireOffreSoin.iddictoffressoins}" onclick="setSelectedElements(this.value)" /></td>
            </tr>
        </c:forEach>
    </table>
    <script>
        function isInTab(id) {
            for (i = 0; i < dicoOffreSoin.length; i++) {
                if (dicoOffreSoin[i] == id) {
                    return true;
                }
            }
        }
    </script>
</div>