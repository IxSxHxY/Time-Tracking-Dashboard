let data = {
    "Work": {
        "daily": { "current": 5, "previous": 7 },
        "weekly": { "current": 32, "previous": 36 },
        "monthly": { "current": 103, "previous": 128 }
    },
    "Play": {
        "daily": { "current": 1, "previous": 2 },
        "weekly": { "current": 10, "previous": 8 },
        "monthly": { "current": 23, "previous": 29 }
    },
    "Study": {
        "daily": { "current": 0, "previous": 1 },
        "weekly": { "current": 4, "previous": 7 },
        "monthly": { "current": 13, "previous": 19 }
    },
    "Exercise": {
        "daily": { "current": 1, "previous": 1 },
        "weekly": { "current": 4, "previous": 5 },
        "monthly": { "current": 11, "previous": 18 }
    },
    "Social": {
        "daily": { "current": 1, "previous": 3 },
        "weekly": { "current": 5, "previous": 10 },
        "monthly": { "current": 21, "previous": 23 }
    },
    "Self Care": {
        "daily": { "current": 0, "previous": 1 },
        "weekly": { "current": 2, "previous": 2 },
        "monthly": { "current": 7, "previous": 11 }
    }
}
// const data = require('./data.json');
// console.log(data);

const TimeFrame = ['daily', 'weekly', 'monthly']
const TimeFrameTitle = ['Day', 'Week', 'Month']

const CardClassToTitle = {
    "WorkCard": "Work",
    "PlayCard": "Play",
    "StudyCard": "Study",
    "ExerciseCard": "Exercise",
    "SocialCard": "Social",
    "SelfCareCard": "Self Care",
}

// let currtimeFrameIndex = 1

let timeFrameBtns = document.querySelectorAll(".TimeSelect div")

function updateCardsInfo(idx) {
    for (let cardClass in CardClassToTitle) {
        console.log(`.${cardClass}`)
        console.log(document.querySelector(`.${cardClass}`))
        let currentTimeEl = document.querySelector(`.${cardClass} .CurrentTime`)
        let lastTimeEl = document.querySelector(`.${cardClass} .LastTime`)
        console.log(currentTimeEl, lastTimeEl)
        currentTimeEl.innerText = `${data[CardClassToTitle[cardClass]][TimeFrame[idx]]["current"]}hrs`
        lastTimeEl.innerText = `Last ${TimeFrameTitle[idx]} - ${data[CardClassToTitle[cardClass]][TimeFrame[idx]]["previous"]}hrs`
    }
}

window.onload = () => {
    Array.from(timeFrameBtns).forEach((el, idx, arr) => {
        console.log(111111)
        el.onclick = () => {
            arr.forEach((innerEl, innerIdx) => {
                if (innerIdx !== idx) innerEl.classList.remove('active')
                else innerEl.classList.add('active')
            })
            updateCardsInfo(idx)
        }
    })
    timeFrameBtns[1].click()
}
console.log(123123)
console.log(timeFrameBtns)