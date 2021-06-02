<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xml:lang="pt-br" lang="pt-br" xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Um problema ocorreu no site</title>
<style type="text/css">
body{background:#fff;margin:20px;font-family:Arial, Helvetica, sans-serif;font-size:14px;background:#f4f4f4;}
p {margin:0;padding:0;}
h1 {margin:20px 0 40px 0;padding:0;font-size:48px;;line-height:48px;color:#0079c1;text-align:center;}
h2 {margin:0 0 10px 0;padding:0;font-size:24px;color:#333;text-align:center;}
.box404{border:1px solid #eaeaea;padding:20px;line-height:160%;background:#fff;-moz-border-radius: 5px;-webkit-border-radius: 5px;}
.txt{text-align:center;}
#boxErro{border:1px solid #eaeaea;padding:20px;line-height:100%;font-size:11px;margin:20px 0 0 0;background:#fff;-moz-border-radius: 5px;-webkit-border-radius: 5px;}
</style>
</head>
<body>
<script language="javascript" type="text/javascript">
function mostraEsconde (qual) {
	if (document.getElementById(qual).style.display == "none") {
		document.getElementById(qual).style.display= "";
	} else {
		document.getElementById(qual).style.display = "none";
	}
}
</script>
<div class="box404" ondblclick="mostraEsconde('boxErro');">
<h1>Ops!</h1>
<h2>Um problema moment&acirc;neo ocorreu no site.</h2>
<div class="txt">
    <p>Sugerimos que espere alguns instantes e tente novamente.</p>
    <p>Agradecemos pela compreens&atilde;o.</p>
</div>
</div>
<div id="boxErro" style="display:none;">
	<pre>
		${exception}
	</pre>
</div>
</body>
</html>