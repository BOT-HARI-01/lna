    'use client'
    import {useState, useEffect} from 'react';
    const TagSelector = () =>{
        
        const [selectedTags, setSelectedTags] = useState([]);
        const [allTags, setAllTags] = useState([]);
        //we get the complete tags data from the jsom file to display them.
        useEffect(()=>{
            fetch("/tags.json")
            .then((res) => res.json())
            .then((data) => setAllTags(data));
        },[]);

        //retieving the users preferences fromt local storage
        useEffect(()=>{

        })
        const onTagSelection = (tag) =>{[
            // const updatedTag = [...selectedTags,tag];

        ]}
        return (
            <div>
                {/* <p>Test tags page</p>/ */}
                {allTags.map((category,index)=>(
                    <div key={index}>
                        <h3>{category.heading}</h3>

                            <div>
                                {category.tags.map((tag)=>(
                                    <button style={{
                                        'backgroundColor':'white',
                                        'borderRadius':'15%',
                                        marginRight:'10px'
                                    }} key={tag} onClick={onTagSelection(tag)}>
                                        {tag}
                                    </button>
                                ))}
                            </div>
                    </div>
                ))}
            </div>
        )
    };


    export default TagSelector;