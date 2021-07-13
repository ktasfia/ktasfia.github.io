<?php require "index.htm"; ?>
<?php
if ($_POST) {
    $name = $_POST ['name'];
    $content = $_POST ['commentContent'];
    $handle = fopen("comments.html", "a");
    fwrite ($handle, "<b>" . $name . "</b>:<br/>" . $content . "<br/>");
    fclose ($handle);
}
?>
<!DOCTYPE html>
<html>
<body>
<style> <?php include 'assign1.css'; ?> </style>
<div class="panel2">
<form action = "" method = "POST">
	Name: <input type = "text" name = "name"><br/>
	Question/Comment/Feedback: <textarea rows="10" cols="30" name="commentContent"></textarea><br/>
	<input type = "submit" value = "Submit"><br/>
</form> 

</div>
</body>
</html>
