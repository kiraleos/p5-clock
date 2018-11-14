class Clock {
    constructor(hr, min, sec) {
        if (hr && min && sec) {
            this.hr = hr;
            this.min = min;
            this.sec = sec;
        }
        else {
            this.hr = hour();
            this.min = min();
            this.sec = sec();
        }
    }

    set(hr, min, sec) {
        this.hr = hr;
        this.min = min;
        this.sec = sec;
    }

    toString() {
        let hourStr = String(this.hr);
        let minStr = String(this.min);
        let secStr = String(this.sec);
        if (hourStr.length === 1)
            hourStr = "0" + hourStr;
        if (minStr.length === 1)
            minStr = "0" + minStr;
        if (secStr.length === 1)
            secStr = "0" + secStr;

        return hourStr + ":" + minStr + ":" + secStr;
    }
}