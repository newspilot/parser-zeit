import {FeedItem, FeedParser, FeedSource} from '../index.d';

const heise: FeedParser = {
    name: 'ZEIT ONLINE',
    urls: [
        {name: 'Politik', url: 'http://newsfeed.zeit.de/politik/index', prefixRealName: true},
        {name: 'Wirtschaft', url: 'http://newsfeed.zeit.de/wirtschaft/index', prefixRealName: true},
        {name: 'Gesellschaft', url: 'http://newsfeed.zeit.de/gesellschaft/index', prefixRealName: true},
        {name: 'Kultur', url: 'http://newsfeed.zeit.de/kultur/index', prefixRealName: true},
        {name: 'Wissen', url: 'http://newsfeed.zeit.de/wissen/index', prefixRealName: true},
        {name: 'Digital', url: 'http://newsfeed.zeit.de/digital/index', prefixRealName: true},
        {name: 'Campus', url: 'http://newsfeed.zeit.de/campus/index'},
        {name: 'Arbeit', url: 'http://newsfeed.zeit.de/arbeit/index'},
        {name: 'Magazin', url: 'http://newsfeed.zeit.de/zeit-magazin/index'},
        {name: 'Entdecken', url: 'http://newsfeed.zeit.de/entdecken/index', prefixRealName: true},
        {name: 'Mobilität', url: 'http://newsfeed.zeit.de/mobilitaet/index', prefixRealName: true},
        {name: 'Sport', url: 'http://newsfeed.zeit.de/sport/index', prefixRealName: true},
    ],
    parse: (feed: any): FeedSource => {
        const items: Array<FeedItem> = [];
        feed.items.forEach((item: any) => {
            items.push({
                title: item.title,
                description: item.contentSnippet,
                link: item.link,
                categories: item.categories.map((category: string) => category.toLowerCase()),
                date: item.isoDate
            });
        });
        return {
            name: feed.title,
            description: feed.description,
            language: feed.language.split('-')[0],
            link: feed.link,
            feed: items
        };
    }
};

export default heise;