import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'AvenirNextCyr', sans-serif !important;
    }

    html,
    body,
    #root {
        position: relative;
        height: 100vh;
        background-color:#121B28;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border: 1px solid transparent;
        border-radius: 20px;
        box-shadow: rgb(0 0 0 / 24%) 0 0 0 20px inset;
        transition: all 0.3s ease;

        &:hover {
            border: 24px solid rgb(0 0 0 / 24%);
            border-radius: 24px;
            box-shadow: rgb(0 0 0 / 24%) 0 0 0 32px inset;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }

    input[type='number'] {
        appearance: textfield; /* Firefox */
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    li {
        list-style: none;
    }


    .epr-main div:nth-child(3) {
        display: none;
    }

    .MuiDataGrid-columnHeaderTitleContainer {
        overflow: visible !important;
    }

    .MuiDataGrid-columnHeaderTitleContainerContent {
        overflow: visible !important;
        width: 100%;
    }

    .ag-theme-material {
        --ag-material-accent-color: rgb(25 118 210) !important;
    }

    .ag-selection-checkbox,
    .ag-checkbox,
    .ag-checkbox-input-wrapper {
        font-family: var(--ag-icon-font-family), serif !important;
    }

    .react-datepicker {
        overflow: hidden;
        overflow-y: auto;

        padding: 0.375rem;
        font-family: sans-serif;

        border: 1px solid transparent;
        border-radius: 6px;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 50px 0;
    }

    .react-datepicker__header {
        display: grid;
        gap: 0.75rem;
        border: none;
        background: inherit;
    }

    .react-datepicker__header__dropdown--scroll {
        position: absolute;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        overflow: hidden;
        white-space: nowrap;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
    }

    .react-datepicker__input-container .react-datepicker__calendar-icon {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        padding: 0;
    }

    .react-datepicker__day {
        margin: 0;
    }

    .rc-slider-disabled {
        background: transparent;
    }

    .react-datepicker__day--keyboard-selected {
        color: #fff;
    }

    .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
        background-color: #20262b;

        &:hover {
            background-color: #20262b;
            opacity: 0.8;
        }
    }

    .react-datepicker__navigation--previous,
    .react-datepicker__navigation--next {
        position: absolute;
        top: 1rem;
    }

    .react-datepicker__week {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .react-datepicker__month,
    .react-datepicker__month-container {
        margin: 6px 6px 12px;
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
    }
`;
