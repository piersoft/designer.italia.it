---
template: post.html
title: Colori
published: true
---

### Palette colori

Qualunque scala cromatica può essere scelta per lo sviluppo del sito con la sola esclusione dei colori istituzionali delle pubbliche amministrazioni centrali  (blu #0066CC). La scala cromatica deve comunque garantire il rapporto di contrasto minimo tra testo e sfondo di 4,5:1, come raccomandato dalle specifiche di accessibilità WCAG 2.0 AA.

Il colore non deve mai essere significante in sé e non deve essere la modalità con cui si trasmettono contenuti:
ipovedenti, daltonici e non vedenti non sarebbero in grado di identificarli correttamente.

Le pubbliche amministrazioni locali e i siti tematici possono utilizzare un qualsiasi colore base,
seguendo le [indicazioni su come costruire una palette adeguata](/linee-guida/colori#definire-una-palette-principale).

### Colori per il footer

Indipendentemente dalla tipologia di sito valgono le seguenti indicazioni per i colori del footer:

<div class="palette-example"><p class="ita-colore-footer-background">colore di sfondo</p></div>
<div class="palette-example"><p class="ita-colore-ottanio-chiaro">colore dei link</p></div>
<div class="palette-example"><p class="ita-colore-footer-testo-scuro">testo scuro</p></div>

Il testo normale e i titoli delle sezioni appaiono in bianco (#ffffff).

### Palette principale per i siti delle pubbliche amministrazioni centrali

<div class="lg-callout lg-callout-must">
<mark>SI DEVE</mark> Il colore istituzionale è il blu #0066CC.
</div>

<div class="lg-example-colore-blu-italia">
  <div class="ita-bg-colore-blu-italia-50">
      <p class="h3">italia.it</p>
      <p class="h4">#0066CC</p>
  </div>
</div>

<!-- ![html](/images/blu.png) -->

### Palette estesa delle pubbliche amministrazioni centrali

All’interno dei siti istituzionali delle pubbliche amministrazioni centrali
sono utilizzate le seguenti undici gradazioni del colore principale Blu.

<ul class="palette-example">
  <li class="ita-colore-blu-italia-05">
                        05 - Blu</li>
  <li class="ita-colore-blu-italia-10">
                        10 - Blu</li>
  <li class="ita-colore-blu-italia-20">
                        20 - Blu</li>
  <li class="ita-colore-blu-italia-30">
                        30 - Blu</li>
  <li class="ita-colore-blu-italia-40">
                        40 - Blu</li>
  <li class="ita-colore-blu-italia-50">
                        50 - Blu</li>
  <li class="ita-colore-blu-italia-60">
                        60 - Blu</li>
  <li class="ita-colore-blu-italia-70">
                        70 - Blu</li>
  <li class="ita-colore-blu-italia-80">
                        80 - Blu</li>
  <li class="ita-colore-blu-italia-90">
                        90 - Blu</li>
  <li class="ita-colore-blu-italia-95">
                        95 - Blu</li>
</ul>

Sono inoltre utilizzate le seguenti tre tonalità di grigio per il testo e i fondini.

<ul class="palette-example">
  <li class="ita-colore-grigio-scuro">
                        Grigio scuro
  </li>
  <li class="ita-colore-grigio-medio">
                        Grigio medio
  </li>
  <li class="ita-colore-grigio-chiaro">
                        Grigio chiaro
  </li>
</ul>

I bottoni sono realizzati utilizzando tre gradazioni di ottanio.

<ul class="palette-example">
  <li class="ita-colore-ottanio-scuro">
                        Ottanio scuro Bottone Focus
  <li class="ita-colore-ottanio-medio">
                        Ottanio medio Bottone
  <li class="ita-colore-ottanio-chiaro">
                        Ottanio chiaro Bottone Hover
  </li>
</ul>

### Definire una palette principale

<div class="lg-callout lg-callout-should">
<mark>SI DOVREBBE</mark> Si consiglia l’utilizzo di una palette di colori limitata. Generalmente una palette di 5 tonalità (Hue) è sufficiente per qualunque necessità. Limitare le tonalità aiuta a focalizzare l’attenzione dell’utente e garantisce una migliore percezione dell’ordine gerarchico dei contenuti.</div>

Una buona tecnica per la creazione di palette cromatiche armoniche può essere quella di scegliere una tonalità principale e selezionare le altre fra le tonalità analoghe, cioè tra i colori adiacenti nella ruota cromatica. Variando luminosità e saturazione delle singole tonalità è poi possibile estendere ciascun colore secondo uno schema monocromatico. Tutti i software di elaborazione grafica permettono con facilità di gestire lo spazio cromatico Hue, Saturation, Brightness (HSB) per definire la propria palette colore.


Definiamo le tonalità che costituiscono le principali componenti cromatiche;
in questo caso due colori analoghi e uno grigio.

<div class="lg-example-palette-1 row">
  <div class="col-xs-12 col-md-4"><div style="background: #857EC4"></div><p>Blu notte #857EC4<p></div>
  <div class="col-xs-12 col-md-4"><div style="background: #BD8AE5"></div>Lilla #BD8AE5</div>
  <div class="col-xs-12 col-md-4"><div style="background: #5A6772"></div>Grigio #5A6772</div>
</div>

<!-- ![html](/images/palette-personale.jpg) -->

#### Creare le gradazioni di colore
Sulla scorta delle tonalità prescelte procediamo a costruire, per ognuna di esse, una scala di gradazioni formata da 5 colori più chiari e 5 più scuri. Per ottenere una scala di gradazioni coerente si può applicare il seguente meccanismo di calcolo all’interno di uno spazio cromatico HSB:

![](/images/costruire-palette.jpg)

- a partire dal colore base, aggiungere, a ogni passaggio verso l’alto, il 4% di Luminosità (B) e sottrarre il 15% di Saturazione (S)
- a partire dal colore base, sottrarre, a ogni passaggio verso il basso, il 10% di Luminosità (B)

Pur funzionando per la maggior parte delle tonalità intermedie, le percentuali di variazione sopra riportate potrebbero essere suscettibili di modifiche nel caso di colori particolarmente chiari o scuri. Si otterrà così una scala di gradazioni formata da 11 colori (il colore base più 5 gradazioni più chiare e 5 gradazioni più scure). Denominando con il valore 50 il colore base sarà possibile definire una classificazione univoca delle gradazioni, nella scala che va da 5 a 95, utile per indicare una specifica gradazione indipendentemente dalla tonalità cui è applicata.

![](/images/palette-viola.jpg)

Sarà utile a questo punto testare il contrasto del colore base e delle relative gradazioni
quando applicate al testo per verificarne l’accessibilità eventualmente tramite uno
[strumento online per la verifica del contrasto colori](http://snook.ca/technical/colour_contrast/colour.html).

Nell’esempio sopra riportato le gradazioni con il testo in nero possono essere utilizzate come sfondo,
quelle con il testo in bianco possono invece essere usate come colore del testo, rispettando i parametri di accessibilità.

### Esempi di contrasto

#### È corretto e accessibile
<div class="lg-example-palette-1 lg-example-palette-2 row">
  <div class="col-xs-12 col-md-4"><div style="color: #393954">Testo in 90-blu notte su bianco</div></div>
  <div class="col-xs-12 col-md-4"><div style="color: #000000; background: #9999C9">Nero su 30-blu notte</div></div>
  <div class="col-xs-12 col-md-4"><div style="color: white; background: #393954">Bianco su 90-blu notte</div></div>
</div>

<!-- ![html](/images/palette-corretta.jpg) -->

#### Non è corretto e non è accessibile
<div class="lg-example-palette-1 lg-example-palette-2 row">
  <div class="col-xs-12 col-md-4"><div style="color: #AEAED1">Testo in 10-blu notte su bianco</div></div>
  <div class="col-xs-12 col-md-4"><div style="color: #ffffff; background: #AEAED1">Bianco su 10-blu notte</div></div>
  <div class="col-xs-12 col-md-4"><div style="color: black; background: #393954">Nero su 90-blu notte</div></div>
</div>

<!-- ![html](/images/palette-scorretta.jpg) -->
