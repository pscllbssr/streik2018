<template>
  <div class="video-gallery">
    <Thema v-for="(thema, index) in themes" :title="thema.title" :text="thema.text" :video-id="thema.video" :key="thema.video" :index="index"/>
  </div>
</template>
<script>
export default {
  name: 'VideoGallery',
  props: ['category'],
  methods: {
    
  },
  data () {
    return {
      videos:{
        "einstieg": [
            { 
              title: "Was hat dich politisiert?", 
              text: "Was hat dich dazu gebracht, politisch aktiv zu werden? Welche Erlebnisse und Ereignisse spielten bei deiner Politisierung eine Rolle?",
              video: "_1DqmLqwWJA"
            },
            { 
              title: "Was hat dich geprägt?", 
              text: "Welche Gedanken haben dein eigenes politisches Denken besonders geprägt? Gibt es ein Buch, das du unbedingt weiterempfehlen würdest?",
              video: "3a8F5NhJ9M4"
            },
            { 
              title: "Wie stehst du zum Generalstreik?", 
              text: "Was verbindest du mit dem Generalstreik 1918? Wie stehst du zu Streik im Allgemeinen?",
              video: "aSfkZHM4FTI"
            },
            { 
              title: "Generalstreik 2018. Was wären deine Forderungen?", 
              text: "Angenommen, es gäbe im Jahr 2018 erneut einen Generalstreik. Du wärst Mitglied im Streikkomitee. Welche Forderungen würdest du aufstellen?",
              video: "YHmTVpANewU"
            }              
        ],        
        "kritik": [
            { 
              title: "Ist der Klassenbegriff veraltet?", 
              text: "Kann man in der aktuellen Gesellschaft überhaupt noch von Klassen sprechen?",
              video: "4FHHFhO_J5k"
            },
            { 
              title: "Gibt es noch Klassenkampf?", 
              text: "«Die Geschichte aller bisherigen Gesellschaft ist die Geschichte von Klassenkämpfen», schrieben Karl Marx und Friedrich Engels bereits 1848. Ist diese Analyse noch aktuell?",
              video: "cevB9BhBTk8"
            },
            { 
              title: "Eigentum? Mehrwert? Ausbeutung?", 
              text: "Zentrale Begriffe linker Gesellschaftskritik sind Eigentum, Mehrwert und Ausbeutung. Was ist damit gemeint?",
              video: "EUb6IqYWb84"
            },
            { 
              title: "Enteignung und Demokratie in der Wirtschaft", 
              text: "Wirtschaftsdemokratie ist eine aktuelle Forderung linker Organisationen. Was bedeutet das und was hat es mit Enteignung zu tun?",
              video: "biUhBxBNZTg"
            },

        ],                
        "utopie": [
            {
              title: "Bedingungsloses Grundeinkommen - eine mögliche Utopie?", 
              text: "In den letzten Jahren wurde viel über das bedingungslose Grundeinkommen diskutiert. Für die einen ist es eine mögliche Utopie, andere befürchten gar einen kommunistischen Umsturz. Wie stehst du dazu?",
              video: "J87F5D9eZTE"
            },
            { 
              title: "Rätekommunismus", 
              text: "«Was denn sonst?», ist die Standardfrage, geht es um Gesellschaftskritik. Tommy Vercetti skizziert seine Vorstellung einer gesellschaftlichen Alternative.",
              video: "EyrZS4H8u6Y"
            },
            { 
              title: "Demokratischer Sozialismus", 
              text: "«Was denn sonst?», ist die Standardfrage, geht es um Gesellschaftskritik. Tamara Funiciello skizziert ihre Vorstellung einer gesellschaftlichen Alternative.",
              video: "3pUUsxYhzMY"
            },
            { 
              title: "Sozialismus", 
              text: "«Was denn sonst?», ist die Standardfrage, geht es um Gesellschaftskritik. Albert Krölls skizziert seine Vorstellung einer gesellschaftlichen Alternative.",
              video: "xNOCNGpNIwU"
            }            
        ],
        "partner": 
          [
            { 
              title: "Tamara Funiciello stellt sich vor", 
              text: "Tamara Funiciello ist Präsidentin der Jungsozialist*innen Schweiz, Vizepräsidentin der Sozialdemokratischen Partei und ehemalige Gewerkschaftssekretärin. Sie ist Mitglied des Berner Stadtrats und des grossen Rats.",
              video: "Z7kMlPVUUEY"
            },
            { 
              title: "Albert Krölls", 
              text: "Albert Krölls ist Jurist und emiritierter Professor für Recht und Verwaltung an der Evangelischen Hochschule für Soziale Arbeit in Hamburg. Er ist Verfasser mehrerer Bücher zu den Themen Kapitalismus, Rechtsstaat und Demokratie.",
              video: "xuw2s6UERkM"
            },
            { 
              title: "Tommy Vercetti", 
              text: "Tommy Vercetti ist Rapmusiker. Er erhielt 2010 den bernischen Literaturpreis für sein Album «Seiltänzer», das viele kritische Gedanken in simpler Sprache enthält. Er ist Mitglied im BistroClub, der zuletzt die Diskussionsrunde «Selbstermächtigung & Kommunismus» veranstaltet hat.",
              video: "AfQgDBlvi4g"
            },            
            { 
              title: "Plädoyer für den Feminismus", 
              text: "Was Tamara Funiciello zum Generalstreik-Jubiläum noch los werden will.",
              video: "mtyVWeH2Nzs"
            },
            { 
              title: "Dem nationalen Ganzen eine Absage erteilen", 
              text: "Was Albert Krölls zum Generalstreik-Jubiläum noch los werden will.",
              video: "M5N1b3BmhaM"
            },
            { 
              title: "Den Kommunismus neu diskutieren", 
              text: "Was Tommy Vercetti zum Generalstreik-Jubiläum noch los werden will.",
              video: "e2D270YXgx4"
            }
          ]
      }
    }
  }, computed: {
    themes: function(){
      return this.videos[this.category];
    }
  }
}
</script>
<style>

  .video-gallery{
      display: flex;
      flex-direction: column;
          max-width: 540px;
    margin: 0 auto;
  }

  .video-gallery .thema{
        margin: 0 0 12vw;
  }

  .video-gallery h2{
    word-break: break-word;
    margin: 0;
    hyphens: auto;
    margin: 5vw 0 1vw;
  }
  

  .video-gallery p{
   margin: 1em 0.5em;
  }

@media screen and (min-width: 769px) and (max-width: 1199px) {
  .video-gallery{
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 100%;
  }

  .video-gallery h2{
    margin: 3vw 0 1vw;
  }

  .video-gallery .thema{
    width: 48%;
    margin: 2vw 2%;

  }
  .video-gallery .thema:nth-of-type(2n+1){
    margin-left: 0;
  }
  .video-gallery .thema:nth-of-type(2n){
    margin-right: 0;
  }
  
}

@media screen and (min-width: 1200px) {
  .video-gallery{
      flex-direction: row;
      flex-wrap: wrap;      
      max-width: 100%;
  }
  .video-gallery .thema{
    width: 32%;
   margin: 0 1% 40px;

  }
  .video-gallery .thema:nth-of-type(3n+1){
    margin-left: 0;
  }
  .video-gallery .thema:nth-of-type(3n){
    margin-right: 0;
  }

  .video-gallery h2{
    margin: 15px 0 7px;
  }
  
}
</style>