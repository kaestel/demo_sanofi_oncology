<? include_once($_SERVER['FRAMEWORK_PATH']."/include/segment.php") ?>
<!DOCTYPE html>
<html>
<head>
	<title>Sanofi - Wirkmechanismus</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=1024; initial-scale=1.0; maximum-scale=1.0;" />

	<? if($_SESSION["dev_includes"]) { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p3/css/lib/seg_<?= $_SESSION["segment"] ?>_include.css" />
		<script type="text/javascript" src="/p3/js/lib/seg_<?= $_SESSION["segment"] ?>_include.js"></script>
	<? } else { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/p3/css/seg_<?= $_SESSION["segment"] ?>.css" />
		<script type="text/javascript" src="/p3/js/seg_<?= $_SESSION["segment"] ?>.js"></script>
	<? } ?>

</head>

<body class="i:validdevice">

<div id="display">

	<div id="navigation">
		<h4 class="home">Home</h4>
	</div>

	<div id="presentation" class="i:presentation">

		<div class="slide b1 i:sanofiB1">
			<h1>Wirkmechanismus</h1>
			<h2>Wirkmechanismus</h2>
			<div class="canvas">
				<div class="dvideo_a">
					<video src="video/100616_Cabaz_dt.mp4" width="700" height="395" controls="controls"></video>
				</div>
			</div>
			<p class="reference"></p>
		</div>
		
	</div>
</div>



</body>
</html>