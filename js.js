navigator.getBattery().then((battery) => {
    let percent = document.querySelector(".percent");
    let isCharging = document.querySelector(".isCharging");

    function updateAllBattery(){
        updateLevelInfo();
        updateChargeInfo();
    }

    updateAllBattery();

    function updateLevelInfo(){
        // percent.innerHTML = battery.level * 100  + " % ";
        percent.innerHTML = Math.floor(battery.level * 100)   + " % ";
        
    }

    function updateChargeInfo(){
        isCharging.innerHTML = battery.charging ? ` <img src="img/images.png"> ` : "";
    }

    battery.addEventListener('levelchange', () => {
        updateLevelInfo();
    });
    battery.addEventListener('chargingchange', () => {
        updateChargeInfo();
    });

})