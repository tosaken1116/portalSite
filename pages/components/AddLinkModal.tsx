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
import ColorPickerModal from "./ColorPickerModal";
import Icon from "./Icon";
export default function AddLinkModal({
    closeModal,
    handleSubmit,
}: AddLinkModalProps) {
    const [selectedIcon, setSelectedIcon] = useState<string>("liveTV");
    const initialFormData = {
        category: "",
        title: "",
        link: "",
        color: "",
        icon: selectedIcon,
    };
    const [selectedColor, setSelectedColor] = useState("#000000");

    const handleColorChange = (color: any) => {
        setSelectedColor(color.hex);
        setFormData({ ...formData, color: selectedColor });
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
        setFormData({ ...formData, icon: icon });
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
                    <Stack sx={{ position: "relative" }}>
                        <TextField
                            required
                            label="color"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                        />
                        <ColorPickerModal
                            selectedColor={selectedColor}
                            handleColorChange={handleColorChange}
                        ></ColorPickerModal>
                    </Stack>
                    <Box sx={{ backgroundColor: "white" }}></Box>
                    <Stack direction="row">
                        <IconButton onClick={() => handleIconChange("liveTV")}>
                            <LiveTvIcon />
                        </IconButton>
                        <IconButton onClick={() => handleIconChange("link")}>
                            <LinkIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleIconChange("description")}
                        >
                            <DescriptionIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleIconChange("insertPhoto")}
                        >
                            <ImageIcon />
                        </IconButton>
                        <IconButton onClick={() => handleIconChange("cloud")}>
                            <CloudIcon />
                        </IconButton>
                    </Stack>
                    <Button
                        startIcon={<Icon iconName={selectedIcon} />}
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
