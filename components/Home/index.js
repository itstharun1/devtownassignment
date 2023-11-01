import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import {Para, H1, Div1, Div2} from './styledComponent'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <Div1 className="home-container">
        <Div2 className="home-content">
          <H1 className="home-heading">Clothes That Get YOU Noticed</H1>
          <img
            src="https://cdn4.sharechat.com/rowdyvijaydevarkonda_374268c2_1625998718485_sc_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <Para className="home-description">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </Para>
          <Link to="/products">
            <button type="button" className="shop-now-button shop">
              Shop Now
            </button>
          </Link>
        </Div2>
        <img
          src="https://cdn4.sharechat.com/rowdyvijaydevarkonda_374268c2_1625998718485_sc_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </Div1>
    </>
  )
}

export default Home
