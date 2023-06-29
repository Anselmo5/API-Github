function Registra(){
    event.preventDefault();
    const username = document.getElementById('receber').value;
    fetch(`https://api.github.com/users/${username}`) //Api gitHub
    .then(res => res.json())    
    .then(data =>{
            const prof = document.getElementById('prof');
            prof.innerHTML = `
                <a href="${data.html_url}"><img src="${data.avatar_url}"></a>   
                <div>
                    <p> Nome: ${data.name}</p>
                    <p>Seguidores: ${data.followers}</p>
                    <p>Seguindo: ${data.following}</p>
                    <p>Repositórios:${data.public_repos}</p>
                    <p>Twitter: @${data.twitter_username}</p>
                </div>
                `; 
             })
            }