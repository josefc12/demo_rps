document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    
    const btn_r = document.querySelector('#btn_rock');
    const btn_p = document.querySelector('#btn_paper');
    const btn_s = document.querySelector('#btn_scissors');
    const btns=[btn_r,btn_p,btn_s];

    const p = document.querySelector("#panswer");
    const pc = document.querySelector("#pcanswer");
    
    const pscorelabel = document.querySelector("#pscorelabel");
    const pcscorelabel = document.querySelector("#pcscorelabel");
    
    const eval = document.querySelector("#eval");

    let pscore = 0;
    let pcscore = 0;

    //Press start
    btn.addEventListener('click', () => {
        btn.style.display = "none";
        showOptions();
    });
    //Press one of the three buttons to pick R, P or S
    btns.forEach((button) => {
        button.addEventListener('click', () => {
            //Generate random PC answer
            let ainswer = generateAIOption();
            //Edit the paragraphs that show answers
            p.innerHTML = `Your pick: ${button.textContent}`;
            pc.innerHTML = `AI pick: ${ainswer}`;
            //Edit the paragraph that shows result evaluation
            eval.innerHTML = `Result: ${resultEval(button,ainswer)}`;
            //Edit score display
            pscorelabel.innerHTML = `Player score: ${pscore}`;
            pcscorelabel.innerHTML = `PC score: ${pcscore}`;

        });
    })
    //Function that unhides the three button elements
    function showOptions(){
        btns.forEach((button) =>{
          button.style.display = 'flex';  
        })
    }
    //Function that generates random PC pick
    function generateAIOption(){
        switch (Math.floor(Math.random() * 3)){
            case 0:
                aianswer = "ROCK";
                break;
            case 1:
                aianswer = "PAPER";
                break;
            case 2:
                aianswer = "SCISSORS";
                break;
        }
        return aianswer
    }
    //Function that evaluates who won and adds score
    function resultEval(p1,p2){
        const pwins = "PLAYER WINS";
        const pcwins = "PC WINS";
        const smate = "STALE MATE";

        //PLAYER WIN CONDITION
        if ((p1.textContent == "ROCK" && p2 == "SCISSORS") ||
        (p1.textContent == "PAPER" && p2 == "ROCK") ||
        (p1.textContent == "SCISSORS" && p2 == "PAPER"))
        {
            pscore = pscore + 1
            return pwins;
        } else if (p1.textContent == p2){
            return smate;
            //STALE MATE CONDITION
        } else {
            pcscore = pcscore + 1
            return pcwins;
            //PC WINS
        };
    }
});