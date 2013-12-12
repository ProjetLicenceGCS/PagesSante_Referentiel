<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<footer>

	<script>
		if (navigator.userAgent.indexOf("MSIE") > -1 || (navigator.userAgent.indexOf("Mozilla") > -1 && navigator.userAgent.indexOf("Firefox") <= -1 && navigator.userAgent.indexOf("Chrome") <= -1) ) {
		    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
			headHTML    += '<link type="text/css" rel="stylesheet" href="<c:url value="/css/PagesSante_IE.css"/>" />';
		
			$("head").html(headHTML);
		}
	</script>

</footer>