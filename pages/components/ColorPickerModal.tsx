// import { SketchPicker } from "../../type/Type";

import CloseIcon from "@mui/icons-material/Close";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { Box, IconButton, Modal } from "@mui/material";
import { Fragment, useState } from "react";
import { SketchPicker } from "react-color";

import { ChangeColorProps } from "../../type/Type";

export default function ColorPickerModal({
    selectedColor,
    handleColorChange,
}: ChangeColorProps) {
    const [colorPickModalIsOpen, setColorPickModalIsOpen] = useState(false);
    return (
        <Fragment>
            <IconButton
                onClick={() => setColorPickModalIsOpen(true)}
                sx={{ position: "absolute", right: "0" }}
            >
                <ColorLensIcon />
            </IconButton>
            <Modal
                hideBackdrop
                open={colorPickModalIsOpen}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box p={3}>
                    <IconButton>
                        <IconButton
                            onClick={() => setColorPickModalIsOpen(false)}
                            sx={{ position: "absolute", top: 0, right: 0 }}
                        >
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </IconButton>
                    <SketchPicker
                        color={selectedColor}
                        onChange={handleColorChange}
                    />
                </Box>
            </Modal>
        </Fragment>
    );
}
