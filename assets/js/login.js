$(function () {
    if(localStorage.getItem('sessionid'    )  != undefined || localStorage.getItem('sessionid'    ) != null  ){
        window.location.replace('page-profile-view.html');
    }

    $("#login").click(function () {

        let username = $("input[name=username]").val();
        let password = $("input[name=password]").val();
        //alert("login:"+ username + ":"+ password);
        //let username =  "ihc";
        //let password = "1Hc-1Hc1-1";
        const options = {
            method : 'GET',
            url: 'http://35.226.238.158/moodle/login/token.php?username='+username+'&password='+password+'&service=moodle_mobile_app',

        }
        axios(options).then(response => {
            console.log(response);
            if(response.data.token != undefined ){
                alert('Bievenido, Gracias por ingresar');
                localStorage.setItem('sessionid',response.data.token);
                window.location.replace('page-profile-view.html');
            }else{
                $('#modal6').modal('show');
            }
        }).catch(error =>{
            console.log(error);
        });
    });
})