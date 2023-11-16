
const valeur = document.getElementById("monInput");
const recup = document.getElementById("result");



function carte(page) {

    const urlDeApi = `https://reqres.in/api/users?page=${page}/json`;
    fetch(urlDeApi)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {



            //av1
            document.getElementById("icone").setAttribute("src", responseJson.data[0].avatar)
            document.getElementById("fname").innerHTML = responseJson.data[0].first_name;
            document.getElementById("lname").innerHTML = responseJson.data[0].last_name;
            document.getElementById("email").innerHTML = responseJson.data[0].email;
            document.getElementById("ide").innerHTML = responseJson.data[0].id;

            //av2
            document.getElementById("icone2").setAttribute("src", responseJson.data[1].avatar)
            document.getElementById("fname1").innerHTML = responseJson.data[1].first_name;
            document.getElementById("lname1").innerHTML = responseJson.data[1].last_name;
            document.getElementById("email1").innerHTML = responseJson.data[1].email;
            document.getElementById("ide1").innerHTML = responseJson.data[1].id;

            //av3
            document.getElementById("icone3").setAttribute("src", responseJson.data[2].avatar)
            document.getElementById("fname2").innerHTML = responseJson.data[2].first_name;
            document.getElementById("lname2").innerHTML = responseJson.data[2].last_name;
            document.getElementById("email2").innerHTML = responseJson.data[2].email;
            document.getElementById("ide2").innerHTML = responseJson.data[2].id;

            //av4
            document.getElementById("icone4").setAttribute("src", responseJson.data[3].avatar)
            document.getElementById("fname3").innerHTML = responseJson.data[3].first_name;
            document.getElementById("lname3").innerHTML = responseJson.data[3].last_name;
            document.getElementById("email3").innerHTML = responseJson.data[3].email;
            document.getElementById("ide3").innerHTML = responseJson.data[3].id;

            //av5
            document.getElementById("icone5").setAttribute("src", responseJson.data[4].avatar)
            document.getElementById("fname4").innerHTML = responseJson.data[4].first_name;
            document.getElementById("lname4").innerHTML = responseJson.data[4].last_name;
            document.getElementById("email4").innerHTML = responseJson.data[4].email;
            document.getElementById("ide4").innerHTML = responseJson.data[4].id;

            //av6
            document.getElementById("icone6").setAttribute("src", responseJson.data[5].avatar)
            document.getElementById("fname5").innerHTML = responseJson.data[5].first_name;
            document.getElementById("lname5").innerHTML = responseJson.data[5].last_name;
            document.getElementById("email5").innerHTML = responseJson.data[5].email;
            document.getElementById("ide5").innerHTML = responseJson.data[5].id;


        });

}
//carte();

recup.addEventListener("click", () => {
    const choix = valeur.value;
    carte(choix);
});

//const prec = document.getElementById("retour");

function carte1() {
    const urlApi = `https://reqres.in/api/users?page=1/json`;
    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {


        })
}
prec.addEventListener("click", () => {
    carte1();
})










