
    function checking() {
      var x = document.getElementById('myCheck').checked;
     
      if (x==true){
         document.getElementById('demo').innerHTML='';
      }
    else document.getElementById('demo').innerHTML="1. [SECTION: Title Name] The title name of the opp does NOT tell what they're selling clearly and in a engaging way";
     
      let extraNotes= document.getElementById('extraNotes');
      let answer1 = document.getElementById('answer1').value;
       
            extraNotes.textContent=` ${answer1}`;
    
            //second question 
    
            var a = document.getElementById('myCheck1').checked;
     
     if (a==true){
        document.getElementById('demo1').innerHTML='';
     }
    else document.getElementById('demo1').innerHTML='2. [SECTION: Short summary] The short summary DOES NOT tell me who the company is, and what they do. What their product or service is and the solution it provides. Who their ideal clients are and who sales agents would be selling to.';
    
     let extraNotes2= document.getElementById('extraNotes2');
     let answer2 = document.getElementById('answer2').value;
      
           extraNotes2.textContent=` ${answer2}`;
    
    
    
           var b = document.getElementById('myCheck2').checked;
     
     if (b==true){
        document.getElementById('demo2').innerHTML='';
     }
    else document.getElementById('demo2').innerHTML='3. [SECTION: USP] The company is NOT stating a 3 bullet point Unique Selling Propositions clearly identifiable as something that stands out (or goes above and beyond) from industry standards. (For example NOT explaining how they are a more efficient way of producing or providing something.) Or they are not justifying with a clear benefit why they are good at what they do or each point is clear from another.';
    
     let extraNotes3= document.getElementById('extraNotes3');
     let answer3 = document.getElementById('answer3').value;
      
           extraNotes3.textContent=` ${answer3}`;
    
    
           var c = document.getElementById('myCheck3').checked;
     
     if (c==true){
        document.getElementById('demo3').innerHTML='';
     }
    else document.getElementById('demo3').innerHTML='4. [SECTION: Commission details] They have NOT explained their commission details clearly and well.';
    
     let extraNotes4= document.getElementById('extraNotes4');
     let answer4 = document.getElementById('answer4').value;
      
           extraNotes4.textContent=` ${answer4}`;
    
    
           var d = document.getElementById('myCheck4').checked;
     
     if (d==true){
        document.getElementById('demo4').innerHTML='';
     }
    else document.getElementById('demo4').innerHTML='5. [SECTION: About the opportunity]In their About Opportunity section, they have NOT clearly explained a defined need, problem, or void that isn\'t being filled. An insightful explanation of the company: i.e. who they are and what they do. A clear explanation of the solution, along with the benefits it provides (the latter is contextual)';
    
     let extraNotes5= document.getElementById('extraNotes5');
     let answer5 = document.getElementById('answer5').value;
      
           extraNotes5.textContent=` ${answer5}`;
    
    
    
           var e = document.getElementById('myCheck5').checked;
     
     if (e==true){
        document.getElementById('demo5').innerHTML='';
     }
    else document.getElementById('demo5').innerHTML='6. [SECTION: Why should self-employed sales professionals consider working with this company] In their, why should sales agent work with them section, there is NO clear pitch made by the company - i.e. the company saying great things about themselves in a justified fashion. A clear indication of earning potential. The company must also highlight some key core values that would strengthen a business relationship: honesty, integrity, customer service etc.';
    
     let extraNotes6= document.getElementById('extraNotes6');
     let answer6 = document.getElementById('answer6').value;
      
           extraNotes6.textContent=` ${answer6}`;
    
    
    
           var f = document.getElementById('myCheck6').checked;
     
     if (f==true){
        document.getElementById('demo6').innerHTML='';
     }
    else document.getElementById('demo6').innerHTML='7. [SECTION: What kind of self-employed sales professional is best suited to this opportunity] They have not explained any favourable aspects that might come as an advantage to the agent. This could include: - Having a particular level of stakeholder (and above) within an organisation in their network of contacts, or even having contacts at all; - Having experience in communicating with a particular level stakeholder and above; - Generally favourable attributes such as a great attitude, motivated/driven etc. A clear indication of the type of agents might find the sales opportunity interesting.';
    
     let extraNotes7= document.getElementById('extraNotes7');
     let answer7 = document.getElementById('answer7').value;
      
           extraNotes7.textContent=` ${answer7}`;
    
           
    }
    
    let checker =document.getElementById("btn");
    
    checker.addEventListener("click", checking);
     
