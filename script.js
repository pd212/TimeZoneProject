function showLocation() {
    navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords;
        document.getElementById("latitude").innerHTML = latitude;
        document.getElementById("longitude").innerHTML = longitude;
        latitude.innerHTML = latitude;
        longitude.innerHTML = longitude;
        let Api = "ae67e1e26a5f4156b8a69a129c6c2f57";
        fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${Api}`
        )
            .then((res) => res.json())
            .then((data) => {
                
                document.getElementById(
                    "timezone"
                ).innerHTML = `${data.results[0].timezone.name}`;
                document.getElementById("latitude").innerHTML = `${data.results[0].lat}`;
                document.getElementById("longitude").innerHTML = `${data.results[0].lon}`;
                document.getElementById(
                    "offstd"
                ).innerHTML = `${data.results[0].timezone.offset_STD}`;
                document.getElementById(
                    "stdsecond"
                ).innerHTML = `${data.results[0].timezone.offset_STD_seconds}`;
                document.getElementById(
                    "dstone"
                ).innerHTML = `${data.results[0].timezone.offset_DST}`;
                document.getElementById(
                    "dstsecond"
                ).innerHTML = `${data.results[0].timezone.offset_DST_seconds}`;
                document.getElementById(
                    "country"
                ).innerHTML = `${data.results[0].country}`;
                document.getElementById(
                    "pincode"
                ).innerHTML = `${data.results[0].postcode}`;
                document.getElementById("city").innerHTML = `${data.results[0].city}`;
            });
    });
}

showLocation();

//handle the search locations

function getLocation() {
    const inputLocation = document.getElementById("addinput");
    if (inputLocation.value !== "") {
        const loc = document.getElementById("addinput").value;
        const Apikey = "ae67e1e26a5f4156b8a69a129c6c2f57";
        const url = `https://api.geoapify.com/v1/geocode/search?text=${loc}&apiKey=${Apikey}`;

        async function getData(url) {
            const responce = await fetch(url);
            data = await responce.json();

            // console.log(data);
            document.getElementById(
                "time"
            ).innerHTML = `${data.features[0].properties.timezone.name}`;
            document.getElementById(
                "lati"
            ).innerHTML = `${data.features[0].properties.lat}`;
            document.getElementById(
                "lon"
            ).innerHTML = `${data.features[0].properties.lon}`;
            document.getElementById(
                "offst"
            ).innerHTML = `${data.features[0].properties.timezone.offset_STD}`;
            document.getElementById(
                "stdse"
            ).innerHTML = `${data.features[0].properties.timezone.offset_STD_seconds}`;
            document.getElementById(
                "dst"
            ).innerHTML = `${data.features[0].properties.timezone.offset_DST}`;
            document.getElementById(
                "dstse"
            ).innerHTML = `${data.features[0].properties.timezone.offset_DST_seconds}`;
            document.getElementById(
                "con"
            ).innerHTML = `${data.features[0].properties.country}`;
            document.getElementById(
                "pincod"
            ).innerHTML = `${data.features[0].properties.postcode}`;
            document.getElementById(
                "ct"
            ).innerHTML = `${data.features[0].properties.city}`;
        }

        getData(url);
    } else if (inputLocation.value == "") {
        document.getElementById("success").innerText = "Please enter an address!";
        document.getElementById("success").style.color = "red";
    } else if (inputLocation.value !== "") {
        document.getElementById("success").innerHTML = "";
    }
}
// handel empty values
async function locat() {
    const inputLocation = document.getElementById("addinput");

    await checkforerror(inputLocation);
}
async function checkforerror(locat) {
    if (locat !== "") {
        submitted(locat);
    }
}
function makingValuesEmpty() {
    document.getElementById("success").innerText = "Please enter an address!";
    document.getElementById("success").style.color = "red";
    document.getElementById("time").innerText = " ";
    document.getElementById("lati").innerText = " ";
    document.getElementById("lon").innerText = " ";

    document.getElementById("offst").innerText = " ";
    document.getElementById("stdse").innerText = " ";
    document.getElementById("dst").innerText = " ";
    document.getElementById("dstse").innerText = " ";

    document.getElementById("con").innerText = " ";
    document.getElementById("pincod").innerText = " ";
    document.getElementById("ct").innerText = " ";
}
