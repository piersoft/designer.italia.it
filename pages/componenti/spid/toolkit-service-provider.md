---
template: post.html
title: Toolkit Service Provider
published: true
---

### Bottone accesso SPID

[Download Bottone SP Accesso SPID](https://github.com/italia-it/spid-sp-access-button/releases/latest)

Il bottone di accesso a SPID per Service Provider è presentato in 4 dimensioni (s/m/l/xl).

È possibile inserire il bottone in qualsiasi contesto di layout: CSS e script sono
sviluppati in modo da ridurre possibilità di sovrapposizioni con il codice del portale
nel quale è inserito.

Per il corretto funzionamento del bottone occorre utilizzare la libreria
[jQuery >= 1.8](https://jquery.com/download/) nonché lo stile CSS
e il relativo codice javascript forniti nel download.

![Layout bottone SPID](/images/spid-service-provider-btn.png)

La versione presentata è sviluppata per utilizzare il metodo HTTP GET della procedura di chiamata all'IDP.
È tuttavia possibile implementare una versione che utilizza il metodo HTTP POST.
