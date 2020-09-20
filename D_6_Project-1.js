let EmloyeeArray = [
    {
        name: 'Gaurav',
        age: 23,
        city: 'Patna',
        salary: 25000
    },
    {
        name: 'Prakash',
        age: 22,
        city: 'Patna city',
        salary: 20000
    },
    {
        name: 'Vivek',
        age: 25,
        city: 'Delhi',
        salary: 30000
    },
    {
        name: 'Saurabh',
        age: 26,
        city: 'Hyderabad',
        salary: 35000
    },
    {
        name: 'Vikash',
        age: 28,
        city: 'Pune',
        salary: 70000
    }
];

function DisplayArray(indexes) {
    let TbodyData = '';
    let row = 1;

    indexes.forEach(function (EmployeeArray, index) {
        let data = `<tr>
        
                  <td>${row}</td>
                 <td>${EmployeeArray.name}</td>
                 <td>${EmployeeArray.age}</td>
                 <td>${EmployeeArray.city}</td>
                 <td>${EmployeeArray.salary}</td>
                 <td><button onclick="DeleteData(${index})">Delete</button></td>

                  </tr>`;

        TbodyData += data;
        row++;

    });
    document.getElementsByClassName('tdata')[0].innerHTML = TbodyData;

};

DisplayArray(EmloyeeArray);


/*search employee by name*/
function searchData() {

    let searchName = document.querySelector('#name').value;
 let newData = EmloyeeArray.filter(function (EmployeeArray) {
      return(
          EmployeeArray.name.toUpperCase().indexOf(searchName.toUpperCase())!= -1
      );
      
  });
    DisplayArray(newData);

};


/*search City name*/
function searchCity() {

    let searchCity = document.querySelector('#city').value;
    let cityName = EmloyeeArray.filter(function (EmployeeArray) {
        return(
            EmployeeArray.city.toUpperCase().indexOf(searchCity.toUpperCase())!= -1
        );

    });
    DisplayArray(cityName);

};


/*delete existing employee data*/
function DeleteData(index) {
    EmloyeeArray.splice(index, 1);
    DisplayArray(EmloyeeArray);
}