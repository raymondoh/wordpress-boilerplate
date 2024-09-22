<?php
/**
 * The main template file.
 *
 * This template is a fallback for all other templates in WordPress.
 * It will display a message if no specific template is available for the content.
 *
 * @package WordPress
 * @subpackage Shield Theme
 * @since 1.0.0
 */
?>

<?php get_header(); ?>

<main id="main-content">
    <section class="bg-brand-neutral dark:bg-gray">
        <div class="max-w-7xl mx-auto px-6 py-12 md:px-8 md:py-20 2xl:px-0">
            <div class="text-center">
                <h1 class="text-4xl font-semibold text-gray-900 dark:text-gray-50">
                    Welcome to Our Website
                </h1>
                <p class="text-lg text-gray-700 dark:text-gray-300 mt-4">
                    This is the main page of our website. Currently, there is no blog content to display.
                </p>
            </div>
        </div>
    </section>

    <section class="bg-gray-100 dark:bg-gray py-12">
        <div class="max-w-7xl mx-auto px-6 md:px-8 2xl:px-0">
            <div class="text-center">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-50">Explore Our Pages</h2>
                <p class="text-lg text-gray-600 dark:text-gray-100 mt-2">
                    You can navigate through the website to learn more about our services and team.
                </p>
                <div class="mt-8">
                    <a href="/services" class="inline-block bg-brand text-white px-6 py-3 rounded-lg">
                        View Our Services
                    </a>
                    <a href="/contact" class="inline-block bg-gray-700 text-white px-6 py-3 rounded-lg ml-4">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>