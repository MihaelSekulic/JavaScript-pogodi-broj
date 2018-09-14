
// Uzmi nasumičan - random broj od 1 do 10
var num = Math.ceil(Math.random() * 10);  

 var broj = prompt("Odaberi broj od 1 do 10")
 
 if (broj == num) {
	 alert ("Bravo pogodio si broj!");
 }
 else {
	 alert ("Netočno, traženi broj je " + num);
 }