<?php
// Enqueue scripts and styles
function YOUR_theme_scripts() {
    // DOESN'T WORK wp_enqueue_style( 'style-name', get_stylesheet_uri() . '/dist/css/main.css', array(), '1.0.0', 'all');
    wp_enqueue_style( 'BOILERPLATE-css', get_template_directory_uri() . '/dist/css/main.css', array(), '1.0.0', 'all');
}
add_action( 'wp_enqueue_scripts', 'YOUR_theme_scripts' );