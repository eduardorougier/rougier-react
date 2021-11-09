//Array de productos
const productos = [
    { id:1, category: 'Cat1', title: 'PRODUCTO 1', price: 100, pictureUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADi4uI+Pj4eHh7u7u7IyMhra2uOjo709PRBQUGhoaH7+/utra3X19dycnJbW1u8vLxKSkrV1dWYmJimpqYlJSVVVVXCwsJtbW3Pz899fX3q6uobGxvDw8NhYWF5eXksLCwzMzOTk5OGhoYTExMNDQ20tLRHR0dPT087GFaGAAAHY0lEQVR4nO2d6XLyOgyGCRRICISdsnWhQIH7v8FTTtvpJ9khkkwjd0bP3+LYbxPbsiTbjYZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGP1Ovpr0WtX0Jqu809duLpvlKOHxMtZuMovTgqnvyuKk3WwyRU+g70qv0G46jVyo70qu3XgKwwCBSTLUbn41L0ECP0YcbQFVvAYKTJJXbQm3CemD30TdF4s7CEySmEfUyV0UTrRllDO+i8AkWWoLKeXhTgoX2kLKWN9JYJKstaWU4Mz1o/m0WU0ndd59pPN+H5nb71Ny0T3+TONcTKGpYpExyg6QxDgnjDykkcgWinPW74I2dnmFt0lI6XrInkAbn5nFoU/gifOJ1wXqhltm8Rks3vyVNoYBu+GOW3waf0eE3XDFLZ4do++I8B3wvUoX+IBfaGEgqBvyJ7SgyaYO5qGvAFm18/s3MRA42l8ET4AKR3dvYSiwfTPBE1Q7YnFKh6vuDVbIxdYRVIJmxJfbFQ7TU3Ev+3w93CVcJCbJtPqxiMXrPRaS4zd2xUlyltSUCSpKFqEBneJSXYmHjagymTN5EjSvSN2fsigSXgdTCbDwxCEImd3M74hfiJ0e4hDETjbItZ+qH+1HOHnKg0jS2fpRXCPb0L8yq35uGZL5vv4qxZ3iA7qTTbNOyTT4RU8osNGQhsc/eOPWNa9+ZilyD0QzoFbmYgR7dzmExFWe5dUyvcgncUUvXBcUZCuPkvPMDGfcfjuMOwTW7SB9V9prSkXjgzNQPHJq6ePSg+CG3x8cCUg4n+kSlY3PaXIFx9Q5A8BeXrROUMx5zygKnS6i1V4tnEE7OcYi7MUxdsJP4KzNmfThbBhjDOET2BM54X8Ydg6fAX6LNmjnA6OkKYwFU1iOKYwFU1jObyjsZ8Up36dpus9PRUa1kotZ+s3JDRVEpLA5GEI7qTUcEAyJAqZzOu6mWBRmud//0sorVssdXAIngcehsHlr1f5ya13Wdn9/uPULHYVF1e6gUbnGrufn8K3rK8woqfuvJcFGzyvEXVFd4RLmyJRx9McAvf5h2BO1FdIDH97gkTflGLqbdBVu4QL8Ni1PHbG/wybPp7xwZ8fs3fM7GA3VVMjfW+KOqb5hCrZFUaEkAOG8RU/qAgpo6yncSnZePDn1FPg7RRO+okLOIPODG5Vrr/79uzurqCkE7fqHxeiQD2aHUdkg5Jk02qfBN57sIC2F/u1P3eWPxbVd+iyyJOGm/ygp9OY2zfAyYusN2jOzxZQUekyZjW/Bm23cHzIzY3QUusbWoiyLYOp2SF4qno5CJ7h6Kf/0MidtjpeKo6LQsSZvh2ad/wfrJaooxCveqi2veGMta7e6hkK8bN1VjY7ZDpXgZDpoKMQZlNWpSviz5uRvaShEbwQbkj7QpMHZT6SgEC+aSIVQGUZahIJClFRMy95FhRjpWwoKkW+UZoQhM48xmtavEA2MVBsM2nlv9Myf+hWiva7UfSXIe0+fL+pXCG3SI7XgFq7l6WZN/Qphfgs9kxZGbuj5O/UrhPM9Pb0crofp2Vv1KzyAcnTrBP5nKGbCJ/UrhOYJ/WuDXzd9T5G2QrrXBXp2/o5CeloyTIaNWaG0H0KvVMz9MAXl6G4laNSk5HLa8yE98xb6yOmm95+xadowVkzfRFy/QhRyoppfyAFJz9hVWFtAByh1yIBD8APd8a2wPoSetiNxfQg/UobLVEEhCkbQrBq0NYThitL309DqRJtjGTsJNXxtqLUURw1670+M2jQUwjmfMi7ikD/dotFRiNvbq3K69HHeImd3h0rcAschqpbBOBjM2oKkotDJCb1tnTrhVNYuMp34oZOHcetQKyecz9tFpqPQeYnJuaxrNd2sFN5BdkpxfE/OrH/S8JwrwtrpqqYQuYX/Z3HCY2r/5MubYm6T1sqn8e7lP6bFj5WaFak3uZZ7wJdaTlRJbvditJmPn8fzTVlSFPvEEDWFmezIZMay6Qu9zD3Z6Q/8vaqK+aWSY6EF53Zp5gjzD7iQbIlXzfPmvkXJGXbKufqsVPYH2X5x5f0WGf26oEfhscHaO0rIx72JD1xTV9jYUk7vushPtNFX2GiMq5LaWyEHH8ag8EPjrWs9emEHO8ahsNEoYNDth03ouTexKPxgvT9DP+PxnIpmQEhECq+tKZb5Zrjqroab2bK40zOjUvgbmMJyTGEsmMJyTGEsyBX+lbO+oD+Ic9bXDpSM9wZUGB/nnNcGFz3xXVPwDVxjc0ICKJIb6zVoyBdEzxZz9rm+xznWtNFWb85KzNnoyr29qQ6cMB7L2eMcCvRIugavPqZzx0HCC64657v+AXhHdIrumtDlnemRDDgAXgnuufMhB3qrwL8UEh+WHDuCwI7nPICIEd37Ir9ton6YORxfZPe5obkOzsLITl92UVD9XORXW5U5q+NCdvfSF52AizxqYhdoM/dz2rl5auThl6/1T/F2x4uTTCYV+TzrTnqtmOhNurNljFfqGoZhGIZhGIZhGIZhGIZhGIZhGIZhGEYA/wHH0Gp2rZNfkgAAAABJRU5ErkJggg==' },
    { id:2, category: 'Cat1', title: 'PRODUCTO 2', price: 200, pictureUrl: 'data:image/png;base64,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' },
    { id:3, category: 'Cat2', title: 'PRODUCTO 3', price: 300, pictureUrl: 'data:image/png;base64,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' },
    { id:1, category: 'Cat1', title: 'PRODUCTO 4', price: 640, pictureUrl: 'data:image/png;base64,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' },
    { id:2, category: 'Cat1', title: 'PRODUCTO 5', price: 290, pictureUrl: 'data:image/png;base64,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' },
    { id:3, category: 'Cat2', title: 'PRODUCTO 6', price: 120, pictureUrl: 'data:image/png;base64,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' },
    { id:1, category: 'Cat1', title: 'PRODUCTO 7', price: 320, pictureUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADi4uI+Pj4eHh7u7u7IyMhra2uOjo709PRBQUGhoaH7+/utra3X19dycnJbW1u8vLxKSkrV1dWYmJimpqYlJSVVVVXCwsJtbW3Pz899fX3q6uobGxvDw8NhYWF5eXksLCwzMzOTk5OGhoYTExMNDQ20tLRHR0dPT087GFaGAAAHY0lEQVR4nO2d6XLyOgyGCRRICISdsnWhQIH7v8FTTtvpJ9khkkwjd0bP3+LYbxPbsiTbjYZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGP1Ovpr0WtX0Jqu809duLpvlKOHxMtZuMovTgqnvyuKk3WwyRU+g70qv0G46jVyo70qu3XgKwwCBSTLUbn41L0ECP0YcbQFVvAYKTJJXbQm3CemD30TdF4s7CEySmEfUyV0UTrRllDO+i8AkWWoLKeXhTgoX2kLKWN9JYJKstaWU4Mz1o/m0WU0ndd59pPN+H5nb71Ny0T3+TONcTKGpYpExyg6QxDgnjDykkcgWinPW74I2dnmFt0lI6XrInkAbn5nFoU/gifOJ1wXqhltm8Rks3vyVNoYBu+GOW3waf0eE3XDFLZ4do++I8B3wvUoX+IBfaGEgqBvyJ7SgyaYO5qGvAFm18/s3MRA42l8ET4AKR3dvYSiwfTPBE1Q7YnFKh6vuDVbIxdYRVIJmxJfbFQ7TU3Ev+3w93CVcJCbJtPqxiMXrPRaS4zd2xUlyltSUCSpKFqEBneJSXYmHjagymTN5EjSvSN2fsigSXgdTCbDwxCEImd3M74hfiJ0e4hDETjbItZ+qH+1HOHnKg0jS2fpRXCPb0L8yq35uGZL5vv4qxZ3iA7qTTbNOyTT4RU8osNGQhsc/eOPWNa9+ZilyD0QzoFbmYgR7dzmExFWe5dUyvcgncUUvXBcUZCuPkvPMDGfcfjuMOwTW7SB9V9prSkXjgzNQPHJq6ePSg+CG3x8cCUg4n+kSlY3PaXIFx9Q5A8BeXrROUMx5zygKnS6i1V4tnEE7OcYi7MUxdsJP4KzNmfThbBhjDOET2BM54X8Ydg6fAX6LNmjnA6OkKYwFU1iOKYwFU1jObyjsZ8Up36dpus9PRUa1kotZ+s3JDRVEpLA5GEI7qTUcEAyJAqZzOu6mWBRmud//0sorVssdXAIngcehsHlr1f5ya13Wdn9/uPULHYVF1e6gUbnGrufn8K3rK8woqfuvJcFGzyvEXVFd4RLmyJRx9McAvf5h2BO1FdIDH97gkTflGLqbdBVu4QL8Ni1PHbG/wybPp7xwZ8fs3fM7GA3VVMjfW+KOqb5hCrZFUaEkAOG8RU/qAgpo6yncSnZePDn1FPg7RRO+okLOIPODG5Vrr/79uzurqCkE7fqHxeiQD2aHUdkg5Jk02qfBN57sIC2F/u1P3eWPxbVd+iyyJOGm/ygp9OY2zfAyYusN2jOzxZQUekyZjW/Bm23cHzIzY3QUusbWoiyLYOp2SF4qno5CJ7h6Kf/0MidtjpeKo6LQsSZvh2ad/wfrJaooxCveqi2veGMta7e6hkK8bN1VjY7ZDpXgZDpoKMQZlNWpSviz5uRvaShEbwQbkj7QpMHZT6SgEC+aSIVQGUZahIJClFRMy95FhRjpWwoKkW+UZoQhM48xmtavEA2MVBsM2nlv9Myf+hWiva7UfSXIe0+fL+pXCG3SI7XgFq7l6WZN/Qphfgs9kxZGbuj5O/UrhPM9Pb0crofp2Vv1KzyAcnTrBP5nKGbCJ/UrhOYJ/WuDXzd9T5G2QrrXBXp2/o5CeloyTIaNWaG0H0KvVMz9MAXl6G4laNSk5HLa8yE98xb6yOmm95+xadowVkzfRFy/QhRyoppfyAFJz9hVWFtAByh1yIBD8APd8a2wPoSetiNxfQg/UobLVEEhCkbQrBq0NYThitL309DqRJtjGTsJNXxtqLUURw1670+M2jQUwjmfMi7ikD/dotFRiNvbq3K69HHeImd3h0rcAschqpbBOBjM2oKkotDJCb1tnTrhVNYuMp34oZOHcetQKyecz9tFpqPQeYnJuaxrNd2sFN5BdkpxfE/OrH/S8JwrwtrpqqYQuYX/Z3HCY2r/5MubYm6T1sqn8e7lP6bFj5WaFak3uZZ7wJdaTlRJbvditJmPn8fzTVlSFPvEEDWFmezIZMay6Qu9zD3Z6Q/8vaqK+aWSY6EF53Zp5gjzD7iQbIlXzfPmvkXJGXbKufqsVPYH2X5x5f0WGf26oEfhscHaO0rIx72JD1xTV9jYUk7vushPtNFX2GiMq5LaWyEHH8ag8EPjrWs9emEHO8ahsNEoYNDth03ouTexKPxgvT9DP+PxnIpmQEhECq+tKZb5Zrjqroab2bK40zOjUvgbmMJyTGEsmMJyTGEsyBX+lbO+oD+Ic9bXDpSM9wZUGB/nnNcGFz3xXVPwDVxjc0ICKJIb6zVoyBdEzxZz9rm+xznWtNFWb85KzNnoyr29qQ6cMB7L2eMcCvRIugavPqZzx0HCC64657v+AXhHdIrumtDlnemRDDgAXgnuufMhB3qrwL8UEh+WHDuCwI7nPICIEd37Ir9ton6YORxfZPe5obkOzsLITl92UVD9XORXW5U5q+NCdvfSF52AizxqYhdoM/dz2rl5auThl6/1T/F2x4uTTCYV+TzrTnqtmOhNurNljFfqGoZhGIZhGIZhGIZhGIZhGIZhGIZhGEYA/wHH0Gp2rZNfkgAAAABJRU5ErkJggg==' },
    { id:2, category: 'Cat1', title: 'PRODUCTO 8', price: 950, pictureUrl: 'data:image/png;base64,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' },
    { id:3, category: 'Cat2', title: 'PRODUCTO 9', price: 300, pictureUrl: 'data:image/png;base64,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' },
];

//Promise con setTimeout de 2 seg
const getFetch = new Promise((resolve, rej) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
})

export default getFetch