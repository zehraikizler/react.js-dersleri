document.getElementById("button").addEventListener("click", getData);

function getData() {
  fetch("https://randomuser.me/api/?results=20")
    .then((res) => res.json())
    .then((data) => {
      let author = data.results;
      let output = "<h2><center>Users</center></h2>";

      let sortAuthor = author.sort(function (a, b) {
        return a.dob.age - b.dob.age;
      });

      sortAuthor.forEach(function (lists) {
        if (lists) {
          output += `
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="card p-1 mt-4 bg-light">
                        <ul class="list-group text-center">
                            <li class="list-group-item text-secondary"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img class="rounded-circle" src="${lists.picture.large}"></li>
                            <li class="list-group-item">Phone Number: ${lists.cell}</li>
                            <li class="list-group-item">DOB: ${lists.dob.date}</li>
                            <li class="list-group-item">Age: ${lists.dob.age}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                            
                        </ul>
                    </div>
                </div> `;
        } else console.log("Veri Yok");
      });

      document.getElementById("output").innerHTML = output;
    });
}
