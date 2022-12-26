import CancelIcon from "@mui/icons-material/Cancel";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { LinksProps, RemoveModeProps } from "../../type/Type";
import Icon from "./Icon";

const Links = ({
    links,
    title,
    isRemoveMode,
    removeLink,
}: LinksProps & RemoveModeProps) => {
    return (
        <Stack
            p={2}
            m={2}
            sx={{
                width: "300px",
                border: "2px solid #aaaaaa",
                borderRadius: "30px",
                color: "GrayText",
            }}
        >
            <Typography sx={{ fontSize: "20px" }}>{title}</Typography>
            {links &&
                links.map((link, index) => (
                    <Stack
                        direction="row"
                        key={index}
                        spacing={1}
                        sx={{ alignSelf: "center" }}
                    >
                        <Button
                            startIcon={<Icon iconName={link.icon} />}
                            sx={{ color: link.color }}
                        >
                            <Link href={link.href}>{link.title}</Link>
                        </Button>
                        {isRemoveMode && (
                            <IconButton onClick={() => removeLink(link.href)}>
                                <CancelIcon color="error" fontSize="small" />
                            </IconButton>
                        )}
                    </Stack>
                ))}
        </Stack>
    );
};

export default function LinksWrapper({
    links,
    title,
    isRemoveMode,
    removeLink,
}: LinksProps & RemoveModeProps) {
    return (
        <Links
            links={links}
            title={title}
            isRemoveMode={isRemoveMode}
            removeLink={removeLink}
        ></Links>
    );
}
