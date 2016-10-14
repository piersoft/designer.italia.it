---
template: post.html
title: Form
published: true
---

<div class="lg-callout lg-callout-must">
<mark>SI DEVE</mark> Nei form ogni campo deve essere sempre associato, anche attraverso il tag ```<label>```,
a un'etichetta che ne descriva in maniera chiara il contenuto che deve essere inserito. 
Per essere sempre leggibile, l’etichetta deve essere posizionata esternamente al campo. Deve essere 
consentito inoltre lo spostamento da un campo all’altro tramite il tasto Tab.
</div>

```markup
<form class="form">

  <div class="row">
    <div class="form-group col-md-6">
      <label for="nome">Nome</label>
      <input class="form-control" id="nome">
    </div>
    <div class="form-group col-md-6">
      <label for="cognome">Cognome</label>
      <input class="form-control" id="cognome">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-md-6">
      <label for="indirizzo">Indirizzo</label>
      <input type="email" class="form-control" id="indirizzo">
    </div>
    <div class="form-group col-md-6">
      <label for="citta">Città</label>
      <input class="form-control" id="citta">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-md-3">
      <label for="via">Via</label>
      <input class="form-control" id="via">
    </div>
    <div class="form-group col-md-3">
      <label for="cap">CAP</label>
      <input class="form-control" id="cap">
    </div>
    <div class="form-group col-md-6">
      <label for="provincia">Provincia</label>
      <select class="form-control" id="provincia" required>
        <option disabled selected>seleziona una provincia</option>
        <option>provincia</option>
        <option>provincia</option>
        <option>provincia</option>
        <option>provincia</option>
      </select>
    </div>
  </div>
</form>
```

<!-- ![html](/images/tavola_25.png) -->

### Form errore

<div class="lg-callout lg-callout-must">
<mark>SI DEVE</mark> In caso di errori o di mancata compilazione dei campi di un form si dovrà sempre evidenziare in maniera immediatamente percepibile quale sia il campo, o i campi, che non soddisfano le richieste, aggiungendo l’indicazione dell’azione da compiere per il corretto completamento.
</div>

```markup
<form class="form">

  <div class="row">
    <div class="form-group has-error col-md-6">
      <label for="nome">Nome</label>
      <input class="form-control" id="nome" placeholder="Errore - bordo #ff0000">
    </div>
    <div class="form-group has-warning col-md-6">
      <label for="cognome">Cognome</label>
      <input class="form-control" id="cognome" placeholder="Warning - bordo #e5ce23">
    </div>
  </div>

</form>
```

<!-- ![](/images/tavola_26.png) -->

### Alert

#### Alert per errori

- Testo  #1e1212
- Sfondo #ffcbcb
- Bordo #b50000

```markup
<div class="alert alert-danger" role="alert">
  Messaggi per errori
</div>
```

#### Alert per informazioni

- Testo  #006366
- Sfondo #c6f3f5
- Bordo #00c5ca

```markup
<div class="alert alert-info" role="alert">
  Messaggi per informazioni
</div>
```

#### Alert per messaggi di successo

- Testo  #006366
- Sfondo #c6f3f5
- Bordo #00c5ca

```markup
<div class="alert alert-success" role="alert">
  Messaggi di successo
</div>
```

#### Alert per messaggi di attenzione

- Testo  #685815
- Sfondo #ffef9f
- Bordo #e5ce23

```markup
<div class="alert alert-warning" role="alert">
  Messaggi di allerta
</div>
```

<!-- ![html](/images/tavola_27_01.png) -->
