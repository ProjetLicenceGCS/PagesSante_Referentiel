<%-- 
    Document   : AjaxSelectManySpecialites
    Created on : 28 janv. 2014, 09:57:40
    Author     : Damien Chesneau <contact@damienchesneau.fr>
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="dialog-selectManySpecialite" title="Spécialitées" style=" display: none;  ">
    <table id="selectMany" style="width: 100%;" class="TableauLignesAutomatique">
                <thead>
                    <tr >
                        <td><p>Description</p></td>
                        <td></td>
                    </tr>
                </thead>
                <c:forEach  items="${specialiteElementRef}" var="specialiteElementRef" varStatus="status">
                    <tr id="${specialiteElementRef.idspecialiteelementref}" >
                        <td><p title="${specialiteElementRef.descriptionNorm}">${specialiteElementRef.description}</p></td>
                        <td style="width: 15px;"><input id="spec${specialiteElementRef.idspecialiteelementref}" value="${specialiteElementRef.idspecialiteelementref}" onclick="setSelectedElementsForDisipline(this.value);" type="checkbox"   style="display: block; margin-left: auto;  margin-right: auto;" /></td>
                    </tr>
                </c:forEach>
            </table>
                    <!-- onclick="setClick('');"-->
    <!--script>
        function isInTab(id) {
            for (i = 0; i < dicoOffreSoin.length; i++) {
                if (dicoOffreSoin[i] == id) {
                    return true;
                }
            }
        }
    </script-->
</div>