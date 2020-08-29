let ttt={
    'you':{
        'scorespan':'#ytr',
        'div': '#ytb',
        },
    'bot': {
        'scorespan': '#btr',
        'div': '#btb',
        },
        'box':["bb1","bb2","bb3","bb4","bb5","bb6","bb7","bb8","bb9"],
        'boxb':["b1","b2","b3","b4","b5","b6","b7","b8","b9"],
        'boxo':["bb1","bb2","bb3","bb4","bb5","bb6","bb7","bb8","bb9"],
        'boxbo':["b1","b2","b3","b4","b5","b6","b7","b8","b9"],
        'alp':["a","b","c","d","e","f","g","h","i"],
    "a":0,
    "b":0,
    "c":0,
    "d":0,
    "e":0,
    "f":0,
    "g":0,
    "h":0,
    "i":0,
    "cy":false,
    "cb":false,
    'Botscore':0,
    'yourscore':0,
}

function ticbox1(){
    let tic= event.srcElement.id;
    let tac=ttt.boxb.indexOf(tic);
    let toe=ttt.box[tac];
    let tics=ttt.alp[tac];
    let tacs=ttt.boxbo.indexOf(tic);
    console.log(tacs);
    console.log(tic);
    console.log(tac);
    if(ttt['cy']===false){
    document.getElementById(tic).remove();  
    const ticimg=document.createElement('img');
    ticimg.src="X.png";
    ticimg.className=`image${tacs}`;
    ticimg.id=`b${tacs+1}`;
    document.getElementById(toe).appendChild(ticimg);    
     ttt['cy']=true;    
     ttt['cb']=false;    
     ttt[tics]=1;   
     let split=ttt['box'].splice(tac,1);
     let splito=ttt['boxb'].splice(tac,1);
     let spolit=ttt['alp'].splice(tac,1);
     if(ttt.box.length!==0){
     let rannum = Math.floor(Math.random() * ttt['box'].length);
     botticbox(rannum,rannum);}
     else if(ttt.box.length===0){
        calcwinner();
        refresh();
     }
}
}

function botticbox(alphab,rand){
    if(ttt['cb']===false){
    ttt['cy']=false;
    ttt['cb']=true;
    let boom=ttt.alp[alphab];
    ttt[boom]=2;
    let botb=ttt['box'][rand];
    let botob=ttt['boxb'][rand];
    let botobs=ttt['boxbo'].indexOf(botob)
    document.getElementById(botob).remove();  
    const ticimg=document.createElement('img');
    ticimg.src="O.png";
    ticimg.className=`image${botobs}`
    ticimg.id=`b${botobs+1}`
    document.getElementById(botb).appendChild(ticimg);
    let split=ttt['box'].splice(rand,1);
    let splito=ttt['boxb'].splice(rand,1);
    let spolit=ttt['alp'].splice(rand,1);
    }   
    calcwinner();
}
function calcwinner(){
    if((ttt.a===1)&&(ttt.b===1)&&(ttt.c===1)){
      ttt.yourscore++;
      document.getElementById("ytr").innerHTML=ttt.yourscore;
    refresh();  
    }
      else if((ttt.a===1)&&(ttt.e===1)&&(ttt.i===1)){
        ttt.yourscore++;
        document.getElementById("ytr").innerHTML=ttt.yourscore;
        refresh();
      
    }
      else if((ttt.a===1)&&(ttt.d===1)&&(ttt.g===1)){
           ttt.yourscore++;
           document.getElementById("ytr").innerHTML=ttt.yourscore;
           refresh();
      }
      else if((ttt.b===1)&&(ttt.e===1)&&(ttt.h===1)){
           ttt.yourscore++;
           document.getElementById("ytr").innerHTML=ttt.yourscore;

           refresh();      }
      else if((ttt.c===1)&&(ttt.f===1)&&(ttt.i===1)){
           ttt.yourscore++;
           document.getElementById("ytr").innerHTML=ttt.yourscore;
      
    refresh();}
      else if((ttt.c===1)&&(ttt.e===1)&&(ttt.g===1)){
           ttt.yourscore++;
           document.getElementById("ytr").innerHTML=ttt.yourscore;
      
    refresh();}
      else if((ttt.d===1)&&(ttt.e===1)&&(ttt.f===1)){
           ttt.yourscore++;
           document.getElementById("ytr").innerHTML=ttt.yourscore;
      
    refresh();}
      else if((ttt.g===1)&&(ttt.h===1)&&(ttt.i===1)){
           ttt.yourscore++;
           document.getElementById("ytr").innerHTML=ttt.yourscore;
      
    refresh();}
        else if((ttt.a===2)&&(ttt.b===2)&&(ttt.c===2)){
        ttt.Botscore++;
        document.getElementById("btr").innerHTML=ttt.Botscore;
        
    refresh();}
        else if((ttt.a===2)&&(ttt.e===2)&&(ttt.i===2)){
          ttt.Botscore++;
          document.getElementById("btr").innerHTML=ttt.Botscore;
       
    refresh(); }
        else if((ttt.a===2)&&(ttt.d===2)&&(ttt.g===2)){
             ttt.Botscore++;
             document.getElementById("btr").innerHTML=ttt.Botscore;
        
    refresh();}
        else if((ttt.b===2)&&(ttt.e===2)&&(ttt.h===2)){
             ttt.Botscore++;
             document.getElementById("btr").innerHTML=ttt.Botscore;
       
    refresh(); }
        else if((ttt.c===2)&&(ttt.f===2)&&(ttt.i===2)){
             ttt.Botscore++;
             document.getElementById("btr").innerHTML=ttt.Botscore;
        
    refresh();}
        else if((ttt.c===2)&&(ttt.e===2)&&(ttt.g===2)){
             ttt.Botscore++;
             document.getElementById("btr").innerHTML=ttt.Botscore;
        
    refresh();}
        else if((ttt.d===2)&&(ttt.e===2)&&(ttt.f===2)){
             ttt.Botscore++;
             document.getElementById("btr").innerHTML=ttt.Botscore;
        
    refresh();}
        else if((ttt.g===2)&&(ttt.h===2)&&(ttt.i===2)){
            document.getElementById("btr").innerHTML=ttt.Botscore;
             ttt.Botscore++;
        refresh();
            }
        
     console.log("your points: "+ttt.yourscore);
     console.log("Bot points: "+ttt.Botscore);
}
function refresh(){
    for(i=0;i<9;i++){
        let clsn=document.getElementById(`b${i+1}`).className;
     if(clsn===`image${i}`){  
    document.getElementById(`b${i+1}`).remove();
    var btn=document.createElement('button');
    btn.id=`b${i+1}`;
    btn.className="btn btn-light";
    ttt.box=["bb1","bb2","bb3","bb4","bb5","bb6","bb7","bb8","bb9"];
    ttt.boxb=["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
    ttt.boxo=["bb1","bb2","bb3","bb4","bb5","bb6","bb7","bb8","bb9"];
    ttt.boxbo=["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
    ttt.alp=["a","b","c","d","e","f","g","h","i"];
    btn.setAttribute('onclick', 'ticbox1()')
    document.getElementById(`bb${i+1}`).appendChild(btn);  
    ttt.cb=false;
    ttt.cy=false;
    ttt.a=0;  
    ttt.b=0;  
    ttt.c=0;  
    ttt.d=0;  
    ttt.e=0;  
    ttt.f=0;  
    ttt.g=0;  
    ttt.h=0;  
    ttt.i=0;
    
} 
}
    }