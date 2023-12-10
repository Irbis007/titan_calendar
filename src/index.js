import "./index.html";
import "./index.css";

// CALENDAR LEFT
const calendarLeft = document.querySelector(".calendar.calendar-left");
const calendarInpLeft = document.querySelector(".calendar-left .calendar-inp");
const calendarInpDateLeft = document.querySelector(".calendar-left input[type='date']");
const calendarInpWrapperLeft = document.querySelector(".calendar-left .calendar-inp_wrapper");
const calendarPickerLeft = document.querySelector(".calendar-left .calendar-picker");
const calendarPickerDeleteLeft = document.querySelector(".calendar-left .calendar-delete");
let calendarPickerSelectDayLeft;
let calendarPickerPrevDateLeft;

// SELECT YEAR
const calendarSelectYearLeft = document.querySelector(".calendar-left .select-year");
const calendarSelectYearOptionsWrapperLeft = document.querySelector(
  ".calendar-left .select-year .options-wrapper"
);
const calendarSelectYearOptionsLeft = document.querySelector(
  ".calendar-left .select-year .options"
);
let calendarSelectYearOptionLeft = document.querySelectorAll(
  ".calendar-left .select-year .options .option"
);
const calendarSelectYearOptionsTopLeft = document.querySelector(
  ".calendar-left .select-year .options-middle"
);
const calendarSelectYearOptionsTopTextLeft = document.querySelector(
  ".calendar-left .select-year .options-middle .middle-text"
);
const calendarSelectYearOptionsArrowLeftLeft = document.querySelector(
  ".calendar-left .select-year .option-arrow_left"
);
const calendarSelectYearOptionsArrowRightLeft = document.querySelector(
  ".calendar-left .select-year .option-arrow_right"
);

// SELECT MONTH
const calendarSelectMonthLeft = document.querySelector(".calendar-left .select-month");
const calendarSelectMonthOptionsWrapperLeft = document.querySelector(
  ".calendar-left .select-month .options-wrapper"
);
const calendarSelectMonthOptionsLeft = document.querySelector(
  ".calendar-left .select-month .options"
);
let calendarSelectMonthOptionLeft = document.querySelectorAll(
  ".calendar-left .select-month .options .option"
);
const calendarSelectMonthOptionsTopLeft = document.querySelector(
  ".calendar-left .select-month .options-middle"
);
const calendarSelectMonthOptionsTopTextLeft = document.querySelector(
  ".calendar-left .select-month .options-middle .middle-text"
);
const calendarSelectMonthOptionsArrowLeftLeft = document.querySelector(
  ".calendar-left .select-month .option-arrow_left"
);
const calendarSelectMonthOptionsArrowRightLeft = document.querySelector(
  ".calendar-left .select-month .option-arrow_right"
);

// CALENDAR RIGHT
const calendarRight = document.querySelector(".calendar.calendar-right");
const calendarInpRight = document.querySelector(".calendar-right .calendar-inp");
const calendarInpDateRight = document.querySelector(".calendar-right input[type='date'");
const calendarInpWrapperRight = document.querySelector(".calendar-right .calendar-inp_wrapper");
const calendarPickerRight = document.querySelector(".calendar-right .calendar-picker");
const calendarPickerDeleteRight = document.querySelector(".calendar-right .calendar-delete");
let calendarPickerSelectDayRight = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);
let calendarPickerPrevDateRight = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);

calendarInpDateRight.value = calendarPickerPrevDateRight
  .toLocaleString("en-CA", { dateStyle: "short" })
  .split(".")
  .join("-");
calendarInpRight.value = calendarPickerPrevDateRight.toLocaleString("ru-RU", { dateStyle: "long" });

