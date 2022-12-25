import CancelIcon from "@mui/icons-material/Cancel";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { LinksProps } from "../../type/Type";
import Icon from "./Icon";

const Links = ({ links, title }: LinksProps) => {
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
                        {!link.hidden && (
                            <IconButton>
                                <CancelIcon />
                            </IconButton>
                        )}
                    </Stack>
                ))}
        </Stack>
    );
};

export default function LinksWrapper({ links, title }: LinksProps) {
    return <Links links={links} title={title}></Links>;
}
