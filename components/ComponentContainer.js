import Styles from './Container.module.css';

export default function ComponentContainer() {
    return (
        <div className={Styles.container}>
            <h1>Main Content Area</h1>
            <p>This is where the main content is displayed, inside a rounded container.</p>
        </div>
    );
}