// SELECT YEAR
const calendarSelectYearRight = document.querySelector(".calendar-right .select-year");
const calendarSelectYearOptionsWrapperRight = document.querySelector(
  ".calendar-right .select-year .options-wrapper"
);
const calendarSelectYearOptionsRight = document.querySelector(
  ".calendar-right .select-year .options"
);
let calendarSelectYearOptionRight = document.querySelectorAll(
  ".calendar-right .select-year .options .option"
);
const calendarSelectYearOptionsTopRight = document.querySelector(
  ".calendar-right .select-year .options-middle"
);
const calendarSelectYearOptionsTopTextRight = document.querySelector(
  ".calendar-right .select-year .options-middle .middle-text"
);
const calendarSelectYearOptionsArrowLeftRight = document.querySelector(
  ".calendar-right .select-year .option-arrow_left"
);
const calendarSelectYearOptionsArrowRightRight = document.querySelector(
  ".calendar-right .select-year .option-arrow_right"
);

// SELECT MONTH
const calendarSelectMonthRight = document.querySelector(".calendar-right .select-month");
const calendarSelectMonthOptionsWrapperRight = document.querySelector(
  ".calendar-right .select-month .options-wrapper"
);
const calendarSelectMonthOptionsRight = document.querySelector(
  ".calendar-right .select-month .options"
);
let calendarSelectMonthOptionRight = document.querySelectorAll(
  ".calendar-right .select-month .options .option"
);
const calendarSelectMonthOptionsTopRight = document.querySelector(
  ".calendar-right .select-month .options-middle"
);
const calendarSelectMonthOptionsTopTextRight = document.querySelector(
  ".calendar-right .select-month .options-middle .middle-text"
);
const calendarSelectMonthOptionsArrowLeftRight = document.querySelector(
  ".calendar-right .select-month .option-arrow_left"
);
const calendarSelectMonthOptionsArrowRightRight = document.querySelector(
  ".calendar-right .select-month .option-arrow_right"
);

calendarSelectMonthOptionsTopTextRight.textContent = calendarPickerPrevDateRight.toLocaleString(
  "ru-RU",
  { month: "long" }
);
calendarSelectYearOptionsTopTextRight.textContent = calendarPickerPrevDateRight.getFullYear();

const buttonCansle = document.querySelector(".calendar-wrapper .button-cansle");
const buttonSave = document.querySelector(".calendar-wrapper .button-save");

let monthLeft, yearLeft, monthRight, yearRight;

// STYLING INPUT WITH FOCUS AND BLUR

function stylingInputWithFocus(inp, inpWrapper, selectMonth, selectYear, picker, inpDate) {
  inp.addEventListener("focus", () => {
    inp.style.display = "none";
    inpWrapper.style.backgroundColor = "#fff";
    selectMonth.classList.add("active");
    selectYear.classList.add("active");
    inpDate.classList.add("active");
    inpDate.focus();
    if (inpWrapper.parentElement.classList[1] == "calendar-left") {
      checkMothAndYear(
        selectMonth.children[0].children[1].children[0].textContent,
        selectYear.children[0].children[1].children[0].textContent,
        0
      );
    } else {
      checkMothAndYear(
        selectMonth.children[0].children[1].children[0].textContent,
        selectYear.children[0].children[1].children[0].textContent,
        1
      );
    }
  });
}
function stylingInputDateWithFocus(inpWrapper, selectMonth, selectYear, picker, inpDate) {
  inpDate.addEventListener("focus", () => {
    inpWrapper.style.backgroundColor = "#fff";
    selectMonth.classList.add("active");
    selectYear.classList.add("active");
    inpDate.classList.add("active");
    if (inpWrapper.parentElement.classList[1] == "calendar-left") {
      checkMothAndYear(
        selectMonth.children[0].children[1].children[0].textContent,
        selectYear.children[0].children[1].children[0].textContent,
        0
      );
    } else {
      checkMothAndYear(
        selectMonth.children[0].children[1].children[0].textContent,
        selectYear.children[0].children[1].children[0].textContent,
        1
      );
    }
  });
}

