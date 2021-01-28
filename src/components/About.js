
import classes from './About.module.scss';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

// import { Button } from 'bootstrap';

export default function About(props) {
  

    // console.log("about", props.location.aboutProps)

    return (
        
        <div className={classes.About}>
            <div className={classes.divek}>
            <h1>About</h1><br/>
            <p>
            Carbohydrates are your body’s main source of energy and your brain’s only source of energy. This energy keeps you thinking clearly and ready to take on your daily routine.<br/>

            To keep your mood and energy levels stable, try to choose complex carbohydrates such as vegetables, legumes (such as chickpeas or lentils), whole grain products, and some fruits, with their skins on if possible. These foods are also an important source of fibre, which helps you feel full for longer and helps food move through your digestive system regularly.<br/>

            Candy, juices and other sugary food and drinks are all forms of simple carbohydrates. You can eat them occasionally, but don’t rely on them to give you energy. They can cause your blood sugar to “spike” and then suddenly drop off, leading to energy slumps during the day.<br/>
            
            </p>

           
            
            </div>

            <br/> <Button className={classes.but} variant="outline-primary" as={Link} to='/pricing'>Check Our Offer</Button>
        </div>
    )
}
