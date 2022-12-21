import AddLinkIcon from "@mui/icons-material/AddLink";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CloudIcon from "@mui/icons-material/Cloud";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid, IconButton, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FormDataType, LinksProps } from "../type/Type";
import AddLinkModal from "./components/AddLinkModal";
import LinksWrapper from "./components/Links";

export default function Home() {
    const router = useRouter();
    const arrayMove = (result: any) => {
        const items = [...LinkProps];
        const deleteItem = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, deleteItem[0]);

        setLinkProps(items);
    };
    const parseDict = () => {
        let text = "[";
        text += "";
        LinkProps.map((LinkProp) => {
            text +=
                '{"title":"' +
                LinkProp.title +
                '","links":[' +
                LinkProp.links.map((link) => {
                    let linkText =
                        "{" +
                        '"title":"' +
                        link.title +
                        '","href":"' +
                        link.href +
                        '","icon":"' +
                        link.icon +
                        '","color":"' +
                        link.color +
                        '",';
                    return linkText.slice(0, -1) + "}";
                });
            +"}";
        });
        text += "]";
        console.log(text);
        const textParse = JSON.parse(text);
        console.log(textParse);
    };
    const initialProps = [
        {
            title: "動画共有サービス",
            links: [
                {
                    title: "youtube",
                    href: "https://youtube.com",
                    icon: <YouTubeIcon></YouTubeIcon>,
                    color: "error",
                },
                {
                    title: "ニコニコ動画",
                    href: "https://www.nicovideo.jp/",
                    icon: <LiveTvIcon></LiveTvIcon>,
                    color: "primary",
                },
                {
                    title: "ニコニコ解析",
                    href: "https://www.nicovideo.me/",
                    icon: <AnalyticsIcon></AnalyticsIcon>,
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
                    icon: <SchoolIcon></SchoolIcon>,
                    color: "primary",
                },
                {
                    title: "九工大情報工学部",
                    href: "https://www.iizuka.kyutech.ac.jp/",
                    icon: <SchoolIcon></SchoolIcon>,
                    color: "primary",
                },
                {
                    title: "デヂエ",
                    href: "https://db.jimu.kyutech.ac.jp/cgi-bin/cbdb/db.cgi?page=DBIndex&id=352",
                    icon: <AssignmentIcon></AssignmentIcon>,
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
                    icon: <HomeIcon></HomeIcon>,
                    color: "primary",
                },
                {
                    title: "ドライブ",
                    href: "https://drive.google.com/drive/u/0/my-drive",
                    icon: <CloudIcon></CloudIcon>,
                    color: "primary",
                },
                {
                    title: "フォト",
                    href: "https://photos.google.com/?tab=oq&pageId=none&pli=1",
                    icon: <InsertPhotoIcon></InsertPhotoIcon>,
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
                    icon: <TwitterIcon></TwitterIcon>,
                    color: "primary",
                },
                {
                    title: "Gmail",
                    href: "https://mail.google.com/mail/u/0/#inbox",
                    icon: <EmailIcon></EmailIcon>,
                    color: "#ff0000",
                },
            ],
        },
    ];
    const testText =
        '[{"title": "動画共有サービス","links":[{"title": "youtube","href": "https://youtube.com","icon": "<YouTubeIcon></YouTubeIcon>","color":"error"}]}]';
    const { decycle, encycle } = require("json-cyclic");

    const handleSubmit = (formData: FormDataType) => {
        const addData = LinkProps.concat();
        let foundFlag = false;
        addData.map((LinkProp, index) => {
            if (LinkProp.title == formData.category) {
                const addColumn = LinkProp;
                addData.splice(index, 1);
                addColumn.links.push({
                    href: formData.link,
                    title: formData.title,
                    icon: formData.icon,
                    color: formData.color,
                });
                setLinkProps([...addData, addColumn]);
                console.log("found");
                foundFlag = true;
            }
        });
        if (!foundFlag) {
            console.log("not found");
            setLinkProps([
                ...addData,
                {
                    title: formData.category,
                    links: [
                        {
                            title: formData.title,
                            href: formData.link,
                            icon: formData.icon,
                            color: formData.color,
                        },
                    ],
                },
            ]);
            foundFlag = false;
        }
    };
    const [LinkProps, setLinkProps] = useState<LinksProps[]>(initialProps);
    // const test = useGetLocalStorage("portalSite");
    // if (test !== undefined) {
    //     setLinkProps(test);
    // }
    const saveLocalStorage = () => {
        parseDict();
        const testjson = JSON.parse(testText);
        console.log(testjson);
        //   console.log(LinkProps);
        //   console.log("portalSite");
        //   console.log(encycle(LinkProps));
        // localStorage.setItem("portalSite", JSON.stringify(LinkProps));
        // document.cookie = "portalSite=" + LinkProps;
        console.log(LinkProps.toString());
        console.log(JSON.stringify(encycle(LinkProps)));
        localStorage.setItem("portalSite", JSON.stringify(LinkProps));
        // localStorage.setItem("portalSite", JSON.stringify(encycle(LinkProps)));
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    // useEffect(() => {
    //     router.events.on("routeChangeStart", saveLocalStorage);
    //     return () => {
    //         router.events.off("routeChangeStart", saveLocalStorage);
    //     };
    // }, []);
    return (
        <Stack alignItems="center" spacing={1}>
            <IconButton
                onClick={() => setModalIsOpen(true)}
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: { xs: "24px", sm: "36px" },
                }}
            >
                <AddLinkIcon />
            </IconButton>
            <IconButton
                onClick={() => saveLocalStorage()}
                sx={{
                    position: "absolute",
                    top: 12,
                    left: 0,
                    width: { xs: "24px", sm: "36px" },
                }}
            >
                <AddLinkIcon />
            </IconButton>
            {modalIsOpen && (
                <AddLinkModal
                    closeModal={() => setModalIsOpen(false)}
                    handleSubmit={handleSubmit}
                ></AddLinkModal>
            )}

            <Grid alignItems="center" justifyContent="center" container p={3}>
                <DragDropContext onDragEnd={arrayMove}>
                    <Droppable droppableId="droppableId">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {LinkProps.map(({ title, links }, index) => {
                                    return (
                                        <Draggable
                                            key={title}
                                            draggableId={title}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <Grid item xs={2} sm={4} md={4}>
                                                    <Stack
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <LinksWrapper
                                                            links={links}
                                                            title={title}
                                                        ></LinksWrapper>
                                                    </Stack>
                                                </Grid>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </Grid>
        </Stack>
    );
}