stylingInputWithFocus(
  calendarInpLeft,
  calendarInpWrapperLeft,
  calendarSelectMonthLeft,
  calendarSelectYearLeft,
  calendarPickerLeft,
  calendarInpDateLeft
);
stylingInputWithFocus(
  calendarInpRight,
  calendarInpWrapperRight,
  calendarSelectMonthRight,
  calendarSelectYearRight,
  calendarPickerRight,
  calendarInpDateRight
);
stylingInputDateWithFocus(
  calendarInpWrapperLeft,
  calendarSelectMonthLeft,
  calendarSelectYearLeft,
  calendarPickerLeft,
  calendarInpDateLeft
);
stylingInputDateWithFocus(
  calendarInpWrapperRight,
  calendarSelectMonthRight,
  calendarSelectYearRight,
  calendarPickerRight,
  calendarInpDateRight
);

function stylingInputWithBlur(inp, inpWrapper, selectMonth, selectYear, picker, inpDate) {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".calendar") && !e.target.closest(".picker")) {
      inpWrapper.style.backgroundColor = "#F6F6F6";
      selectMonth.classList.remove("active");
      selectYear.classList.remove("active");
      picker.classList.remove("active");
      inp.style.display = "block";
      inpDate.classList.remove("active");

      calendarSelectMonthOptionsWrapperLeft.classList.remove("active");
      calendarSelectMonthOptionsWrapperRight.classList.remove("active");
      calendarSelectYearOptionsWrapperLeft.classList.remove("active");
      calendarSelectYearOptionsWrapperRight.classList.remove("active");

      if (calendarPickerPrevDateLeft) {
        calendarInpLeft.value = calendarPickerPrevDateLeft.toLocaleString("ru-RU", {
          dateStyle: "long",
        });
        calendarInpDateLeft.value = calendarPickerPrevDateLeft
          .toLocaleString("en-CA", { dateStyle: "short" })
          .split("/")
          .join("-");
      } else {
        calendarInpLeft.value = "";
        calendarInpDateLeft.value = "";
        calendarPickerSelectDayLeft = 0;
        calendarSelectMonthOptionsTopTextLeft.textContent = "Выберите месяц";
        calendarSelectYearOptionsTopTextLeft.textContent = "Выберите год";
        calendarPickerLeft.classList.remove("active");
      }

      if (calendarPickerPrevDateRight) {
        calendarInpRight.value = calendarPickerPrevDateRight.toLocaleString("ru-RU", {
          dateStyle: "long",
        });
        calendarInpDateRight.value = calendarPickerPrevDateRight
          .toLocaleString("en-CA", { dateStyle: "short" })
          .split("/")
          .join("-");
      } else {
        calendarInpRight.value = "";
        calendarInpDateRight.value = "";
      }
    }
  });
}

stylingInputWithBlur(
  calendarInpLeft,
  calendarInpWrapperLeft,
  calendarSelectYearLeft,
  calendarSelectMonthLeft,
  calendarPickerLeft,
  calendarInpDateLeft
);
stylingInputWithBlur(
  calendarInpRight,
  calendarInpWrapperRight,
  calendarSelectYearRight,
  calendarSelectMonthRight,
  calendarPickerRight,
  calendarInpDateRight
);

calendarPickerDeleteRight.addEventListener("click", () => {
  const date = new Date();
  calendarInpDateRight.value = "";
  calendarPickerPrevDateRight = undefined;
  calendarPickerSelectDayRight = undefined;
  calendarInpRight.value = "";
  calendarSelectMonthOptionsTopTextRight.textContent = "Выберите месяц";
  calendarSelectYearOptionsTopTextRight.textContent = "Выберите год";
  createCalendarPickerRight.renderCalendar(
    date.getFullYear(),
    date.getMonth(),
    calendarPickerRight
  );
  calendarRight.classList.remove("selected");
});
calendarPickerDeleteLeft.addEventListener("click", () => {
  const date = new Date();
  calendarInpDateLeft.value = "";
  calendarPickerPrevDateLeft = undefined;
  calendarPickerSelectDayLeft = undefined;
  calendarInpLeft.value = "";
  calendarSelectMonthOptionsTopTextLeft.textContent = "Выберите месяц";
  calendarSelectYearOptionsTopTextLeft.textContent = "Выберите год";
  createCalendarPickerLeft.renderCalendar(date.getFullYear(), date.getMonth(), calendarPickerLeft);
  calendarLeft.classList.remove("selected");
});

