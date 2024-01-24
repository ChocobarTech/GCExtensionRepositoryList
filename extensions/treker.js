const myTab = new Tab('hengker treker', 'https://img.freepik.com/premium-vector/hacker-team-esport-logo_177315-79.jpg', 'treker', 'hengker treker');

const container = document.createElement('div');

const header = document.createElement('h1');
header.innerHTML = 'Hengker treker (REAL 100%) <br>';

const textBox = document.createElement('input');
textBox.type = 'text';
textBox.classList.add('text')
textBox.placeholder = 'enter github user for heking';

const infoContainer = document.createElement('div');
infoContainer.innerHTML = ''
/*
{
  "login": "SerialDesignatorN",
  "id": 58360911,
  "node_id": "MDQ6VXNlcjU4MzYwOTEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/58360911?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SerialDesignatorN",
  "html_url": "https://github.com/SerialDesignatorN",
  "followers_url": "https://api.github.com/users/SerialDesignatorN/followers",
  "following_url": "https://api.github.com/users/SerialDesignatorN/following{/other_user}",
  "gists_url": "https://api.github.com/users/SerialDesignatorN/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SerialDesignatorN/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SerialDesignatorN/subscriptions",
  "organizations_url": "https://api.github.com/users/SerialDesignatorN/orgs",
  "repos_url": "https://api.github.com/users/SerialDesignatorN/repos",
  "events_url": "https://api.github.com/users/SerialDesignatorN/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SerialDesignatorN/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Zean",
  "company": "Chocobar Technologies Inc.",
  "blog": "https://zeankundev.github.io",
  "location": "Indonesia",
  "email": null,
  "hireable": null,
  "bio": "elo",
  "twitter_username": "ZeanKunDevRil",
  "public_repos": 58,
  "public_gists": 4,
  "followers": 5,
  "following": 8,
  "created_at": "2019-11-30T11:21:15Z",
  "updated_at": "2024-01-18T02:33:30Z"
}
*/
textBox.onchange = () => {
    fetch(`https://api.github.com/users/${textBox.value}`)
    .then(res => res.json())
    .then(data => {
        infoContainer.innerHTML = `
        <img src="${data.avatar_url}" style="width: 200px !important"><br>
        Username: ${data.login}<br>
        URL: <p onclick="const newWin = new GCWindowInitializer('${data.html_url}'); newWin.OpenWindow();">${data.html_url}</p><br>
        Type: ${data.type}<br>
        Name: ${data.name}<br>
        Company: ${data.company}<br>
        Is site admin? ${data.site_admin}<br>
        Location: ${data.location}<br>
        Twitter: <p onclick="const newWin = new GCWindowInitializer('https://twitter.com/${data.twitter_username}'); newWin.OpenWindow()">${data.twitter_username}</p><br>
        <br>
        <reg-head>it's now doxxed. <h1>CONGRATULATIONS</h1></reg-head>
        `
    })
}

container.appendChild(header)
container.append(textBox)
container.append(infoContainer)
myTab.buildDiv(container)