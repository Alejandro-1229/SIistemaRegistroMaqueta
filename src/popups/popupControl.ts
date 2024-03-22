export function initPopup() {
    document.getElementById('showPopup-control')?.addEventListener('click', () => {
        document.getElementById('popup-control')!.style.display = 'block';
        document.getElementById('overlay-control')!.style.display = 'block';
    });

    document.getElementById('overlay-control')?.addEventListener('click', () => {
        document.getElementById('popup-control')!.style.display = 'none';
        document.getElementById('overlay-control')!.style.display = 'none';
    });
}

interface SearchElement {
    buttonId: string;
    contentIds: string[];
}

const searchElements: SearchElement[] = [
    {
        buttonId: 'btn-search-razon-social',
        contentIds: ['content-find-razon-social']
    },
    {
        buttonId: 'btn-search-expediente',
        contentIds: ['content-find-expediente']
    },
    {
        buttonId: 'btn-search-funcion',
        contentIds: ['content-find-funcion']
    },
    {
        buttonId: 'btn-search-tipo',
        contentIds: ['content-find-tipo']
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
