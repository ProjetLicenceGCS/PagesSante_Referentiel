<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="dialog-message" title="Messages" style=" display: none;  ">
    <table id="Dialog" style="width: 100%;" class="TableauLignesAutomatique">
        <thead>
            <tr style="line-height: 20px;">
                <td>Message</td>
            </tr>
        </thead>  
        <c:forEach  items="${ret}" var="ret" varStatus="status">
            <tr >
                <td><p>${ret}</p></td>
            </tr>
        </c:forEach>    
    </table>
</div>
