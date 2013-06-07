<? include_once($_SERVER['FRAMEWORK_PATH']."/include/segment.php") ?>
<!DOCTYPE html>
<html>
<head>
	<title>Sanofi - Lebensqualität</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=1024; initial-scale=1.0; maximum-scale=1.0;" />

	<? if($_SESSION["dev_includes"]) { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p5/css/lib/seg_<?= $_SESSION["segment"] ?>_include.css" />
		<script type="text/javascript" src="/p5/js/lib/seg_<?= $_SESSION["segment"] ?>_include.js"></script>
	<? } else { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p5/css/seg_<?= $_SESSION["segment"] ?>.css" />
		<script type="text/javascript" src="/p5/js/seg_<?= $_SESSION["segment"] ?>.js"></script>
	<? } ?>

</head>

<body class="i:validdevice">

<div id="navigation">
	<h4 class="home">Home</h4>
	<h4 class="index">Index</h4>
	<h4 class="references">References</h4>
</div>

<div id="display">

	<div id="presentation" class="i:presentation">

		<div class="slide e1 i:sanofiE1">
			<h1>Einflussfaktoren auf die Lebensqualit&auml;t</h1>
			<h2>Faktoren Lebensqualität</h2>
			<div class="canvas">
				<div class="line line1"></div>
				<div class="line line2"></div>
				<div class="line line3"></div>
				<div class="line line4"></div>
				<div class="line line5"></div>
				<div class="line line6"></div>
				<div class="line line7"></div>
				<!--div class="line line8"></div-->
			</div>
			<p class="reference"></p>
		</div>

		<div class="slide e2 i:sanofiE2">
			<h1>ECOG-Entwicklung in TROPIC</h1>
			<h2>TROPIC: ECOG</h2>
			<div class="canvas">
				<div class="all_button"></div>
				<div class="blue_button"></div>
				<div class="grey_button"></div>
				
			</div>
			<p class="reference">Modifiziert nach Oudard et al. ESMO 2010, 871PD</p>
		</div>

		<div class="slide e3 i:sanofiE3">
			<h1>PPI-Entwicklung in TROPIC</h1>
			<h2>TROPIC:  Schmerz</h2>
			<div class="canvas">
				<div class="all_button"></div>
				<div class="blue_button"></div>
				<div class="grey_button"></div>
			</div>
			<p class="reference">Modifiziert nach Oudard et al. ESMO 2010, 871PD</p>
		</div>

		<div class="slide e4">
			<h1>Bewertung der &Uuml;berlebensverl&auml;ngerung</h1>
			<h2>Bewertung Lebensqual.</h2>
			<div class="canvas"></div>
			<p class="reference">Modifiziert nach Slevin ML et al., Br Med J 1990;300:1458-60</p>
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