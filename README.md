# Linee guida visive siti web della Pubblica Amministrazione

## Stato del progetto
Attualmente il progetto redazionale delle Linee Guida è nella fase "alfa". I suggerimenti
e le proposte della community contribuiranno a raggiungere una versione più stabile e di riferimento.

## Adottare lo stile delle Linee Guida

È possibile utilizzare i componenti CSS / JS dell'implementazione di riferimento [web toolkit](https://italia.github.io/ita-web-toolkit/) e visualizzare gli esempi illustrati nelle linee guida. Durante la fase alfa gli elementi grafici (es. header) possono
esser soggetti a cambiamenti.

## Contribuire al progetto
Per inviare i commenti è necessario avere un account su [GitHub](https://github.com/), o [creare un account nuovo](https://github.com/join).

- [Accedere al repository del progetto delle linee guida](https://github.com/italia-it/designer.italia.it).
- [Inviare commenti/richieste o segnalare errori](https://github.com/italia-it/designer.italia.it/issues)
- Per proporre una modifica direttamente al codice e/o ai testi
  1. [effettuare una copia del repository (fork)](https://help.github.com/articles/fork-a-repo/)
  2. [sottoporre la modifica effettuata (pull request)](https://help.github.com/articles/using-pull-requests/).

Le richieste saranno esaminate dai *maintainer* del progetto che provvederanno a incorporare le proposte più valide.

## Visualizzare in locale il sito delle linee guida
È possibile visualizzare il sito delle linee guida su un webserver installato localmente.
Per farlo è necessario
- installare [Node.js](https://nodejs.org/)
- clonare il [repository Git](https://github.com/italia-it/designer.italia.it.git)
- installare i moduli richiesti

```
npm install
npm install -g bower
npm install -g gulp
bower install
```

- avviare il server di sviluppo tramite [Gulp](http://gulpjs.com/)

```
gulp serve
```

Utilizzando la configurazione di default il sito sarà accessibile all'indirizzo

```
 http://localhost:3000
```
