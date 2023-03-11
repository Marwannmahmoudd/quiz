export  class quiz{

    constructor(reult){
this.result = reult
this.currentindex = 0;
this.correctanswer;
document.getElementById("to").innerText = this.result.length
this.showquestion()
document.getElementById("nextQuestion").addEventListener("click",this.nextquestion.bind(this))
document.getElementById("end").addEventListener("click",function(){
    location.reload();
})
this.audio = new Audio("audio/صوت صح ✅✅ (128 kbps).mp3")
this.audio2 = new Audio("audio/صوت علامه خطأ للمونتاج (128 kbps)_1.mp3")
this.score = 0;
    }
    showquestion(){
        document.getElementById("from").innerText =  this.currentindex + 1
        const question = this.result[this.currentindex]
        document.getElementById("questionTitle").innerText = question.question
        const answers = [...question.incorrect_answers]
        this.correctanswer = question.correct_answer
        let randomnumber = Math.ceil(Math.random()*answers.length)
       answers.splice(randomnumber,0, this.correctanswer)
       console.log(answers,question);
       let answerbox = ``
       for(let i = 0 ;i<answers.length;i++){
answerbox +=` 
<li class="my-3 animate__animated">
<div class="pretty p-default p-round p-smooth p-plain">
   <input type="radio" name="answer" value="${answers[i]} ">
   <div class="state p-success-o">
      <label> ${answers[i]} </label>
   </div>
</div>
</li>`
       }
       document.getElementById("questionContent").innerHTML = answerbox
    }
    nextquestion(){
const currentanswer = document.querySelector('[name="answer"]:checked')?.value

if(currentanswer != undefined){
    $("#alertanswer").fadeOut(300)
    this.currentindex ++;
    if(this.currentindex > this.result.length -1){
        $("#quiz").removeClass("show")
        $("#finsish").addClass("show")
        document.getElementById("score").innerText=this.score;
          }
          else{
            console.log(currentanswer);
console.log(this.correctanswer);
            if(this.correctanswer.toString().trim() == currentanswer.toString().trim()){
              $('#Correct').fadeIn(300)
              $('#Correct').fadeOut(1500)
              this.audio.play()
              this.score ++;
              
            }
            else{
                $('#inCorrect').fadeIn(300)
                $('#inCorrect').fadeOut(1500)
                this.audio2.play()
            }
            this.showquestion()
          }
}else{
    $("#alertanswer").fadeIn(300)
    
   
 
 
}

    }
}
document.getElementById("amount").addEventListener("input",function(){
    if(this.value > 50){
        $("#limit").fadeIn(300)
    }
    if(this.value <= 50){
        $("#limit").fadeOut(300)
    }
})