const login = (userEmail, password) => {
  let usersLocalStorage = JSON.parse(localStorage.getItem("users"));
  let found = usersLocalStorage.filter((item) => {
    return item.email === userEmail;
  });
  if (found[0]) {
    if (found[0].email === userEmail && found[0].password === password) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};
const singUp = (githudName, userEmail, password) => {
  let aux = JSON.parse(localStorage.getItem("users"));
  aux[aux.length] = [
    {
      githudName: githudName,
      email: userEmail,
      password: password,
    },
  ];
  localStorage.setItem("users", JSON.stringify(aux));
};
const saveLocalStorageInitial = () => {
  if (!JSON.parse(localStorage.getItem("users"))) {
    let users = [
      {
        githudName: "krisyupher",
        email: "hellobuild@hb.com",
        password: "pass123",
      },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }
};
saveLocalStorageInitial();

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, singUp };
