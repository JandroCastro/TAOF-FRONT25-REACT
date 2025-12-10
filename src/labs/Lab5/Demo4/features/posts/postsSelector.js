// features/posts/postsSelectors.js
import { createSelector } from "@reduxjs/toolkit";

// Selector simple: devuelve todos los posts
export const selectPosts = (state) => state.posts.items;



// Selector memoizado: filtra posts por autor
export const selectPostsByAuthor = (author) =>
    createSelector([selectPosts], (posts) =>
        posts.filter((post) => post.author === author)
    );

// Selector memoizado: cuenta posts que contienen una palabra clave en el título
export const selectPostCountByKeyword = (keyword) =>
    createSelector([selectPosts], (posts) =>
        posts.filter((post) => post.title.includes(keyword)).length
    );

// Selector combinado: resumen de posts por autor
export const selectPostsSummaryByAuthor = createSelector(
    [selectPosts],
    (posts) => {
        const summary = {};
        posts.forEach((post) => {
            summary[post.author] = (summary[post.author] || 0) + 1;
        });
        return summary;
    }
);