// SELECT YEAR

function createSelectYear(optionsWrapper) {
  for (let i = new Date().getFullYear(); i >= 2000; i--) {
    const option = document.createElement("li");
    option.classList.add("option");

    option.innerHTML = i;

    optionsWrapper.append(option);
    if (i == 2000) {
      const clas = optionsWrapper.parentElement.parentElement.parentElement.classList[1];
      return document.querySelectorAll(`.${clas} .select-year .options .option`);
    }
  }
}

calendarSelectYearOptionLeft = createSelectYear(calendarSelectYearOptionsLeft);
calendarSelectYearOptionRight = createSelectYear(calendarSelectYearOptionsRight);

function onToggleCalendarYearOptions(optionsTop, optionsWrapper) {
  optionsTop.addEventListener("click", () => {
    optionsWrapper.classList.toggle("active");
  });
}

onToggleCalendarYearOptions(calendarSelectYearOptionsTopLeft, calendarSelectYearOptionsWrapperLeft);
onToggleCalendarYearOptions(
  calendarSelectYearOptionsTopRight,
  calendarSelectYearOptionsWrapperRight
);

function selectClalendarOption(
  item,
  optionsWrapper,
  optionsTop,
  arrowLeft,
  arrowRight,
  firstOpVal,
  lastOpVal
) {
  optionsWrapper.classList.remove("active");
  optionsTop.innerHTML = item.textContent;
  if (item.textContent == firstOpVal) {
    arrowLeft.classList.add("disabled");
    arrowRight.classList.remove("disabled");
  } else if (item.textContent == lastOpVal) {
    arrowRight.classList.add("disabled");
    arrowLeft.classList.remove("disabled");
  } else {
    arrowLeft.classList.remove("disabled");
    arrowRight.classList.remove("disabled");
  }

  return item.textContent;
}

calendarSelectYearOptionLeft.forEach((item, i) => {
  item.addEventListener("click", () => {
    yearLeft = selectClalendarOption(
      item,
      calendarSelectYearOptionsWrapperLeft,
      calendarSelectYearOptionsTopTextLeft,
      calendarSelectYearOptionsArrowLeftLeft,
      calendarSelectYearOptionsArrowRightLeft,
      "2000",
      new Date().getFullYear()
    );
    checkMothAndYear(
      calendarSelectMonthOptionsTopTextLeft.textContent,
      calendarSelectYearOptionsTopTextLeft.textContent,
      0
    );
  });
});

calendarSelectYearOptionRight.forEach((item, i) => {
  item.addEventListener("click", () => {
    yearRight = selectClalendarOption(
      item,
      calendarSelectYearOptionsWrapperRight,
      calendarSelectYearOptionsTopTextRight,
      calendarSelectYearOptionsArrowLeftRight,
      calendarSelectYearOptionsArrowRightRight,
      "2000",
      new Date().getFullYear()
    );
    checkMothAndYear(monthRight, yearRight, 1);
  });
});

// Next year

function calendarOptionsSelectPrevYear(arrowLeft, optionsTop, arrowRight) {
  let year = optionsTop.textContent;
  if (!arrowLeft.classList.contains("disabled")) {
    if (year != 2000) {
      optionsTop.textContent = +year - 1;
      arrowRight.classList.remove("disabled");
    }
    if (+year - 1 == 2000) {
      arrowLeft.classList.add("disabled");
    }
  }
  return optionsTop.textContent;
}

calendarSelectYearOptionsArrowLeftLeft.addEventListener("click", () => {
  let res = calendarOptionsSelectPrevYear(
    calendarSelectYearOptionsArrowLeftLeft,
    calendarSelectYearOptionsTopTextLeft,
    calendarSelectYearOptionsArrowRightLeft
  );
  if (res) {
    yearLeft = res;
    checkMothAndYear(
      calendarSelectMonthOptionsTopTextLeft.textContent,
      calendarSelectYearOptionsTopTextLeft.textContent,
      0
    );
  }
});

