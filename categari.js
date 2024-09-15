// Category data
const categoryDescriptions = {
    "Mathematics": "Mathematics is the study of numbers, shapes, patterns, and logical reasoning. It forms the foundation for many fields, including science, engineering, and technology.",
    "English": "English is a global language used for communication, literature, business, and education, spoken by millions worldwide.",
    "Home Science": "Home Science is the study of managing everyday life, including nutrition, family resources, and home management to improve overall well-being.",
    "Social Science": "Social Science is the study of human behavior, societies, and social relationships, including sociology, psychology, economics, and political science.",
    "Science": "Science is the systematic study of the natural world through observation, experimentation, and analysis.",
    "Biography": "A biography is a detailed account of a person's life, highlighting their experiences, achievements, and impact.",
    "Computer": "A computer is an electronic device that processes, stores, and retrieves data, enabling a wide range of digital tasks."
};

// Function to handle category click
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-category');
        const categoryDetailsDiv = document.getElementById('category-details');

        // Update the category details section
        categoryDetailsDiv.querySelector('h2').textContent = selectedCategory;
        categoryDetailsDiv.querySelector('p').textContent = categoryDescriptions[selectedCategory];
        categoryDetailsDiv.style.display = 'block'; // Show the category details
    });
});
