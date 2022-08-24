export const initialState = {
    filters: {
        search: '',
        author: '',
        category: ''
    },
    blogs: [
        {
            id: 1,
            title: 'Boost your conversion rate',
            thumbnail: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            category: 'Article',
            minRead: '5 min read',
            publishedDate: '11 Jul, 2022',
            author: {
                name: 'Learn with sumit',
                avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4'
            }
        },
        {
            id: 2,
            title: 'How to use search engine optimization to drive sales',
            thumbnail: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            category: 'Article',
            minRead: '11 min read',
            publishedDate: '08 Feb, 2022',
            author: {
                name: 'Learn with sumit',
                avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4'
            }
        },
        {
            id: 3,
            title: 'Improve your customer experience',
            thumbnail: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            category: 'Explore',
            minRead: '9 min read',
            publishedDate: '20 Mar, 2022',
            author: {
                name: 'Robert Smith',
                avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4'
            }
        },
        {
            id: 4,
            title: 'Responsible To Environment',
            thumbnail: 'https://i.ibb.co/qy6HwnH/blog-1.jpg',
            category: 'Environment',
            minRead: '5 min read',
            publishedDate: '20 Sep, 2022',
            author: {
                name: 'John Doe',
                avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4'
            }
        },
        {
            id: 5,
            title: 'The engineering of today',
            thumbnail: 'https://i.ibb.co/b2tHXYY/blog-2.jpg',
            category: 'Explore',
            minRead: '4 min read',
            publishedDate: '28 Mar, 2022',
            author: {
                name: 'John Doe',
                avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4'
            }
        },
        {
            id: 6,
            title: 'The humble beginnings',
            thumbnail: 'https://i.ibb.co/Tg5qGrx/blog-3.jpg',
            category: 'Environment',
            minRead: '8 min read',
            publishedDate: '21 Jun, 2022',
            author: {
                name: 'Robert Smith',
                avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4'
            }
        },
    ]
}