const teach = [
    { label: 'HTML' },
    { label: 'CS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQl' },
    { label: 'PostgreSQL' },
    { label: 'MongoDB' }
];

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter')
}
refs.input.addEventListener('input', _.debounce(onFilterChange, 700));

const listItemsMarkup = createItemsListMarkup(teach);

refs.list.innerHTML = listItemsMarkup;

function createItemsListMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(evt) {
    const filter = evt.target.value.toLowerCase();
    
    const filteredItemms = teach.filter(t => t.label.toLowerCase().includes(filter));
   

    const listItemsMarkup = createItemsListMarkup(filteredItemms);
    refs.list.innerHTML = listItemsMarkup;
}