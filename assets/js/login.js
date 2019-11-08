$(function () {
    $("#login").click(function () {

        let username = $("input[name=username]").val();
        let password = $("input[name=password]").val();
        alert("login:"+ username + ":"+ password);



        axios.get('http://35.226.238.158/moodle/login/token.php?username='+username+'&password='+password+'&service=moodle_mobile_app')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);

            });
    });
})