import {data} from "./data/data"
class Activity {
    constructor(title, daily, weekly, monthly) {
        this.title = title
        this.daily = daily
        this.weekly = weekly
        this.monthly = monthly
    }
}

const work = new Activity (
    data[0].title,
    data[0].timeframes.daily.current,
    data[0].timeframes.weekly.current,
    data[0].timeframes.monthly.current
);

const play = new Activity (
    data[1].title,
    data[1].timeframes.daily.current,
    data[1].timeframes.weekly.current,
    data[1].timeframes.monthly.current
);

const study = new Activity(
    data[2].title,
    data[2].timeframes.daily.current,
    data[2].timeframes.weekly.current,
    data[2].timeframes.monthly.current
);

const exercise = new Activity(
    data[3].title,
    data[3].timeframes.daily.current,
    data[3].timeframes.weekly.current,
    data[3].timeframes.monthly.current
);

const social = new Activity(
    data[4].title,
    data[4].timeframes.daily.current,
    data[4].timeframes.weekly.current,
    data[4].timeframes.monthly.current
);

const selfCare = new Activity(
    data[5].title,
    data[5].timeframes.daily.current,
    data[5].timeframes.weekly.current,
    data[5].timeframes.monthly.current
);