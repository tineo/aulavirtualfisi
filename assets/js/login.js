$(function () {
    $("#login").click(function () {
        alert("login");


        var resultElement = document.getElementById('login-id');
        resultElement.innerHTML = '';

        axios.get('http://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);

            });
    });
})