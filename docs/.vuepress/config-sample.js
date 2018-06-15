module.exports = {
    title: '100 Jahre Generalstreik - und jetzt?',
    description: 'Vor hundert Jahren stand die Schweiz am Rande eines Bürgerkriegs. Heute gilt der Generalstreik als eines der bedeutendsten innenpolitischen Ereignisse Doch, wie sieht es mit der Arbeiterbewegung heute aus? Mit welchen Fragen beschäftigen sich Linke heute? Sind Streik & Klassenkampf noch aktuell? Wie soll eine bessere Welt aussehen?',
    base: '/', 
    ga: 'XX-XXXXXXX-X',
    head: [
      ['link', { rel: 'icon', href: 'favicon.png' }],
      ['link', { rel: 'stylesheet', href: 'https://necolas.github.io/normalize.css/latest/normalize.css' }]
    ],
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'de-CH', // this will be set as the lang attribute on <html>
        title: '100 Jahre Generalstreik - und jetzt?',
        description: 'Vor hundert Jahren stand die Schweiz am Rande eines Bürgerkriegs. Heute gilt der Generalstreik als eines der bedeutendsten innenpolitischen Ereignisse Doch, wie sieht es mit der Arbeiterbewegung heute aus? Mit welchen Fragen beschäftigen sich Linke heute? Sind Streik & Klassenkampf noch aktuell? Wie soll eine bessere Welt aussehen?'
      
      }},
    markdown: {
      anchor: { permalink: false, permalinkBefore: false, permalinkSymbol: 'p' },
      html: true,
      toc: { includeLevel: [1,2,3]}
    }
}