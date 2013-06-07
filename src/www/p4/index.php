<? include_once($_SERVER['FRAMEWORK_PATH']."/include/segment.php") ?>
<!DOCTYPE html>
<html>
<head>
	<title>Sanofi - Nebenwirkungsmanagement</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=1024; initial-scale=1.0; maximum-scale=1.0;" />

	<? if($_SESSION["dev_includes"]) { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p4/css/lib/seg_<?= $_SESSION["segment"] ?>_include.css" />
		<script type="text/javascript" src="/p4/js/lib/seg_<?= $_SESSION["segment"] ?>_include.js"></script>
	<? } else { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p4/css/seg_<?= $_SESSION["segment"] ?>.css" />
		<script type="text/javascript" src="/p4/js/seg_<?= $_SESSION["segment"] ?>.js"></script>
	<? } ?>

</head>

<body class="i:validdevice">

<div id="navigation">
	<h4 class="home">Home</h4>
	<h4 class="index">Index</h4>
	<h4 class="references">References</h4>
</div>

<div id="display">

	<div id="presentation" class="i:presentation i:sanofiD1">
	
		<div class="slide d1">
			<h1></h1>
			<h2>NW Übersicht</h2>
			<div class="canvas">
				<div class="tax"></div>
				<div class="neu"></div>
				<div class="dia"></div>
				<div class="fat"></div>
				<div class="leb"></div>
			</div>
			<p class="reference"></p>
		</div>

		<div class="slide d2 i:sanofiDlink">
			<h1>Nebenwirkung Taxotere</h1>
			<h2>NW Taxotere</h2>
			<div class="link_front_page"></div>
			<div class="canvas"></div>
			<p class="reference"><a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_Ergebnisse_Tannock.pdf');">Modifiziert nach Tannock IF et al., NEJM 2004;351:1502-1512</a></p>
		</div>

		<div class="slide d3 i:sanofiD3 i:sanofiDlink">
			<h1>Neutropenie</h1>
			<h2>Neutropenie</h2>
			<div class="link_front_page"></div>
			<div class="canvas">
				<div class="top_pop round_link"></div>
				<div class="bottom_pop round_link"></div>
				<div class="pop_area_top"></div>
				<div class="pop_area_bottom"></div>
			</div>
			<p class="reference"></p>
		</div>
		
		<div class="slide d4 i:sanofiD4 i:sanofiDlink">
			<h1>Febrile Neutropenie</h1>
			<h2>Febr. Neutropenie</h2>
			<div class="link_front_page"></div>
			<div class="canvas">
				<div class="top_pop round_link"></div>
				<div class="middle_pop round_link"></div>
				<div class="bottom_pop round_link"></div>
				<div class="pop_area_top"></div>
				<div class="pop_area_middle"></div>
				<div class="pop_area_bottom"></div>
			</div>
			<p class="reference"></p>
		</div>
		
		<div class="slide d5 i:sanofiD5 i:sanofiDlink">
			<h1>Behandlungsschema febrile Neutropenie</h1>
			<h2>Behandlung Febr. Neutr.</h2>
			<div class="link_front_page"></div>
			<div class="canvas">
				<div class="big_box ad1"></div>
				<div class="big_box ad2"></div>
				<div class="big_box ad3"></div>
				<div class="big_box ad4"></div>
				<div class="big_box ad5"></div>
				<div class="slide_area_1"></div>
				<div class="slide_area_2"></div>
				<div class="slide_area_3"></div>
				<div class="slide_area_3_left"></div>
				<div class="slide_area_3_right"></div>
				<!--div class="slide_area_3_pop"></div-->
				<div class="slide_area_4"></div>
				<div class="slide_area_4_button"></div>
				<div class="slide_area_4_pop"></div>
				<div class="slide_area_5"></div>
				<div class="small_box small_ad1"></div>
				<div class="small_box small_ad2"></div>
				<div class="small_box small_ad3"></div>
				<div class="small_box small_ad4"></div>
				<div class="small_box small_ad5"></div>
			</div>
			<p class="reference">Leitlinien der Sektion Infektionen in der Hämatologie/Onkologie der Paul-Ehrlich-Gesellschaft e.V.: <br />Diagnostik und Therapie von Infektionen bei Patienten in der Hämatologie und Onkologie. Chemother J 13: 134-141 (2004)<br />
				<a href="javascript:openPDF('pdf/Gesprachsunterlagen/324583_KIF_NW-Management_NEU.pdf');">Karte febr. Neutr. + Diarrhoe</a></p>
		</div>
		
		<div class="slide d6 i:sanofiD6 i:sanofiDlink">
			<h1>Diarrhoe</h1>
			<h2>Diarrhoe</h2>
			<div class="link_front_page"></div>
			<div class="canvas">
				<div class="top_pop round_link"></div>
				<div class="bottom_pop round_link"></div>
				<div class="pop_area_top"></div>
				<div class="pop_area_bottom"></div>
			</div>
			<p class="reference"></p>
		</div>

		<div class="slide d7 i:sanofiD7 i:sanofiDlink">
			<h1>Behandlungsschema Diarrhoe</h1>
			<h2>Behandlung Diarrhoe</h2>
			<div class="link_front_page"></div>
			<div class="canvas">
				<div class="top_pop"></div>
				<div class="middle_pop"></div>
				<div class="bottom_pop"></div>
			</div>
			<p class="reference">Modifiziert nach Nowrousian MR; Supportive Therapie in der Onkologie. 2000, Seite 207<br/>
				<a href="javascript:openPDF('pdf/Gesprachsunterlagen/324583_KIF_NW-Management_NEU.pdf');">Karte febr. Neutr. + Diarrhoe</a></p>
		</div>

		<div class="slide d8 i:sanofiD8 i:sanofiDlink">
			<h1>Fatigue</h1>
			<h2>Fatigue</h2>
			<div class="link_front_page"></div>
			<div class="canvas">
				<div class="top_pop round_link"></div>
				<div class="middle_pop round_link"></div>
				<div class="bottom_pop round_link"></div>
				<div class="pop_area_top"></div>
				<div class="pop_area_middle"></div>
				<div class="pop_area_bottom"></div>
				<a href="http://www.krebsgesellschaft.de/lk_fatigue.html?markierung=Fatigue" class="pop_reference"></a>
			</div>
			<p class="reference"></p>
		</div>

		<div class="slide d9 i:sanofiDlink">
			<h1>Lebertoxizit&auml;t</h1>
			<h2>Lebertoxizit&auml;t</h2>
			<div class="link_front_page"></div>
			<div class="canvas"></div>
			<p class="reference"><a href="javascript:openPDF('pdf/Fachinformationen/FI_Taxotere 80 mg.pdf');">Fachinformation Taxotere 80mg/4ml, Stand Juli 2010</a></p>
		</div>
		
		<div class="slide d10 i:sanofiDlink">
			<h1>Lebertoxizit&auml;t</h1>
			<h2></h2>
			<div class="link_front_page"></div>
			<div class="canvas"></div>
			<p class="reference"><a href="javascript:openPDF('pdf/Fachinformationen/FI_Taxotere 80 mg.pdf');">Fachinformation Taxotere 80mg/4ml, Stand Juli 2010</a></p>
		</div>

	</div>

