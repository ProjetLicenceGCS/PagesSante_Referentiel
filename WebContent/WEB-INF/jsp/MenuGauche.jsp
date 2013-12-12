<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<div class="menu">

<div class="menu_haut">&nbsp;</div>

<div class="menu_milieu">
	<div id="menu_recherche" class="blocMenu">
		<div class="MenuTitre">Recherche</div>
		<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/rechercheprofessionnel" />" >Rechercher un professionnel</a></div>
		<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/rechercheetablissement" />" >Rechercher un établissement ou &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; une structure</a></div>
	</div>

	<c:if test="${session.idprofil>0}">
		<div id="menu_gestion" class="blocMenu">
			<div class="MenuTitre">Gestion des données</div>
			<c:choose>
				<c:when test="${session.idprofil == 1 || session.idprofil == 2 || session.idprofil == 3}">
					<c:if test="${!empty session.structuresGerees}">
						<div>
							<c:choose>
								<c:when test="${session.structuresGerees.size() == 1}">
									<img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/structure?idstructure=${session.structuresGerees[0]}" />" >Ma structure</a>
								</c:when>
								<c:otherwise>	
									<img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" id="menustructure" onclick="afficheMesStructures()" href="#" >Mes structures</a>
									
									<span id="messtructures" class="sousMenu" >
										<c:forEach  items="${session.structuresGerees}" var="structure" varStatus="status" >
											<img class="pucesousmenu" src="<c:url value="/images/fleche-menu-gauche.png" />" />&nbsp;
											<a class="LienSousMenu" href="<c:url value="${requete.servletPath}/structure?idstructure=${structure}" />" title="${session.libstructuresGerees[status.index]}" >
												<c:choose>												
													<c:when test="${fn:length(session.libstructuresGerees[status.index]) < 28}">
														<c:out value="${session.libstructuresGerees[status.index]}" />
													</c:when>
													<c:otherwise>
														<c:out value="${fn:substring(session.libstructuresGerees[status.index],0,25)}..." />
													</c:otherwise>
												</c:choose>												
												<br />												
											</a>
										</c:forEach>
									</span>
								</c:otherwise>
							</c:choose>							
						</div>
					</c:if>
					<c:if test="${!empty session.sitesGeres}">
						<div>
							<c:choose>
								<c:when test="${session.sitesGeres.size() == 1}">
									<img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/site?idsite=${session.sitesGeres[0]}" />" >Mon site</a>
								</c:when>
								<c:otherwise>									
									<img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" id="menusite" onclick="afficheMesSites()" href="#" >Mes sites</a>
									
									<span id="messites" class="sousMenu" >
										<c:forEach  items="${session.sitesGeres}" var="site" varStatus="status" >
											<img class="pucesousmenu" src="<c:url value="/images/fleche-menu-gauche.png" />" />&nbsp;
											<a class="LienSousMenu" href="<c:url value="${requete.servletPath}/site?idsite=${site}" />" title="${session.libsitesGeres[status.index]}" >
												<c:choose>												
													<c:when test="${fn:length(session.libsitesGeres[status.index]) < 28}">
														<c:out value="${session.libsitesGeres[status.index]}" />
													</c:when>
													<c:otherwise>
														<c:out value="${fn:substring(session.libsitesGeres[status.index],0,25)}..." />
													</c:otherwise>
												</c:choose>												
												<br />
											</a>
										</c:forEach>
									</span>
								</c:otherwise>
							</c:choose>							
						</div>
						
					</c:if>
					<c:if test="${!empty session.elementsGeres}">
						<c:choose>
								<c:when test="${session.elementsGeres.size() == 1}">
									<img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/element?idelement=${session.elementsGeres[0]}" />" >Mon élement</a>
								</c:when>
								<c:otherwise>									
									<img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" id="menuelement" onclick="afficheMesElements()" href="#" >Mes éléments</a>
									
									<span id="meselements" class="sousMenu" >
										<c:forEach  items="${session.elementsGeres}" var="element" varStatus="status" >
											<img class="pucesousmenu" src="<c:url value="/images/fleche-menu-gauche.png" />" />&nbsp;
											<a class="LienSousMenu" href="<c:url value="${requete.servletPath}/element?idelement=${element}" />" title="${session.libelementsGeres[status.index]}" >
												<c:choose>												
													<c:when test="${fn:length(session.libelementsGeres[status.index]) < 28}">
														<c:out value="${session.libelementsGeres[status.index]}" />
													</c:when>
													<c:otherwise>
														<c:out value="${fn:substring(session.libelementsGeres[status.index],0,25)}..." />
													</c:otherwise>
												</c:choose>												
												<br />
											</a>
										</c:forEach>
									</span>
								</c:otherwise>
							</c:choose>
						
					</c:if>
				</c:when>
				<c:otherwise>
					<c:choose>
					<c:when test="${session.idprofil == 4}">
						<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/gestionprofils" />" >Gestion des profils</a></div>
						<div>
							<img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" id="gestiontableref" onclick="afficheTablesRef()" href="#" >Gestion des tables référentielles</a>
									
							<span id="tablesref" class="sousMenu" >								
									<img class="pucesousmenu" src="<c:url value="/images/fleche-menu-gauche.png" />" />&nbsp;
									<a class="LienSousMenu" href="<c:url value="${requete.servletPath}/discipline" />" title="Référentiel des disciplines" >
										Disciplines											
									</a>
									<br />
									
									<img class="pucesousmenu" src="<c:url value="/images/fleche-menu-gauche.png" />" />&nbsp;
									<a class="LienSousMenu" href="<c:url value="${requete.servletPath}/specialiteelement" />" title="Référentiel des spécialités pour les éléments" >
										Spécialités des éléments										
									</a>
									<br />
									
									<img class="pucesousmenu" src="<c:url value="/images/fleche-menu-gauche.png" />" />&nbsp;
									<a class="LienSousMenu" href="<c:url value="${requete.servletPath}/dictionnaireoffressoins" />" title="Référentiel des offres de soins" >
										Dictionnaire des offres de soins																						
									</a>
									<br />
							</span>
						</div>
					</c:when>
					<c:otherwise>
						<c:choose>
							<c:when test="${session.idprofil == 6 || (session.idprofil == 5 && !empty session.groupesArsGeres)}">					
								<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/recherchestructure" />" >Gérer les structures juridiques</a></div>
								<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/recherchesite" />" >Gérer les sites géographiques</a></div>
								<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/rechercheorganisation" />" >Gérer les organisations</a></div>
								<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/recherchefonction" />" >Gérer les fonctions/missions</a></div>
								<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/recherchepersonne" />" >Gérer les personnes</a></div>
								<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/recherchegroupe" />" >Gérer les groupes</a></div>
							</c:when>
							<c:otherwise>
								<c:if test="${session.idprofil == 5}">
									<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/recherchegroupe" />" >Gérer les groupes</a></div>
								</c:if>
							</c:otherwise>
						</c:choose>
					</c:otherwise>
					</c:choose>
				</c:otherwise>
			</c:choose>
		</div>
	</c:if>

	<div id="menu_recherche" class="blocMenu">		
		<div class="MenuTitre">Informations</div>
			<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/modeemploi" />" >Mode d'emploi</a></div>
			<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/infoutiles" />" >Informations utiles</a></div>
			<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/contact" />" >Contact</a></div>	
			<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/infolegales" />" >Informations légales</a></div>
			
			<c:if test="${session.idprofil != 0}">	
				<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/volumetrie" />" >Volumétrie</a></div>
			</c:if>
						
			<c:if test="${session.idprofil == 5 || session.idprofil == 6}">				
				<div><img class="pucemenu" src="<c:url value="/images/puce_menu_gauche.png" />" />&nbsp;<a class="MenuDeselectionne" href="<c:url value="${requete.servletPath}/dernieremiseajour" />" onclick="chargementDerniereMAJ()" >Dernières mises à jour</a></div>
			</c:if>
		</div>
	</div>
	
	<div class="menu_bas">
		&nbsp;
	</div>
</div>

<div id="chargementresultat"></div>

<script>
	$("#chargementresultat").hide();
	$("#messtructures").hide();
	$("#messites").hide();
	$("#meselements").hide();
	$("#tablesref").hide();
</script>