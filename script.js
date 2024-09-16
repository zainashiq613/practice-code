 if (document.body.style.backgroundColor == "black") {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                document.getElementById("btn").innerHTML = "Dark-Mode";
            }
            else {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                document.getElementById("btn").innerHTML = "Light-Mode";
            }