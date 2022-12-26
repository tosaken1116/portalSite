import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal } from "@mui/material";
import { useQRCode } from "next-qrcode";
import { QrCodeProps } from "../../type/Type";

export default function QrCode({
    outputString,
    closeQrCodeModal,
}: QrCodeProps) {
    console.log(outputString);
    const zlib = require("zlib");
    const encoded = encodeURIComponent(outputString);
    const compressed = zlib.gzipSync(encoded);
    const base64formated = compressed.toString("base64");
    const { Canvas } = useQRCode();
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
            <Box sx={{ position: "relative" }}>
                <IconButton onClick={closeQrCodeModal}>
                    <CloseIcon />
                </IconButton>
                <Canvas
                    text={base64formated}
                    options={{
                        level: "Q",
                        margin: 3,
                        scale: 4,
                        width: 200,
                        color: {
                            dark: "#010599FF",
                            light: "#FFBF60FF",
                        },
                    }}
                />
            </Box>
        </Modal>
    );
}
