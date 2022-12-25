import AddLinkIcon from "@mui/icons-material/AddLink";
import CancelIcon from "@mui/icons-material/Cancel";
import LinkOffSharpIcon from "@mui/icons-material/LinkOffSharp";
import { Box, IconButton, Stack } from "@mui/material";
import { useState } from "react";
export default function EditButtons() {
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
                    <IconButton>
                        <AddLinkIcon />
                    </IconButton>
                    <IconButton>
                        <LinkOffSharpIcon />
                    </IconButton>
                </Stack>
            ) : (
                <></>
            )}
        </Box>
    );
}
