import Card from 'react-bootstrap/Card';
import ColorText from '../css/newstyle.css';

function ImgOverlayExample() {
  return (
    <Card className="bg-security">
      <Card.Img src="https://securitytech.org/wp-content/uploads/2021/02/SecurityTech-homepage2.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <Card.Title class="ColorText"><h1>Security Password</h1></Card.Title>
        <Card.Text class="ColorText">
          <h2>Un momento para asegurar el valor</h2>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
