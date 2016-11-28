
window.onload = function current_date() {
    "use strict";
    // variables for months
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        // get pieces of date
        full_date = new Date(),
        this_month_text = monthNames[full_date.getMonth()],
        // this_month_text = "October",
        today = full_date.getDate(),
        this_year = full_date.getFullYear(),
        // set information up for insertion into DOM tree
        new_span = document.createElement('span'),
        new_text = document.createTextNode(today + ' ' + this_month_text  + ' ' + this_year),
        position = document.getElementsByTagName('footer')[0];
    // append date to footer
    new_span.appendChild(new_text);
    position.appendChild(new_span);
};