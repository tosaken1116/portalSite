import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { AddLinkModalProps, FormDataType } from "../../type/Type";
export default function AddLinkModal({
    closeModal,
    handleSubmit,
}: AddLinkModalProps) {
    const [formData, setFormData] = useState<FormDataType>({
        category: "",
        title: "",
        link: "",
        color: "",
        icon: null,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setFormData({ ...formData, [name]: value });
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
                    <TextField
                        required
                        label="icon"
                        name="icon"
                        value={formData.icon}
                        onChange={handleChange}
                    />
                    <IconButton
                        onClick={() => handleSubmit(formData)}
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
