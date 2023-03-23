const API_URL = 'http://localhost:4000/api/v1';

let user;

enc = new TextEncoder();

fetch(`${API_URL}/usersCount`).then((res) => {
    res.json().then(({ data }) => {
        document.querySelector('#users-count').innerHTML = data.usersCount;
    });
});

fetch(`${API_URL}/users/${Base58.encode(enc.encode('832611w37'))}`).then((res) => {
    res.json().then(({ data }) => {
        console.log(data);
    });
});

function onTelegramAuth(user) {
    user = user;

    const newDiv = document.createElement('div');

    const userString =
        'Logged in as ' +
        user.first_name +
        ' ' +
        user.last_name +
        ' (' +
        user.id +
        (user.username ? ', @' + user.username : '') +
        ')';

    fetch(`${API_URL}/users/${Base58.encode(enc.encode(user.id))}`).then((res) => {
        res.json().then(({ data }) => {
            if (!data.user) {
                fetch(
                    `${API_URL}/users/)}`,
                    {
                        method: POST,
                        body: JSON.stringify({
                            "referralId": Base58.encode(enc.encode(user.id)),
                            "userName":userName
                        })
                    })
                    .then((res) => {});
            } else {
                console.log('ee')
            }
        });
    });
}
