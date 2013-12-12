<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<div id="title" class="pgContenu">
	<div>
		<a href="<c:url value="${requete.servletPath}/accueil" />">
			<c:choose>
			<c:when test="${session.idprofil == 5}">
				<img id="image_bandeau" src="<c:url value='/images/bandeau_ars.jpg' />"/>
			</c:when>
			<c:otherwise>
				<img id="image_bandeau" src="<c:url value='/images/bandeau_fc_sante.png' />"/>
			</c:otherwise>
			</c:choose>
		</a>
	</div>
	<div id="login_quitter">	
		<c:choose>
		<c:when test="${session.nom.equals('') && session.prenom.equals('') || session.nom == null && session.prenom == null}">
			<c:choose>
			<c:when test="${session.login.equals('')}">
				<span id="utilisateur" class="logintext">Public</span>	
			</c:when>
			<c:otherwise>
				<span id="utilisateur" class="logintext"><c:out value="${session.login}"/></span>	
			</c:otherwise>		
			</c:choose>
		</c:when>
		<c:otherwise>
			<a href="<c:url value='${requete.servletPath}/personne?idpersonne=${session.idpersonne}' />" >
				<span id="utilisateur" class="logintext"><c:out value="${ session.nom }" />  <c:out value="${ session.prenom }"/></span>	
			</a>
		</c:otherwise>		
		</c:choose>		
		&nbsp;&nbsp;
		<span id="btnquitter"><input type="button" class="btnquitter" name="./dsdstop" title="Quitter Annuaire" onclick="quit();" /></span>
	</div>
</div>
<div id="bandeau" class="pgContenu">
	<table id="table_bandeau">
		<tr>
			<td class="bandeau_text" align="center">
				<a id="v_toggle" class="bandeau_text_lien" href="#" onclick="toggle_visibility('frameset_bandeau','title')">Afficher / Masquer</a>
			</td>
			<td class="bandeau_text" align="center">
				<img src="<c:url value='/images/separateur_menu_horizontal.png' />"/>
			</td>
			<td class="bandeau_text" align="center">
				<a class="bandeau_text_lien" href="/PagesSante_Referentiel${requete.servletPath}/accueil" title="Ecran d'accueil">
					<img class="img_lien" src="<c:url value='/images/icone_accueil.png' />"/>&nbsp;Accueil
				</a>
			</td>
			<td class="bandeau_text" align="center">
				<img src="<c:url value='/images/separateur_menu_horizontal.png' />"/>
			</td>
			<td class="bandeau_text" align="center">
				<a class="bandeau_text_lien" href="<c:url value='${requete.servletPath}/modeemploi' />" title="Mode d'emploi">
					<img class="img_lien" src="<c:url value='/images/icone_aide.png' />"/>&nbsp;Aide
				</a>
			</td>
			<td class="bandeau_text" align="center">
				<img src="<c:url value='/images/separateur_menu_horizontal.png' />"/>
			</td>
			<td class="bandeau_text" align="right">
				Recherche rapide&nbsp;<input type="text" class="bandeau_text_recherche" id="recherchePJ_QuiQuoi" name="recherchePJ_QuiQuoi" value="Qui ? / Quoi ?" onclick="cleanField('recherchePJ_QuiQuoi','Qui ? / Quoi ?')" onblur="restoreField('recherchePJ_QuiQuoi','Qui ? / Quoi ?');" >&nbsp;
				<input type="text" class="bandeau_text_recherche" id="recherchePJ_Ou" name="recherchePJ_Ou" value="Où ?" onclick="cleanField('recherchePJ_Ou','Où ?')" onblur="restoreField('recherchePJ_Ou','Où ?')" >&nbsp;
				<a id="go_recherche" href="#" title="Lancer la recherche"  class="bandeau_text_lien"><img id="recherchePJ_BtnRecherche" name="recherchePJ_BtnRecherche" class="imgrecherchePJ" src="<c:url value="/images/bouton_rechercher.png" />" /></a>
				<span id="taillespinchargement">
					<span id="spinchargement"></span>&nbsp;
				</span>
			</td>
		</tr>
	</table>
	
</div>

<script type="text/javascript">
	$("#spinchargement").hide();
</script>

