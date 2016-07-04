---
template: post.html
title: Mobile first
published: true
---

### Responsive Web Design

<div class="lg-callout lg-callout-must">
<mark>SI DEVE</mark> Il sito web deve essere progettato e sviluppato con un approccio responsive con l’obiettivo di rendere disponibile un’ottimale esperienza di visione all’utente,
facilità di lettura e navigazione con minime necessità di ridimensionare, spostare o scorrere, su qualunque dispositivo indipendentemente dalla risoluzione e dalla dimensione dello schermo.
</div>

L'approccio mobile first consiste nel valutare in prima istanza la resa sui dispositivi mobile, per poi arricchire di elementi e funzionalità la composizione della pagina mano a mano che la viewport aumenta.

<div class="lg-callout lg-callout-should">
<mark>SI DOVREBBE</mark>
Si consiglia lo stesso approccio anche nello sviluppo di qualsiasi sito web. Obbligarsi
a progettare un’applicazione con ridotte disponibilità di spazio, di interazione, di velocità di caricamento,
 obbliga a stabilire delle priorità e a fare delle scelte che risulteranno utili anche all’usabilità del prodotto
in generale. Nell’approccio mobile first si parte dall’essenziale. Presentare un contenuto su uno
schermo piuttosto piccolo o con una linea che non ha elevata velocità di caricamento dati ci obbliga
a dare priorità, a fare chiarezza, a togliere il superfluo. Man mano che lo schermo si fa più grande
e il collegamento più veloce, i contenuti vengono arricchiti. Un utente seduto alla scrivania
con un computer ha probabilmente più tempo e più possibilità di approfondire e navigare.
Un utente collegato da smartphone ha forse l’urgenza di cercare quel contenuto dal luogo in cui si trova,
senza aspettare di tornare a casa e arrivando all’essenziale il più velocemente possibile.
</div>

Nel web design si sono adottati spesso gli approcci “graceful degradation” (decadimento parziale) o "progressive enhancement"
 (miglioramento progressivo). Si tratta di due risposte diverse alla stessa esigenza: rendere il contenuto accessibile su dispositivi diversi. Nel primo approccio ci si fa carico di verificare che il progetto, inizialmente pensato per i dispositivi più completi, resti navigabile anche man mano che si usano tecnologie più obsolete o meno interattive. Nel secondo, si parte da un nucleo solido e irrinunciabile di contenuti che vengono arricchiti man mano che il dispositivo diventa più potente e all’avanguardia.

Tecnicamente il sito web deve rilevare quale dispositivo lo sta navigando. È possibile capire:
- lo user agent, ovvero quale browser e quale sistema operativo è in collegamento
- la risoluzione dello schermo, ovvero quanti pixel abbiamo a disposizione
- che tipo di device, ovvero se stiamo andando in stampa o su schermo

Tecniche apposite come l’uso di media queries permettono di dare istruzioni ai CSS per comportarsi in modo diverso a seconda della risoluzione (breakpoints). Individuato il dispositivo, la risoluzione e il browser utilizzato, il contenuto (il nucleo) viene arricchito o meno da informazioni e funzioni aggiuntive.
