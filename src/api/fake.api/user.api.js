

const users = [
    // {
    //     id: "0",
    //     fistName: "Alexander",
    //     lastName: "Leslie ",
    //     year: "1999",
    //     portfolioUrl: "http://ya.ru",
    // },
    // {
    //     id: "1",
    //     fistName: "Alexander",
    //     lastName: "Leslie ",
    //     year: "1999",
    //     portfolioUrl: "http://ya.ru",
    // },
    // {
    //     id: "2",
    //     fistName: "Alexander",
    //     lastName: "Leslie ",
    //     year: "1999",
    //     portfolioUrl: "http://ya.ru",
    // },
    // {
    //     id: "3",
    //     fistName: "Alexander",
    //     lastName: "Leslie ",
    //     year: "1999",
    //     portfolioUrl: "http://ya.ru",
    // },
];
function initLocalStor() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(users));
    }
}
initLocalStor();


const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")));
        }, 1000);
    });
const update = (data) =>
    new Promise((resolve) => {
        const users = JSON.parse(localStorage.getItem("users"));
        const userIndex = users.findIndex((u) => u.id === data.id);
        users[userIndex] = { ...users[userIndex], ...data };
        localStorage.setItem("users", JSON.stringify(users));
        resolve(users[userIndex]);
    });
const deleteUser = (id) =>
    new Promise((resolve) => {
        const users = JSON.parse(localStorage.getItem("users"));
        const userIndex = users.findIndex((u) => u._id === id);
        users.splice(userIndex, 1);
        localStorage.setItem("users", JSON.stringify(users));
        resolve(users);
    });
const addUser = (data) =>
    new Promise((resolve) => {
        const users = JSON.parse(localStorage.getItem("users"));
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        resolve(users);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (user) => user.id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update,
    deleteUser,
    addUser
};
