import CancelIcon from "@mui/icons-material/Cancel";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { LinksProps, RemoveModeProps } from "../../type/Type";
import Icon from "./Icon";

const Links = ({
    links,
    title,
    isRemoveMode,
    removeLink,
    isIconMode,
}: LinksProps & RemoveModeProps) => {
    return (
        <Grid
            container={!isIconMode}
            p={2}
            m={2}
            sx={{
                width: "300px",
                border: "2px solid #aaaaaa",
                borderRadius: "30px",
                color: "GrayText",
                position: "relative",
                textAlign: "center",
            }}
            spacing={3}
            direction={isIconMode ? "column" : "row"}
        >
            <Typography sx={{ fontSize: "20px", position: "absolute" }}>
                {title}
            </Typography>
            {links &&
                links.map((link, index) => (
                    <Grid
                        item
                        direction="row"
                        key={index}
                        spacing={1}
                        sx={{ alignSelf: "center" }}
                        pt={3}
                    >
                        <Button
                            startIcon={<Icon iconName={link.icon} />}
                            sx={{ color: link.color, fontSize: "20px" }}
                            href={link.href}
                        >
                            {isIconMode && (
                                <Typography>{link.title}</Typography>
                            )}
                        </Button>
                        {isRemoveMode && (
                            <IconButton onClick={() => removeLink(link.href)}>
                                <CancelIcon color="error" fontSize="small" />
                            </IconButton>
                        )}
                    </Grid>
                ))}
        </Grid>
    );
};

export default function LinksWrapper({
    links,
    title,
    isRemoveMode,
    removeLink,
    isIconMode,
}: LinksProps & RemoveModeProps) {
    return (
        <Links
            links={links}
            title={title}
            isRemoveMode={isRemoveMode}
            removeLink={removeLink}
            isIconMode={isIconMode}
        ></Links>
    );
}
