export const loadMorePostsRestAPI = () => {
  const loadMoreBtn = document.getElementById("load-more-btn");
  let page = 1; // Initialize page number

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      page++; // Increment the page number

      // Make the REST API request
      fetch(`/wp-json/custom/v1/load-more/?page=${page}`)
        .then((response) => response.json()) // Parse the response as JSON
        .then((data) => {
          console.log(data); // Log the response for debugging

          if (data.success) {
            // Loop through posts and append them to the container
            const container = document.getElementById("load-more-container");
            data.posts.forEach((post) => {
              const postHTML = `
                    <div class="post-item">
                      <h2 class="headline headline--medium headline--post-title">
                        <a href="${post.permalink}">${post.title}</a>
                      </h2>
                      <div class="metabox">
                        <p>Posted by ${post.author} on ${post.date} in ${post.categories}</p>
                      </div>
                      <div class="generic-content">
                        <p>${post.excerpt}</p>
                        <p><a class="btn btn--blue" href="${post.permalink}">Continue reading &raquo;</a></p>
                      </div>
                    </div>`;
              container.insertAdjacentHTML("beforeend", postHTML);
            });

            // Update the URL with the new page number
            // You can comment out this block if you don't want the URL to change
            const newUrl = `?page=${page}`; // delete if needed?
            window.history.pushState({ page }, "", newUrl); // delete if needed?
          } else {
            // If no more posts, disable the button and update text
            loadMoreBtn.textContent = "No more posts";
            loadMoreBtn.disabled = true;
          }
        })
        .catch((error) => console.error("Error loading more posts:", error));
    });
  }
};