calendarSelectYearOptionsArrowLeftRight.addEventListener("click", () => {
  let res = calendarOptionsSelectPrevYear(
    calendarSelectYearOptionsArrowLeftRight,
    calendarSelectYearOptionsTopTextRight,
    calendarSelectYearOptionsArrowRightRight
  );
  if (res) {
    yearRight = res;
    checkMothAndYear(
      calendarSelectMonthOptionsTopTextRight.textContent,
      calendarSelectYearOptionsTopTextRight.textContent,
      1
    );
  }
});

function calendarOptionsSelectNextYear(arrowRight, optionsTop, arrowLeft) {
  let year = optionsTop.textContent;
  if (!arrowRight.classList.contains("disabled")) {
    if (year != new Date().getFullYear()) {
      optionsTop.textContent = +year + 1;
      arrowLeft.classList.remove("disabled");
    }
    if (+year + 1 == new Date().getFullYear()) {
      arrowRight.classList.add("disabled");
    }
  }
  return optionsTop.textContent;
}

calendarSelectYearOptionsArrowRightLeft.addEventListener("click", () => {
  let res = calendarOptionsSelectNextYear(
    calendarSelectYearOptionsArrowRightLeft,
    calendarSelectYearOptionsTopTextLeft,
    calendarSelectYearOptionsArrowLeftLeft
  );
  if (res) {
    yearLeft = res;
    checkMothAndYear(
      calendarSelectMonthOptionsTopTextLeft.textContent,
      calendarSelectYearOptionsTopTextLeft.textContent,
      0
    );
  }
});

calendarSelectYearOptionsArrowRightRight.addEventListener("click", () => {
  let res = calendarOptionsSelectNextYear(
    calendarSelectYearOptionsArrowRightRight,
    calendarSelectYearOptionsTopTextRight,
    calendarSelectYearOptionsArrowLeftRight
  );
  if (res) {
    yearRight = res;
    checkMothAndYear(
      calendarSelectMonthOptionsTopTextRight.textContent,
      calendarSelectYearOptionsTopTextRight.textContent,
      1
    );
  }
});

// SELECT MONTH

function createSelectMonth(optionsWrapper) {
  for (let i = 0; i < 12; i++) {
    const option = document.createElement("li");
    option.classList.add("option");

    option.innerHTML = createRussianMonth(i);
    optionsWrapper.append(option);

    if (i == 11) {
      const clas = optionsWrapper.parentElement.parentElement.parentElement.classList[1];
      return document.querySelectorAll(`.${clas} .select-month .options .option`);
    }
  }
}

calendarSelectMonthOptionLeft = createSelectMonth(calendarSelectMonthOptionsLeft);
calendarSelectMonthOptionRight = createSelectMonth(calendarSelectMonthOptionsRight);

function onToggleCalendarMonthOptions(optionsTop, optionsWrapper) {
  optionsTop.addEventListener("click", () => {
    optionsWrapper.classList.toggle("active");
  });
}

onToggleCalendarMonthOptions(
  calendarSelectMonthOptionsTopLeft,
  calendarSelectMonthOptionsWrapperLeft
);
onToggleCalendarMonthOptions(
  calendarSelectMonthOptionsTopRight,
  calendarSelectMonthOptionsWrapperRight
);

calendarSelectMonthOptionLeft.forEach((item) => {
  item.addEventListener("click", () => {
    monthLeft = selectClalendarOption(
      item,
      calendarSelectMonthOptionsWrapperLeft,
      calendarSelectMonthOptionsTopTextLeft,
      calendarSelectMonthOptionsArrowLeftLeft,
      calendarSelectMonthOptionsArrowRightLeft,
      "Январь",
      "Декабрь"
    );
    checkMothAndYear(
      calendarSelectMonthOptionsTopTextLeft.textContent,
      calendarSelectYearOptionsTopTextLeft.textContent,
      0
    );
  });
});

