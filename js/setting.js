import {quiz} from "./quiz.js";
export class setting{
    constructor(){
      
       this.number = 10;
       document.getElementById("start").addEventListener("click",() => {
        this.startquestion()
        
       })
    }
    async startquestion(){
        let x = document.getElementById("category").value
        let z = document.querySelector("[name = 'radio1']:checked").value;
        let s = document.getElementById("amount")

        if(s.value>0){
            const apiiresponsse =await this.getapi(x,z,s.value)
     
        $("#setting").removeClass("show")
        $("#quiz").addClass("show");
       
        const quizz = new quiz(apiiresponsse)
        }
        else{
            $("#alertNumber").show()
        }
       
}

async getapi(ca,che,amo){
    const apii = await fetch(`https://opentdb.com/api.php?amount=${amo}&category=${ca}&difficulty=${che}`)
    const apiiresponse = await apii.json()
    return apiiresponse.results
}
}
let s =document.getElementById('amount')
s.addEventListener('input',function(){
    if(this.value>0){
        $("#alertNumber").fadeOut(500)
    }
})
