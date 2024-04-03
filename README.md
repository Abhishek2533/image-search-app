**Image Search App**

This simple web application allows users to search for images using the Unsplash API and display them in a gallery format. Users can enter keywords in the search input field, and the app will fetch relevant images from Unsplash.

### How to Use

1. **Clone the Repository:** 
   Clone this repository to your local machine using the following command:
   ```
   git clone <repository_url>
   ```

2. **Get Unsplash Access Key:**
   Before running the application, you need to obtain an access key from Unsplash. Visit the [Unsplash Developer](https://unsplash.com/developers) website, sign up, and create a new application to get your access key.

3. **Insert Access Key:**
   Once you have obtained the access key, replace `"YOUR_UNSPLASH_ACCESS_KEY"` in the `script.js` file with your actual Unsplash access key.

4. **Open index.html:**
   Open the `index.html` file in a web browser to start using the application.

5. **Search for Images:**
   Enter a keyword in the search input field and click the "Search" button. The application will fetch images related to your keyword from Unsplash and display them in the gallery.

6. **Show More Images:**
   If more images are available, you can click the "Show More" button to load additional images.

### Files Included

- **index.html:** 
  This file contains the HTML structure of the web application, including the search input field, gallery, and buttons.

- **style.css:** 
  This file contains the styles for the HTML elements, defining their appearance and layout.

- **script.js:** 
  This file contains the JavaScript code responsible for handling user interactions, fetching images from the Unsplash API, and dynamically updating the gallery.

### Dependencies

- **Unsplash API:** 
  This application relies on the Unsplash API to fetch images based on user search queries. Make sure you have an active Unsplash account and an access key to use the API.

### Notes

- **Access Key Security:** 
  Ensure that you keep your Unsplash access key secure and do not share it publicly. It's recommended to use environment variables or other secure methods to store sensitive information.

- **Rate Limits:** 
  Be mindful of the rate limits imposed by the Unsplash API. Exceeding these limits may result in your access being temporarily restricted.

- **Attribution:** 
  When using images from Unsplash in your projects, it's important to provide proper attribution to the photographers as per the [Unsplash License](https://unsplash.com/license).

Enjoy using the Image Search App! If you have any questions or encounter any issues, feel free to reach out to the developer.
