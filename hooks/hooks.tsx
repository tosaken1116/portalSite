export const useGetLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
        const initialProps = [
            {
                title: "動画共有サービス",
                links: [
                    {
                        title: "youtube",
                        href: "https://youtube.com",
                        icon: "youtube",
                        color: "error",
                    },
                    {
                        title: "ニコニコ動画",
                        href: "https://www.nicovideo.jp/",
                        icon: "liveTV",
                        color: "primary",
                    },
                    {
                        title: "ニコニコ解析",
                        href: "https://www.nicovideo.me/",
                        icon: "analytics",
                        color: "primary",
                    },
                ],
            },
            {
                title: "九工大",
                links: [
                    {
                        title: "九工大",
                        href: "https://www.kyutech.ac.jp/",
                        icon: "school",
                        color: "primary",
                    },
                    {
                        title: "九工大情報工学部",
                        href: "https://www.iizuka.kyutech.ac.jp/",
                        icon: "school",
                        color: "primary",
                    },
                    {
                        title: "デヂエ",
                        href: "https://db.jimu.kyutech.ac.jp/cgi-bin/cbdb/db.cgi?page=DBIndex&id=352",
                        icon: "assignment",
                        color: "primary",
                    },
                ],
            },
            {
                title: "Google",
                links: [
                    {
                        title: "ホーム",
                        href: "https://www.google.com/",
                        icon: "home",
                        color: "primary",
                    },
                    {
                        title: "ドライブ",
                        href: "https://drive.google.com/drive/u/0/my-drive",
                        icon: "cloud",
                        color: "primary",
                    },
                    {
                        title: "フォト",
                        href: "https://photos.google.com/?tab=oq&pageId=none&pli=1",
                        icon: "insertPhoto",
                        color: "primary",
                    },
                ],
            },
            {
                title: "その他",
                links: [
                    {
                        title: "twitter",
                        href: "https://twitter.com/",
                        icon: "twitter",
                        color: "primary",
                    },
                    {
                        title: "Gmail",
                        href: "https://mail.google.com/mail/u/0/#inbox",
                        icon: "email",
                        color: "#ff0000",
                    },
                ],
            },
        ];
        const test = localStorage.getItem(key);
        console.log(test);

        return test != null ? JSON.parse(test) : initialProps;
    }
};
