<%-- 
    Document   : scriptToInclude
    Created on : 2 déc. 2013, 11:25:57
    Author     : damien
--%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<script type="text/javascript">
    var servletPath = '${requete.servletPath}';
</script>
<script type="text/javascript" src="<c:url value="/scripts/raphael.js" />"></script>
<script type="text/javascript" src="<c:url value="/scripts/general.js" />"></script>
<script type="text/javascript" src="<c:url value="/scripts/jquery-1.9.1.js"/>"></script>
<script type="text/javascript" src="<c:url value="/scripts/jquery-ui.js"/>"></script>

