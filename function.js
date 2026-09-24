let score =JSON.parse(localStorage.getItem('score'))||{
            win:0,
            losses:0,
            ties:0
        };

        function updateScore(){ document.querySelector('.js-score').innerHTML=`wins:${score.win}  loses:${score.losses}  tie:${score.ties}`; 
    }
        updateScore();
        let computerMove='';


        function playGame(playerMove ){
            let randomNumber= Math.random();
            if(randomNumber>=0 && randomNumber<=1 / 3){
       computerMove = 'rock';
    }
    else if(randomNumber>= 1 / 3 && randomNumber<=2 / 3){
       computerMove = 'paper';
    }
    else if(randomNumber>= 2 / 3 && randomNumber<= 1){
      computerMove = 'scissor';
    }
    console.log('computer chose :',computerMove);  
    let result ='';
    if(computerMove===playerMove){
     result = 'tie';
    }
    else if(
        (playerMove==='rock'&&computerMove==='scissor')|| (playerMove==='paper'&&computerMove==='rock')|| (playerMove==='scissor'&&computerMove==='paper')){
            result ='you win';

        }
        else{
            result='you lose';
        }
        if(result==='you win'){
            score.win+=1;
        }
        else if(result==='you lose'){
            score.losses+=1;
        }
        else if(result==='tie'){
            score.ties+=1;
        }
         
    localStorage.setItem('score', JSON.stringify(score));
    
    updateScore();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You
        <img src="${playerMove}-emoji.png" class="css-icon">
        <img src="${computerMove}-emoji.png" class="css-icon">
        computer
        `;

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. Result: ${result}
wins: ${score.win}, loses: ${score.losses} ,ties: ${score.ties}`);
        }
       