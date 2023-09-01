$(document).ready(function() {
    // Selecciona el elemento con el ID "generar" y establece un evento de clic en él.
    $("#generar").click(function() {
        // Obtiene los valores de los campos de entrada y los convierte a mayúsculas.
        var nombre = $("#nombre").val().toUpperCase();
        var ape_p = $("#ape_p").val().toUpperCase();
        var ape_m = $("#ape_m").val().toUpperCase();
        var fecha_nac = $("#fecha_nac").val();
        
        // Genera los primeros 10 caracteres del RFC utilizando los valores de los campos de entrada.
        var rfc = generarRFC(nombre, ape_p, ape_m, fecha_nac);
        
        // Genera los últimos 3 caracteres del RFC de manera aleatoria.
        var ultimos3 = generarUltimos3Caracteres();
        
        // Concatena los primeros 10 caracteres del RFC con los últimos 3 caracteres generados.
        // Luego, establece el valor resultante en el campo de resultado.
        $("#result").val(rfc + ultimos3);
    });
    
    // Esta función genera los primeros 10 caracteres del RFC utilizando los valores de los campos de entrada.
    function generarRFC(nombre, ape_p, ape_m, fecha_nac) {
        var rfcParcial = ape_p.charAt(0) + obtenerSiguienteVocal(ape_p) + ape_m.charAt(0) + nombre.charAt(0) +
                          fecha_nac.substring(2, 4) + fecha_nac.substring(5, 7) + fecha_nac.substring(8, 10);
        
        return rfcParcial;
    }
    
    // Esta función busca y devuelve la siguiente vocal en el texto proporcionado.
    function obtenerSiguienteVocal(texto) {
        var vocales = "AEIOU";
        for (var i = 1; i < texto.length; i++) {
            if (vocales.includes(texto.charAt(i))) {
                return texto.charAt(i);
            }
        }
        return "";
    }
    
    // Esta función genera los últimos 3 caracteres del RFC de manera aleatoria,
    // utilizando una combinación de letras mayúsculas y dígitos numéricos.
    function generarUltimos3Caracteres() {
        var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var ultimosCaracteres = "";
        
        for (var i = 0; i < 3; i++) {
            ultimosCaracteres += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        
        return ultimosCaracteres;
    }

    
});
$(document).ready(function() {
    $("#consultar").click(function() {
        $.get("https://jsonplaceholder.typicode.com/users/7", function(data) {
            $("#name").val(data.name);
            $("#email").val(data.email);
        });
    });
});

