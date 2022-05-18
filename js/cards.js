let teamContainer;

let createTeamCard = (team) => {

    let col =  document.createElement('div');
    col.className = 'col-lg-3 col-md-3 col-sm-4 col-6 mb-4';

    let card = document.createElement('div');
    card.className = 'card bg-black border-team h-100';

    let image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = "./assets/img/team/player/" + team.image;


    let cardBody = document.createElement('div');
    cardBody.className = 'card-body text-white';

    let title = document.createElement('h4');
    title.innerText = team.firstName + " " + team.lastName;
    title.className = 'card-title';

    let text = document.createElement('div');
    // text.innerText = "Position: " + team.position + " Nummer: " + team.number;
    text.className = 'card-text';

    let row = document.createElement('div');
    row.className = 'row';

    let colPosition = document.createElement('div');
    colPosition.innerText = "Position: " + team.position;
    colPosition.className = 'col-8 my-auto';

    let colNumber = document.createElement('div');
    colNumber.innerText = "# " + team.number;
    colNumber.className = 'col-4 text-end text-graduate fs-4';

    row.appendChild(colPosition);
    row.appendChild(colNumber);
    text.appendChild(row);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    card.appendChild(image);
    card.appendChild(cardBody);
    col.appendChild(card);
    teamContainer.appendChild(col);

}

let initListOfPlayers = () => {
if (teamContainer) {
    document.getElementById('team-container').replaceWith(teamContainer);
    return;
}

teamContainer = document.getElementById('team-container');
team.forEach((player) => {
    createTeamCard(player);
});
};

initListOfPlayers();


let coachContainer;

let createCoachCard = (coach) => {

    let col =  document.createElement('div');
    col.className = 'col-lg-3 col-md-3 col-sm-4 col-6 mb-4';

    let card = document.createElement('div');
    card.className = 'card bg-black border-team h-100';

    let image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = "./assets/img/team/coach/" + coach.image;


    let cardBody = document.createElement('div');
    cardBody.className = 'card-body text-white';

    let title = document.createElement('h4');
    title.innerText = coach.firstName + " " + coach.lastName;
    title.className = 'card-title';

    let text = document.createElement('div');
    // text.innerText = "Position: " + coach.position + " Nummer: " + coach.number;
    text.className = 'card-text';

    let position = document.createElement('div');
    position.innerText = "Coach: " + coach.position;

    text.appendChild(position);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    card.appendChild(image);
    card.appendChild(cardBody);
    col.appendChild(card);
    coachContainer.appendChild(col);

}

let initListOfCoaches = () => {
if (coachContainer) {
    document.getElementById('coach-container').replaceWith(coachContainer);
    return;
}

coachContainer = document.getElementById('coach-container');
coach.forEach((player) => {
    createCoachCard(player);
});
};

initListOfCoaches();