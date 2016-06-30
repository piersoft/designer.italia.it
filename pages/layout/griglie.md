---
template: post.html
title: Griglie
published: true
---

All’interno dello spazio a disposizione l’organizzazione del contenuto deve essere strutturata seguendo un sistema di griglie responsive per mantenere una coerente esperienza utente. La griglia rappresenta la struttura invisibile che permette di organizzare i contenuti della pagina.

Una griglia di impaginazione consiste in colonne di testo (o immagini) separate da spazi <em>intercolonna</em> e contornate dai margini della pagina. Le dimensioni delle colonne della griglia saranno flessibili in funzione del viewport (ovvero, la dimensione totale della regione di sito visibile all'interno del browser, delimitata dall'ampiezza del browser stesso). 

<h3 id="costruzione">Come costruire una griglia conforme</h3>

Utilizzando Bootstrap come framework, prendiamo in considerazione il suo "grid system" come strumento di elezione per creare le griglie di impaginazione.

<ul>
<li>Le righe (che hanno come classe ```.row``` ) devono essere collocate all'interno di un elemento ```.container``` a larghezza fissa oppure di un elemento ```.container``` fluido.</li>
<li>Gli elementi di riga ```.row``` devono essere utilizzati esclusivamente per creare gruppi orizzontali di colonne.</li>
<li>Soltanto dentro le colonne possono essere annidati ulteriori sistemi di "righe e colonne"</li>
<li>Il contenuto (testo e foto) va collocato all'interno delle colonne.</li>
<li>Le colonne avranno come prefisso di classe ```.col-*```</li>
<li>Le colonne rappresentano "porzioni" della larghezza complessiva del contenitore.</li>
<li>Ogni colonna potrà essere identificata con una classe specifica per determinare se quella porzione di spazio sia attribuibile, ad esempio, solo a dispositivi desktop, o tablet, o smartphone. Per questo motivo la classe di ciascuna colonna sarà sempre dotata sia di un suffisso corrispondente al <em>breakpoint</em> di riferimento (in ordine crescente dal minore al maggiore: ```-xs-, -sm-, -md-, -lg-```), sia del valore corrispondente ad una frazione di 12, che rappresenta la porzione di larghezza occupata da quella colonna.
Queste classi si applicano per intercettare dispositivi con larghezza dello schermo maggiore o uguale alle dimensioni del breakpoint di riferimento. Pertanto, la classe ```.col-md-*``` stabilirà la larghezza di quella colonna sia per il breakpoint corrispondente al valore "-md-" sia per breakpoint superiori (a meno che non sia presente anche una classe ```.col-lg-*```).

Per esempio: in una riga potrebbero esserci tre elementi ```.col-xs-4``` che corrispondono a tre colonne di larghezza pari a 4/12 (un terzo) ciascuna. Indicando ```-xs-``` come suffisso di breakpoint, significa che quella colonna avrà la stessa proporzione sia sui display più piccoli che su quelli più grandi. Se invece nella stessa riga posizioneremo tre elementi con classe ```.col-lg-4``` significa che ciascuna delle tre colonne occuperà uno spazio pari a 4/12 SOLTANTO sui display più grandi, mentre con viewport inferiori quella stessa colonna occuperà il 100% dello spazio, dato che non è stata definita nessuna proporzione per i breakpoint inferiori.</li>
<li>Ogni colonna può avere un "interspazio" o <em>gutter</em>, che viene attribuito via css tramite ```padding```</li>
</ul>


<h4 id="costruzione">Impostazioni della griglia di costruzione consigliata</h4>


<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th></th>
        <th> Schermi molto piccoli <small>Smartphone ( &lt; 768px)</small> </th>
        <th> Schermi piccoli <small>Tablet ( ≥ 768px)</small> </th>
        <th> Schermi media dimensione <small>Netbook ( ≥ 992px)</small> </th>
        <th> Schermi grandi <small>Desktop ( ≥ 1440px)</small> </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Larghezza del .container</th>
        <td>Auto</td>
        <td>Auto</td>
        <td>Auto</td>
        <td>1440px <small>compresi i "padding" esterni del .container</small></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">padding-left e padding-right del .container</th>
        <td>16 px</td>
        <td>16 px</td>
        <td>24 px</td>
        <td>24 px</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Prefisso classe colonna</th>
        <td><code>.col-xs-</code></td>
        <td><code>.col-sm-</code></td>
        <td><code>.col-md-</code></td>
        <td><code>.col-lg-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Numero di colonne</th>
        <td colspan="4">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Intercolonna o "gutter"</th>
        <td colspan="4">16 px</td>
      </tr>
    </tbody>
  </table>
</div>



Sul formato smartphone è prevista la collocazione di una sola colonna.
Sui successivi breakpoint (tablet e desktop), si potrà optare per un’impaginazione basata su un numero maggiore di colonne, con uno spazio fisso intercolonna ("gutter") di 16 px.
Il ```.container``` avrà dei margini esterni ("padding") di 24 px per i breakpoint "desktop" e "netbook" e di 16 px per i breakpoint "tablet" e "smartphone".


<!--
<figure>
  ![](/images/tavola_2.png)
  <figcaption>Figura 1 </figcaption>
</figure>
-->

### Esempio di griglia responsive

Segue un esempio di [griglia "responsive"](http://getbootstrap.com/css/#grid) ottenuto 
applicando il CSS di Bootstrap e utilizzando le classi ```container, row, col-*```

```markup
  <div class="lg-example-grid container">
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <div>12/12</div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-6"><div>6/12</div></div>
      <div class="col-xs-6"><div>6/12</div></div>
    </div>
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <div class="hidden-xs hidden-sm">4/12</div>
        <div class="visible-sm visible-xs">12/12</div>
      </div>
      <div class="col-md-4 col-xs-12">
        <div class="hidden-xs hidden-sm">4/12</div>
        <div class="visible-sm visible-xs">12/12</div>
      </div>
      <div class="col-md-4 col-xs-12">
        <div class="hidden-xs hidden-sm">4/12</div>
        <div class="visible-sm visible-xs">12/12</div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-xs-6">
        <div class="hidden-xs hidden-sm">3/12</div>
        <div class="visible-sm visible-xs">6/12</div>
      </div>
      <div class="col-md-3 col-xs-6">
        <div class="hidden-xs hidden-sm">3/12</div>
        <div class="visible-sm visible-xs">6/12</div>
      </div>
      <div class="col-md-3 col-xs-6">
        <div class="hidden-xs hidden-sm">3/12</div>
        <div class="visible-sm visible-xs">6/12</div>
      </div>
      <div class="col-md-3 col-xs-6">
        <div class="hidden-xs hidden-sm">3/12</div>
        <div class="visible-sm visible-xs">6/12</div>
      </div>
    </div>
  </div>

```
