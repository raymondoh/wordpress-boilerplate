<?php
// Get the header template part
get_header(); 
?>

<div class="container mx-auto text-center py-12">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">Page Not Found</h1>
    <p class="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
    </p>

    <a href="<?php echo home_url(); ?>"
        class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
        Go Back to Homepage
    </a>
</div>

<?php
// Get the footer template part
get_footer(); 
?>