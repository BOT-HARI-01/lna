export default function About() {
    return (
        <div className="theContainer" style={{ padding: "20px", lineHeight: "1.6", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>About This Project</h1>
            
            <h2>Why</h2>
            <p>
                We want to make it easier for people to get news, articles that matches your interests. Instead of searching through lots of websites, 
                you can get all the news you care about in one place.
            </p>
            
            <h2>What</h2>
            <p>
                We are building a <strong>Personalized News n Articles Aggregator</strong> that collects news from many sources and shows you only 
                the topics that you are interested in. It helps in saving time and stay updated on the things you care about.
            </p>
            
            <h2>How</h2>
            <ul style={{ paddingLeft: "20px" }}>
                <li>
                    <strong>Collecting News:</strong> Using tools to gather news from different websites and sources.
                </li>
                <li>
                    <strong>Personalizing:</strong> Letting you the users pick your favorite topics or learning their interests to show relevant news.
                </li>
                <li>
                    <strong>User-Friendly App:</strong> Creating a simple app where you can browse through news feed, save articles, and 
                    explore new topics easily.
                </li>
            </ul>
            <p>Get the code at <a href="https://github.com/BOT-HARI-01/lna-aggrigator" target="_blank">Github</a></p>
        </div>
    );
};
