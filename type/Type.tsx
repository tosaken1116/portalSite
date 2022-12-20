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
export type FormDataType = {
    category: string;
    title: string;
    link: string;
    color: string;
    icon: HTMLElement | null;
};
export type AddLinkModalProps = {
    closeModal: () => void;
    handleSubmit: (formData: FormDataType) => void;
};
