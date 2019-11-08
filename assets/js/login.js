$(function () {
    $("#login").click(function () {

        let username = $("input[name=username]").val();
        let password = $("input[name=password]").val();
        //alert("login:"+ username + ":"+ password);


        const options = {
            method : 'GET',
            url: 'http://35.226.238.158/moodle/login/token.php?username='+username+'&password='+password+'&service=moodle_mobile_app',

        }
        axios(options).then(response => {
            alert('Token:'+response.data.token);
            localStorage.setItem('sessionid',response.data.token);
            window.location.replace('page-profile-view.html');
        }).catch(error =>{
            console.log(error);
        });
    });
})