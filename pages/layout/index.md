---
template: post.html
title: Indicazioni sul layout
published: true
---

<div class="lg-callout lg-callout-should">
<mark>SI DOVREBBE</mark>
Utilizzare un layout essenziale.
</div>

L'impaginazione dei contenuti tramite un layout lineare (una o due colonne) favorisce la **rapida scansione delle informazioni**
e ne agevola la consultazione soprattutto su *touchscreen*, dove il pattern di interazione più funzionale
è lo scorrimento verticale della pagina.

Casi d’uso validi per l’utilizzo di **una colonna laterale** ( ```<nav>```, ```<aside>```) sono
tutti e solo quelli dove sussiste un’immediata correlazione semantica con il contenuto principale:

- menu contestuale della sezione del sito correntemente visualizzata
- elenco di sezioni / contenuti / documenti correlati

<div class="lg-callout lg-callout-could">
<mark>SI PUÒ</mark>
Elenchi di contenuti omogenei (ad esempio: anteprime di notizie o eventi) possono essere presentati tramite **card** o liste posizionate in una
**[griglia responsive](/linee-guida/layout/griglie)**.
</div>

L'utilizzo di card favorisce la consultazione dei contenuti sugli schermi più piccoli.

Più in generale, laddove i dati non hanno una struttura prevalentemente tabulare, è consigliato l'utilizzo di card o liste al posto che di tabelle (```table```) che risultano più difficili da rendere fruibili in maniera efficace sui dispositivi mobili.

#### Gerarchia dei contenuti

<div class="lg-callout lg-callout-must">
<mark>SI DEVE</mark>
Per una corretta definizione della struttura gerarchica dei contenuti, la suddivisione in parti deve essere espressa attraverso l’uso dei tag semantici disponibili in HTML5, quali ```<article>, <aside>, <figcaption>, <header>, <footer>```, ecc., al posto del generico divisore ```<div>```.
</div>