calendarSelectMonthOptionRight.forEach((item) => {
  item.addEventListener("click", () => {
    monthRight = selectClalendarOption(
      item,
      calendarSelectMonthOptionsWrapperRight,
      calendarSelectMonthOptionsTopTextRight,
      calendarSelectMonthOptionsArrowLeftRight,
      calendarSelectMonthOptionsArrowRightRight,
      "Январь",
      "Декабрь"
    );
    checkMothAndYear(
      calendarSelectMonthOptionsTopTextRight.textContent,
      calendarSelectYearOptionsTopTextRight.textContent,
      1
    );
  });
});

// Next month

function calendarOptionsSelectNextMonth(arrowLeft, optionsTop, arrowRight) {
  let month = optionsTop.textContent;
  const monthNumber = createDateWithRussianMonth(month);
  if (!arrowLeft.classList.contains("disabled")) {
    if (createRussianMonth(monthNumber) !== "Январь") {
      optionsTop.innerHTML = createRussianMonth(monthNumber - 1);
      arrowRight.classList.remove("disabled");
    }
    if (createRussianMonth(monthNumber - 1) == "Январь") {
      arrowLeft.classList.add("disabled");
    }
  }
  return optionsTop.textContent;
}

calendarSelectMonthOptionsArrowLeftLeft.addEventListener("click", () => {
  let res = calendarOptionsSelectNextMonth(
    calendarSelectMonthOptionsArrowLeftLeft,
    calendarSelectMonthOptionsTopTextLeft,
    calendarSelectMonthOptionsArrowRightLeft
  );
  if (res) {
    monthLeft = res;
    checkMothAndYear(monthLeft, yearLeft, 0);
  }
});
calendarSelectMonthOptionsArrowLeftRight.addEventListener("click", () => {
  let res = calendarOptionsSelectPrevMonth(
    calendarSelectMonthOptionsArrowLeftRight,
    calendarSelectMonthOptionsTopTextRight,
    calendarSelectMonthOptionsArrowLeftRight
  );
  if (res) {
    monthRight = res;
    checkMothAndYear(monthRight, yearRight, 1);
  }
});

function calendarOptionsSelectPrevMonth(arrowRight, optionsTop, arrowLeft) {
  let month = optionsTop.textContent;
  const monthNumber = createDateWithRussianMonth(month);
  if (!arrowRight.classList.contains("disabled")) {
    if (createRussianMonth(monthNumber) !== "Декабрь") {
      optionsTop.innerHTML = createRussianMonth(monthNumber + 1);
      arrowLeft.classList.remove("disabled");
    }
    if (createRussianMonth(monthNumber + 1) == "Декабрь") {
      arrowRight.classList.add("disabled");
    }
    return optionsTop.textContent;
  }
}

calendarSelectMonthOptionsArrowRightLeft.addEventListener("click", () => {
  let res = calendarOptionsSelectPrevMonth(
    calendarSelectMonthOptionsArrowRightLeft,
    calendarSelectMonthOptionsTopTextLeft,
    calendarSelectMonthOptionsArrowLeftLeft
  );
  if (res) {
    monthLeft = res;
    checkMothAndYear(monthLeft, yearLeft, 0);
  }
});
calendarSelectMonthOptionsArrowRightRight.addEventListener("click", () => {
  let res = calendarOptionsSelectPrevMonth(
    calendarSelectMonthOptionsArrowRightRight,
    calendarSelectMonthOptionsTopTextRight,
    calendarSelectMonthOptionsArrowLeftRight
  );
  if (res) {
    monthRight = res;
    checkMothAndYear(monthRight, yearRight, 1);
  }
});

function getCalendarPickerDay(year, month, dayElem, calendarPos) {
  dayElem.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.textContent) {
        if (calendarPos == "calendar-right") {
          calendarPickerSelectDayRight = new Date(year, month, item.textContent);
          styleingInpWithClickOnDate(
            calendarPickerSelectDayLeft,
            calendarInpDateRight,
            item,
            createCalendarPickerLeft,
            createCalendarPickerRight,
            calendarPickerLeft,
            calendarPickerRight,
            year,
            month
          );
        } else if (calendarPos == "calendar-left") {
          calendarPickerSelectDayLeft = new Date(year, month, item.textContent);
          styleingInpWithClickOnDate(
            calendarPickerSelectDayRight,
            calendarInpDateLeft,
            item,
            createCalendarPickerRight,
            createCalendarPickerLeft,
            calendarPickerRight,
            calendarPickerLeft,
            year,
            month
          );
        }
      }
      checkInpChenged();
    });
  });
}

