import AddLinkIcon from "@mui/icons-material/AddLink";
import CancelIcon from "@mui/icons-material/Cancel";
import LinkOffSharpIcon from "@mui/icons-material/LinkOffSharp";
import { Box, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { EditButtonsProps } from "../../type/Type";
export default function EditButtons({ addLink, removeLink }: EditButtonsProps) {
    const [isEditButtonsOpen, setIsEditButtonsOpen] = useState(false);
    return (
        <Box sx={{ position: "absolute", left: "50px" }}>
            <IconButton
                onClick={() => setIsEditButtonsOpen(!isEditButtonsOpen)}
                sx={{
                    rotate: isEditButtonsOpen ? "0" : "45deg",
                }}
            >
                <CancelIcon />
            </IconButton>
            {isEditButtonsOpen ? (
                <Stack>
                    <IconButton onClick={() => addLink()}>
                        <AddLinkIcon />
                    </IconButton>
                    <IconButton onClick={removeLink}>
                        <LinkOffSharpIcon />
                    </IconButton>
                </Stack>
            ) : (
                <></>
            )}
        </Box>
    );
}
