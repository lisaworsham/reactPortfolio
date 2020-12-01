import critterSitterImg from "../pictures/crittersitter.PNG"
import litWineImg from "../pictures/litandwine.png"
import noteTakerImg from "../pictures/notetaker.PNG"

const projects = [
    {
        "id": 1,
        "projectName": "CRITTER SITTER",
        "exampleImg": critterSitterImg,
        "summary": "A dashboard to help keep pet owners in touch with their pet sitter while they are on a trip.",
        "githubLink": "https://github.com/lisaworsham/CritterSitter",
        "deployedLink": "https://crittersitterapp.herokuapp.com/"
    },
    {
        "id": 2,
        "projectName": "LIT & WINE",
        "exampleImg": litWineImg,
        "summary": "A web application that allows a user who wishes to read a book while having a glass of wine paired with it.",
        "githubLink": "https://github.com/lisaworsham/Lit-Wine.git",
        "deployedLink": "https://lisaworsham.github.io/Lit-Wine/"
    },
    {
        "id": 3,
        "projectName": "NOTE TAKER",
        "exampleImg": noteTakerImg,
        "summary": "The purpose of this website is to provide a notetaker app where the user can take notes, store them and then delete them once the task is done. It is to test how I can GET, POST and DELETE something server side with express. And it is deployed via Heroku.",
        "githubLink": "https://github.com/lisaworsham/noteTaker",
        "deployedLink": "https://nameless-sands-33784.herokuapp.com/"
    }
];

export default projects;