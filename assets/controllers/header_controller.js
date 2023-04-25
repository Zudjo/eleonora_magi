import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    toggle_menu() {
        let menu = document.getElementById('menu');
        let display_value = window.getComputedStyle(menu).getPropertyValue('display');

        if (display_value == 'none') {
            display_value = 'flex';
        } else {
            display_value = 'none';
        }

        menu.style.display = display_value;
    }
}
