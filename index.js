const name = ["Milo", "Otis", "Garfield"];

function Thanks(name) {
    let messages = [];
    for (let i = 0;i < name.length; i++ ) {
         messages.push(`Thank you, ${name[i]}, for the opportunity`);
    }
    return messages;
}