document.addEventListener('DOMContentLoaded', function () {
    // Get a unique identifier for the post (can be derived from the URL or a predefined ID)
    const postID = window.location.pathname; // Example: "/pages/post-page1.html"

    // Check if the user is logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert('Please sign in to interact with the comments section.');
        
        // Optionally hide or disable the comment section
        document.querySelector('.comment-section').style.display = 'none';
        return;
    }

    // Event listener for the "Submit Comment" button
    document.getElementById('btn-comment').addEventListener('click', function () {
        // Get the input value from the textarea
        const textArea = document.getElementById('text-area');
        const newComment = textArea.value;

        // Check if the comment is not empty
        if (newComment.trim() === '') {
            alert('Please write a comment before submitting.');
            return;
        }

        // Create a new paragraph element to display the comment
        const commentParagraph = document.createElement('p');
        // Set the comment content with the username
        commentParagraph.textContent = `${loggedInUser}: ${newComment}`;

        // Append the new comment to the comment box
        const commentBox = document.getElementById('comment-box');
        commentBox.appendChild(commentParagraph);

        // Save the comment under the specific postID in localStorage
        const commentsKey = `postComments:${postID}`;
        const comments = JSON.parse(localStorage.getItem(commentsKey)) || [];
        comments.push({ username: loggedInUser, comment: newComment });
        localStorage.setItem(commentsKey, JSON.stringify(comments));

        // Clear the textarea after submission
        textArea.value = '';
    });

    // Load existing comments for this specific post
    const commentsKey = `postComments:${postID}`;
    const comments = JSON.parse(localStorage.getItem(commentsKey)) || [];
    const commentBox = document.getElementById('comment-box');
    comments.forEach(({ username, comment }) => {
        // Create a paragraph for each saved comment
        const commentParagraph = document.createElement('p');
        commentParagraph.textContent = `${username}: ${comment}`;
        commentBox.appendChild(commentParagraph);
    });
});