calendarInpDateLeft.addEventListener("change", () => {
  checkInpChenged();
});

function styleingInpWithClickOnDate(
  selectDayL,
  inpDate,
  item,
  createPickerL,
  createPickerR,
  pickerL,
  pickerR,
  year,
  month
) {
  inpDate.value = `${year}-${month < 10 ? "0" + (month + 1) : month + 1}-${
    item.textContent < 10 ? "0" + item.textContent : item.textContent
  }`;
  if (inpDate.value) {
    inpDate.style.cssText = `
              color: #000;
              font-weight: 700;
            `;
  }
  if (selectDayL) {
    createPickerL.renderCalendar(selectDayL.getFullYear(), selectDayL.getMonth(), pickerL);
  }
  createPickerR.renderCalendar(year, month, pickerR);
}

function checkInpChenged() {
  if (
    calendarInpDateRight &&
    calendarPickerSelectDayRight &&
    calendarPickerPrevDateRight &&
    calendarPickerSelectDayRight.getTime() == calendarPickerPrevDateRight.getTime()
  ) {
    buttonSave.disabled = true;
  } else {
    buttonSave.disabled = false;
    return;
  }
  if (calendarPickerPrevDateLeft) {
    if (
      calendarInpDateLeft &&
      calendarPickerSelectDayLeft &&
      calendarPickerSelectDayLeft.getTime() == calendarPickerPrevDateLeft.getTime()
    ) {
      buttonSave.disabled = true;
    }
  }
  if (
    calendarPickerPrevDateLeft != undefined &&
    calendarPickerSelectDayLeft.getTime() != calendarPickerPrevDateLeft.getTime()
  ) {
    buttonSave.disabled = false;
  }
  if (
    calendarPickerPrevDateLeft == undefined &&
    calendarPickerSelectDayLeft &&
    calendarPickerSelectDayLeft.getTime()
  ) {
    buttonSave.disabled = false;
  }
}

function checkMothAndYear(month, year, calPos) {
  if (month && year && month != "Выберите месяц" && year != "Выберите год") {
    if (!calPos) {
      createCalendarPickerLeft.renderCalendar(
        year,
        createDateWithRussianMonth(month),
        calendarPickerLeft
      );
      calendarPickerLeft.classList.add("active");
    } else {
      createCalendarPickerRight.renderCalendar(
        year,
        createDateWithRussianMonth(month),
        calendarPickerRight
      );
      calendarPickerRight.classList.add("active");
    }
  }
}

function createRussianMonth(m) {
  let month = new Date(2000, m).toLocaleString("ru-RU", { month: "long" });
  return month.charAt(0).toUpperCase() + month.slice(1);
}
function createDateWithRussianMonth(russianMonth) {
  const monthsInRussian = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  const monthIndex = monthsInRussian.findIndex(
    (month) => month.toLowerCase() === russianMonth.toLowerCase()
  );

  if (monthIndex !== -1) {
    return new Date(2000, monthIndex, 1).getMonth();
  }
}
class CreateCalendarPicker {
  constructor(divId) {
    this.divId = divId;
    this.daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    this.months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    const currentDate = new Date();
    this.currMonth = currentDate.getMonth();
    this.currYear = currentDate.getFullYear();
    this.currDay = currentDate.getDate();
  }

  showCurrent(y, m, item) {
    this.showMonth(y, m, item);
  }

