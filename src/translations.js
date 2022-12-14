import { I18n } from "i18n-js";

const i18n = new I18n({
    "en": {
        welcome: "--------π Welcome to \"Front or Back?\"-------- \n Let's do some challenges to see which side you are more comfortable working on.",
        copy: "Hold up!! Copying project files...",
        dependency: "Installing dependencies....",
        creation: "Creating challenge at",
        already: "Progress has been detected!",
        levelShow: "Done! π now follow the instructions from the Readme of the recently generated project, the idea is to solve the code so that the tests pass! if you think that everything is ok, execute the same command 'npx front-or-back' to check the result.. if you want to run the tests we recommend you to use 'npx front-or-back --tests'",
        passTest: "β Excellent, you passed the challenge!",
        failTest: "π΄ Tests failed! try to fix the challenge..",
        finish: "It looks that you finish all challenges, final result is:",
        back: "You were more efficient in the Backend! π",
        front: "You were more efficient in the Frontend! π",
        same: "You are just as efficient at everything! π"
    },
    "es": {
        welcome: "--------π Te damos la bienvenida a \"ΒΏFront o Back?\"-------- \n Vamos a hacer algunos desafios para entender en que sitio te podrias sentir mas comodo/a.",
        copy: "Un momento, copiando el desafio...",
        dependency: "Instalando las dependencias....",
        creation: "Creando desafio en",
        already: "El progreso a sido detectado!",
        levelShow: "Listo! π ahora sigue las instrucciones del Readme del proyeto recientemente generado, la idea es resolver el codigo para que los tests pasen! si crees que todo esta ok vuelve a ejecutar el mismo comando 'npx front-or-back' para chequear el resultado.. si quieres correr los test te recomendamos usar 'npx front-or-back --tests'",
        passTest: "β Excelente aprobaste el desafio!",
        failTest: "π΄  Los test no pasaron! intenta arreglar el desafio..",
        finish: "Parece que ya terminaste todos los desafios, tu resultado es el siguiente:",
        back: "Fuistes mas eficiente en el Backend! π",
        front: "Fuistes mas eficiente en el Frontend! π",
        same: "Eres igual de eficiente para todo! π"
    },
});

i18n.defaultLocale = "en"

export function configureLang(opts) {
    if (opts.languaje === "EspaΓ±ol")
        i18n.locale = "es";
}

export function t(arg) { return i18n.t(arg) }