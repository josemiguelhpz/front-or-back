import { I18n } from "i18n-js";

const i18n = new I18n({
    "en": {
        welcome: "--------👋 Welcome to \"Front or Back?\"-------- \n Let's do some challenges to see which side you are more comfortable working on.",
        copy: "Hold up!! Copying project files...",
        dependency: "Installing dependencies....",
        creation: "Creating challenge at",
        already: "Progress has been detected!",
        levelShow: "Done! 🚀 now follow the instructions from the Readme of the recently generated project, the idea is to solve the code so that the tests pass! if you think that everything is ok, execute the same command 'npx front-or-back' to check the result.. if you want to run the tests we recommend you to use 'npx front-or-back --tests'",
        passTest: "✅ Excellent, you passed the challenge!",
        failTest: "🔴 Tests failed! try to fix the challenge..",
        finish: "It looks that you finish all challenges, final result is:"
    },
    "es": {
        welcome: "--------👋 Te damos la bienvenida a \"¿Front o Back?\"-------- \n Vamos a hacer algunos desafios para entender en que sitio te podrias sentir mas comodo/a.",
        copy: "Un momento, copiando el desafio...",
        dependency: "Instalando las dependencias....",
        creation: "Creando desafio en",
        already: "El progreso a sido detectado!",
        levelShow: "Listo! 🚀 ahora sigue las instrucciones del Readme del proyeto recientemente generado, la idea es resolver el codigo para que los tests pasen! si crees que todo esta ok vuelve a ejecutar el mismo comando 'npx front-or-back' para chequear el resultado.. si quieres correr los test te recomendamos usar 'npx front-or-back --tests'",
        passTest: "✅ Excelente aprobaste el desafio!",
        failTest: "🔴  Los test no pasaron! intenta arreglar el desafio..",
        finish: "Parece que ya temrinaste todos los desafios, tu resultado es el siguiente:"
    },
});

i18n.defaultLocale = "en"

export function configureLang(opts) {
    if (opts.languaje === "Español")
        i18n.locale = "es";
}

export function t(arg) { return i18n.t(arg) }