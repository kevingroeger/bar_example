import React from 'react'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import { Row, Col, Container } from 'react-bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import bar from './images/bar.jpg'
import drinks from './images/drinks.jpg'
import './App.css'

export default function App () {
  return (
    <div className='App'>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image: bar,
              amount: 0.5
            }
          ]}
          style={{
            height: '400px'
          }}
        />
        <h1>Barhouse Nürnberg</h1>
        <div className='content spacer'>
          <p>Im Barhouse Nürnberg findest du auf mehr als 200m² das perfekte Erlebnis für einen gelungenen Abend.</p>
          <p>Wir bieten dir über 40 verschiedene alkoholische und anti-alkoholische Longdrinks, Cocktails, Shots und vieles mehr.</p>
        </div>
        <ParallaxBanner
          layers={[
            {
              image: drinks,
              amount: 0.4
            }
          ]}
          style={{
            height: '200px'
          }}
        />
      </ParallaxProvider>
      <div className='content'>
        <h5>Öffnungszeiten:</h5>
        <table>
          <tbody>
            <tr>
              <th>Montag:</th>
              <td>11:00 Uhr - 00:00 Uhr</td>
            </tr>
            <tr>
              <th>Dienstag:</th>
              <td>11:00 Uhr - 00:00 Uhr</td>
            </tr>
            <tr>
              <th>Mittwoch:</th>
              <td>15:00 Uhr - 00:00 Uhr</td>
            </tr>
            <tr>
              <th>Donnerstag:</th>
              <td>11:00 Uhr - 00:00 Uhr</td>
            </tr>
            <tr>
              <th>Freitag:</th>
              <td>11:00 Uhr - 04:00 Uhr</td>
            </tr>
            <tr>
              <th>Samstag:</th>
              <td>11:00 Uhr - 04:00 Uhr</td>
            </tr>
            <tr>
              <th>Sonntag:</th>
              <td>11:00 Uhr - 00:00 Uhr</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='footer'>
        <Container fluid>
          <Row>
            <Col className={'less-space'}>
              <h5>Barhouse Nürnberg:</h5>
              <p> Max Mustermann</p>
              <p> Musterstraße 123</p>
              <p> 90400 Nürnberg</p>
            </Col>
            <Col className={'evenless-space'}>
              <h5>Kontakt:</h5>
              <p><i className='fas fa-phone-square-alt' /> 0911 / 01234567</p>
              <p><a href='mailto:kontakt@example.com'><i className='fas fa-envelope' /> kontakt@example.com</a></p>
              <div className='socialmedia'>
                <i className='fab fa-facebook-square' />
                <i className='fab fa-twitter-square' />
                <i className='fab fa-instagram' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}