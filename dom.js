var ascending = true;
let file = [
  { Name: "Siri", Gender: "female", Location: "Hyderabad" },
  { Name: "Sayantan", Gender: "male", Location: "Bangalore" },
  { Name: "Soumil", Gender: "male", Location: "Chennai" },
];
function generateTableHead(table, data) {
  let row = document.createElement("tr");

  for (let key of data) {
    let th = document.createElement("th");
    if (key === "Name") {
      th.className = "hello";
    }
    if (key === "Gender") {
      th.className = "hello1";
    }
    if (key === "Location") {
      th.className = "hello2";
    }
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
    table.appendChild(row);
  }

  let Name = document.querySelector(".hello");
  Name.addEventListener("click", () => {
    console.log("done");
    if (ascending === true) {
      sortedArray = file.sort((a, b) => {
        console.log(a);
        console.log(b);
        return a["Name"].localeCompare(b["Name"]);
      });
      ascending = false;
    } else {
      sortedArray = file.sort((a, b) => {
        return b["Name"].localeCompare(a["Name"]);
      });
      ascending = true;
    }
    generateTable(table, sortedArray);
  });
  let Name1 = document.querySelector(".hello1");
  Name1.addEventListener("click", () => {
    console.log("done");
    if (ascending === true) {
      sortedArray = file.sort((a, b) => {
        console.log(a);
        console.log(b);
        return a["Gender"].localeCompare(b["Gender"]);
      });
      ascending = false;
    } else {
      sortedArray = file.sort((a, b) => {
        return b["Gender"].localeCompare(a["Gender"]);
      });
      ascending = true;
    }
    generateTable(table, sortedArray);
  });
  let Name2 = document.querySelector(".hello2");
  Name2.addEventListener("click", () => {
    console.log("done");
    if (ascending === true) {
      sortedArray = file.sort((a, b) => {
        console.log(a);
        console.log(b);
        return a["Location"].localeCompare(b["Location"]);
      });
      ascending = false;
    } else {
      sortedArray = file.sort((a, b) => {
        return b["Location"].localeCompare(a["Location"]);
      });
      ascending = true;
    }

    generateTable(table, sortedArray);
  });
}
function hidePersons() {
  for (let i = table.children.length - 1; i > 0; i--) {
    if (table.children[i].tagName === "TR") {
      table.children[i].remove();
    }
  }
}
const search = document.querySelector(".search input");

search.addEventListener("input", (e) => {
  console.log(e.target.value);
  let searchResult = [];
  console.log(searchResult);
  if (e.target.value) {
    // create reg expression
    let query = new RegExp(e.target.value, "i");
    console.log(query);
    file.map((person) => {
      console.log(person);
      for (let key in person) {
        if (query.test(person[key])) {
          console.log(person[key]);
          console.log(searchResult);
          searchResult.push(person);
          console.log(searchResult);
          break;
        }
      }
    });

    generateTable(table, searchResult);
  } else {
    generateTable(table, file);
    searchResult = [];
  }
});
function generateTable(table, data) {
  hidePersons();
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(file[0]);
generateTableHead(table, data);
generateTable(table, file);
