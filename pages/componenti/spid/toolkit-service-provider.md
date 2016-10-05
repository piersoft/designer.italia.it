---
template: post.html
title: Toolkit Service Provider
published: true
---

### Pulsante accesso SPID

[Download Pulsante SP Accesso SPID](https://github.com/italia-it/spid-sp-access-button/releases/latest)

Il pulsante di accesso a SPID per Service Provider è presentato in 4 dimensioni (s/m/l/xl).

È possibile inserire il pulsante in qualsiasi contesto di layout: CSS e script sono
sviluppati in modo da ridurre possibilità di sovrapposizioni con il codice del portale
nel quale è inserito.

Per il corretto funzionamento del pulsante occorre utilizzare la libreria
[jQuery >= 1.8](https://jquery.com/download/) nonché lo stile CSS
e il relativo codice javascript forniti nel download.

![Layout pulsante SPID](/images/spid-service-provider-btn.png)

La versione presentata è sviluppata per utilizzare il metodo HTTP GET della procedura di chiamata all'IDP.
È tuttavia possibile implementare una versione che utilizza il metodo HTTP POST.
