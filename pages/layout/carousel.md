---
template: post.html
title: Utilizzo di carousel
published: true
---

<div class="lg-callout lg-callout-should">
<mark>SI DOVREBBE</mark>
Evitare l’utilizzo di carousel (slider) automatici.
</div>

I dati statistici raccolti riguardo l’interazione degli utenti con i carousel ne rivelano un utilizzo effettivo marginale (1%).

Lo **scorrimento automatico dei contenuti è generalmente sconsigliato** poiché riduce la visibilità degli stessi e reca fastidio agli utenti;
leggere l’intero contenuto di una slide prima che venga sostituita automaticamente dalla successiva può esser difficoltoso
e introduce problemi di accessibilità per chi utilizza una tastiera o uno screen reader:
è tecnicamente complesso implementare un carousel perfettamente accessibile.

Tra le più comuni problematiche nell’implementazione:

- lo scorrimento dei contenuti parte in automatico senza che sia richiesta nessuna interazione
- non è possibile fermare e/o far ripartire lo scorrimento
- non sono preventivamente riportati i titoli dei contenuti costringendo l’utente a doverne forzare lo scorrimento o aspettare un tempo prefissato affinché siano rivelati
- i controlli per scorrere le slide non sono ben visbili (colore / trasparenza) e/o sono troppo piccoli

Nel caso si configuri l'assoluta necessità di utilizzare un carousel:

- i titoli dei contenuti devono essere visibili in ogni momento (fuori dalle slide quindi)
- l’utente deve poter controllare lo scorrimento (stop / avvio)
- i controlli devono poter esser utilizzabili anche tramite tastiera (oltre che con mouse / touch)

Nella maggior parte dei casi risulta più conveniente sostituire il carousel con una presentazione statica dei contenuti
(ad esempio, una galleria di immagini) in modo che siano tutti visibili immediatamente o tramite scorrimento manuale
non automatico.
