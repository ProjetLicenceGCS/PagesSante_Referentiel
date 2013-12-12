<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" isErrorPage="true" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
	<title>Error 404 - Page Not Found</title>

	<style type="text/css">
		body {background:#cfd9e7; font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px;}
	
		#background {position: relative; top:50px; margin: auto; padding:10px; width:45em; height:20em; background:#517aac; border-style:solid; border-color:#335187; border-width:3px;}
		#position {position: relative; top: 0px; padding:10px; width:45em; height:16em; color:#ffffff;}
	
		a:link {color:#000099; text-decoration:none;}
		a:visited {color:#000066; text-decoration:none;}
		a:hover {color:#000099; text-decoration:underline;}
	
		.h1 {font-size:24px; color:#ffffff; text-align:left; max-width:25em; font-weight:bold; padding-top:15px;}
		.h1 div {text-align:right;}
		h3 {text-align:center; font-size:18px;}
	</style>
</head>
<body>
    <div id="background">
		<div id="position">
			<h1>Error 404 - Ressource non trouvée</h1>
			<div class="h1">La page que vous recherchez semble<div>avoir été déplacée, supprimée ou est inexistante.</div></div>
			
			<ul>
				<li>Vous avez essayé d'atteindre <b>${pageContext.errorData.requestURI}</b> via un lien de <b>${header.host}</b>.</li>	
				<li>Essayez de retourner à la <a href="https://www.fc-sante.fr/annuaire/">page d'accueil</a> et de retrouver la page que vous recherchiez.</li>
			</ul>
			
			<h3>Désolé pour le dérangement</h3>
		</div>	</div>
	
</body>
</html>