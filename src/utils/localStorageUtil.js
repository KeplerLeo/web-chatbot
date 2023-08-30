import SecureLS from "secure-ls";

const ls = new SecureLS({ encodingType: 'aes'});

export const creatingUser = (username) => {
    const user = {
        username: username,
        password: null,
    }

    ls.set('user', user);
}

export const creatingPassword = (password) => {
    const user = ls.get('user');

    user.password = password;

    ls.set('user', user);

    return user.username;
}
