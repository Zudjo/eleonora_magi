import { Controller } from '@hotwired/stimulus';

import menu_icon_opened_path from '../../public/images/menu-icon-opened.webp';
import menu_icon_closed_path from '../../public/images/menu-icon-closed.webp';


export default class extends Controller {
    
    toggle_menu() {
        let menu = document.getElementById('menu');
        let header = document.getElementById('header');
        let menu_icon = document.getElementById('menu-icon');
        let display_value = window.getComputedStyle(menu).getPropertyValue('display');
        let position_value = window.getComputedStyle(header).getPropertyValue('position');

        if (display_value == 'none') {
            display_value = 'flex';
            position_value = 'absolute';
            menu_icon.src = menu_icon_opened_path;
        } else {
            display_value = 'none';
            position_value = 'relative';
            menu_icon.src = menu_icon_closed_path;
        }

        menu.style.display = display_value;
        // header.style.position = position_value;
    }
}
