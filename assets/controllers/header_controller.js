import { Controller } from '@hotwired/stimulus';

import menu_icon_opened_path from '../../public/images/menu-icon-opened.webp';
import menu_icon_closed_path from '../../public/images/menu-icon-closed.webp';


export default class extends Controller {
    
    toggle_menu() {
        let menu = document.getElementById('menu');
        let menu_icon = document.getElementById('menu-icon');
        let display_value = window.getComputedStyle(menu).getPropertyValue('display');

        console.log(menu_icon_closed_path);

        if (display_value == 'none') {
            display_value = 'flex';
            menu_icon.src = menu_icon_opened_path;
        } else {
            display_value = 'none';
            menu_icon.src = menu_icon_closed_path;
        }

        menu.style.display = display_value;
    }
}
