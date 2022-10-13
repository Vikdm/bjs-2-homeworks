class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) throw new Error("Ошибка! Не передан id будильника");
    if (this.alarmCollection.some((item) => item.id === id)) {
      console.log("Ошибка! Будильник с таким id уже установлен");
    } else {
      let alarm = {
        id: id,
        time: time,
        callback: callback,
      };
      this.alarmCollection.push(alarm);
    }
  }

  removeClock(id) {
    const removeAlarm = this.alarmCollection.filter((item) => item.id === id);
    if (removeAlarm !== -1) {
      this.alarmCollection.splice(removeAlarm, 1);
      return true;
    } else return false;
  }

  getCurrentFormattedTime() {
    let timeAlarm = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeAlarm;
  }

  start() {
    function checkClock(alarm, timeNow) {
      if (timeNow === alarm.time) alarm.callback();
    }

    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((alarm) => {
          let nowTime = this.getCurrentFormattedTime();
          checkClock(alarm, nowTime);
        });
      }, 2000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(
      "Будильников установлено: " + this.alarmCollection.length
    );
    this.alarmCollection.forEach((alarm) => {
      console.log("Будильник №" + alarm.id + " установлен на " + alarm.time);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}