  showMonth(y, m, item) {
    const firstDayOfMonth = new Date(y, m, 7).getDay();
    const lastDateOfMonth = new Date(y, m + 1, 0).getDate();
    const lastDayOfLastMonth =
      m === 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

    let years = [];
    for (let i = this.currYear - 5; i < this.currYear + 5; i++) {
      years.push(i);
    }

    let html = "<table class='picker'>";

    html += '<thead><tr class="days ">';
    for (let i = 0; i < this.daysOfWeek.length; i++) {
      html += `<td class="day-ofWeek table-cell thead-cell"><div>${this.daysOfWeek[i]}</div></td>`;
    }
    html += "</tr></thead>";

    let i = 1;
    do {
      let dow = new Date(y, m, i).getDay();

      if (dow === 1) {
        html += "<tr>";
      } else if (i === 1) {
        html += "<tr>";
        let k = lastDayOfLastMonth - firstDayOfMonth + 1;
        for (let j = 0; j < firstDayOfMonth; j++) {
          html += `<td class="not-current table-cell datapicker-day"></td>`;
          k++;
        }
      }

      const chk = new Date(y, m, i);

      if (calendarPickerSelectDayLeft && calendarPickerSelectDayRight) {
        if (
          chk.getTime() > calendarPickerSelectDayLeft.getTime() &&
          chk.getTime() < calendarPickerSelectDayRight.getTime()
        ) {
          html +=
            '<td class="table-cell between-select datapicker-day">' + `<div>${i}</div>` + "</td>";
        } else if (calendarPickerSelectDayRight.getTime() == chk.getTime()) {
          html += '<td class="table-cell active datapicker-day">' + `<div>${i}</div>` + "</td>";
        } else if (calendarPickerSelectDayLeft.getTime() == chk.getTime()) {
          html += '<td class="table-cell active datapicker-day">' + `<div>${i}</div>` + "</td>";
        } else {
          html += '<td class="table-cell datapicker-day">' + `<div>${i}</div>` + "</td>";
        }
      } else if (
        (calendarPickerSelectDayLeft ||
          (calendarPickerSelectDayLeft && calendarPickerSelectDayRight)) &&
        calendarPickerSelectDayLeft.getTime() == chk.getTime()
      ) {
        html += '<td class="table-cell active datapicker-day">' + `<div>${i}</div>` + "</td>";
      } else if (
        (calendarPickerSelectDayRight ||
          (calendarPickerSelectDayLeft && calendarPickerSelectDayRight)) &&
        calendarPickerSelectDayRight.getTime() == chk.getTime()
      ) {
        html += '<td class="table-cell active datapicker-day">' + `<div>${i}</div>` + "</td>";
      } else {
        html += '<td class="table-cell datapicker-day">' + `<div>${i}</div>` + "</td>";
      }

      if (dow === 0) {
        html += "</tr>";
      } else if (i === lastDateOfMonth) {
        let k = 1;
        for (dow; dow < 7; dow++) {
          html += `<td class="not-current table-cell datapicker-day"></td>`;
          k++;
        }
        if ((dow = 6)) {
          html += "<tr>";
          for (dow; dow < 6; dow++) {
            html += `<td class="not-current table-cell datapicker-day"></td>`;
            k++;
          }
          html += "</tr>";
        }
      }

      i++;
    } while (i <= lastDateOfMonth);

    html += "</table>";

    item.innerHTML = html;

    const clas = item.parentElement.classList[1];

    const calendarPickerDay = document.querySelectorAll(
      `.${clas} .calendar-picker .datapicker-day `
    );

    getCalendarPickerDay(y, m, calendarPickerDay, clas);
  }

  renderCalendar(y, m, item) {
    this.showMonth(y, m, item);
  }
}

const createCalendarPickerLeft = new CreateCalendarPicker();
const createCalendarPickerRight = new CreateCalendarPicker();

buttonSave.addEventListener("click", () => {
  calendarPickerPrevDateLeft = calendarPickerSelectDayLeft;
  calendarPickerPrevDateRight = calendarPickerSelectDayRight;
  console.log(2)
  if (calendarPickerPrevDateLeft) {
    console.log(3)
    calendarLeft.classList.add("selected");
  }

  buttonSave.disabled = true;

  calendarInpLeft.value = calendarPickerSelectDayLeft.toLocaleString("ru-RU", {
    dateStyle: "long",
  });
});
