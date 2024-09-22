<?php
// Register custom REST route
function custom_register_rest_routes() {
    register_rest_route( 'custom/v1', '/load-more/', array(
        'methods'  => 'GET',
        'callback' => 'custom_load_more_posts',
       // 'permission_callback' => '__return_true', // No authentication required
    ));
}
add_action( 'rest_api_init', 'custom_register_rest_routes' );

// Callback for the custom load more posts
function custom_load_more_posts( $request ) {
    $page = $request->get_param('page') ? intval( $request->get_param('page') ) : 1;

    $query = new WP_Query( array(
        'post_type'      => 'post',
        'posts_per_page' => 4, // Adjust this as needed
        'paged'          => $page,
        'no_found_rows'  => true, // Optimize query
        'ignore_sticky_posts' => true,
    ) );

    if ( $query->have_posts() ) {
        $posts = array();

        while ( $query->have_posts() ) : $query->the_post();
            $posts[] = array(
                'title' => get_the_title(),
                'excerpt' => get_the_excerpt(),
                'permalink' => get_permalink(),
                'author' => get_the_author(),
                'date' => get_the_date(),
                'categories' => get_the_category_list( ', ' ),
            );
        endwhile;

        wp_reset_postdata();

        return rest_ensure_response( array(
            'success' => true,
            'posts' => $posts
        ) );
    } else {
        return rest_ensure_response( array(
            'success' => false,
            'message' => 'No more posts to load'
        ) );
    }
}