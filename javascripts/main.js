import{calculate} from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';

const initializeApp = () => {
    buttonEvents();

    calculate(4, 2, 'multiply');
    // calculate(4, 2, 'divide');
    // calculate(4, 2, 'add');
    // calculate(4, 2, 'subtract');
};

initializeApp();