# BNAO Dokumentation - Team Sharky

Lorenz Hohermuth, Roan Ratering und Jannis Milz

# Links

- Webseite: [https://bnao.jannismilz.com](https://bnao.jannismilz.com)
- Code-Repository (GitHub): [https://github.com/jannismilz/sharky-bnao](https://github.com/jannismilz/sharky-bnao)

# Entwicklungsumgebung

Zur Entwicklung dieser Webseite wurde sich im zweiten Anlauf für [Vite](https://vite.dev/) und [TailwindCSS](http://tailwindcss.com/) entschieden. Die Gründe sind eine schnelle Entwicklung und viel Erfahrung im Team.

Aus Zeitgründen und Wissenslücken hatten wir unseren ersten Plan, auf den wir in “Zukunftsarbeiten” noch einmal eingehen, aufgegeben und uns für eine einfachere Entwicklungsweise entschieden.

Mit diesem Technologie-Stack kann die Webseite im Moment noch zu statischen Dateien verarbeitet werden, was das Hosting deutlich einfacher macht. Es kommt aber auch die Freiheit damit mit, sie überall zu hosten wo man möchte und man ist nicht abhängig von einem Hosting-Anbieter oder Ähnlichem.

Wie diese Entwicklungsumgebung aufgesetzt werden kann wird alles im README im Code-Repository beschrieben.

# Testing

Statische Webseiten können relativ schlecht getestet werden, wenn sie gar keine richtigen Funktionalitäten besitzen.

Deswegen wurde aber ein Testing-Schritt eingeführt, der bei jeder Code-Änderung durchläuft und überprüft, ob die Webseite statisch gebaut werden kann durch Vite.

Wenn dieser Test fehlschlägt, wird man benachrichtigt und kann das reparieren. Das Styling der Webseite kann jedoch nur beim Entwickeln durch den Entwickler getestet werden.

Falls trotzdem mal ungültiger Code bis auf den Server gelangt und dort fehlschlägt, bleibt die Webseite weiterhin bestehen und verändert sich einfach nicht. Das wurde extra so eingerichtet.

# Hosting

Das Hosting läuft derzeit auf dem eigenen VPS (Virtueller Privatserver) von Jannis. Es ist so eingerichtet, dass bei jeder Code-Änderung die Webseite sich automatisch aktualisiert und mit den neusten Änderungen direkt veröffentlicht wird.

Die App läuft über den eingerichteten Domainnamen [https://bnao.jannismilz.com](https://bnao.jannismilz.com) und der gesamte Datenverkehr läuft verschlüsselt ab dank des SSL Zertifikates. Zudem läuft die Webseite über einen [NGINX](https://nginx.org/) Webserver.

# Zusatzarbeiten

## KI-Chatbot

Um Webseitenbesuchern einfacher zu helfen haben wir einen KI-Chatbot mit integriert. Der Chatbot weiss über die Inhalte auf der Webseite Bescheid und kann diese in die Antwort einbinden. Für die Integration wurde die [OpenAI Schnittstelle](https://openai.com/api/) verwendet, diese kann jedoch einfach ausgetauscht werden.

Die Konversationen mit der AI werden nicht gespeichert und sind anonym.

## Logo

![image 1 (1).png](docs/BNAO%20Dokumentation%20-%20Team%20Sharky/image_1_(1).png)

![Group 1.png](docs/BNAO%20Dokumentation%20-%20Team%20Sharky/Group_1.png)

Laut Aufgabenstellung sollte das Logo bestehen bleiben. Als Nebenprodukt unserer Design-Brainstorm-Session entstand jedoch eine wenig abgeänderte Version des bestehenden Logos.

Unserer Ansicht nach verdient das Logo **zusammen** mit der Webseite eine Modernisierung, wenn wir schon dran sind 😉. Deswegen möchten wir dies gerne beilegen und vielleicht dient es in Zukunft mal als kleine Inspiration oder Ähnliches.

# Zukunftsarbeiten

In einem ersten Anlauf wollten wir eine konfigurierbare Webseite mit dem CMS [Payload](https://payloadcms.com/) machen. So hätten wir dem BNAO ein zugeschnittenes CMS mit genau den Funktionen, die sie brauchen, zur Verfügung stellen können.

Nach einigen Stunden merkten wir jedoch, dass wir das nicht fertigstellen können bis Ende der Zeit, weil uns die Erfahrung fehlte und sich einige Steine in den Weg stellten die immer mehr Aufwand generierten.

Trotzdem wäre das unser nächster Schritt nach dem Hackathon, wenn Zeit nicht mehr die Limitation ist. So können wir dem BNAO wirklich ein gutes und einfach zu bedienendes CMS bereitstellen, welches auch keine unnötigen Funktionen beinhaltet.
