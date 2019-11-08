$(document).ready(function(){
    $('#CerrarSesion').click(function(){
        localStorage.removeItem('sessionid');
        window.location.replace('page-signin.html');
    });
});