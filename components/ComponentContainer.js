'use client'
import Styles from './Container.module.css';
import { useState, useEffect, useRef } from "react";
import fetchBlog from "../app/api/extract_link";
import fetchLinks from "../app/api/links_Fetch";
import HoverCard from "@/components/HoverCard";
export default function ComponentContainer() {
    const [siteLinks, setSiteLinks] = useState([]);
    const [cardData, setCardData] = useState([]);
    const loadedLinks = useRef(new Set());
    const loadref = useRef(false);
    const containerRef = useRef(null);

    // Function used to initially fetch the data regarding to the user initially when the page is loaded.
    useEffect(() => {
        const userPreferredTags = ['entrepreneurship', 'astronomy'];
        const loadLinks = async () => {
            try {
                const data = await fetchLinks(userPreferredTags);
                console.log("fetchLinks response:", data);
                setSiteLinks(data); // Store grouped links
            } catch (error) {
                console.error("Error fetching links:", error);
            }
        };

        loadLinks();
    }, []);

    // After fetching the links the cards has to be loaded so the function iterates through the sitelinks and calls the fetchblog
    // which extracts the links and return link, image, title, content
    // A list is made to store all teh data of the cards that are extracted and use later to prepare the card for display
    useEffect(() => {
        // if (siteLinks.length === 0) return;
        const loadcard = async () => {
            const allcards = [];
            for (let i = 0; i < siteLinks.length; i++) {
                const link = siteLinks[i];
                if (loadedLinks.current.has(link)) continue;

                loadedLinks.current.add(link);
                const data = await fetchBlog(link);
                if (data) {
                    const newcard = {
                        src: data.image_url,
                        title: data.title,
                        content: data.content,
                        link: link,
                    };
                    console.log(newcard);
                    setCardData(prevcards => [...prevcards, newcard]);
                }
            }
        };

        loadcard();
    }, [siteLinks]);//iterates throught the end of site links

    // use ref is used so that the values can be mutable here can track the loading and the scrolling of the page.
    // using the state variables causes the loading where as the ref takes out the problem of re-rendering.

    // this function handles the scrolling of the page of the page is scrolled then the function loadmore is called this fetches the new links agein .
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleScroll = () => {

            if (loadref.current || !container) return;
            const scrollTop = Math.round(containerRef.current.scrollTop);
            const scrollHeight = containerRef.current.scrollHeight;
            const clientHeight = containerRef.current.clientHeight;
            const isAtBottom = scrollHeight - scrollTop === clientHeight;
            if (isAtBottom) {
                loadref.current = true;
                const loadMore = async () => {
                    const newLinks = await fetchLinks('python');
                    setSiteLinks(prevlinks => {
                        const unqlinks = newLinks.filter(links => !prevlinks.includes(links));
                        return [...prevlinks, ...unqlinks];
                    });
                    loadref.current = false;
                };
                loadMore();
            }
        };
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={Styles.container} ref={containerRef} style={{ overflowY: 'scroll' }}>
            {/* <h1>Main Content Area</h1> */}
            {/* <p>This is where the main content is displayed, inside a rounded container.</p> */}
            <div className="row">
                {cardData.length > 0 ? (
                    cardData.map((card, index) => (
                        <HoverCard
                            key={index}
                            src={card.src}
                            title={card.title}
                            content={card.content}
                            link={card.link}
                        />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
