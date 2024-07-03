export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};


/* parei em  32:58  vídeo https://youtu.be/YQCDUJ6hhNY?si=q2hIKdUtbr3gjRzE*/