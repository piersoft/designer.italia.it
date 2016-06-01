---
template: post.html
title: Tipografia
published: true
---

### Web font

Le Web font sono famiglie di caratteri tipografici la cui licenza d’uso permette il download remoto per la loro visualizzazione in pagine web. Introdotte dalla versione CSS2 con la dichiarazione `@font-face`, le Web font sono oggi pienamente compatibili con la maggioranza dei browser (IE4+, Firefox 3.5+, Safari 3.1+, Opera 10+, Chrome 4.0+) e costituiscono la soluzione più efficace per una coerente composizione tipografica. Google Fonts è una piattaforma di distribuzione gratuita di Web font.

### Titillium Web
Il carattere tipografico istituzionale è la famiglia di font [Titillium Web](https://www.google.com/fonts/specimen/Titillium+Web), realizzato come progetto didattico all’interno all’Accademia di Belle Arti di Urbino e distribuito con licenza Open Font da Google Fonts. La famiglia di caratteri Titillium Web è composta da numerose font di diversi pesi tipografici (dall’Extra-Light all’Ultra-Bold) garantendo così un’estrema flessibilità di utilizzo nelle composizioni dei testi.

#### Specimen della famiglia Titillium Web

```markup
<div class="lg-example-titillium">
<p class="font-extra-light">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>extra light</small>
</p>
<p class="font-extra-light font-italic">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>extra light italic</small>
</p>
<p class="font-light">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>light</small>
</p>
<p class="font-light font-italic">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>light italic</small>
</p>
<p class="font-normal">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>normal</small>
</p>
<p class="font-normal font-italic">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>normal italic</small>
</p>
<p class="font-semi-bold">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>semi bold</small>
</p>
<p class="font-semi-bold font-italic">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>semi bold italic</small>
</p>
<p class="font-bold">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>bold</small>
</p>
<p class="font-bold font-italic">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>bold italic</small>
</p>
<p class="font-ultra-bold">
  Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo
  <small>ultra-bold</small>
</p>
</div>
```

<div class="lg-callout lg-callout-could">
<mark>SI PUÒ</mark> Per la realizzazione dei siti è consigliato l’utilizzo del carattere Titillium Web, ma qualunque altra Web font che garantisca la leggibilità e un’analoga ampiezza di pesi tipografici può essere usata.
</div>

### Dimensioni e interlinea del testo

<div class="lg-callout lg-callout-must">
<mark>SI DEVE</mark> Un paragrafo di testo non deve mai essere composto in una dimensione inferiore a 12px. La dimensione standard del paragrafo di testo è prevista in 18px. Un paragrafo di testo deve essere composto sempre nel peso Regular, mai in Light o Bold. L’interlinea avrà generalmente una dimensione pari a circa il 150% della dimensione del corpo del carattere (per esempio un testo in corpo 18px avrà un’interlinea di 27px).
</div>

### Allineamento
<div class="lg-callout lg-callout-should">
<mark>SI DOVREBBE</mark> Un paragrafo di testo deve essere preferibilmente composto con allineamento a sinistra. Sono generalmente sconsigliati gli allineamenti centrati (a epigrafe) e a destra. L’allineamento giustificato e senza sillabazione è invece sempre da evitare per l’incongrua spaziatura delle parole e la minore leggibilità che comporta.
</div>

### Giustezza

<div class="lg-callout lg-callout-must">
  <mark>SI DEVE</mark> Ogni riga di testo non deve mai superare la lunghezza massima di 75 caratteri.
</div>

### Markup semantico

<div class="lg-callout lg-callout-should">
<mark>SI DOVREBBE</mark> L’uso dei tag semantici consente di venire incontro ai requisiti di accessibilità, permettendo la corretta interpretazione del testo da parte dei device di ausilio alla lettura.
</div>

### Composizione tabelle
In genere nelle tabelle un corretto allineamento del testo e una giusta spaziatura fra le colonne e le righe
sono già in grado di creare la percezione delle strutture verticali e orizzontali che sottostanno al contenuto,
rendendo superflua la presenza di molte delle linee divisorie o dei fondini di cella.

Una tabella leggera (meno linee, meno colori) permette di concentrarsi meglio sul contenuto.

#### Esempio di tabella con CSS di default

```markup
<div class="table-responsive">
<table class="table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Posizione</th>
      <th>Luogo di lavoro</th>
      <th>Contatto candidatura</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Addetto anagrafe</td>
    <td>Ufficio anagrafe Roma</td>
    <td>posizioni_aperte@anag.it</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Portalettere</td>
    <td>Poste centrali Roma</td>
    <td>posizioni_aperte@poste.it</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Urbanista</td>
    <td>Urbanistica Roma</td>
    <td>posizioni_aperte@urban.it</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Contabile</td>
    <td>Comune Roma</td>
    <td>posizioni_aperte@contab.it</td>
  </tr>
</tbody>
</table>
</div>
```

#### Esempi di buona impaginazione delle tabelle

![](/images/tavola_4.png)

#### Esempi di cattiva impaginazione delle tabelle

![](/images/tavola_4a.png)

### Formattazioni consigliate

<!-- ![html](/images/formattazioni-tipografiche.png) -->

```markup
<div class="lg-example-tipografia">
<div>
  <h1>H1 Titolo</h1>
  <small><strong>Titolo pagina</strong>: Titillium bold - corpo 54px, interlinea 1.2</small>
</div>

<div>
  <h2>H2 Titolo</h2>
  <small><strong>Titolo sezione</strong>: Titillium bold - corpo 40px, interlinea 1.2</small>
</div>

<div>
<h3>H3 Titolo</h3>
  <small><strong>Titolo articolo</strong>: Titillium bold - corpo 32px, interlinea 1.2</small>
</div>

<div>
  <h4>H4 Titolo</h4>
  <small><strong>Titolo paragrafo</strong>: Titillium bold - corpo 23px, interlinea 1.2</small>
</div>

<div>
  <h5>H5 Titolo</h5>
  <small><strong>Testo grande</strong>: Titillium normal - corpo 21px, interlinea 1.2</small>
</div>

<div>
  <h6>H6 Titolo</h6>
  <small><strong>Titoletto</strong>: Titillium bold - corpo 18px, interlinea 1.55</small>
</div>

<div>
  <p>Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo che pur vivono.
  Non ne sarò l'artefice impaziente</p>
  <small><strong>Testo standard</strong>: Titillium normal - corpo 18px, interlinea 1.55</small>
</div>

<div>
  <blockquote>
    <p>
      Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo.
      Non ne sarò l'artefice impaziente
    </p>
  </blockquote>
  <small><strong>citazione</strong>: Titillium normal - corpo 18px, interlinea 1.55</small>
</div>

<div>
  <p><small>Ecco un bianco scenario per tratteggiarvi l'accompagnamento degli oggetti di sfondo che pur vivono.
  Non ne sarò l'artefice impaziente</small></p>
  <small><strong>testo minimo</strong>: Titillium normal - corpo 15px, interlinea 1.55</small>
</div>
</div>
```

<!-- ![html](/images/stili-tipografici.png) -->

### Colore del testo
Generalmente il colore del testo deve essere nero (#1C2024) o grigio (#5A6772) su fondo bianco (#FFFFFF).
Viceversa per le composizioni in negativo. Dove necessario possono essere usati colori diversi dal nero
e dal grigio purché sia garantito un rapporto di contrasto minimo tra testo e sfondo di 4,5:1 (AA),
come stabilito dalle specifiche di accessibilità. La verifica del rapporto di contrasto può essere
facilmente effettuata attraverso molti tool online.

- [esempio di strumento online per la verifica del contrasto colori](http://snook.ca/technical/colour_contrast/colour.html)

<div class="lg-callout lg-callout-should">
<mark>SI DOVREBBE</mark> Per una maggiore coerenza della user experience si suggerisce, per quanto riguarda i testi, l’adozione del seguente sistema cromatico.
</div>

<ul class="palette-example">
  <li class="ita-colore-testo-principale">
                      Colore testo principale
  </li>
  <li class="ita-colore-testo-secondario">
                      Colore testo secondario
  </li>
  <li class="ita-colore-link">
                      Colore link
  </li>
  <li class="ita-colore-link-hover">
                      Colore link hover
  </li>
  <li class="ita-colore-link-visitato">
                      Colore link visitato
  </li>
  <li class="ita-colore-link-negativo">
                      Colore link negativo
  </li>
  <li class="ita-colore-link-hover-negativo">
                      Colore link hover negativo
  </li>
  <li class="ita-colore-link-visitato">
                      Colore link visitato negativo
  </li>
  <li class="ita-colore-testo-evidenziato">
                      Colore testo evidenziato
  </li>
  <li class="ita-colore-sfondo">
                      Colore sfondo 1
  </li>
  <li class="ita-colore-alert">
                      Colore alert
  </li>
</ul>

#### Legature e crenatura
La leggibilità del testo, nelle versioni dei browser più recenti, può essere migliorata con l’utilizzo della dichiarazione
`text-rendering: optimizeLegibility` che attiva il controllo della crenatura del testo e la sostituzione automatica dei glifi delle legature. Attualmente la dichiarazione è riconosciuta in Safari 5 e Chrome. Firefox applica automaticamente la dichiarazione per i testi composti in corpo superiore a 20 px. Utilizzando una font OpenType possono esserne sfruttate le opzioni per le legature comuni e discrezionali con la dichiarazione
 `font-featuresettings: “liga” 1, “dlig” 1`.

--------------------------------------------------------------------------------

<div class="small">
<h4>Crediti</h4>
<p>
Il testo utilizzato per le prove di composizione è tratto dalla poesia<br>
<q>La città nuova di Alda Merini</q>
</p>
<h5>La città nuova</h5>
<blockquote>
Ecco un bianco scenario  
per tratteggiarvi l’accompagnamento  
degli oggetti di sfondo che pur vivono.  
Non ne sarò l’artefice impaziente.  
Berrò alle coppe della nostalgia,  
avrò preteso d’ozio nelle lacrime...  
perché non mi ribello alla natura:  
la mia lentezza li esaspera...   
La mia lentezza? No, la mia fiducia.  
Per adesso è deserto.  
Il mondo può rifarsi senza me,  
E intanto gli altri mi denigreranno
<br>
<br>
<p class="small">28 dicembre 1948 - La Presenza di Orfeo</p>
</blockquote>

</div>
