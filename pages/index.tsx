import { CircularProgress, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getLocalStorage } from "../hooks/hooks";
import { FormDataType, LinksProps } from "../type/Type";
import AddLinkModal from "./components/AddLinkModal";
import EditButtons from "./components/EditButtons";
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
    const removeLink = (removeLink: string) => {
        const removedLinkProps = LinkProps.concat();
        removedLinkProps.map((LinkProp) => {
            LinkProp.links.map((link, index) => {
                if (link.href == removeLink) {
                    const removedLinks = LinkProp.links;
                    removedLinks.splice(index, 1);
                    return removedLinks;
                }
            });
        });
        setLinkProps(removedLinkProps);
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
                foundFlag = true;
            }
        });
        if (!foundFlag) {
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
    const [LinkProps, setLinkProps] = useState<LinksProps[]>([]);
    const saveLocalStorage = () => {
        localStorage.setItem("portalSite", parseDict());
    };
    const [isRemoveMode, setIsRemoveMode] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useEffect(() => {
        const localStorageLinks = getLocalStorage("portalSite");
        setLinkProps(localStorageLinks);
    }, []);
    if (LinkProps.length == 0) {
        return <CircularProgress />;
    } else {
        return (
            <Stack
                alignItems="center"
                spacing={1}
                sx={{ position: "relative" }}
            >
                <EditButtons
                    addLink={() => setModalIsOpen(true)}
                    removeLink={() => setIsRemoveMode(!isRemoveMode)}
                />

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
                                                                    isRemoveMode={
                                                                        isRemoveMode
                                                                    }
                                                                    removeLink={
                                                                        removeLink
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
