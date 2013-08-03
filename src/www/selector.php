<? include_once($_SERVER['FRAMEWORK_PATH']."/include/segment.php") ?>
<!DOCTYPE html>
<html>
<head>
	<title>Sanofi - Presentation selector</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=1024; initial-scale=1.0; maximum-scale=1.0;" />

	<? if($_SESSION["dev"]) { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/css/lib/seg_<?= $_SESSION["segment"] ?>_include.css" />
		<script type="text/javascript" src="/js/lib/seg_<?= $_SESSION["segment"] ?>_include.js"></script>
	<? } else { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/css/seg_<?= $_SESSION["segment"] ?>.css" />
		<script type="text/javascript" src="/js/seg_<?= $_SESSION["segment"] ?>.js"></script>
	<? } ?>

</head>

<body class="i:validdevice">

<div class="display">
	<ul class="i:pre">
		<li class="p6"><a href="p6/index.php">Zeitstrahl</a></li>
		<li class="p1"><a href="p1/index.php">Taxotere</a></li>
		<li class="p2"><a href="p2/index.php">2nd line</a></li>
		<li class="p3"><a href="p3/index.php">Wirkmechanismus</a></li>
		<li class="p4"><a href="p4/index.php">Nebenwirkungsmanagement</a></li>
		<li class="p5"><a href="p5/index.php">Lebensqualität</a></li>
		<li class="p11"><a href="p11/index.php">Kongresskalender</a></li>
	</ul>
</div>

</body>
</html>