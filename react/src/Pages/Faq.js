import React from "react";
import Header from "../Components/Header"
import "./Faq.css"

export default function Faq() {
    return (
        <div >
            <Header />
            <div className="containerFaq" >
            <img src="./faq.png" width="100%"/>
            <h1>1. Worum geht es in diesem Webtool?</h1>
                <p>Diese Website enthält aktuell 19 Optimierungsansätze für kosten- und energieeffizientes Bauen. 
                    Es erläutert praktische Beispiele, wie energieeffiziente Gebäude auch wirtschaftlich gebaut werden können. 
                    Ziel ist es, Ihnen die relevanten Informationen zeitsparend zur Verfügung zu stellen</p>

            <h1>2.  Wer kann dieses Webtool verwenden?</h1>
                <p>Zielgruppen sind in erster Linie Architekten, Ingenieure und Planer aus der Baubranche, 
                    sowie interessierte Laien wie zum Beispiel zukünftige Bauherren. 
                    Diese Website ist aber auch auf Kommunen, Unternehmen und Bürger zugeschnitten</p>

            <h1>3. Woher stammen die Informationen?</h1>
                <p>Die Informationen werden vom Bayerischen Umweltbundesamt bereitgestellt. 
                    Eine Abteilung innerhalb dieser Agentur, das LfU (Ökoenergie-Institut Bayern), entwickelt Instrumente und Informationen, 
                    um die Energiewende umweltfreundlich zu unterstützen. 
                    Gemeinsam mit erfahrenen Planern effizienter Gebäude, hat das LfU Praxisbeispiele erarbeitet, 
                    wie energieeffiziente Gebäude auch wirtschaftlich gebaut werden können.</p>

            <h1>4. Was ist der Unterschied zum bereits vorhandenen PDF-Dokument?</h1>
                <p>Neben dem bereits vorhandenen PDF-Dokument bietet Ihnen dieses Webtool eine zusätzliche interaktive, 
                    anschauliche und einfachere Recherchemöglichkeit.</p>

            <h1>5. Wie funktioniert das Webtool?</h1>
                <p>Das Webtool beginnt mit einer Hausübersicht. Durch Anklicken eines bestimmten Teils des Hauses 
                    erhalten Sie kompakt die relevanten Informationen. 
                    Sie erfahren, in welchen Fällen die Lösung anwendbar ist und welche Vorteile und

                    Kosteneinsparungsmöglichkeiten bestehen. 
                    Sie erhalten auch Tipps und verstehen mögliche Herausforderungen sowie wer beteiligt werden muss. 
                    Am Ende gibt es immer Beispiele, die sich bereits in der Praxis bewährt haben. 
                    Wenn Sie auf bestimmte Informationen zurückkommen möchten, haben Sie die Möglichkeit, 
                    diese in einer „Bibliothek“ zu speichern.</p>

            <h1>6. Warum fehlen Informationen zu bestimmten Themen?</h1>
                <p>Dieses Projekt ist noch in Arbeit. Aktuell wurden 19 Optimierungsansätze entwickelt und die Reise geht weiter. 
                    Wir sammeln weiterhin gemeinsam mit Planern Lösungen für wirtschaftliches und 
                    effizientes Bauen und ergänzen diese in der bestehenden Broschüre. 
                    Außerdem laden wir alle ein, ihre Ideenlösungen einzureichen.</p>

            <h1>7. Kann ich meine eigene Lösung einreichen?</h1>
                <p>Wir freuen uns immer über neue Ideen. Sowohl auf der Website als auch im PDF-Dokument können Sie sehen, welche Themen noch nicht behandelt wurden. 
                    Gerade zu diesen Themen brauchen wir Ihre Ideen. Auf unserer Website finden Sie ein kurzes Formular, in dem Sie Ihre Idee beschreiben können. 
                    Bitte tragen Sie alle relevanten Informationen ein. Wir werden uns dann mit Ihnen in Verbindung setzen.</p>

            <h1>8. Welche Lösungsarten werden im Webtool beschrieben?</h1>
                <p>Es werden technische, planerische und organisatorische Lösungen vorgestellt.</p>

            <h1>9. Wer ist der Ansprechpartner für dieses Projekt?</h1>
                <p>Ansprechpartner sind Tobias Unger und Stephan Leitschuh. 
                    Beide sind Mitarbeiter der LfU mit dem Schwerpunkt energieeffizientes und nachhaltiges Bauen.</p>
            
            <h1>10. Wo finde ich weitere Informationen zu diesen Themen?</h1>
            <p>Alle Texte, Karten und Forschungsergebnisse der LfU werden im Energieatlas Bayern veröffentlicht. 
                Den Energieatlas finden Sie unter folgendem Link: <a href ="https://www.energieatlas.bayern.de">https://www.energieatlas.bayern.de/</a></p>
        </div>
        </div>
    )
}