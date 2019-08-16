$(document).ready(function()
{
    checkUsuarios();
})

// Constante para establecer la ruta y parámetros de comunicación con la API
const api = '../../appRH/Backend/core/api/usuarios.php?action=';

// Función para verificar si existen usuarios en el sitio privado
function checkUsuarios()
{
    $.ajax({
        url: api + 'read',
        type: 'post',
        data: null,
        datatype: 'json'
    })
    .done(function(response){
        // Se verifica si la respuesta de la API es una cadena JSON, sino se muestra el resultado en consola
        if (isJSONString(response)) {
            const result = JSON.parse(response);
            // Se comprueba que no hay usuarios registrados para redireccionar al registro del primer usuario
            if (!result.status) {
                sweetAlert(3, result.message, 'confirmar.html');  
            }
        } else {
            console.log(response);
        }        
    })
    .fail(function(jqXHR){
        // Se muestran en consola los posibles errores de la solicitud AJAX
        console.log('Error: ' + jqXHR.status + ' ' + jqXHR.statusText);
    });
}

// Función para validar el usuario al momento de iniciar sesión
$('#form-login').submit(function()
{
    event.preventDefault();
    $.ajax({
        url: api + 'login',
        type: 'post',
        data: $('#form-login').serialize(),
        datatype: 'json'
    })
    .done(function(response){
        // Se verifica si la respuesta de la API es una cadena JSON, sino se muestra el resultado en consola
        if (isJSONString(response)) {
            const result = JSON.parse(response);
            // Se comprueba si la respuesta es satisfactoria, sino se muestra la excepción
            if (result.status) {

                if(result.dataset.Id_tipo_usuario == 1){
                    sweetAlert(1, result.message, 'confirmar.html');                    
                }                 

                else if (result.dataset.Id_tipo_usuario == 2 || result.dataset.Id_tipo_usuario == 3){
                    sweetAlert(1, result.message, 'permiso.html');
                }      

            } else {
                sweetAlert(2, result.exception, null);
            }
        } else {
            console.log(response);
        }        
    })
    .fail(function(jqXHR){
        // Se muestran en consola los posibles errores de la solicitud AJAX
        console.log('Error: ' + jqXHR.status + ' ' + jqXHR.statusText);
    });
})
