import styles from "./styles.module.css";

console.log(styles);

function SecondStil() {
    return (
        <div>
            <h1 className={styles.title}>Second Stil Color</h1>
        </div>
    );
}

export default SecondStil;