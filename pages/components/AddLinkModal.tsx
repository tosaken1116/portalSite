import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CloudIcon from "@mui/icons-material/Cloud";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LinkIcon from "@mui/icons-material/Link";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import {
    Box,
    Button,
    IconButton,
    Modal,
    Stack,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { AddLinkModalProps, FormDataType } from "../../type/Type";
export default function AddLinkModal({
    closeModal,
    handleSubmit,
}: AddLinkModalProps) {
    const iconDict = {
        LiveTvIcon: <LiveTvIcon />,
        LinkIcon: <LinkIcon />,
        CloudIcon: <CloudIcon />,
        DescriptionIcon: <DescriptionIcon />,
        ImageIcon: <ImageIcon />,
    };
    const [selectedIcon, setSelectedIcon] = useState<string>("LiveTvIcon");
    const initialFormData = {
        category: "",
        title: "",
        link: "",
        color: "",
        icon: selectedIcon,
    };
    const [formData, setFormData] = useState<FormDataType>(initialFormData);
    const checkSubmit = () => {
        if (formData === initialFormData) {
            return;
        }
        closeModal();
        handleSubmit(formData);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setFormData({ ...formData, [name]: value });
    };

    const handleIconChange = (icon: string) => {
        setSelectedIcon(icon);
        console.log(iconDict[selectedIcon]);
    };
    return (
        <Modal
            open
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                p={4}
                sx={{
                    width: "300px",
                    backgroundColor: "white",
                    position: "relative",
                    borderRadius: "20px",
                }}
            >
                <IconButton
                    onClick={closeModal}
                    sx={{ position: "absolute", top: 0, right: 0 }}
                >
                    <CloseIcon></CloseIcon>
                </IconButton>
                <Stack spacing={2}>
                    <TextField
                        required
                        label="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        label="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        label="link"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        label="color"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                    />

                    <Stack direction="row">
                        <IconButton
                            onClick={() => handleIconChange("LiveTvIcon")}
                        >
                            <LiveTvIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleIconChange("LinkIcon")}
                        >
                            <LinkIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleIconChange("DescriptionIcon")}
                        >
                            <DescriptionIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleIconChange("ImageIcon")}
                        >
                            <ImageIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleIconChange("CloudIcon")}
                        >
                            <CloudIcon />
                        </IconButton>
                    </Stack>
                    <Button
                        startIcon={iconDict[selectedIcon]}
                        sx={{ color: formData.color }}
                    >
                        {formData.title}
                    </Button>
                    <IconButton
                        onClick={() => checkSubmit()}
                        sx={{
                            border: "2px solid #eeeeee",
                            alignSelf: "center",
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Modal>
    );
}
