import styles from "../styles/submitBtn.module.css"

export const SubmitBtn = ({btnName}) => {
    return (
    <button type="submit" className={styles.submitBtn}> {btnName}</button>

    )
}