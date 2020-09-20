window.onload = function () {
    let initialBusPassenger = [
        {
            name: "Thor",
            source: 1500,
            destination: "Asgard",
            number: "6.3",
            passenger: 'Capacity'
        },
        {
            name: "Thor",
            source: 1500,
            destination: "Asgard",
            number: "6.3",
            passenger: 'Capacity'
        },
        {
            name: "Thor",
            source: 1500,
            destination: "Asgard",
            number: "6.3",
            passenger: 'Capacity'
        },
    ];

    if (localStorage.getItem("BusPassenger") == null) {
        localStorage.setItem("BusPassenger", JSON.stringify(initialBusPassenger));
    }
};

function display(superarray = undefined) {
    let tabledata = "";
    let BusPassenger;
    if (superarray == undefined) {
        BusPassenger = JSON.parse(localStorage.getItem("BusPassenger"));
    } else {
        BusPassenger= superarray;
    }

    BusPassenger.forEach(function (BusPassengers, index) {
        let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${BusPassengers.name}</td>
      <td>${BusPassengers.source}</td>
      <td>${BusPassengers.destination}</td>
      <td>${BusPassengers.number}</td>
      <td>${BusPassengers.passenger}</td>
      <td><button onclick='deleteSuperhero(${index})'>delete</button>
      <button onclick='showModal(${index})'>update</button>
      </td>
      </tr>`;

        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
}

display();

function addSuperhero(e) {
    e.preventDefault();
    let BusPassengers = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let passengerCapacity = document.getElementById("passenger").value;
    BusPassengers.name = name;
    BusPassengers.source = source;
    BusPassengers.destination = destination;
    BusPassengers.number = number;
    BusPassengers.passenger = passengerCapacity;

    //   superheroes.push(superhero);

    let BusPassenger = JSON.parse(localStorage.getItem("BusPassenger"));
    BusPassenger.push(BusPassengers);
    localStorage.setItem("BusPassenger", JSON.stringify(BusPassengers));

    display();

    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("passenger").value = "";
}

function searchByName() {
    let searchValue = document.getElementById("searchName").value;
    let BusPassengers = JSON.parse(localStorage.getItem("BusPassengers"));
    let newdata = BusPassengers.filter(function (BusPassenger) {
        return (
            BusPassenger.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        );
    });

    display(newdata);
}

function deleteSuperhero(index) {
    let BusPassengers = JSON.parse(localStorage.getItem("BusPassengers"));
    BusPassengers.splice(index, 1);
    localStorage.setItem("BusPassengers", JSON.stringify(BusPassengers));
    display();
}

let updateIndex;

function copySuperhero(index) {
    let BusPassengers = JSON.parse(localStorage.getItem("BusPassengers"));
    updateIndex = index;
    let BusPassenger = BusPassengers[index];

    document.getElementById("upname").value = BusPassenger.name;
    document.getElementById("upsource").value = BusPassenger.source;
    document.getElementById("updestination").value = BusPassenger.destination;
    document.getElementById("upnumber").value = BusPassenger.number;
    document.getElementById("uppassenger").value = BusPassenger.passenger;
}

function updateSuperhero(e) {
    e.preventDefault();
    let BusPassengers = JSON.parse(localStorage.getItem("BusPassengers"));
    let BusPassenger = BusPassengers[updateIndex];
    console.log(BusPassenger);
    let name = document.getElementById("upname").value;
    let source = document.getElementById("upsource").value;
    let destination = document.getElementById("updestination").value;
    let number = document.getElementById("upnumber").value;
    let passenger = document.getElementById("uppassenger").value;
    BusPassenger.name = name;
    BusPassenger.source = source;
    BusPassenger.destination = destination;
    BusPassenger.number = number;
    BusPassenger.passenger = passenger;

    localStorage.setItem("superheroes", JSON.stringify(BusPassengers));
    display(BusPassengers);

    // code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
}

function showModal(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";

    copySuperhero(index);
}

function hideModal(event) {
    if (event.target.className == "modal") {
        let modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";
    }
}