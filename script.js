let cardsArray = [
    {
        'name': 'MSD',
        'img': 'https://ik.imagekit.io/j83rchiauw/A_List_Star/ms-dhoni-biography.png',
    },
    {
        'name': 'Sachin',
        'img': 'https://www.cricwindow.com/images/sachin_tendulkar3.jpg',
    },
    {
        'name': 'Dada',
        'img': 'https://londonspeakerbureau.com/wp-content/uploads/2017/11/keynote-speaker-sourav-ganguly.png',
    },
    {
        'name': 'Rahul',
        'img': 'https://ik.imagekit.io/j83rchiauw/A_List_Star/dravid-biographyf-tring.png',
    },
    {
        'name': 'Kapil',
        'img': 'https://metaunfolded.com/wp-content/uploads/2021/12/Kapil-Dev-300x300.jpg',
    },
    {
        'name': 'Kohli',
        'img': 'https://im.rediff.com/300-300/cricket/2019/aug/15virat-ton.jpg',
    }
];


const parentDiv=document.querySelector('#card-section');

const gameCard=cardsArray.concat(cardsArray);

let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


//give border
let clickCount=0;
let firstCard="";
let secondCard="";

const card_matches=()=>{
    let card_select=document.querySelectorAll('.card_selected');

    card_select.forEach((el) => {
        el.classList.add('card-match');
    });
}

const resetGame=()=>{
    clickCount=0;
    firstCard="";
    secondCard="";
    let card_select=document.querySelectorAll('.card_selected');

    card_select.forEach((el) => {
        el.classList.remove('card_selected');
    });
}

parentDiv.addEventListener('click',(event)=>{
    let curcard=event.target;
    if(curcard.id==="card-section")return false;
    clickCount++;
    if(clickCount<3){
        // curcard.classList.add('card_selected');
        // clickCount++;
        if(clickCount===1){
            firstCard=curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected');
        }
        else{
            secondCard=curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected');
        }

        if(firstCard!=="" && secondCard!==""){
            if(firstCard===secondCard){
                // curcard.classList.add('card-match');
                setTimeout(()=>{
                    card_matches();
                    resetGame();
                },500)
                
            } 
            else{
                setTimeout(()=>{
                    resetGame();
                },500)
            }
        }
    }

})

for(let i=0;i<shuffledChild.length;i++){
    const childDiv=document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name=shuffledChild[i].name;
    

    const front_div=document.createElement('div');
    front_div.classList.add('front-card');

    const back_div=document.createElement('div');
    back_div.classList.add('back-card');

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;
    
    parentDiv.appendChild(childDiv);

    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);

}
