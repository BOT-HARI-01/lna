'use client';
import Styles from './Container.module.css';
import { useState, useEffect, useRef } from 'react';
import fetchBlog from '../app/api/extract_link';
import fetchLinks from '../app/api/links_Fetch';
import HoverCard from '@/components/HoverCard';

export default function ComponentContainer() {
    const [siteLinks, setSiteLinks] = useState([]);
    const [cardData, setCardData] = useState([]);
    const loadedLinks = useRef(new Set());
    const loadref = useRef(false);
    const containerRef = useRef(null);
    // const [isScrollable, setIsScrollable] = useState(false); 
    const [status, setStatus] = useState(null);
    const [userTags, setUserTags] = useState([]);

    // console.log(typeof defaultTags);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const defaultTags = ['entrepreneurship', 'journaling', 'investing', 'love', 'management'];
            const storedStatus = localStorage.getItem('status');
            setStatus(storedStatus);
            const usrPrefs = JSON.parse(localStorage.getItem('user'));
            if (usrPrefs && usrPrefs.preferences.length >= 1) {
                setUserTags(usrPrefs.preferences);
            } else {
                setUserTags(defaultTags);
            }
        }
    }, []);

    // Fetch initial site links
    useEffect(() => {
        // const userPreferredTags = ['entrepreneurship', 'astronomy'];

        if (userTags && userTags.length > 0) {
            const loadLinks = async () => {
                try {
                    const data = await fetchLinks(userTags);
                    // console.log("user tags in comp"+userTags);
                    setSiteLinks(data); // Store site links
                } catch (error) {
                    console.error('Error fetching links:', error);
                }
            };
            console.log(userTags);
            loadLinks();
        }

    }, [userTags]);

    // Fetch and populate card data
    useEffect(() => {
        const loadcard = async () => {
            for (const link of siteLinks) {
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

                    setCardData((prevcards) => [...prevcards, newcard]);
                }
            }
            // setIsScrollable(true);
        };

        if (siteLinks.length > 0) {
            loadcard();
        }
    }, [siteLinks]);

    // Infinite scrolling logic
    useEffect(() => {

        if (!status || status === '0') {
            return;
        }

        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (loadref.current || !container) return;

            const scrollTop = Math.round(container.scrollTop);
            const scrollHeight = container.scrollHeight;
            const clientHeight = container.clientHeight;
            const offset = 5;
            // console.log("scroll Top", scrollTop ,'client height',clientHeight,'scroll height',scrollHeight);
            const isAtBottom = scrollHeight - scrollTop <= clientHeight + offset;
            // const offset = 2; 
            // const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) <= offset;
            if (isAtBottom) {
                loadref.current = true;
                // const userPreferredTags2 = ['journaling','blockchain','motherhood'];
                const loadMore = async () => {
                    const newLinks = await fetchLinks(userTags);
                    setSiteLinks((prevlinks) => {
                        const unqlinks = newLinks.filter((link) => !prevlinks.includes(link));
                        return [...prevlinks, ...unqlinks];
                    });
                    loadref.current = false;
                };

                loadMore();
            }
        };

        const handleResize = () => {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                if (status !== '0' && status !== null) handleScroll();
            }, 200);
        };

        container.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleResize);
        return () => {
            container.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleResize);
        };
    }, [userTags, status]);

    return (
        <div
            className={Styles.container}
            ref={containerRef}
            style={{ overflowY: 'scroll' }}
        >
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