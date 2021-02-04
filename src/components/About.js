
import classes from './About.module.scss';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

// import { Button } from 'bootstrap';

export default function About(props) {
  
  
  

    return (
        
        <div className={classes.About}>
            <div className={classes.divek}>
            <h2>Singen für das Baby</h2><br/>
            <p>
            Dein Baby kann bereits ab der 10. bis 14. Schwangerschaftswoche Geräusche wahrnehmen. In dieser Zeit beginnt die Bildung des Hörnervs. 
            Lieder, die während der Schwangerschaft wiederholt und lange gesungen werden, merkt sich das Baby und erkennt diese nach der Geburt wieder.
            Dies schafft eine noch größere Bindung zwischen Mutter und Kind, und dann ist es etwas Vertrautes und Sicheres für das Neugeborene in der neuen Umgebung. 
            <br/> 
            </p>
            {/* <h2>Auch etwas für Dich und deinen Körper</h2><br/>
            <p>
            Singen erzeugt Glücksgefühle, kann Ängste lösen aber auch fördert die Bildung von Hormonen und Stoffen, die dem Körper gut tun. Es stärkt die Immunabwehr.
            Singen kann dich ganzheitlich auf die Geburt vorbereiten und es trägt dazu bei, dass du dich im Laufe der Schwangerschaft stets in deinem Körper wohl fühlst. Singen hilft bei Schwangeren gegen Schwindel, Schwäche, Stimmungsschwankungen und Übelkeit sowie Verdauungsprobleme, Atemnot und Erschöpfung.
            Während der Geburt mit Tönen zu arbeiten gibt dem Körper Kraft. Es hilft, den Schmerz zu lindern und erleichtert dem Baby den Weg. Singend atmest Du tiefer und tiefes Atmen hilft beim Gebären. 
            <br/> 
            </p>
            <h2>Ist es für Mich?</h2><br/>
            <p>
            Diese Kurse richten sich an jede Schwangere, jede Frau und jede Mutter. Ob Du bereits Erfahrung im Gesang hast oder nicht, ist dabei unwichtig. Gemeinsam werden Eure persönlichen Singstimmen gestärkt, sodass jede Teilnehmerin innerhalb ihrer Möglichkeiten besser werden kann.

            „Das Lied, das im Herzen der Eltern ruht, singt auf den Lippen der Kinder.” (unbekannt)

            </p>
            <h3>Wer bin ich?</h3>
            <p>
            Dominika Muzykant ist Sängerin, Pianistin und Pädagogin. Absolventin der K.Lipiński Musikakademie in Breslau an der Fakultät für Chorleitung und Dirigieren von Ensembles. Sie hat
            in viele Musical- ( z.B. ABBA, Winter Wonderland, MichaelJackson) und Jazz- Projekten mitgewirkt. Seit 2018 führt sie das Projekt „Unicat".
            </p>
           */}
            
            </div> 

            <br/> 
            <Button 
            className={classes.but} 
            variant="outline-primary" 
            as={Link} to='/pricing' 
            onClick={props.changeNavColorBlack}>
            zum Angebot</Button>
        </div>
    )
}
