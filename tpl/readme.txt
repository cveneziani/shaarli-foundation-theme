===== Shaarli Foundation template organisation =====

Any Shaarli page should conform to this RainTPL template:

-----------------------------------------------------
<html>
<head>{include="layout/includes"}</head>
<body>
	<div id="pageheader">{include="layout/header"}</div>
    You body goes here...
    {include="layout/footer"}
</body>
</html>
-----------------------------------------------------

If you want to also add something in the page header (in the dark area), do it here:

<div id="pageheader">{include="layout/header"}My menu goes here...</div>


Example: "Add new link" form:
-----------------------------------------------------
<html>
<head>{include="layout/includes"}</head>
<body onload="document.addform.post.focus();">
<div id="pageheader">
	{include="layout/header"}
	<div id="headerform">
		<form method="GET" action="" name="addform" class="addform">
			<input type="text" name="post" style="width:50%;">
			<input type="submit" value="Add link" class="bigbutton">
		</form>
	</div>
</div>
{include="layout/footer"}
</body>
</html>
-----------------------------------------------------




