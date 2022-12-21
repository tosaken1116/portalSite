import AddLinkIcon from "@mui/icons-material/AddLink";
import { CircularProgress, Grid, IconButton, Stack } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useGetLocalStorage } from "../hooks/hooks";
import { FormDataType, LinksProps } from "../type/Type";
import AddLinkModal from "./components/AddLinkModal";
import LinksWrapper from "./components/Links";

export default function Home() {
    const arrayMove = (result: any) => {
        const items = [...LinkProps];
        const deleteItem = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, deleteItem[0]);

        setLinkProps(items);
        saveLocalStorage();
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
                    console.log(link.icon);
                    console.log(JSON.stringify(link.icon));
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
            text += "]},";
        });
        text = text.slice(0, -1);
        text += "]";
        return text;
    };

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
        saveLocalStorage();
    };
    const [LinkProps, setLinkProps] = useState<LinksProps[]>();
    const saveLocalStorage = () => {
        localStorage.setItem("portalSite", parseDict());
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    useLayoutEffect(() => {
        setLinkProps(useGetLocalStorage("portalSite"));
    }, []);
    if (LinkProps == undefined) {
        return <CircularProgress />;
    } else {
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

                {modalIsOpen && (
                    <AddLinkModal
                        closeModal={() => setModalIsOpen(false)}
                        handleSubmit={handleSubmit}
                    ></AddLinkModal>
                )}

                <Grid
                    alignItems="center"
                    justifyContent="center"
                    container
                    p={3}
                >
                    <DragDropContext onDragEnd={arrayMove}>
                        <Droppable droppableId="droppableId">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {LinkProps.map(
                                        ({ title, links }, index) => {
                                            return (
                                                <Draggable
                                                    key={title}
                                                    draggableId={title}
                                                    index={index}
                                                >
                                                    {(provided) => (
                                                        <Grid
                                                            item
                                                            xs={2}
                                                            sm={4}
                                                            md={4}
                                                        >
                                                            <Stack
                                                                ref={
                                                                    provided.innerRef
                                                                }
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <LinksWrapper
                                                                    links={
                                                                        links
                                                                    }
                                                                    title={
                                                                        title
                                                                    }
                                                                ></LinksWrapper>
                                                            </Stack>
                                                        </Grid>
                                                    )}
                                                </Draggable>
                                            );
                                        }
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Grid>
            </Stack>
        );
    }
}
