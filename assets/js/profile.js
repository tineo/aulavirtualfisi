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
        //console.log(response);
        //console.log(response.data);
        //console.log(response.data[0].username);

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

    const options2 = {
        method : 'GET',
        url: 'http://35.226.238.158/moodle/webservice/rest/server.php?wstoken='+ localStorage.getItem('sessionid')  +'&wsfunction=core_course_get_courses&moodlewsrestformat=json'
    }
    axios(options2).then(response => {
        //console.log(response);
        let curso = response.data[1];
        //console.log(curso);
        $("#curso-name").text(curso.displayname);

    });
    const options21 = {
        method : 'GET',
        url: 'http://35.226.238.158/moodle/webservice/rest/server.php?wstoken='+ localStorage.getItem('sessionid')  +'&wsfunction=core_enrol_get_enrolled_users&courseid=2&moodlewsrestformat=json'
    }
    axios(options21).then(response => {
        console.log(response.data);
        response.data.forEach(function(element) {
            //console.log(element);
            element.roles.forEach(function(role) {
                //console.log(role.roleid);
                if (role.roleid == "3"){
                    $("#curso-prof").text("Prof : "+element.fullname);
                }
            });
        });



    });
    const options3 = {
        method : 'GET',
        url: 'http://35.226.238.158/moodle/webservice/rest/server.php?wstoken='+ localStorage.getItem('sessionid')  +'&wsfunction=core_course_get_contents&courseid=2&moodlewsrestformat=json'
    }
    axios(options3).then(response => {

        response.data.splice(0,1);
        console.log(response.data);
        response.data.forEach(function(element) {

            let week = $("<li>").append(element.name);
            if(element.modules.length > 0) week.append(" <b>("+element.modules.length+")</b>")
            $("#curso-weeks").append(week);

        });
    });

})