import { splitLink } from "../JS-SplitLink/SplitLink.js";

export function getVideo(url, source) {
    const link = splitLink(url);
    let video_source;
    let video_id;

    if (source === undefined) {
        switch (link.domain) {
            case "youtu.be":
                video_source = "youtube";
                video_id = link.address[1];
                break;
            case "www.youtube.com":
                video_source = "youtube";
                video_id = link.query.v;
                break;
        }
    }
    else {
        video_source = source;
        video_id = url;
    }

    switch (video_source) {
        case "youtube":
            return `<iframe src="https://www.youtube.com/embed/${video_id}?rel=0&controls=0&enablejsapi=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }
}