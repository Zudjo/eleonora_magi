import { Controller } from '@hotwired/stimulus';

import menuIconOpen from '../../public/images/menu-icon-open.webp';
import menuIconClose from '../../public/images/menu-icon-close.webp';


export default class extends Controller {
    
    toggleMenu() {
        let menu = document.getElementById('menu');
        let menuIcon = document.getElementById('menu-icon');

        let menuIconSource;
        let menuDisplayValue = window.getComputedStyle(menu).getPropertyValue('display');

        if (menuDisplayValue == 'none') {
            menuDisplayValue = 'flex';
            menuIconSource = menuIconOpen;

        } else {
            menuDisplayValue = 'none';
            menuIconSource = menuIconClose;
        }

        menu.style.display = menuDisplayValue;
        menuIcon.src = menuIconSource;
    }
}

