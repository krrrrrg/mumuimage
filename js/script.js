let uploadedImages = [];

function uploadImages() {
    const input = document.getElementById('imageInput');
    const files = input.files;

    if (files.length === 0) {
        alert('이미지를 선택해주세요.');
        return;
    }

    if (files.length > 5) {
        alert('최대 5개의 이미지만 업로드할 수 있습니다.');
        return;
    }

    uploadedImages = [];
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith('image/')) {
            alert('이미지 파일만 업로드할 수 있습니다.');
            continue;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImages.push(e.target.result);
            displayImages();
        };
        reader.readAsDataURL(file);
    }
}

function displayImages() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    uploadedImages.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Image ${index + 1}`;
        imageContainer.appendChild(img);
    });
} 