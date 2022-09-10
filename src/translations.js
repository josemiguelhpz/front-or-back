import { I18n } from "i18n-js";

const i18n = new I18n({
    "en": {
        instructions: "welcome a",
    },
    "es": {
        instructions: "bienvenido a",
    },
});

i18n.defaultLocale = "en"

export function configureLang(opts) {
    if (opts.languaje === "Español")
        i18n.locale = "es";
}

export function t(arg) { return i18n.t(arg) }