export const StateConstants = {
    LOADING: 'Погрузка',
    UNLOADING: 'Разгрузка',
    ONTRAFFIC: 'В пути',
    UNLOADED: 'Выгружен',
    FINISHED: 'Завершен',
}

export const DashButtonLabelConstants = {
    COMPLETE_LOAD: 'Отправить',
    ACCEPT_DEPARTURE: 'Прибытие',
    COMPLETE_UNLOAD: 'Разгружено',
    SEND_AWAY: 'Домой',
}
export const DashIndicatorStateConstants = {
    WORK: 'Работает',
    IDLE: 'Простой',
    AWAY: 'Домой',
}

export const PathConstants = {
    DASHBOARD: '/',
    DRIVERS: '/drivers',
    PLANTS: '/plants',
    POINTS: '/points',
    FLIGHTS: '/flights',
}

export const FlightTypeConstants = {
    ORDER: 'Заявка',
    PRODUCT: 'Готовая продукция',
    // ORDER_COUNTING: "Заявка-переучет",
    INTERMEDIATE: 'Полупродукты',
    COUNTING: 'Переучет',
}

export const CreateFlightFormLabels = {
    DRIVER_LABEL: 'Водитель',
    ARRIVAL_LABEL: 'Погрузка',
    DEPARTURE_LABEL: 'Выгрузка',
    FLIGHTTYPE_LABEL: 'Тип рейса',
    SUBMIT_LABEL: 'Создать рейс',
}

export const CreateModelFormConsts = {
    DRIVER: {
        HEADER: 'Добавление нового водителя',
        INPUT_PLACEHOLDER: 'Водитель',
        BUTTON_LABEL: 'Создать водителя',
        ERROR_LABEL: 'Необходимо заполнить поле',
    },
}
