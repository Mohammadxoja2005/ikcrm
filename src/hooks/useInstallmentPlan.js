import { atom } from "jotai";

export const useInstallmentPlan = atom({
    client_full_name: "",
    phone: "",
    flat_number: "",
    passport: "",
    period: "",
    percent: "",
    initial_fee: "",
    contract_start_date: ""
});