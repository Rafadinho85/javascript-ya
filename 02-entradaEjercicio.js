'use strict'

 /*
 Confeccionar un programa que permita cargar el nombre de un usuario y su mail por teclado. 
 Mostrar posteriormente los datos en la página HTML.
 */

 var usuario;
 var mail;

 usuario = prompt("Ingrese su usuario");
 mail = prompt("ingrese su mail");

 document.write('Su usuario es: '+ usuario);
 document.write('Y su mail es: ' + mail);
 