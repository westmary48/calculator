import{calculate, initialDisplay} from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';

const initializeApp = () => {
    buttonEvents();
    initialDisplay();
};

initializeApp();