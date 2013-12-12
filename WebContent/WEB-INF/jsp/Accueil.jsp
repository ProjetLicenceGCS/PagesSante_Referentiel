<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta http-equiv="Content-Language" content="fr-FR"/>
	<meta http-equiv="Window-target" content="_top"/>
	<meta name="description" content="Annuaire des acteurs de santé de la région Franche-Comté"/>
	<meta name="keywords" content="PagesSanté, annuaire, acteurs de santé, Franche-Comté"/>
	<meta name="Copyright" content="2009-2013 GCS EMOSIST-fc, Inc. All rights reserved."/>
	<meta name="robots" content="all"/>
	<meta name="googlebot" content="noarchive"/>
	<title>Pages Santé</title>
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/css/affichagePS.css"/>"/>
	<link rel="stylesheet" type="text/css" href="<c:url value="/css/pagesSante.css"/>"/>
	<link rel="stylesheet" href="<c:url value="/css/jquery-ui-1.10.2.custom.css" />" />	
	
	<!-- instanciation variable indiquant le servlet utilisé -->
	<script type="text/javascript">
		var servletPath = '${requete.servletPath}';
	</script>
	<script type="text/javascript" src="<c:url value="/scripts/raphael.js" />"></script>
	<script type="text/javascript" src="<c:url value="/scripts/general.js" />"></script>
	<script type="text/javascript" src="<c:url value="/scripts/jquery-1.9.1.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/scripts/jquery-ui.js"/>"></script>
</head>
<body>

<jsp:include page="Bandeau.jsp" />

<div class="chemin" id="chemin">
	Accueil
</div>

<jsp:include page="MenuGauche.jsp" />

<div class="contenu">
						
	<div id="detail">
		<table>
			<tr>
				<td><img src="<c:url value="/images/carte_franche_compte.png" />"/></td>
				<td>
					<p class="accueilTitreText">Bienvenue dans cet espace d&eacute;di&eacute; aux acteurs de la sant&eacute;.</p>
					<p class="accueilText">
						<b>PagesSant&eacute;</b> est un annuaire qui regroupe l&#146;ensemble des professionnels, des structures et des activit&eacute;s de sant&eacute; de notre r&eacute;gion. Divers &eacute;l&eacute;ments de description et de localisations sont disponibles pour tous les noms r&eacute;pertori&eacute;s.
					</p>
					<p class="accueilText">
					   &Agrave; l&#146;initiative de l&#146;Agence R&eacute;gionale de Sant&eacute; de Franche-Comt&eacute;, il est destin&eacute; aux acteurs de la sant&eacute; et au public.
					</p>
					<p class="accueilText">
						Les informations sont visibles selon les droits associ&eacute;s &agrave; votre qualit&eacute; d&#146;acteur de sant&eacute; ou d&#146;acteur public.
					</p>
				</td>
			</tr>
			<tr><td colspan="2"><img border="1" src="<c:url value="/images/schema_accueil_avec_textes.png" />" width="734" height="588" style="margin-left:15px; margin-right:15px; border-style:solid; border-color:#cccccc;"/></td></tr>
		</table>
	</div>
</div>

<div id="dialog"></div>

</body>

<jsp:include page="Footer.jsp" />

</html>
