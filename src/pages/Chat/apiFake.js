export function getDialogMeta() {
    return {
        "60b8ac428b47382c404dc186": {
            lastMessage: {
                _id: "60b8ac428b47382c404dc187",
                text: "dpdpdp",
                createdAt: "2021-06-03T10:17:38.245Z",
                author: {
                    _id: "60ae153b6122a73c309460c0",
                    fullName: "author1"
                },
            },
            unread: 1,
        },
        "60b8ac428b47382c404dc187": {
            lastMessage: {
                _id: "60b8ac428b47382c404dc187",
                text: "ssss",
                createdAt: "2021-06-03T10:17:38.245Z",
                author: {
                    _id: "60ae153b6122a73c309460c0",
                    fullName: "author2"
                },
            },
            unread: 2,
        }

    }

};

export function getMessages() {
    return {
        "60b8ac428b47382c404dc186": [
            {
                _id: "60b8ac428b47382c404dc1871",
                text: "dpdpdp",
                createdAt: "2021-06-03T10:17:38.245Z",
                author: {
                    _id: "60ae153b6122a73c309460c0",
                    fullName: "author1",
                    avatar: null,
                    isOnline: true
                },
            },
            {
                _id: "60b8ac428b47382c404dc18002",
                text: "dpdpdp",
                createdAt: "2021-06-03T10:17:38.245Z",
                author: {
                    _id: "60ae153b6122a73c309460c1",
                    fullName: "partner1",
                    avatar: null,
                    isOnline: true
                },
            },

        ],

        "60b8ac428b47382c404dc187": [
            {
                _id: "60b8ac428b47382c404dc1873",
                text: "dpdpdp",
                createdAt: "2021-06-03T10:17:38.245Z",
                author: {
                    _id: "60a77496b2278021d0c8f00f21",
                    fullName: "partner1",
                    avatar: null,
                    isOnline: true
                },
            },
            {
                _id: "60b8ac428b47382c404dc18004",
                text: "dpdpdp11111111111111111",
                createdAt: "2021-06-03T10:17:38.245Z",
                author: {
                    _id: "60a77496b2278021d0c8f00f2",
                    fullName: "partner2",
                    avatar: null,
                    isOnline: true
                },
            },
            {
                _id: "60b8ac428b47382c404dc18005",
                text: "dpdpdp22222222222222222",
                createdAt: "2021-06-03T10:17:38.245Z",
                author: {
                    _id: "60a77496b2278021d0c8f00f21",
                    fullName: "partner1",
                    avatar: null,
                    isOnline: true
                },
            },

        ],

    }
};

export function getDialog() {
    return [
        {
            _id: "60b8ac428b47382c404dc186",
            author: {
                _id: "60ae153b6122a73c309460c01",
                fullName: "author1",
                avatar: null,
                isOnline: true,
            },
            partner: {
                _id: "60a77496b2278021d0c8f00f2",
                fullName: "partner1",
                avatar: null,
                isOnline: false
            },
            createdAt: "2021-06-03T10:17:38.245Z",
            updatedAt: "2021-06-03T12:16:01.431Z",

        },
        {
            _id: "60b8ac428b47382c404dc187",
            author: {
                _id: "60ae153b6122a73c309460c03",
                fullName: "author2",
                avatar: null,
                isOnline: true,
            },
            partner: {
                _id: "60a77496b2278021d0c8f00f4",
                fullName: "partner2",
                avatar: null,
                isOnline: true,
            },
            createdAt: "2021-06-03T10:17:38.245Z",
            updatedAt: "2021-06-03T12:16:01.431Z",

        },

    ]
}