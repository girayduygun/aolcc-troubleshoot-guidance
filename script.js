function toggleText(button) {
    const description = button.previousElementSibling;
    const extraContent = description.querySelector('.extra-content');
    
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'inline';
        button.textContent = 'Read less';
    } else {
        extraContent.style.display = 'none';
        button.textContent = 'Read more';
    }
}
