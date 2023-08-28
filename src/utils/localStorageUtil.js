export const creatingUser = (username) => {
    const user = {
        username: username,
        password: null,
    }

    localStorage.setItem('user', JSON.stringify(user));
}

export const creatingPassword = (password) => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.password = password;
    localStorage.setItem('user', JSON.stringify(user));
    return user.username;
}