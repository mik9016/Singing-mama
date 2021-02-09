import classes from "./About.module.scss";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row, Card } from "react-bootstrap";
import Couple from "../assets/couple.jpg";
import Couple2 from "../assets/couple2.jpg";
import Couple3 from "../assets/couple3.jpg";
import Who from "../assets/who.jpg";

export default function About(props) {
  return (
    <div className={classes.About}>
      <Container>
      <Row>
          <Col className=" text-center col-lg m-4 center-block">
            <h1>Mehr über unsere Mission</h1>
            <Card className="m-4 p-4 text-left ">
              <Card.Img variant="top" src={Couple} className="mb-4" />
              <Card.Title className="text-center">
                <h2>Singen für das Baby</h2>
              </Card.Title>
              <Card.Body>
                <p>
                  Dein Baby kann bereits ab der 10. bis 14.
                  Schwangerschaftswoche Geräusche wahrnehmen.
                  <br />
                  <br /> In dieser Zeit beginnt die Bildung des Hörnervs.
                  Lieder, die während der Schwangerschaft wiederholt und lange
                  gesungen werden, merkt sich das Baby und erkennt diese nach
                  der Geburt wieder. Dies schafft eine noch größere Bindung
                  zwischen Mutter und Kind, und dann ist es etwas Vertrautes und
                  Sicheres für das Neugeborene in der neuen Umgebung.
                  <br />
                </p>
              </Card.Body>
              <Container className="text-center">
                <Button
                  className={classes.Button}
                  variant="outline-primary"
                  as={Link}
                  to="/pricing"
                >
                  zum Angebot
                </Button>
              </Container>
            </Card>
            <Card className="m-4 p-4 text-left">
              <Card.Img variant="top" src={Couple2} className="mb-4" />
              <Card.Title className="text-center">
                <h2>Auch etwas für Dich und deinen Körper</h2>
              </Card.Title>
              <Card.Body>
                <p>
                  Singen erzeugt Glücksgefühle, kann Ängste lösen aber auch
                  fördert die Bildung von Hormonen und Stoffen, die dem Körper
                  gut tun. Es stärkt die Immunabwehr.
                  <br />
                  <br /> Singen kann dich ganzheitlich auf die Geburt
                  vorbereiten und es trägt dazu bei, dass du dich im Laufe der
                  Schwangerschaft stets in deinem Körper wohl fühlst. Singen
                  hilft bei Schwangeren gegen Schwindel, Schwäche,
                  Stimmungsschwankungen und Übelkeit sowie Verdauungsprobleme,
                  Atemnot und Erschöpfung. Während der Geburt mit Tönen zu
                  arbeiten gibt dem Körper Kraft. Es hilft, den Schmerz zu
                  lindern und erleichtert dem Baby den Weg.
                  <br />
                  <br />
                  Singend atmest Du tiefer und tiefes Atmen hilft beim Gebären.
                  <br />
                </p>
              </Card.Body>
              <Container className="text-center">
                <Button
                  className={classes.Button}
                  variant="outline-primary"
                  as={Link}
                  to="/pricing"
                >
                  zum Angebot
                </Button>
              </Container>
            </Card>
            <Card className="m-4 p-4 text-left">
              <Card.Img variant="top" src={Couple3} className="mb-4" />
              <Card.Title className="text-center">
                <h2>Ist es für Mich?</h2>
              </Card.Title>
              <Card.Body>
                <p>
                  Diese Kurse richten sich an jede Schwangere, jede Frau und
                  jede Mutter. Ob Du bereits Erfahrung im Gesang hast oder
                  nicht, ist dabei unwichtig. Gemeinsam werden Eure persönlichen
                  Singstimmen gestärkt, sodass jede Teilnehmerin innerhalb ihrer
                  Möglichkeiten besser werden kann. „Das Lied, das im Herzen der
                  Eltern ruht, singt auf den Lippen der Kinder.” (unbekannt)
                </p>
              </Card.Body>
              <Container className="text-center">
                <Button
                  className={classes.Button}
                  variant="outline-primary"
                  as={Link}
                  to="/pricing"
                >
                  zum Angebot
                </Button>
              </Container>
            </Card>
            <Card className="m-4 p-4 text-left">
              <Card.Img variant="top" src={Who} className="mb-4" />
              <Card.Title className="text-center">
                <h3>Wer bin ich?</h3>
              </Card.Title>
              <Card.Body>
                <p>
                  Dominika Muzykant ist Sängerin, Pianistin und Pädagogin.
                  Absolventin der K.Lipiński Musikakademie in Breslau an der
                  Fakultät für Chorleitung und Dirigieren von Ensembles. Sie hat
                  in viele Musical- ( z.B. ABBA, Winter Wonderland,
                  MichaelJackson) und Jazz- Projekten mitgewirkt. Seit 2018
                  führt sie das Projekt „Unicat".
                </p>
              </Card.Body>
              <Container className="text-center">
                <Button
                  className={classes.Button}
                  variant="outline-primary"
                  as={Link}
                  to="/pricing"
                >
                  zum Angebot
                </Button>
              </Container>
            </Card>
          </Col>
       </Row>
      </Container>

      <br />
    </div>
  );
}
