export type LinkProps = {
    href: string;
    icon: any;
    title: string;
    color: string;
};
export type LinksProps = {
    title: string;
    links: LinkProps[];
};
export type LinkPropsList = {
    linksProps: LinksProps[];
};
export type sortProps = {
    removeIndex: number;
    addedIndex: number;
};
