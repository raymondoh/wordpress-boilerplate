if ( ! defined( 'WP_DEBUG' ) ) {
define( 'WP_DEBUG', true );
}
// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );

// Disable displaying errors and warnings in the browser
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );

// Additional settings to catch script errors
define( 'SCRIPT_DEBUG', true );
