
import {SearchElement} from "../interfaces/Ingeniero";


const searchElements: SearchElement[] = [
    {
        buttonId: 'btn-search-razon-social',
        contentIds: ['content-find-razon-social']
    },
    {
        buttonId: 'btn-search-file',
        contentIds: ['content-find-file']
    },
    {
        buttonId: 'btn-search-function',
        contentIds: ['content-find-function']
    }
];

export function selectSearch() {
    searchElements.forEach(({ buttonId, contentIds }) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                contentIds.forEach((contentId) => {
                    const contentElement = document.getElementById(contentId);
                    if (contentElement) {
                        contentElement.style.display = 'block';
                    }
                });

                searchElements
                    .filter((element) => element.buttonId !== buttonId)
                    .forEach(({ contentIds: hideContentIds }) => {
                        hideContentIds.forEach((hideContentId) => {
                            const hideContentElement = document.getElementById(hideContentId);
                            if (hideContentElement) {
                                hideContentElement.style.display = 'none';
                            }
                        });
                    });
            });
        }
    });
}