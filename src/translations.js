import { I18n } from "i18n-js";

const i18n = new I18n({
    "en": {
        welcome: "--------👋 Welcome to \"Front or Back?\"-------- \n Let's do some challenges to see which side you are more comfortable working on.",
        copy: "Hold up!! Copying project files...",
        dependency: "Installing dependencies...."
    },
    "es": {
        welcome: "--------👋 Te damos la bienvenida a \"¿Front o Back?\"-------- \n Vamos a hacer algunos desafios para entender en que sitio te podrias sentir mas comodo/a.",
        copy: "Un momento, copiando el desafio...",
        dependency: "Instalando las dependencias...."
    },
});

i18n.defaultLocale = "en"

export function configureLang(opts) {
    if (opts.languaje === "Español")
        i18n.locale = "es";
}

export function t(arg) { return i18n.t(arg) }