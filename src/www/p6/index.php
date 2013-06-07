<? include_once($_SERVER['FRAMEWORK_PATH']."/include/segment.php") ?>
<!DOCTYPE html>
<html>
<head>
	<title>Sanofi - Zeitstrahl</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=1024; initial-scale=1.0; maximum-scale=1.0;" />

	<? if($_SESSION["dev_includes"]) { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p6/css/lib/seg_<?= $_SESSION["segment"] ?>_include.css" />
		<script type="text/javascript" src="/p6/js/lib/seg_<?= $_SESSION["segment"] ?>_include.js"></script>
	<? } else { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p6/css/seg_<?= $_SESSION["segment"] ?>.css" />
		<script type="text/javascript" src="/p6/js/seg_<?= $_SESSION["segment"] ?>.js"></script>
	<? } ?>

</head>

<body class="i:validdevice">

<div id="navigation">
	<h4 class="home">Home</h4>
</div>

<div id="display">

	<div id="presentation" class="i:presentation">

		<div class="slide f1 i:sanofiF1">
			<h1>Meilensteine in der Therapie des Prostatakarzinoms</h1>
			<h2></h2>
			<div class="canvas">
				<div class="click time84"></div>
				<div class="click time95"></div>
				<div class="click time96"></div>
				<div class="click time05"></div>
				<div class="click time06"></div>
				<div class="bigger big84"></div>
				<div class="bigger big95"></div>
				<div class="bigger big96"></div>
				<div class="bigger big05"></div>
				<div class="bigger big06"></div>
				<div class="chart_dot"></div>
				<a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_Ergebnisse_Tannock.pdf');" class="link_2005"></a>
				<a href="http://www.rki.de" class="pop_reference"></a>
			</div>
			<p class="reference">
				1. Denmeade et al., Nature Reviews Cancer 2001;2:389-396<br />
				2. Fachiniformation Profact Depot, 9,45mg 2-Monatsimplantate, Stand Juni 2010<br />
				3. <a href="javascript:openPDF('pdf/Sonderdrucke/TAX_327_Ergebnisse_Tannock.pdf');">Tannock IF et al., NEJM 2004:351:1502-1512</a>
			</p>
		</div>
		
	</div>

</div>

</body>
</html>