</div>

<div id="documentation" class="i:docs">
	<h2>Hintergrund-Informationen</h2>
	<ul>
		<li>Sonderdrucke</li>
		<li>Fachinformationen</li>
		<li>Gesprächsunterlagen</li>
		<li>Foliensätze</li>
		<li>Wissenschaftliche Information</li>
	</ul>

	<ul>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/aeltere_patienten_italiano.pdf');">Ältere Patienten (Italiano)</a></li>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/ASCO_Leitlinie_2007.pdf');">ASCO-Leitlinie 2007</a></li>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/Chemobeginn_Hamberg.pdf');">Chemobeginn (Hamberg)</a></li>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/EAU_Leitlinie_2010.pdf');">EAU-Leitlinie 2010</a></li>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/Kommentar_S3_Leitlinie_Heidenreich.pdf');">Kommentar S3-Leitl. (Heidenreich)</a></li>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/PSA_und_Schmerz_ARMSTRONG.pdf');">PSA und Schmerz (Armstrong)</a></li>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/PSA_DT_Oudard.pdf');">PSA-DT (Oudard)</a></li>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/Schmerz_und_Uberleben_Quadard.pdf');">Schmerz und Überleben (Oudard)</a></li>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/SIOG_Leitlinie.pdf');">SIOG-Leitlinie</a></li>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_Ergebnisse_Tannock.pdf');">TAX 327-Ergebnisse (Tannock)</a></li>
		<li><a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_UPDATE_Berthold.pdf');">TAX 327-Update (Berthold)</a></li>
	</ul>

	<ul>
		<li><a href="javascript:openPDF('pdf/Fachinformationen/FI_Taxotere 160 mg.pdf');">Fachinformation Taxotere 160mg/8ml</a></li>
		<li><a href="javascript:openPDF('pdf/Fachinformationen/FI_Taxotere 20 mg.pdf');">Fachinformation Taxotere 20mg/1ml</a></li>
		<li><a href="javascript:openPDF('pdf/Fachinformationen/FI_Taxotere 80 mg.pdf');">Fachinformation Taxotere 80mg/4ml</a></li>
	</ul>

	<ul>
		<li><a href="javascript:openPDF('pdf/Gesprachsunterlagen/Broschure_Nebenwirkung.pdf'});">Broschüre Nebenwirkung</a></li>
		<li><a href="javascript:openPDF('pdf/Gesprachsunterlagen/Folder_Lebensqualitaet.pdf');">Folder Lebensqualität</a></li>
		<li><a href="javascript:openPDF('pdf/Gesprachsunterlagen/Karte_Altere_patienten_Beer.pdf');">Karte ältere Patienten (Beer)</a></li>
		<li><a href="javascript:openPDF('pdf/Gesprachsunterlagen/Karte_ASCO_EAU_und_S3_Leitlinie.pdf');">Karte ASCO-, EAU- und S3-Leitlinie</a></li>
		<li><a href="javascript:openPDF('pdf/Gesprachsunterlagen/Karte_Leitlinienvergleich_S3-EAU.pdf');">Karte Leitlinienergleich S3 / EAU</a></li>
		<li><a href="javascript:openPDF('pdf/Gesprachsunterlagen/Karte_Performance_Status.pdf');">Karte Performance-Status</a></li>
		<li><a href="javascript:openPDF('pdf/Gesprachsunterlagen/Karte_PSA_FLARE.pdf');">Karte PSA-Flare</a></li>
		<li><a href="javascript:openPDF('pdf/Gesprachsunterlagen/Karte_SIOG_Leitlinie.pdf');">Karte SIOG-Leitlinie</a></li>
		<li><a href="javascript:openPDF('pdf/Gesprachsunterlagen/324583_KIF_NW-Management_NEU.pdf');">Karte febr. Neutr. + Diarrhoe</a></li>
	</ul>

	<ul>
		<li><a href="javascript:openPDF('pdf/Foliensatze/Foliensatz_HRPC1st_line.pdf');">Foliensatz HRPC 1st-line</a></li>
		<li><a href="javascript:openPDF('pdf/Foliensatze/Foliensatz_HRPC2nd_line.pdf');">Foliensatz HRPC 2nd-line</a></li>
	</ul>

	<ul>
		<li><a href="javascript:openPDF('pdf/Wissenschaftliche_Information/Abstract_TROPIC_Sartor.pdf');">Abstract TROPIC (Sartor)</a></li>
		<li><a href="javascript:openPDF('pdf/Wissenschaftliche_Information/Cabazitaxel_Smpc_FDA_deutsch.pdf');">Cabazitaxel SmPC FDA (deutsch)</a></li>
		<li><a href="javascript:openPDF('pdf/Wissenschaftliche_Information/Cabazitaxel_Smpc_FDA_englisch.pdf');">Cabazitaxel SmPC FDA (englisch)</a></li>
		<li><a href="javascript:openPDF('pdf/Wissenschaftliche_Information/Karte_Dosierung_Cabazitaxel.pdf');">Karte Dosierung Cabazitaxel</a></li>
		<li><a href="javascript:openPDF('pdf/Wissenschaftliche_Information/Karte_Zubereitung_Cabazitaxel.pdf');">Karte Zubereitung Cabazitaxel</a></li>
		<li><a href="javascript:openPDF('pdf/Wissenschaftliche_Information/TROPIC_Vollpublikation_Lancet_2010.pdf');">TROPIC Vollpublikation (Lancet)</a></li>
	</ul>

</div>

</body>
</html>