<?php
/**
 * The main template file
 * If the user has selected a static page for their homepage, this is what will appear.
 * @package WordPress
 * @subpackage THEME_NAME
 * @since THEME NAME 1.0
 */
// custom query
 $custom_query = new WP_Query( array(
    'post_type' => 'post', 
    'posts_per_page' => 5, 
    'category_name' => 'news' 
));

if ( $custom_query->have_posts() ) :
    while ( $custom_query->have_posts() ) : $custom_query->the_post();
        // Custom display for each post
    endwhile;
    wp_reset_postdata();
endif;