---
template: post.html
title: Form
published: true
---

<div class="lg-callout lg-callout-must">
<mark>SI DEVE</mark> Nei form ogni campo deve essere sempre associato, anche attraverso il tag **```<label>```**,
a un'etichetta che ne descriva in maniera chiara il contenuto che deve essere inserito.
Per essere sempre leggibile, l’etichetta deve essere posizionata esternamente al campo. Deve essere
consentito inoltre lo spostamento da un campo all’altro tramite il tasto Tab.
</div>

### Esempio di stile per form

<iframe class="lg-example" src="https://italia.github.io/ita-web-toolkit/components/preview/formtpl--example.html"
  style="min-height: 30em"></iframe>

<!-- ![html](/images/tavola_25.png) -->

### Form errore

<div class="lg-callout lg-callout-must">
<mark>SI DEVE</mark> In caso di errori o di mancata compilazione dei campi di un form si dovrà sempre evidenziare in maniera immediatamente percepibile quale sia il campo, o i campi, che non soddisfano le richieste, aggiungendo l’indicazione dell’azione da compiere per il corretto completamento.
</div>

<iframe class="lg-example" src="https://italia.github.io/ita-web-toolkit/components/preview/formtpl--errors.html"></iframe>

<!-- ![](/images/tavola_26.png) -->

### Alert

Per i messaggi di "allerta" contestuali alla compilazione (messaggi di errore o di successo)
è importante **evitare di veicolare l'informazione unicamente tramite l'utilizzo del colore**:
l'esito dell'operazione va chiarito in maniera evidente nel testo
e, possibilmente, tramite un'icona esplicativa.

#### Alert per errori

<iframe class="lg-example" src="https://italia.github.io/ita-web-toolkit/components/preview/alert--error.html"></iframe>

#### Alert per messaggi di attenzione

<iframe class="lg-example" src="https://italia.github.io/ita-web-toolkit/components/preview/alert--warning.html"></iframe>

#### Alert per messaggi di successo

<iframe class="lg-example" src="https://italia.github.io/ita-web-toolkit/components/preview/alert--success.html"></iframe>

#### Alert per informazioni

<iframe class="lg-example" src="https://italia.github.io/ita-web-toolkit/components/preview/alert--info.html"></iframe>

<!-- ![html](/images/tavola_27_01.png) -->
