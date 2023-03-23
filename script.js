const API_URL = 'https://space-dropsov.net/api/v1';

let user;

enc = new TextEncoder();

fetch(`${API_URL}/usersCount`).then((res) => {
    res.json().then(({ data }) => {
        document.querySelector('#users-count').innerHTML = data.usersCount;
    });
});


function onTelegramAuth(user) {
    user = user;

    const userRefId = Base58.encode(enc.encode(user.id));

    fetch(`${API_URL}/users/${userRefId}`).then((res) => {
        res.json().then(({ data }) => {
            document.querySelector("#welcome").classList.add("hidden");
            document.querySelector("#cabinet").classList.remove("hidden");
            document.querySelector("#referral-link").innerHTML = `твоя реферральная ссылка: ${location.origin}/?ref=${userRefId}`;
            if (!data.user) {
                fetch(
                    `${API_URL}/users/)}`,
                    {
                        method: POST,
                        body: JSON.stringify({
                            "referralId": userRefId,
                            "userName": user.username
                        })
                    })
                    .then((res) => {
                        const searchParams = new URLSearchParams(location.search);
                        const refId = searchParams.get("ref");
                        if (refId) {
                            fetch(
                                `${API_URL}/users/)}`,
                                {
                                    method: PATCH,
                                    body: JSON.stringify({
                                        "referralId": refId,
                                        "userName": user.username
                                    })
                                })
                                .then((res) => {

                                });
                        }

                    });
            } else {
                console.log(data.user);
                document.querySelector('#referrals').innerHTML = data.user.referrals.map(ref => `<div>${ref.userName}</div>`)
            }
        });
    });
}
