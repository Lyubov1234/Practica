let data = [];
const submitBtn = document.querySelector("#sumbitbtn");
const userList = document.querySelector("#user-list");
const deleteBtn = document.querySelector("#deletebtn");



submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name");
  const surame = document.querySelector("#surname");
  const age = document.querySelector("#age");



if ( name.value=="" || 
  surame.value =="" || 
  age.value =='') {
    alert("Заполните пустое поле ");
  ;
  return false;
  }

  const user = {
    id: Date.now(),
    name: name.value,
    surname: surame.value,
    age: age.value,
  };

  data.push(user);

  userList.innerHTML = "";

  data.forEach((item, index) => {
    userList.innerHTML += `<tr id=${item.id}>
  <td>${index + 1}</td>
  <td>${item.name}</td>
  <td>${item.surname}</td>
  <td>${item.age}</td>
  </tr>
  `;
  });
});


deleteBtn.addEventListener("click", () => {
  userList.innerHTML = "";
});
