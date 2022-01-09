import styles from "./styles.module.css";

console.log(styles);

function FirstStil() {
    return (
        <div>
            <h1 className={styles.title}>First Stil Color</h1>
        </div>
    );
}

export default FirstStil;