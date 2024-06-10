export type Project = {
    name: string;
    short_desc: string;
    long_desc: string;
    img: string;
    alt_text: string;
    github_url: string;
}

export const projects: Project[] = [
    {
        name: "Personal_Website",
        short_desc: "A personal website to showcase my skills and projects",
        long_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum lorem non blandit euismod. Fusce eleifend accumsan urna, nec dapibus dui aliquam sit amet. Nunc pulvinar urna placerat ultrices gravida. Cras malesuada risus in arcu euismod, eget egestas justo tristique. In lorem turpis, bibendum pretium faucibus non, iaculis et nisi. Aenean at dictum risus. Etiam sit amet ultricies quam. Suspendisse id purus finibus, euismod mauris in, euismod erat. Fusce dictum leo in congue tempus. Proin posuere maximus augue, non vehicula tellus efficitur nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus semper ac justo a condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nunc ex, volutpat ut nunc vitae, pellentesque tristique arcu. Etiam felis ex, consectetur nec turpis at, accumsan vestibulum sapien. Quisque lorem augue, condimentum vitae lorem ac, fringilla tristique turpis. Nam id nunc et augue vulputate sagittis eget vitae libero. Ut consectetur eu lacus vitae commodo. Vivamus dolor enim, dictum in eros vitae, tristique ultrices orci. Suspendisse eget eros quis nunc imperdiet tempus. Pellentesque in massa euismod, porttitor felis et, pulvinar turpis. Proin porta risus vitae tempus efficitur. Duis accumsan hendrerit nunc eget rhoncus.",
        img: "/image.png",
        alt_text: "A temp picture of a teacup",
        github_url: "https://github.com/Thompson-Jason/Personal-Website",
      },
]