<?php include_once($_SERVER["LOCAL_PATH"]."/includes/segment.php") ?>
<!DOCTYPE html>
<html>
<head>
	<title>Sanofi - Taxotere</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=1024; initial-scale=1.0; maximum-scale=1.0;" />

	<? if($_SESSION["dev"]) { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p1/css/lib/seg_<?= $_SESSION["segment"] ?>_include.css" />
		<script type="text/javascript" src="/p1/js/lib/seg_<?= $_SESSION["segment"] ?>_include.js"></script>
	<? } else { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p1/css/seg_<?= $_SESSION["segment"] ?>.css" />
		<script type="text/javascript" src="/p1/js/seg_<?= $_SESSION["segment"] ?>.js"></script>
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

		<div id="1" class="slide a1 i:sanofiA1">
			<h1>Wann mit der Chemotherapie beginnen?</h1>
			<h2>&Uuml;bersicht Therapie</h2>
			<div class="canvas">
				<ul>
					<li>
						- Progression, wenn diese mit klinischer Symptomatik verbunden ist<br />
						- Asymptomatische Patienten mit mind. einem der folgenden Merkmale:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> kurze PSA-DT<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> hoher PSA-Ausgangswert<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> Progression gemäß Knochenszintigramm<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> Progress im Sinne einer viszeralen Metastasierung
					</li>
				</ul>
				<div class="bar_a"></div>
				<div class="bar_b_scope">
					<div class="bar_b"></div>
				</div>
			</div>
			<p class="reference"><a href="javascript:openPDF('pdf/Sonderdrucke/Chemobeginn_Hamberg.pdf');">Hamberg et al., EJC 2008;44:1193-1197</a></p>
		</div>

		<div class="slide a2 i:sanofiA2">
			<h1>Wie viele Patienten erhalten Chemotherapie?</h1>
			<h2>Abfrage Therapie</h2>
			<div class="canvas">
				<h2>Patienten, die für eine Chemotherapie geeignet sind:</h2>
				<div class="off">
					<div class="output_off"></div>
					<h3>erhalten eine Chemotherapie</h3>
				</div>
				<div class="on">
					<div class="output_on"></div>
					<h3>erhalten keine Chemotherapie</h3>
				</div>
				<div class="range">
					<div class="knob"></div>
				</div>
				<canvas></canvas>
			</div>
		</div>

		<div class="slide a3 i:sanofiA3">
			<h1>Warum erhalten Patienten keine Chemotherapie?</h1>
			<h2>Abfrage Gr&uuml;nde</h2>
			<div class="canvas">
				<h2>Bewerten Sie m&ouml;gliche Gr&uuml;nde:</h2>
				<ul class="options">
					<li class="first"><h3>Alter</h3></li>
					<li class="second"><h3>Keine Symptome</h3></li>
					<li class="third"><h3>Risiko &gt; Nutzen</h3></li>
					<li class="forth"><h3>Patientenwunsch</h3></li>
				</ul>
			</div>
		</div>

		<div class="slide a4 i:sanofiA4">
			<h1>TAX 327: Signifikant verl&auml;ngertes Gesamt&uuml;berleben mit Taxotere<sup>&reg;</sup></h1>
			<h2>TAX 327: &Uuml;berleben</h2>
			<div class="canvas">
				<h2>Gesamt&uuml;berleben</h2>
				<div class="blue_button"></div>
				<div class="grey_button"></div>
			</div>
			<p class="reference"><a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_UPDATE_Berthold.pdf');">Modifiziert nach Berthold DR et al., J Clin Oncol 2008; 26: 242-245</a></p>
		</div>

		<div class="slide a5 i:sanofiA4">
			<h1>TAX 327: Bessere Ansprechraten unter Taxotere<sup>&reg;</sup></h1>
			<h2>TAX 327: Ansprechen</h2>
			<div class="canvas">
				<div class="blue_button"></div>
				<div class="grey_button"></div>
			</div>
			<p class="reference"><a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_Ergebnisse_Tannock.pdf');">Modifiziert nach Tannock IF et al., NEJM 2004;351:1502-1512<br />* gemessen mittels Present-Pain-Index (PPI) und Analgesic Score (AS)</a></p>
		</div>

		<div class="slide a6 i:sanofiA4">
			<h1>TAX 327: H&auml;matologische Vertr&auml;glichkeit</h1>
			<h2>TAX 327: H&auml;matolog. NW</h2>
			<div class="canvas">
				<div class="blue_button"></div>
				<div class="grey_button"></div>
			</div>
			<p class="reference"><a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_Ergebnisse_Tannock.pdf');">Modifiziert nach Tannock IF et al., NEJM 2004;351:1502-1512</a></p>
		</div>

		<div class="slide a7 i:sanofiA4">
			<h1>TAX 327: Nicht-h&auml;matologische Vertr&auml;glichkeit</h1>
			<h2>TAX 327: Nicht-H&auml;m. NW</h2>
			<div class="canvas">
				<div class="blue_button"></div>
				<div class="grey_button"></div>
			</div>
			<p class="reference"><a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_Ergebnisse_Tannock.pdf');">Modifiziert nach Tannock IF et al., NEJM 2004;351:1502-1512</a></p>
		</div>

		<div class="slide a8 i:sanofiA4">
			<h1>TAX 327: Mehr Lebensqualit&auml;t f&uuml;r Ihre Patienten unter Taxotere<sup>&reg;</sup></h1>
			<h2>TAX 327: Lebensqualit&auml;t</h2>
			<div class="canvas">
				<div class="blue_button"></div>
				<div class="grey_button"></div>
			</div>
			<p class="reference">
				<a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_Ergebnisse_Tannock.pdf');">Erhoben mit dem Fact-P-Score: Beinhaltet Fragestellungen zum körperlichen, sozial-familiären,<br />
				emotionalen und funktionalen Wohlbefinden sowie Prostata-spezifische Parameter.<br />
				Modifiziert nach Tannock IF et al., NEJM 2004;351:1502-1512</a>
			</p>
		</div>

		<div id="2" class="slide a9 a1 i:sanofiA1">
			<h1>Wann mit der Chemotherapie beginnen?</h1>
			<h2>&Uuml;bersicht Therapie</h2>
			<div class="canvas">
				<ul>
					<li>
						- Progression, wenn diese mit klinischer Symptomatik verbunden ist<br />
						- Asymptomatische Patienten mit mind. einem der folgenden Merkmale:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> kurze PSA-DT<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> hoher PSA-Ausgangswert<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> Progression gemäß Knochenszintigramm<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> Progress im Sinne einer viszeralen Metastasierung
					</li>
				</ul>
				<div class="bar_a"></div>
				<div class="bar_b_scope">
					<div class="bar_b"></div>
				</div>
			</div>
			<p class="reference"><a href="javascript:openPDF('pdf/Sonderdrucke/Chemobeginn_Hamberg.pdf');">Hamberg et al., EJC 2008;44:1193-1197</a></p>
		</div>

		<div class="slide a10 i:sanofiA10">
			<h1>Patienten profitieren von fr&uuml;her Intensivierung der Therapie</h1>
			<h2>Fr&uuml;he Intensivierung</h2>
			<div class="canvas">
				<div class="a_column"></div>
				<div class="b_column"></div>
				<div class="c_column"></div>
			</div>
			<p class="reference">Modifiziert nach Oudard et al. ASCO 2007. Abstract 5149.<br />Retrospektive Analyse von 145 Krankenakten</p>
		</div>

		<div class="slide a11 i:sanofiA11">
			<h1>TAX327: Asympt. Patienten profitieren von einer Chemotherapie</h1>
			<h2>Asympt. Pat. &Uuml;berleben</h2>
			<div class="canvas">
				<h2>Hazard-Ratios</h2>
				<div class="a_button"></div>
				<div class="b_button"></div>
				<div class="c_button"></div>
				<div class="d_button"></div>
			</div>
			<p class="reference"><a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_UPDATE_Berthold.pdf');">Modifiziert nach Berthold DR et al., J Clin Oncol 2008; 26: 242-245</a></p>
		</div>

		<div class="slide a12 i:sanofiA12">
			<h1>TAX327: Verbesserte Lebensqualit&auml;t</h1>
			<h2>Asympt. Pat. Lebensqu.</h2>
			<div class="canvas">
				<div class="graph"></div>
				<div class="blue_button"></div>
				<div class="grey_button"></div>
			</div>
			<p class="reference">*Definiert nach Baseline FACT-P-Score>128 oder PPI&lt;2 und AS&lt;10<br />Modifiziert nach Pond. G.R. et al. ASCO 2006. #4557</p>
		</div>

		<div class="slide a13 i:sanofiA13">
			<h1>Lebenserwartung von &auml;lteren M&auml;nnern</h1>
			<h2>&Auml;ltere: Lebenserwartung</h2>
			<div class="canvas">
				<h2>Lebenserwartung von &auml;lteren M&auml;nnern in Abh&auml;ngigkeit vom Gesundheitszustand (in Jahren):</h2>
				<table>
				<tr>
					<td rowspan="7"><span>Derzeitiges Alter</span></td>
					<td class="age">95</td>
					<td class="fit"><span>4.3</span></td>
					<td class="vulnerable"><span>2.3</span></td>
					<td class="frail"><span>1</span></td>
				</tr>
				<tr>
					<td class="age">90</td>
					<td class="fit"><span>5.8</span></td>
					<td class="vulnerable"><span>3.2</span></td>
					<td class="frail"><span>1.5</span></td>
				</tr>
				<tr>
					<td class="age">85</td>
					<td class="fit"><span>7.9</span></td>
					<td class="vulnerable"><span>4.7</span></td>
					<td class="frail"><span>2.2</span></td>
				</tr>
				<tr>
					<td class="age">80</td>
					<td class="fit"><span>10.8</span></td>
					<td class="vulnerable"><span>6.7</span></td>
					<td class="frail"><span>3.3</span></td>
				</tr>
				<tr>
					<td class="age">75</td>
					<td class="fit"><span>14.2</span></td>
					<td class="vulnerable"><span>9.3</span></td>
					<td class="frail"><span>4.9</span></td>
				</tr>
				<tr>
					<td class="age">70</td>
					<td class="fit"><span>18</span></td>
					<td class="vulnerable"><span>12.4</span></td>
					<td class="frail"><span>6.7</span></td>
				</tr>
				<tr>
					<th></th>
					<th>
						<h3>Guter<br />Gesundheitszustand</h3>
						<p>(oberes Viertel)</p>
					</th>
					<th>
						<h3>Durchschnittlicher<br />Gesundheitszustand</h3>
					</th>
					<th>
						<h3>Schlechter<br />Gesundheitszustand</h3>
						<p>(unteres Viertel)</p>
					</th>
				</tr>
				</table>
			</div>
			<p class="reference">Modifiziert nach Droz, JP et al. Critical Reviews in Oncology/Haematology 2010;73:68-91</p>
		</div>

		<div class="slide a14 i:sanofiA4">
			<h1>Gepoolte Daten zweier Phase II Studien: Patientencharakteristika</h1>
			<h2>&Auml;ltere: Charakteristika</h2>
			<div class="canvas">
				<div class="blue_button"></div>
				<div class="grey_button"></div>
			</div>
			<p class="reference">Modifiziert nach Beer TM et al., Clin Prostate Cancer 2003; 2:167-172</p>
		</div>

		<div class="slide a15 i:sanofiA15">
			<h1>Wirksamkeit von Taxotere<sup>&reg;</sup> unabh&auml;ngig vom Alter</h1>
			<h2>&Auml;ltere: &Uuml;berleben</h2>
			<div class="canvas">
				<h2>Gepoolte Daten zweier Phase II Studien:</h2>
				<div class="graphA"></div>
				<div class="graphB"></div>
			</div>
			<p class="reference">Modifiziert nach Beer TM et al., Clin Prostate Cancer 2003; 2:167-172</p>
		</div>

		<div class="slide a16">
			<h1>Keine signifikant erh&ouml;hte Toxizit&auml;t bei &auml;lteren Patienten</h1>
			<h2>&Auml;ltere: Nebenwirkungen</h2>
			<div class="canvas">
				<h2>Gepoolte Daten zweier Phase II Studien:</h2>

			</div>
			<p class="reference">Modifiziert nach Beer TM et al., Clin Prostate Cancer 2003; 2:167-172</p>
		</div>

		<div id="3" class="slide a17 a1 i:sanofiA1">
			<h1>Wann mit der Chemotherapie beginnen?</h1>
			<h2>&Uuml;bersicht Therapie</h2>
			<div class="canvas">
				<ul>
					<li>
						- Progression, wenn diese mit klinischer Symptomatik verbunden ist<br />
						- Asymptomatische Patienten mit mind. einem der folgenden Merkmale:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> kurze PSA-DT<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> hoher PSA-Ausgangswert<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> Progression gemäß Knochenszintigramm<br />
						&nbsp;&nbsp;&nbsp;&nbsp;> Progress im Sinne einer viszeralen Metastasierung
					</li>
				</ul>
				<div class="bar_a"></div>
				<div class="bar_b_scope">
					<div class="bar_b"></div>
				</div>
			</div>
			<p class="reference"><a href="javascript:openPDF('pdf/Sonderdrucke/Chemobeginn_Hamberg.pdf');">Hamberg et al., EJC 2008;44:1193-1197</a></p>
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
		<li><a href="javascript:openPDF('pdf/Gesprachsunterlagen/Broschure_Nebenwirkung.pdf');">Broschüre Nebenwirkung</a></li>
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