<?php include_once($_SERVER["LOCAL_PATH"]."/includes/segment.php") ?>
<!DOCTYPE html>
<html>
<head>
	<title>Sanofi - 2nd line</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=1024; initial-scale=1.0; maximum-scale=1.0;" />

	<? if($_SESSION["dev"]) { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p2/css/lib/seg_<?= $_SESSION["segment"] ?>_include.css" />
		<script type="text/javascript" src="/p2/js/lib/seg_<?= $_SESSION["segment"] ?>_include.js"></script>
	<? } else { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p2/css/seg_<?= $_SESSION["segment"] ?>.css" />
		<script type="text/javascript" src="/p2/js/seg_<?= $_SESSION["segment"] ?>.js"></script>
	<? } ?>

</head>

<body class="i:validdevice">

<div id="display">

	<div id="navigation">
		<h4 class="home">Home</h4>
		<h4 class="index">Index</h4>
		<h4 class="references">References</h4>
	</div>

	<div id="presentation" class="i:presentation">

		<div class="slide b1 i:sanofiB1">
			<h1>Resistenzentwicklung bei Taxanen</h1>
			<h2>Resistenzentw. Taxane</h2>
			<div class="canvas">
				<div class="video dvideo_a"></div>
				<div class="video dvideo_b"></div>
			</div>
			<p class="reference"></p>
		</div>

		<div class="slide b2">
			<h1>Phase III-Studie TROPIC: Einschlusskriterien</h1>
			<h2>TROPIC: Design</h2>
			<div class="canvas">

			</div>
			<p class="reference"><a href="javascript:openPDF('pdf/Wissenschaftliche_Information/Abstract_TROPIC_Sartor.pdf');">Modifiziert nach de Bono. J.S. et al. ASCO 2010. Abstract 4508 and Presentation.</a></p>
		</div>

		<div class="slide b9 i:sanofiB9">
			<h1>Einschlusskriterien TROPIC</h1>
			<h2>TROPIC: Einschlusskrit.</h2>
			<div class="canvas">
				<div class="top_pop round_link"></div>
				<div class="bottom_pop round_link"></div>
				<div class="line line1"></div>
				<div class="line line2"></div>
				<div class="line line3"></div>
				<div class="line line4"></div>
				<div class="line line5"></div>
				<div class="line line6"></div>
				<div class="line line7"></div>
				<div class="line line8"></div>
				<div class="pop_area_top"></div>
				<div class="pop_area_bottom"></div>
				<a href="javascript:openPDF('pdf/Wissenschaftliche_Information/TROPIC_Vollpublikation_Lancet_2010.pdf');" class="pop_reference"></a>
			</div>
			<p class="reference">
				<a href="javascript:openPDF('pdf/Wissenschaftliche_Information/TROPIC_Vollpublikation_Lancet_2010.pdf');">Modifiziert nach De Bono et al., Lancet 2010;376:1147-54.</a>
			</p>
		</div>
		
		<div class="slide b10 i:sanofiB10">
			<h1>Ausschlusskriterien TROPIC</h1>
			<h2>TROPIC: Ausschlusskrit.</h2>
			<div class="canvas">
				<div class="line line1"></div>
				<div class="line line2"></div>
				<div class="line line3"></div>
				<div class="line line4"></div>
				<div class="line line5"></div>
				<div class="line line6"></div>
				<div class="line line7"></div>
				<div class="line line8"></div>
				<div class="line line9"></div>
				<div class="line line10"></div>
				<div class="line line11"></div>
				<div class="line line12"></div>
				<div class="line line13"></div>
				<div class="line line14"></div>
				<div class="line line15"></div>
			</div>
			<p class="reference">
				<a href="javascript:openPDF('pdf/Wissenschaftliche_Information/TROPIC_Vollpublikation_Lancet_2010.pdf');">Modifiziert nach De Bono et al., Lancet 2010;376:1147-54.</a>
			</p>
		</div>

		<div class="slide b3 i:sanofiA4">
			<h1>TROPIC: Overall Survival - Update der ITT Analyse*</h1>
			<h2>TROPIC: &Uuml;berleben</h2>
			<div class="canvas">
				<div class="blue_button"></div>
				<div class="grey_button"></div>
			</div>
			<p class="reference">
				<a href="javascript:openPDF('pdf/Wissenschaftliche_Information/Abstract_TROPIC_Sartor.pdf');">* Daten cut-off 3/10/2010<br />
				Modifiziert nach de Bono. J.S. et al. ASCO 2010. Abstract 4508 and Presentation.</a>
			</p>
		</div>

		<div class="slide b4">
			<h1>TROPIC: Overall Survival -  Update der Subgruppen Analyse</h1>
			<h2>TROPIC: Subgruppen</h2>
			<div class="canvas">

			</div>
			<p class="reference">
				<a href="javascript:openPDF('pdf/Wissenschaftliche_Information/Abstract_TROPIC_Sartor.pdf');">* Das Protokoll wurde durch ein Amendment so angepasst, dass nur noch Patienten mit einer Docetaxel-Dosis von > 225mg/m<sup>2</sup> eingeschlossen werden durften.<br />
				Modifiziert nach de Bono. J.S. et al. ASCO 2010. Abstract 4508 and Presentation.</a>
			</p>
		</div>

		<div class="slide b5">
			<h1>TROPIC: Responserate und Time to Progression (TTP)</h1>
			<h2>TROPIC: Ansprechen</h2>
			<div class="canvas">

			</div>
			<p class="reference">
				TTP = Time To Progression<br />
				* wurde nur bei Patienten mit Schmerz oder PSA ≥20 bzw. messbarer Erkrankung bei Studienbeginn erhoben - NR: Nicht erreicht
			</p>
		</div>

		<div class="slide b6">
			<h1>TROPIC: H&auml;ufigste behandlungsbedingte AEs *</h1>
			<h2>TROPIC: Nicht-H&auml;m. NW</h2>
			<div class="canvas">

			</div>
			<p class="reference">
				<a href="javascript:openPDF('pdf/Wissenschaftliche_Information/Abstract_TROPIC_Sartor.pdf');">AE=Nebenwirkung (Adverse Event)<br />
				* Absteigend sortiert nach ≥2% Häufigkeit von Ereignissen Grad ≥3 im CBZP-Arm.<br />
				Modifiziert nach de Bono. J.S. et al. ASCO 2010. Abstract 4508 and Presentation.</a>
			</p>
		</div>

		<div class="slide b7">
			<h1>TROPIC: H&auml;matologische Ergebnisse</h1>
			<h2>TROPIC: H&auml;matolog. NW</h2>
			<div class="canvas">

			</div>
			<p class="reference">
				<a href="javascript:openPDF('pdf/Wissenschaftliche_Information/Abstract_TROPIC_Sartor.pdf');">* 58% Grad ≥3 Neutropenie im MP-Arm der TROPIC-Studie im Vergleich zu 22% in der TAX327-Studie (1st-line)<br />
				Modifiziert nach de Bono. J.S. et al. ASCO 2010. Abstract 4508 and Presentation.</a>
			</p>
		</div>

		<div class="slide b8">
			<h1>EAU Guidelines 2010 Prostatakarzinom</h1>
			<h2>EAU-Leitlinien 2010</h2>
			<div class="canvas">

			</div>
			<p class="reference">
				<a href="javascript:openPDF('pdf/Sonderdrucke/EAU_Leitlinie_2010.pdf');">Modifiziert nach Heidenreich A et al., EAU Guidelines on Prostate Cancer 2010,<br />
				abrufbar unter http://www.uroweb.org/professional-resources/guidelines/online/</a>
			</p>
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