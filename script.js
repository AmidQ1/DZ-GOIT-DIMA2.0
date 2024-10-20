class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.daysElem = document.querySelector(`${selector} [data-value="days"]`);
        this.hoursElem = document.querySelector(`${selector} [data-value="hours"]`);
        this.minsElem = document.querySelector(`${selector} [data-value="mins"]`);
        this.secsElem = document.querySelector(`${selector} [data-value="secs"]`);
        this.start();
    }

    start() {
        this.int = setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;

            if (time <= 0) {
                clearInterval(this.int);
                this.updateDisplay(0, 0, 0, 0);
                return;
            }

            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);

            this.updateDisplay(days, hours, mins, secs);
        }, 1000);
    }

    updateDisplay(days, hours, mins, secs) {
        this.daysElem.textContent = days;
        this.hoursElem.textContent = hours.toString().padStart(2, '0');
        this.minsElem.textContent = mins.toString().padStart(2, '0');
        this.secsElem.textContent = secs.toString().padStart(2, '0');
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('1/1/2025'), 
});
