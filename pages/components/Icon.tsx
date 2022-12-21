import AddLinkIcon from "@mui/icons-material/AddLink";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CloudIcon from "@mui/icons-material/Cloud";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import ImageIcon from "@mui/icons-material/Image";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LinkIcon from "@mui/icons-material/Link";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { IconTypeProps } from "../../type/Type";
export default function Icon({ iconName }: IconTypeProps) {
    return iconName == "youtube" ? (
        <YouTubeIcon />
    ) : iconName == "home" ? (
        <HomeIcon />
    ) : iconName == "addlink" ? (
        <AddLinkIcon />
    ) : iconName == "analytics" ? (
        <AnalyticsIcon />
    ) : iconName == "assignment" ? (
        <AssignmentIcon />
    ) : iconName == "cloud" ? (
        <CloudIcon />
    ) : iconName == "insertPhoto" ? (
        <InsertPhotoIcon />
    ) : iconName == "liveTV" ? (
        <LiveTvIcon />
    ) : iconName == "school" ? (
        <SchoolIcon />
    ) : iconName == "description" ? (
        <DescriptionIcon />
    ) : iconName == "twitter" ? (
        <TwitterIcon />
    ) : iconName == "email" ? (
        <EmailIcon />
    ) : iconName == "link" ? (
        <LinkIcon />
    ) : iconName == "image" ? (
        <ImageIcon />
    ) : null;
}
