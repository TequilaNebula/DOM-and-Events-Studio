// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    const takeoffBtn = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const landBtn = document.getElementById('landing');
    const abortBtn = document.getElementById('missionAbort');
    const upBtn = document.getElementById('up');
    const downBtn = document.getElementById('down');
    const leftBtn = document.getElementById('left');
    const rightBtn = document.getElementById('right');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocketIcon = document.getElementById('rocket');
    let shuttleHeightCounter = 0;

    takeoffBtn.addEventListener('click',function(){
        let takeoffConfirm = window.confirm('Are you abosolutely sure?');
        if(takeoffConfirm){
            shuttleHeightCounter += 10000
            flightStatus.innerHTML = ('Shuttle in flight');
            document.getElementById('shuttleBackground').style.backgroundColor = ('blue');
            shuttleHeight.innerHTML = shuttleHeightCounter;
            let location = parseInt(rocketIcon.style.bottom);
            location = location + 20 + 'px';
            rocketIcon.style.bottom = location
     
              };
     });
     
     landBtn.addEventListener('click',function(){
         window.alert('The shuttle is landing. Landing gear engaged.');
         flightStatus.innerHTML = 'The Shuttle Has Landed.';
         document.getElementById('shuttleBackground').style.backgroundColor = ('green');
         shuttleHeightCounter = 0;
         shuttleHeight.innerHTML = shuttleHeightCounter;
         rocketIcon.style.bottom = '0px'
     });
     
     abortBtn.addEventListener('click',function(){
         let abortConfirm = window.confirm('Confirm that you want to abort the mission.');
         if(abortConfirm){
             shuttleHeightCounter = 0
             flightStatus.innerHTML = ('Mission aborted.');
             document.getElementById('shuttleBackground').style.backgroundColor = ('red');
             shuttleHeight.innerHTML = shuttleHeightCounter;
             rocketIcon.style.bottom = '0px'
               };
      });
     
     upBtn.addEventListener('click',function(){
         let location = parseInt(rocketIcon.style.bottom);
         if(flightStatus.innerHTML == "Shuttle in flight"){
         if (location < 240){
         location = location + 20 + 'px';
         rocketIcon.style.bottom = location;
         shuttleHeightCounter += 10000;
         shuttleHeight.innerHTML = shuttleHeightCounter;
         }
         }
     })
     
     
     downBtn.addEventListener('click',function(){
         let location = parseInt(rocketIcon.style.bottom);
         if(flightStatus.innerHTML == "Shuttle in flight"){
         if(location !== 0){
         location = location - 20 + 'px';
         shuttleHeightCounter -= 10000;
         shuttleHeight.innerHTML = shuttleHeightCounter;
         rocketIcon.style.bottom = location;
             }
         }
     })
     
     rightBtn.addEventListener('click',function(){
         let location = parseInt(rocketIcon.style.marginLeft);
         if(flightStatus.innerHTML == "Shuttle in flight"){
         if(location < 205){
         location = location + 20 + 'px';
         shuttleHeight.innerHTML = shuttleHeightCounter;
         rocketIcon.style.marginLeft = location;
         }
         }
     })
     
     leftBtn.addEventListener('click',function(){
         let location = parseInt(rocketIcon.style.marginLeft);
         if(flightStatus.innerHTML == "Shuttle in flight"){
         if(location > -275){
         location = location - 20 + 'px';
         shuttleHeight.innerHTML = shuttleHeightCounter;
         rocketIcon.style.marginLeft = location;
         }
     }
     })
};

window.addEventListener("load", init);