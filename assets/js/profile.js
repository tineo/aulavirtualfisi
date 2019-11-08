$(function () {
    if(localStorage.getItem('sessionid')  == undefined ){
        window.location.replace('page-signin.html');
    }
    $('#CerrarSesion').click(function(){
        localStorage.removeItem('sessionid');
        window.location.replace('page-signin.html');
    });
    /*let username =  "ihc";
    let password = "1Hc-1Hc-";

    const options2 = {
        method : 'GET',
        url: 'http://35.226.238.158/moodle/login/token.php?username='+username+'&password='+password+'&service=moodle_mobile_app',

    }
    axios(options2).then(response => {
        console.log(response.data);
        localStorage.setItem('sessionid',response.data.token);
    });*/

    const options = {
        method : 'GET',
        url: 'http://35.226.238.158/moodle/webservice/rest/server.php?wstoken='+ localStorage.getItem('sessionid')  +'&moodlewsrestformat=json&wsfunction=core_user_get_users_by_field&field=id&values[0]=2',
    }
    axios(options).then(response => {
        console.log(response);
        console.log(response.data);
        console.log(response.data[0].username);

        let profile =  response.data[0];
        $("#field-username").text(profile.username);
        $("#field-fullname").text(profile.fullname);
        $("#field-address").text(profile.city);
        $("#field-email").text(profile.email);
        $("#field-avatar").attr("src",profile.profileimageurl);
        $("#field-description").html(profile.description);

    }).catch(error =>{
        console.log(error);
    });


})